
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, User, FileText, Briefcase, MapPin, Trash2 } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { toast } from "@/components/ui/use-toast";

interface Submission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  formType: string;
  jobTitle?: string;
  eventTitle?: string;
  hasCv: boolean;
  cvFileName?: string;
  subject?: string; // For contact form submissions
}

const AllSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const loadSubmissions = () => {
    const savedSubmissions = localStorage.getItem('formSubmissions');
    if (savedSubmissions) {
      const parsedSubmissions = JSON.parse(savedSubmissions);
      // Sort by timestamp, newest first
      const sortedSubmissions = parsedSubmissions.sort((a: Submission, b: Submission) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setSubmissions(sortedSubmissions);
    }
  };

  useEffect(() => {
    loadSubmissions();
    
    // Add event listener for storage changes to update in real-time
    const handleStorageChange = () => {
      loadSubmissions();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events when forms are submitted
    const handleFormSubmission = () => {
      loadSubmissions();
    };
    
    window.addEventListener('formSubmitted', handleFormSubmission);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('formSubmitted', handleFormSubmission);
    };
  }, []);

  const deleteSubmission = (id: string) => {
    const updatedSubmissions = submissions.filter(submission => submission.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
    
    toast({
      title: "Soumission supprimée",
      description: "La soumission a été supprimée avec succès.",
    });
  };

  const clearAllSubmissions = () => {
    setSubmissions([]);
    localStorage.removeItem('formSubmissions');
    
    toast({
      title: "Toutes les soumissions supprimées",
      description: "Toutes les soumissions ont été supprimées avec succès.",
    });
  };

  const getFormTypeLabel = (type: string) => {
    switch (type) {
      case "candidature":
        return "Candidature spontanée";
      case "postuler":
        return "Candidature pour poste";
      case "inscription":
        return "Inscription événement";
      case "contact":
        return "Contact général";
      default:
        return type;
    }
  };

  const getFormTypeBadgeColor = (type: string) => {
    switch (type) {
      case "candidature":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "postuler":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "inscription":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "contact":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const parseMessage = (submission: Submission) => {
    // For contact form submissions, extract subject if it's embedded in the message
    if (submission.formType === "contact" && submission.message.startsWith("Sujet:")) {
      const parts = submission.message.split("\n\nMessage: ");
      const subject = parts[0].replace("Sujet: ", "");
      const message = parts[1] || "";
      return { subject, message };
    }
    return { subject: null, message: submission.message };
  };

  return (
    <Layout>
      <Helmet>
        <title>Toutes les Soumissions | Solio Group</title>
        <meta name="description" content="Gestion des soumissions de formulaires Solio Group" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Toutes les Soumissions
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {submissions.length} soumission{submissions.length > 1 ? 's' : ''} reçue{submissions.length > 1 ? 's' : ''}
              </p>
            </div>
            
            {submissions.length > 0 && (
              <Button 
                variant="destructive" 
                onClick={clearAllSubmissions}
                className="flex items-center gap-2"
              >
                <Trash2 size={16} />
                Tout supprimer
              </Button>
            )}
          </div>

          {submissions.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Aucune soumission reçue pour le moment.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {submissions.map((submission) => {
                const { subject, message } = parseMessage(submission);
                
                return (
                  <Card key={submission.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{submission.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 flex-wrap">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(submission.timestamp).toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </div>
                            <Badge variant="outline" className={getFormTypeBadgeColor(submission.formType)}>
                              {getFormTypeLabel(submission.formType)}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteSubmission(submission.id)}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{submission.email}</span>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            <span className="text-sm">{submission.phone}</span>
                          </div>
                        )}
                        {submission.jobTitle && (
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-medium">Poste: {submission.jobTitle}</span>
                          </div>
                        )}
                        {submission.eventTitle && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-orange-600" />
                            <span className="text-sm font-medium">Événement: {submission.eventTitle}</span>
                          </div>
                        )}
                        {submission.hasCv && (
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-red-600" />
                            <span className="text-sm">CV: {submission.cvFileName}</span>
                          </div>
                        )}
                      </div>
                      
                      {subject && (
                        <div className="mt-4">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Sujet:</h4>
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                            <p className="text-gray-700 dark:text-gray-300">
                              {subject}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Message:</h4>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                            {message}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllSubmissions;

