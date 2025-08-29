import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/contexts/TranslationContext";

const ShowroomContactForm = () => {
  const { t } = useTranslation();
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
          title: t('showrooms.contact_form.success_title'),
          description: t('showrooms.contact_form.success_description'),
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
        title: t('showrooms.contact_form.error_title'),
        description: t('showrooms.contact_form.error_description'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('showrooms.contact_form.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('showrooms.contact_form.full_name')} *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={t('showrooms.contact_form.full_name_placeholder')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('showrooms.contact_form.email')} *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={t('showrooms.contact_form.email_placeholder')}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('showrooms.contact_form.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={t('showrooms.contact_form.phone_placeholder')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t('showrooms.contact_form.company')}</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={t('showrooms.contact_form.company_placeholder')}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="showroom">{t('showrooms.contact_form.desired_showroom')}</Label>
              <Select onValueChange={(value) => handleSelectChange("showroom", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t('showrooms.contact_form.showroom_placeholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="zanzibar-fumba">{t('showrooms.contact_form.showroom_fumba')}</SelectItem>
                  <SelectItem value="zanzibar-jambiani">{t('showrooms.contact_form.showroom_jambiani')}</SelectItem>
                  <SelectItem value="both">{t('showrooms.contact_form.showroom_both')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitDate">{t('showrooms.contact_form.desired_date')}</Label>
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
            <Label htmlFor="services">{t('showrooms.contact_form.services_interest')}</Label>
            <Select onValueChange={(value) => handleSelectChange("services", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('showrooms.contact_form.services_placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solar">{t('showrooms.contact_form.service_solar')}</SelectItem>
                <SelectItem value="battery">{t('showrooms.contact_form.service_battery')}</SelectItem>
                <SelectItem value="electric-mobility">{t('showrooms.contact_form.service_electric_mobility')}</SelectItem>
                <SelectItem value="energy-management">{t('showrooms.contact_form.service_energy_management')}</SelectItem>
                <SelectItem value="all">{t('showrooms.contact_form.service_all')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('showrooms.contact_form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('showrooms.contact_form.message_placeholder')}
              rows={4}
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? t('showrooms.contact_form.submit_sending') : t('showrooms.contact_form.submit_send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShowroomContactForm;