import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("name", `${prenom} ${nom}`);
      formData.append("email", email);
      formData.append("phone", telephone);
      formData.append("message", message);
      formData.append("form_type", sujet);

      // Kit.com form URL
      const kitFormUrl = "https://solio-group.kit.com/d7e85ef825";

      // Send form data
      const response = await fetch(kitFormUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSuccess(true);
      alert("Message envoyé avec succès !");
    } catch (err: any) {
      console.error("Erreur lors de l'envoi :", err);
      setError("Une erreur s'est produite lors de l'envoi du formulaire.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-solio-blue">
            Contact
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vous avez une question, un projet, une demande de partenariat ou une
            candidature spontanée ? N'hésitez pas à nous contacter, nous vous
            répondrons rapidement.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 border-none shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="nom"
                      placeholder="Nom"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                    <Input
                      id="prenom"
                      placeholder="Prénom"
                      required
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      id="telephone"
                      placeholder="Votre numéro de téléphone"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>

                  <Input
                    id="sujet"
                    placeholder="Sujet"
                    required
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                  />

                  <Textarea
                    id="message"
                    placeholder="Votre message"
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-solio-blue hover:bg-solio-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>

                  {error && (
                    <p className="text-red-500 mt-4">{error}</p>
                  )}
                  {success && (
                    <p className="text-green-500 mt-4">
                      Message envoyé avec succès !
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
