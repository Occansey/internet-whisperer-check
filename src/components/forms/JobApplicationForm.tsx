import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "@/contexts/TranslationContext";

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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    if (!formData.agreement) {
      toast({
        title: language === 'fr' ? "Accord requis" : "Agreement Required",
        description: language === 'fr' 
          ? "Veuillez accepter les conditions générales."
          : "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        type: 'postuler',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        jobTitle,
        cvFileName: formData.cv?.name,
        otherDocumentsFileName: formData.otherDocuments?.name,
        language: language,
        timestamp: new Date().toISOString(),
      };
      
      // Save to localStorage
      const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
      existingApplications.push(submissionData);
      localStorage.setItem('jobApplications', JSON.stringify(existingApplications));
      
      // Send to PHP endpoint
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      // Call onSubmit if provided
      if (onSubmit) {
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
      });
      
      // Reset file inputs
      const cvInput = document.getElementById('cv') as HTMLInputElement;
      const otherDocsInput = document.getElementById('otherDocuments') as HTMLInputElement;
      if (cvInput) cvInput.value = '';
      if (otherDocsInput) otherDocsInput.value = '';
      
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr'
          ? "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer."
          : "There was an error submitting your application. Please try again.",
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
              placeholder={language === 'fr' ? 'Entrez votre nom complet' : 'Enter your full name'}
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
              placeholder="votre.email@exemple.com"
            />
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
              placeholder="+254 712 345 678"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="coverLetter">
              {language === 'fr' ? 'Lettre de motivation' : 'Cover Letter'}
            </Label>
            <Textarea 
              id="coverLetter" 
              value={formData.coverLetter} 
              onChange={(e) => handleInputChange('coverLetter', e.target.value)} 
              placeholder={language === 'fr' 
                ? 'Écrivez votre lettre de motivation ici (optionnel)...'
                : 'Write your cover letter here (optional)...'
              }
              rows={4}
            />
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
                ? 'Types autorisés : .pdf, .doc, .docx'
                : 'Allowed Type(s): .pdf, .doc, .docx'
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
                ? 'Télécharger des documents supplémentaires (optionnel) - .pdf, .doc, .docx'
                : 'Upload additional documents (optional) - .pdf, .doc, .docx'
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