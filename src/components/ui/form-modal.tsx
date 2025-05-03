
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";

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
