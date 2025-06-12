import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const saveSubmission = (formData: any) => {
    const submission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...formData,
    };

    const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    existingSubmissions.push(submission);
    localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('formSubmitted'));
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for email submission
      const formData = {
        name: `${prenom} ${nom}`, // Combine first and last name
        email,
        phone: telephone,
        message: `Sujet: ${sujet}\n\nMessage: ${message}`, // Include subject in message
        formType: "contact",
        recipient: "contact@solio-group.com",
        hasCv: false,
      };
      
      // Save to localStorage
      saveSubmission(formData);
      
      // In a real implementation, this would send to your backend API
      console.log("Form data to be sent to contact@solio-group.com:", formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé à contact@solio-group.com. Nous reviendrons vers vous dans les plus brefs délais.",
      });
      
      // Reset form
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setSujet("");
      setMessage("");
      
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

  return (
    <Layout>
      <HeroBanner
        title="Contact"
        description="Vous avez une question, un projet, une demande de partenariat ou une candidature spontanée ? N'hésitez pas à nous contacter, nous vous répondrons rapidement."
        glowColor="orange"
      />
      
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 border-none shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium text-gray-900 dark:text-gray-100">Nom</label>
                      <Input 
                        id="nom" 
                        placeholder="Votre nom" 
                        required 
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="text-sm font-medium text-gray-900 dark:text-gray-100">Prénom</label>
                      <Input 
                        id="prenom" 
                        placeholder="Votre prénom" 
                        required 
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre.email@exemple.com" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium text-gray-900 dark:text-gray-100">Téléphone</label>
                      <Input 
                        id="telephone" 
                        placeholder="Votre numéro de téléphone" 
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sujet" className="text-sm font-medium text-gray-900 dark:text-gray-100">Sujet</label>
                    <Input 
                      id="sujet" 
                      placeholder="Sujet de votre message" 
                      required 
                      value={sujet}
                      onChange={(e) => setSujet(e.target.value)}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-100">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message" 
                      rows={6} 
                      required 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-solio-blue hover:bg-solio-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue">Coordonnées</h3>
                      <address className="not-italic space-y-2 text-gray-700">
                        <p className="font-medium">Solio Group</p>
                        <div className="mt-3">
                          <p className="font-medium">France</p>
                          <p>4 Rue De Longchamp, 75016, Paris</p>
                          <p>211 Chem. de la Madrague-Ville, 13015 Marseille</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">Canada</p>
                          <p>368 R. Notre Dame O, Montréal, QC H2Y 1T9</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">Africa HQ</p>
                          <p>GEFI Solutions SEZ Limited</p>
                          <p>9th Floor, North Tower, Two Rivers Finance and Innovation Center, Nairobi, Kenya</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">Nigeria - Growth Energy Solutions Nigeria </p>
                          <p><strong>Abuja:</strong> 9, A-Avenue, Citec Estate, Mbora District, Abuja</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">Burundi - Growth Energy Solutions Burundi </p>
                          <p>84 Avenue Ndamukiza , Bujumbura, Burundi</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">Tanzania - Growth Energy Solutions Zanzibar </p>
                          <p>Zanzibar - Tanzania: Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar</p>
                        </div>
                        <p className="mt-4">
                          <strong>Email:</strong> contact@solio-group.com
                        </p>
                      </address>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue">Suivez-nous</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-solio-blue">
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-700 hover:text-solio-blue">
                          Twitter/X
                        </a>
                        <a href="#" className="text-gray-700 hover:text-solio-blue">
                          YouTube
                        </a>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue">Horaires d'ouverture</h3>
                      <p className="text-gray-700">
                        Du lundi au vendredi<br />
                        9h00 - 18h00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
