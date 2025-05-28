
import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, User, FileText, Briefcase, MapPin } from 'lucide-react';
import { Helmet } from "react-helmet-async";

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
}

const AllSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // Load submissions from localStorage
    const savedSubmissions = localStorage.getItem('formSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

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

  return (
    <Layout>
      <Helmet>
        <title>Toutes les Soumissions | Solio Group</title>
        <meta name="description" content="Gestion des soumissions de formulaires Solio Group" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Toutes les Soumissions
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {submissions.length} soumission{submissions.length > 1 ? 's' : ''} reçue{submissions.length > 1 ? 's' : ''}
            </p>
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
              {submissions.map((submission) => (
                <Card key={submission.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{submission.name}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
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
                    
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Message:</h4>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllSubmissions;
