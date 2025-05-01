
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vous avez une question, un projet, une demande de partenariat ou une candidature spontanée ? 
            N'hésitez pas à nous contacter, nous vous répondrons rapidement.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 border-none shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium">Nom</label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="text-sm font-medium">Prénom</label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium">Téléphone</label>
                      <Input id="telephone" placeholder="Votre numéro de téléphone" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sujet" className="text-sm font-medium">Sujet</label>
                    <Input id="sujet" placeholder="Sujet de votre message" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Votre message" rows={6} required />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">Envoyer le message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Coordonnées</h3>
                      <address className="not-italic space-y-2 text-gray-700">
                        <p>Solio Group</p>
                        <p>Adresse du siège social</p>
                        <p className="mt-4">
                          <strong>Téléphone:</strong> +XXX XXX XXX
                        </p>
                        <p>
                          <strong>Email:</strong> contact@soliogroup.com
                        </p>
                      </address>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                          LinkedIn
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-400">
                          Twitter/X
                        </a>
                        <a href="#" className="text-gray-700 hover:text-red-600">
                          YouTube
                        </a>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-2">Horaires d'ouverture</h3>
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
