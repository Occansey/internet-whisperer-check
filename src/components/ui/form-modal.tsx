
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonProps } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";

interface FormModalProps extends ButtonProps {
  children: React.ReactNode;
  type: "candidature" | "postuler" | "inscription" | "contact";
  jobTitle?: string;
  eventTitle?: string;
}

const FormModal = ({ children, type, jobTitle, eventTitle, ...props }: FormModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button {...props}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <ContactForm 
          type={type} 
          jobTitle={jobTitle} 
          eventTitle={eventTitle} 
          onClose={() => setOpen(false)} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
