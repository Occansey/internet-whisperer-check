import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "@/contexts/TranslationContext";
import { jobApplicationSchema, validateAndSanitize, encodeForUrl } from "@/utils/validation";
import { formRateLimiter } from "@/utils/rateLimiter";
import { isHoneypotTriggered, CSRFTokenManager } from "@/utils/securityHeaders";

interface JobApplicationFormProps {
  jobTitle: string;
  onSubmit?: (data: any) => void;
}

const JobApplicationForm = ({ jobTitle, onSubmit }: JobApplicationFormProps) => {
  const { language } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null as File | null,
    otherDocuments: null as File | null,
    agreement: false,
    website: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    
    // Check honeypot
    if (isHoneypotTriggered(formData)) {
      console.warn('Bot detected via honeypot');
      return;
    }
    
    // Check rate limiting
    const identifier = formData.email.toLowerCase();
    if (formRateLimiter.isRateLimited(identifier)) {
      const timeLeft = formRateLimiter.getTimeUntilUnblock(identifier);
      const minutes = timeLeft ? Math.ceil(timeLeft / 60000) : 60;
      
      toast({
        title: language === 'fr' ? "Trop de tentatives" : "Too Many Attempts",
        description: language === 'fr'
          ? `Veuillez réessayer dans ${minutes} minutes.`
          : `Please try again in ${minutes} minutes.`,
        variant: "destructive",
      });
      return;
    }
    
    // Validate form data
    const dataToValidate = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      coverLetter: formData.coverLetter,
      jobTitle,
      cvFileName: formData.cv?.name,
      otherDocumentsFileName: formData.otherDocuments?.name,
      agreement: formData.agreement,
      language: language,
    };
    
    const validation = validateAndSanitize(jobApplicationSchema, dataToValidate);
    
    if (validation.success === false) {
      setValidationErrors(validation.errors);
      const firstError = Object.values(validation.errors)[0];
      toast({
        title: language === 'fr' ? "Erreur de validation" : "Validation Error",
        description: String(firstError) || (language === 'fr' ? "Veuillez vérifier les données du formulaire" : "Please check the form data"),
        variant: "destructive",
      });
      return;
    }
    
    // Validate CV file
    if (formData.cv) {
      if (formData.cv.size > 7 * 1024 * 1024) {
        toast({
          title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
          description: language === 'fr' 
            ? "Le CV ne doit pas dépasser 7MB"
            : "CV must not exceed 7MB",
          variant: "destructive",
        });
        return;
      }
      
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(formData.cv.type)) {
        toast({
          title: language === 'fr' ? "Type de fichier invalide" : "Invalid File Type",
          description: language === 'fr'
            ? "Veuillez utiliser un fichier PDF, DOC ou DOCX"
            : "Please use a PDF, DOC, or DOCX file",
          variant: "destructive",
        });
        return;
      }
    }
    
    // Validate other documents file
    if (formData.otherDocuments) {
      if (formData.otherDocuments.size > 7 * 1024 * 1024) {
        toast({
          title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
          description: language === 'fr' 
            ? "Les documents supplémentaires ne doivent pas dépasser 7MB"
            : "Additional documents must not exceed 7MB",
          variant: "destructive",
        });
        return;
      }
      
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(formData.otherDocuments.type)) {
        toast({
          title: language === 'fr' ? "Type de fichier invalide" : "Invalid File Type",
          description: language === 'fr'
            ? "Veuillez utiliser un fichier PDF, DOC ou DOCX"
            : "Please use a PDF, DOC, or DOCX file",
          variant: "destructive",
        });
        return;
      }
    }
    // Validate combined size (keep under ~18MB raw to avoid email limits after base64)
    const combinedSize = (formData.cv?.size || 0) + (formData.otherDocuments?.size || 0);
    if (combinedSize > 18 * 1024 * 1024) {
      toast({
        title: language === 'fr' ? 'Pièces jointes trop volumineuses' : 'Attachments too large',
        description: language === 'fr'
          ? 'La taille totale des fichiers ne doit pas dépasser ~18MB'
          : 'Total file size must not exceed ~18MB',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    formRateLimiter.recordAttempt(identifier);
    
    try {
      // Prepare FormData for file upload
      const formDataToSend = new FormData();
      
      // Split fullName into prenom and nom
      const nameParts = formData.fullName.trim().split(' ');
      const prenom = nameParts[0] || '';
      const nom = nameParts.slice(1).join(' ') || nameParts[0] || '';
      
      formDataToSend.append('prenom', prenom);
      formDataToSend.append('nom', nom);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('telephone', formData.phone);
      formDataToSend.append('message', formData.coverLetter);
      formDataToSend.append('jobTitle', jobTitle);
      formDataToSend.append('language', language);
      
      // Append files if they exist
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }
      if (formData.otherDocuments) {
        formDataToSend.append('autreDocument', formData.otherDocuments);
      }

      // Save to localStorage (without files)
      const submissionData = {
        type: 'postuler',
        ...validation.data,
        timestamp: new Date().toISOString(),
        csrfToken: CSRFTokenManager.getToken(),
      };
      const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
      existingApplications.push(submissionData);
      localStorage.setItem('jobApplications', JSON.stringify(existingApplications));
      
      // Send to PHP endpoint with FormData
      const response = await fetch('/job-application-basic.php', {
        method: 'POST',
        body: formDataToSend,
      });
      
      // Check response status first
      if (!response.ok) {
        const responseText = await response.text();
        console.error('Server error response:', response.status, responseText);
        
        // Try to parse as JSON, fallback to text
        let errorData: any = {};
        try {
          errorData = JSON.parse(responseText);
        } catch {
          // If not JSON, show first 200 chars of HTML/text
          throw new Error(`Server error (${response.status}): ${responseText.substring(0, 200)}`);
        }
        throw new Error(errorData.error || errorData.message || 'Failed to send email');
      }
      
      // Parse successful response
      const responseText = await response.text();
      let result: any;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', responseText);
        throw new Error('Invalid server response: Expected JSON but received HTML or other format. This usually means the PHP endpoint is not accessible.');
      }
      
      console.log('Application submitted successfully:', result);
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error occurred');
      }
      
      // Call onSubmit if provided
      if (onSubmit) {
        const submissionData = {
          type: 'postuler',
          ...validation.data,
          timestamp: new Date().toISOString(),
        };
        onSubmit(submissionData);
      }
      
      toast({
        title: language === 'fr' ? "Candidature envoyée" : "Application Submitted",
        description: language === 'fr'
          ? "Votre candidature a été envoyée avec succès. Nous vous recontacterons bientôt !"
          : "Your application has been submitted successfully. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
        otherDocuments: null,
        agreement: false,
        website: "",
      });
      setValidationErrors({});
      
      // Reset file inputs
      const cvInput = document.getElementById('cv') as HTMLInputElement;
      const otherDocsInput = document.getElementById('otherDocuments') as HTMLInputElement;
      if (cvInput) cvInput.value = '';
      if (otherDocsInput) otherDocsInput.value = '';
      
    } catch (error) {
      console.error('Error submitting application:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr'
          ? `Une erreur s'est produite: ${errorMessage}. Veuillez réessayer.`
          : `An error occurred: ${errorMessage}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">
          {language === 'fr' ? 'Postuler pour ce poste' : 'Apply for this position'}
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">
              {language === 'fr' ? 'Nom complet *' : 'Full Name *'}
            </Label>
            <Input 
              id="fullName" 
              value={formData.fullName} 
              onChange={(e) => handleInputChange('fullName', e.target.value)} 
              required 
              maxLength={100}
              placeholder={language === 'fr' ? 'Entrez votre nom complet' : 'Enter your full name'}
              className={validationErrors.fullName ? 'border-red-500' : ''}
            />
            {validationErrors.fullName && (
              <p className="text-xs text-red-500">{validationErrors.fullName}</p>
            )}
            {/* Honeypot field - hidden from users */}
            <input 
              type="text" 
              name="website" 
              id="website" 
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              autoComplete="off" 
              tabIndex={-1}
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              aria-hidden="true"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={(e) => handleInputChange('email', e.target.value)} 
              required 
              maxLength={255}
              placeholder="votre.email@exemple.com"
              className={validationErrors.email ? 'border-red-500' : ''}
            />
            {validationErrors.email && (
              <p className="text-xs text-red-500">{validationErrors.email}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">
              {language === 'fr' ? 'Téléphone *' : 'Phone *'}
            </Label>
            <Input 
              id="phone" 
              value={formData.phone} 
              onChange={(e) => handleInputChange('phone', e.target.value)} 
              required
              maxLength={20}
              placeholder="+254 712 345 678"
              className={validationErrors.phone ? 'border-red-500' : ''}
            />
            {validationErrors.phone && (
              <p className="text-xs text-red-500">{validationErrors.phone}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="coverLetter">
              {language === 'fr' ? 'Lettre de motivation' : 'Cover Letter'}
            </Label>
            <Textarea 
              id="coverLetter" 
              value={formData.coverLetter} 
              onChange={(e) => handleInputChange('coverLetter', e.target.value)} 
              maxLength={1000}
              placeholder={language === 'fr' 
                ? 'Écrivez votre lettre de motivation ici (optionnel)...'
                : 'Write your cover letter here (optional)...'
              }
              rows={4}
              className={validationErrors.coverLetter ? 'border-red-500' : ''}
            />
            {validationErrors.coverLetter && (
              <p className="text-xs text-red-500">{validationErrors.coverLetter}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cv">
              {language === 'fr' ? 'Télécharger CV *' : 'Upload CV/Resume *'}
            </Label>
            <Input 
              id="cv" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange} 
              required 
            />
            <p className="text-xs text-muted-foreground">
              {formData.cv 
                ? `${language === 'fr' ? 'Sélectionné' : 'Selected'}: ${formData.cv.name}` 
                : (language === 'fr' ? 'Aucun fichier choisi' : 'No file chosen')
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'fr' 
                ? 'Types autorisés : .pdf, .doc, .docx (max 7MB)'
                : 'Allowed Type(s): .pdf, .doc, .docx (max 7MB)'
              }
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="otherDocuments">
              {language === 'fr' ? 'Autres documents' : 'Other Documents'}
            </Label>
            <Input 
              id="otherDocuments" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFormData(prev => ({ ...prev, otherDocuments: e.target.files![0] }));
                }
              }}
            />
            <p className="text-xs text-muted-foreground">
              {formData.otherDocuments 
                ? `${language === 'fr' ? 'Sélectionné' : 'Selected'}: ${formData.otherDocuments.name}` 
                : (language === 'fr' ? 'Aucun fichier choisi' : 'No file chosen')
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'fr' 
                ? 'Télécharger des documents supplémentaires (optionnel) - .pdf, .doc, .docx (max 7MB)'
                : 'Upload additional documents (optional) - .pdf, .doc, .docx (max 7MB)'
              }
            </p>
          </div>
          
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox 
              id="agreement" 
              checked={formData.agreement}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreement: checked as boolean }))
              }
              required
            />
            <Label htmlFor="agreement" className="text-sm leading-relaxed cursor-pointer">
              {language === 'fr'
                ? 'En utilisant ce formulaire, vous acceptez le stockage et le traitement de vos données par ce site web. *'
                : 'By using this form you agree with the storage and handling of your data by this website. *'
              }
            </Label>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !formData.agreement}
            className="w-full mt-6"
          >
            {isSubmitting 
              ? (language === 'fr' ? 'Envoi en cours...' : 'Submitting Application...')
              : (language === 'fr' ? 'Soumettre la candidature' : 'Submit Application')
            }
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default JobApplicationForm;