import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Contact = () => {
  const { t } = useTranslation();
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

    const existingSubmissions = JSON.parse(localStorage.getItem("formSubmissions") || "[]");
    existingSubmissions.push(submission);
    localStorage.setItem("formSubmissions", JSON.stringify(existingSubmissions));

    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("formSubmitted"));
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare data for email submission (basic PHP endpoint)
      const payload = {
        prenom,
        nom,
        email,
        telephone,
        sujet,
        message,
      };

      // Save to localStorage (optional)
      saveSubmission(payload);

      const res = await fetch("/contact-basic.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(err.error || "Failed to send");
      }

      toast({
        title: t("contact.form.success.title"),
        description: t("contact.form.success.description"),
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
        title: t("contact.form.error.title"),
        description: t("contact.form.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <HeroBanner title={t("contact.title")} description={t("contact.description")} glowColor="orange" />

      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 border-none shadow-md">
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nom" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {t("contact.form.name")}
                      </label>
                      <Input
                        id="nom"
                        placeholder={t("contact.form.name")}
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="prenom" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {t("contact.form.firstname")}
                      </label>
                      <Input
                        id="prenom"
                        placeholder={t("contact.form.firstname")}
                        required
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {t("contact.form.email")}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("contact.form.email")}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telephone" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {t("contact.form.phone")}
                      </label>
                      <Input
                        id="telephone"
                        placeholder={t("contact.form.phone")}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="sujet" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {t("contact.form.subject")}
                    </label>
                    <Input
                      id="sujet"
                      placeholder={t("contact.form.subject")}
                      required
                      value={sujet}
                      onChange={(e) => setSujet(e.target.value)}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.message")}
                      rows={6}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-solio-blue hover:bg-solio-blue/90 text-white dark:text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="md:col-span-2">
              <Card className="border-none shadow-md h-full">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue dark:text-solio-yellow">
                        {t("contact.coordinates.title")}
                      </h3>
                      <address className="not-italic space-y-2 text-gray-700 dark:text-gray-200">
                        <p className="font-medium">Solio Group</p>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.france")}</p>
                          <p>4 Rue De Longchamp, 75116, Paris</p>
                          <p>211 Chem. de la Madrague-Ville, 13015 Marseille</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.canada")}</p>
                          <p>368 R. Notre Dame O, Montréal, QC H2Y 1T9</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.africa")}</p>
                          <p>GEFI Solutions SEZ Limited</p>
                          <p>4th Floor, North Tower, Two Rivers Finance and Innovation Center, Nairobi, Kenya</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.nigeria")}</p>
                          <p>Abuja: 9, A-Avenue, Citec Estate, Mbora District, Abuja</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.burundi")}</p>
                          <p>31 Rue Mugamba, Bujumbura, Burundi</p>
                        </div>
                        <div className="mt-3">
                          <p className="font-medium">{t("contact.coordinates.tanzania")}</p>
                          <p>Zanzibar - Tanzania: Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar</p>
                        </div>
                        <p className="mt-4">
                          <strong>Email:</strong> contact@solio-group.com
                        </p>
                      </address>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue dark:text-solio-yellow">
                        {t("contact.follow.title")}
                      </h3>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="text-gray-700 dark:text-gray-200 hover:text-solio-blue flex items-center"
                        >
                          <Linkedin className="w-5 h-5 mr-1" />
                          LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-2 text-solio-blue dark:text-solio-yellow">
                        {t("contact.hours.title")}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-200 whitespace-pre-line">{t("contact.hours.text")}</p>
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
