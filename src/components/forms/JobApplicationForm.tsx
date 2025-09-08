import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface JobApplicationFormProps {
  jobTitle: string;
  onSubmit?: (data: any) => void;
}

const JobApplicationForm = ({ jobTitle, onSubmit }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null as File | null,
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submission = {
        ...formData,
        jobTitle,
        timestamp: new Date().toISOString(),
        cvFileName: formData.cv?.name,
      };
      
      // Save to localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('jobApplications') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('jobApplications', JSON.stringify(existingSubmissions));
      
      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(submission);
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Submitted",
        description: "Your job application has been submitted successfully. We will contact you soon.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        cv: null,
        agreement: false,
      });
      
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description: "An error occurred while submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Apply for this position</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input 
              id="fullName" 
              value={formData.fullName} 
              onChange={(e) => handleInputChange('fullName', e.target.value)} 
              required 
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={(e) => handleInputChange('email', e.target.value)} 
              required 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input 
              id="phone" 
              value={formData.phone} 
              onChange={(e) => handleInputChange('phone', e.target.value)} 
              required
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter *</Label>
            <Textarea 
              id="coverLetter" 
              value={formData.coverLetter} 
              onChange={(e) => handleInputChange('coverLetter', e.target.value)} 
              required 
              placeholder="Write your cover letter here..."
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cv">Upload CV/Resume *</Label>
            <Input 
              id="cv" 
              type="file" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange} 
              required 
            />
            <p className="text-xs text-muted-foreground">
              {formData.cv ? `Selected: ${formData.cv.name}` : "No file chosen"}
            </p>
            <p className="text-xs text-muted-foreground">
              Allowed Type(s): .pdf, .doc, .docx
            </p>
          </div>
          
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox 
              id="agreement" 
              checked={formData.agreement}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreement: checked as boolean }))
              }
              required
            />
            <Label htmlFor="agreement" className="text-sm leading-relaxed cursor-pointer">
              By using this form you agree with the storage and handling of your data by this website. *
            </Label>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !formData.agreement}
            className="w-full mt-6"
          >
            {isSubmitting ? "Submitting Application..." : "Submit Application"}
          </Button>
        </CardContent>
      </form>
    </Card>
  );
};

export default JobApplicationForm;