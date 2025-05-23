
import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface FormModalProps {
  children: React.ReactNode;
  type: "candidature" | "postuler" | "inscription" | "contact";
  jobTitle?: string;
  eventTitle?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  onClick?: () => void;
}

const FormModal = ({ 
  children, 
  type, 
  jobTitle, 
  eventTitle, 
  variant = "default", 
  className,
  onClick 
}: FormModalProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (onClick) onClick();
  };

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          className={className}
          onClick={handleClick}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>{getTitle()}</DialogTitle>
        </VisuallyHidden>
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
