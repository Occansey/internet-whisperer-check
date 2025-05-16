
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactFormProps {
  type: "candidature" | "postuler" | "inscription" | "contact";
  jobTitle?: string;
  eventTitle?: string;
  onClose?: () => void;
}

const ContactForm = ({ type, jobTitle, eventTitle, onClose }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getTitle = () => {
    switch (type) {
      case "candidature":
        return "Candidature spontanée";
      case "postuler":
        return `Postuler: ${jobTitle || ""}`;
      case "inscription":
        return `Inscription: ${eventTitle || ""}`;
      case "contact":
        return "Nous contacter";
      default:
        return "Formulaire de contact";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for Kit.com submission
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      formData.append("form_type", type);
      
      if (jobTitle) {
        formData.append("job_title", jobTitle);
      }
      
      if (eventTitle) {
        formData.append("event_title", eventTitle);
      }
      
      if (cv) {
        formData.append("cv", cv);
      }
      
      // Submit to Kit.com (replace this URL with your actual Kit.com form endpoint)
      const kitFormUrl = "https://kit.co/forms/yourformid";
      
      const response = await fetch(kitFormUrl, {
        method: "POST",
        mode: "no-cors", // Kit.com may require no-cors mode
        body: formData,
      });
      
      // Since no-cors mode doesn't return detailed response info,
      // we just assume success if no error is thrown
      toast({
        title: "Formulaire envoyé",
        description: "Nous avons bien reçu votre message et reviendrons vers vous dans les plus brefs délais.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCv(null);
      
      if (onClose) onClose();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{getTitle()}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              placeholder="Votre nom et prénom"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="votre.email@exemple.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+33 6 12 34 56 78"
            />
          </div>
          
          {(type === "candidature" || type === "postuler") && (
            <div className="space-y-2">
              <Label htmlFor="cv">CV (PDF)</Label>
              <Input 
                id="cv" 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={handleFileChange} 
                required={type === "postuler"} 
              />
              {cv && <p className="text-sm text-gray-500">Fichier sélectionné: {cv.name}</p>}
            </div>
          )}
          
          {type === "inscription" && (
            <div className="space-y-2">
              <Label htmlFor="participation">Mode de participation</Label>
              <Select>
                <SelectTrigger id="participation">
                  <SelectValue placeholder="Sélectionnez une option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presentiel">Présentiel</SelectItem>
                  <SelectItem value="virtuel">Virtuel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              placeholder={type === "postuler" ? "Lettre de motivation" : "Votre message"}
              rows={5}
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-between">
          {onClose && (
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
