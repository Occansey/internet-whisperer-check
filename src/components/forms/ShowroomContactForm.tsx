import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ShowroomContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    showroom: "",
    visitDate: "",
    message: "",
    services: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'showroom-contact'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé",
          description: "Votre demande a été envoyée avec succès. Nous vous recontacterons bientôt.",
          variant: "default",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          showroom: "",
          visitDate: "",
          message: "",
          services: ""
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demande de Visite</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Votre nom complet"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Entreprise</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nom de votre entreprise"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="showroom">Showroom souhaité</Label>
              <Select onValueChange={(value) => handleSelectChange("showroom", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un showroom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zanzibar-fumba">Zanzibar - Fumba Town</SelectItem>
                  <SelectItem value="zanzibar-jambiani">Zanzibar - Jambiani/Paje</SelectItem>
                  <SelectItem value="both">Les deux showrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitDate">Date souhaitée</Label>
              <Input
                id="visitDate"
                name="visitDate"
                type="date"
                value={formData.visitDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">Services d'intérêt</Label>
            <Select onValueChange={(value) => handleSelectChange("services", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Quels services vous intéressent ?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solar">Solutions solaires</SelectItem>
                <SelectItem value="battery">Stockage d'énergie</SelectItem>
                <SelectItem value="electric-mobility">Mobilité électrique</SelectItem>
                <SelectItem value="energy-management">Gestion d'énergie</SelectItem>
                <SelectItem value="all">Toutes les solutions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Décrivez vos besoins ou questions spécifiques..."
              rows={4}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShowroomContactForm;