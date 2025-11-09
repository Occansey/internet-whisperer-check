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
  jobId?: string | number;
  onSubmit?: (data: any) => void;
}

const JobApplicationForm = ({ jobTitle, jobId, onSubmit }: JobApplicationFormProps) => {
  const { language } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    source: "Website",
    coverLetter: "",
    cv: null as File | null,
    coverLetterFile: null as File | null,
    otherDocuments: null as File | null,
    extraDocLink: "",
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
    
    // Validate CV file (required)
    if (!formData.cv) {
      toast({
        title: language === 'fr' ? "CV requis" : "CV Required",
        description: language === 'fr' 
          ? "Veuillez télécharger votre CV"
          : "Please upload your CV",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.cv.size > 5 * 1024 * 1024) {
      toast({
        title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
        description: language === 'fr' 
          ? "Le CV ne doit pas dépasser 5MB"
          : "CV must not exceed 5MB",
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
    
    // Validate other documents file (optional)
    if (formData.otherDocuments) {
      if (formData.otherDocuments.size > 5 * 1024 * 1024) {
        toast({
          title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
          description: language === 'fr' 
            ? "Les documents supplémentaires ne doivent pas dépasser 5MB"
            : "Additional documents must not exceed 5MB",
          variant: "destructive",
        });
        return;
      }
      
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

    setIsSubmitting(true);
    formRateLimiter.recordAttempt(identifier);
    
    try {
    // Prepare FormData for ATS API
      const formDataToSend = new FormData();
      
      formDataToSend.append('full_name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('source', formData.source);
      
      // Add job_id if provided
      if (jobId) {
        formDataToSend.append('job_id', String(jobId));
      }
      
      // Append CV file (required)
      formDataToSend.append('file_cv', formData.cv);
      
      // Append cover letter file if provided (optional)
      if (formData.coverLetterFile) {
        formDataToSend.append('file_cover_letter', formData.coverLetterFile);
      } else if (formData.coverLetter.trim()) {
        // Fallback: convert text to file if no file uploaded
        const coverLetterBlob = new Blob([formData.coverLetter], { type: 'text/plain' });
        const coverLetterFile = new File([coverLetterBlob], 'cover_letter.txt', { type: 'text/plain' });
        formDataToSend.append('file_cover_letter', coverLetterFile);
      }
      
      // Append extra document file if provided (optional)
      if (formData.otherDocuments) {
        formDataToSend.append('extra_doc_file', formData.otherDocuments);
      }
      
      // Append extra document link if provided (optional)
      if (formData.extraDocLink.trim()) {
        formDataToSend.append('extra_doc_link', formData.extraDocLink);
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
      
      // Send to ATS API
      const response = await fetch('https://ats.solio-group.com/api/candidates', {
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
      let result: any = {};
      try {
        result = JSON.parse(responseText);
        console.log('Application submitted successfully:', result);
      } catch (parseError) {
        console.log('Response is not JSON (but request was successful):', responseText);
        // If response is not JSON but status was OK, treat as success
        result = { success: true };
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
        city: "",
        country: "",
        source: "Website",
        coverLetter: "",
        cv: null,
        coverLetterFile: null,
        otherDocuments: null,
        extraDocLink: "",
        agreement: false,
        website: "",
      });
      setValidationErrors({});
      
      // Reset file inputs
      const cvInput = document.getElementById('cv') as HTMLInputElement;
      const coverLetterInput = document.getElementById('coverLetterFile') as HTMLInputElement;
      const otherDocsInput = document.getElementById('otherDocuments') as HTMLInputElement;
      if (cvInput) cvInput.value = '';
      if (coverLetterInput) coverLetterInput.value = '';
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
            <Label htmlFor="city">
              {language === 'fr' ? 'Ville *' : 'City *'}
            </Label>
            <Input 
              id="city" 
              value={formData.city} 
              onChange={(e) => handleInputChange('city', e.target.value)} 
              required
              maxLength={100}
              placeholder={language === 'fr' ? 'Paris' : 'Paris'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="country">
              {language === 'fr' ? 'Pays *' : 'Country *'}
            </Label>
            <Input 
              id="country" 
              value={formData.country} 
              onChange={(e) => handleInputChange('country', e.target.value)} 
              required
              maxLength={100}
              placeholder={language === 'fr' ? 'France' : 'France'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="source">
              {language === 'fr' ? 'Comment avez-vous entendu parler de nous ?' : 'How did you hear about us?'}
            </Label>
            <Input 
              id="source" 
              value={formData.source} 
              onChange={(e) => handleInputChange('source', e.target.value)} 
              maxLength={100}
              placeholder={language === 'fr' ? 'LinkedIn, Site web, etc.' : 'LinkedIn, Website, etc.'}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="coverLetter">
              {language === 'fr' ? 'Lettre de motivation (texte)' : 'Cover Letter (text)'}
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
            <Label htmlFor="coverLetterFile">
              {language === 'fr' ? 'Lettre de motivation (fichier)' : 'Cover Letter (file)'}
            </Label>
            <Input 
              id="coverLetterFile" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  if (file.size > 5 * 1024 * 1024) {
                    toast({
                      title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
                      description: language === 'fr' 
                        ? "La lettre de motivation ne doit pas dépasser 5MB"
                        : "Cover letter must not exceed 5MB",
                      variant: "destructive",
                    });
                    return;
                  }
                  setFormData(prev => ({ ...prev, coverLetterFile: file }));
                }
              }}
            />
            <p className="text-xs text-muted-foreground">
              {formData.coverLetterFile 
                ? `${language === 'fr' ? 'Sélectionné' : 'Selected'}: ${formData.coverLetterFile.name}` 
                : (language === 'fr' ? 'Aucun fichier choisi' : 'No file chosen')
              }
            </p>
            <p className="text-xs text-muted-foreground">
              {language === 'fr' 
                ? 'Optionnel - .pdf, .doc, .docx (max 5MB)'
                : 'Optional - .pdf, .doc, .docx (max 5MB)'
              }
            </p>
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
                ? 'Types autorisés : .pdf, .doc, .docx (max 5MB)'
                : 'Allowed Type(s): .pdf, .doc, .docx (max 5MB)'
              }
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="otherDocuments">
              {language === 'fr' ? 'Documents supplémentaires (fichier)' : 'Additional Documents (file)'}
            </Label>
            <Input 
              id="otherDocuments" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  if (file.size > 5 * 1024 * 1024) {
                    toast({
                      title: language === 'fr' ? "Fichier trop volumineux" : "File Too Large",
                      description: language === 'fr' 
                        ? "Le document ne doit pas dépasser 5MB"
                        : "Document must not exceed 5MB",
                      variant: "destructive",
                    });
                    return;
                  }
                  setFormData(prev => ({ ...prev, otherDocuments: file }));
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
                ? 'Optionnel - .pdf, .doc, .docx (max 5MB)'
                : 'Optional - .pdf, .doc, .docx (max 5MB)'
              }
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="extraDocLink">
              {language === 'fr' ? 'Lien vers documents supplémentaires' : 'Link to Additional Documents'}
            </Label>
            <Input 
              id="extraDocLink" 
              type="url"
              value={formData.extraDocLink} 
              onChange={(e) => handleInputChange('extraDocLink', e.target.value)} 
              maxLength={500}
              placeholder={language === 'fr' ? 'https://...' : 'https://...'}
            />
            <p className="text-xs text-muted-foreground">
              {language === 'fr' 
                ? 'Optionnel - Lien vers portfolio, LinkedIn, etc. (max 500 caractères)'
                : 'Optional - Link to portfolio, LinkedIn, etc. (max 500 characters)'
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