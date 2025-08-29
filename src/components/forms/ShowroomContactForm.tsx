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
  const {
    t
  } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    showroom: "",
    visitDate: "",
    message: "",
    services: "",
    rooms: "",
    acs: "",
    monthlyLoadKw: "",
    monthlyConsumptionKwh: "",
    needsBackupSolution: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          type: 'showroom-contact'
        })
      });
      if (response.ok) {
        toast({
          title: t('showrooms.contact_form.success_title'),
          description: t('showrooms.contact_form.success_message'),
          variant: "default"
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
          services: "",
          rooms: "",
          acs: "",
          monthlyLoadKw: "",
          monthlyConsumptionKwh: "",
          needsBackupSolution: ""
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: t('showrooms.contact_form.error_title'),
        description: t('showrooms.contact_form.error_message'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Card>
      <CardHeader>
        <CardTitle>{t('showrooms.contact_form.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('showrooms.contact_form.name')}</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t('showrooms.contact_form.name_placeholder')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('showrooms.contact_form.email')}</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder={t('showrooms.contact_form.email_placeholder')} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('showrooms.contact_form.phone')}</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder={t('showrooms.contact_form.phone_placeholder')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t('showrooms.contact_form.company')}</Label>
              <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder={t('showrooms.contact_form.company_placeholder')} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="showroom">{t('showrooms.contact_form.showroom')}</Label>
              <Select onValueChange={value => handleSelectChange("showroom", value)}>
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
            
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">{t('showrooms.contact_form.services')}</Label>
            <Select onValueChange={value => handleSelectChange("services", value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('showrooms.contact_form.services_placeholder')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solar">{t('showrooms.contact_form.services_solar')}</SelectItem>
                <SelectItem value="battery">{t('showrooms.contact_form.services_battery')}</SelectItem>
                <SelectItem value="electric-mobility">{t('showrooms.contact_form.services_mobility')}</SelectItem>
                <SelectItem value="energy-management">{t('showrooms.contact_form.services_management')}</SelectItem>
                <SelectItem value="all">{t('showrooms.contact_form.services_all')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company Details Section */}
          <div className="border-t pt-4 mt-6">
            <h3 className="text-lg font-semibold mb-4">Company Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rooms">Number of Rooms</Label>
                <Input
                  id="rooms"
                  name="rooms"
                  type="number"
                  value={formData.rooms}
                  onChange={handleInputChange}
                  placeholder="e.g., 10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="acs">Number of ACs</Label>
                <Input
                  id="acs"
                  name="acs"
                  type="number"
                  value={formData.acs}
                  onChange={handleInputChange}
                  placeholder="e.g., 8"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyLoadKw">Average Monthly Load (kW)</Label>
                <Input
                  id="monthlyLoadKw"
                  name="monthlyLoadKw"
                  type="number"
                  step="0.1"
                  value={formData.monthlyLoadKw}
                  onChange={handleInputChange}
                  placeholder="e.g., 25.5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyConsumptionKwh">Monthly Energy Consumption (kWh)</Label>
                <Input
                  id="monthlyConsumptionKwh"
                  name="monthlyConsumptionKwh"
                  type="number"
                  value={formData.monthlyConsumptionKwh}
                  onChange={handleInputChange}
                  placeholder="e.g., 1500"
                />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Label htmlFor="needsBackupSolution">Power Backup Solutions Needed</Label>
              <Select onValueChange={value => handleSelectChange("needsBackupSolution", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select backup solution needs" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, interested in backup solutions</SelectItem>
                  <SelectItem value="no">No backup needed</SelectItem>
                  <SelectItem value="maybe">Need consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('showrooms.contact_form.message')}</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder={t('showrooms.contact_form.message_placeholder')} rows={4} />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? t('showrooms.contact_form.submitting') : t('showrooms.contact_form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>;
};
export default ShowroomContactForm;