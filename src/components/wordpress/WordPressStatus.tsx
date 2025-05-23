
import { useState, useEffect } from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";
import wordpressApi from '@/services/wordpressApi';

interface WordPressStatusProps {
  onCheckComplete?: (status: boolean) => void;
}

const WordPressStatus = ({ onCheckComplete }: WordPressStatusProps) => {
  const [status, setStatus] = useState<{
    isConnected: boolean;
    version?: string;
    status?: number;
    error?: any;
    checking: boolean;
  }>({
    isConnected: false,
    checking: true
  });

  const checkConnection = async () => {
    setStatus(prev => ({ ...prev, checking: true }));
    try {
      const result = await wordpressApi.checkConnection();
      setStatus({
        ...result,
        checking: false
      });
      if (onCheckComplete) {
        onCheckComplete(result.isConnected);
      }
    } catch (error) {
      setStatus({
        isConnected: false,
        error,
        checking: false
      });
      if (onCheckComplete) {
        onCheckComplete(false);
      }
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="my-4">
      {status.checking ? (
        <Alert className="bg-blue-50 border-blue-200">
          <RefreshCw className="h-5 w-5 text-blue-500 animate-spin" />
          <AlertTitle>Vérification de la connexion WordPress</AlertTitle>
          <AlertDescription>
            Nous vérifions la connexion à l'API WordPress...
          </AlertDescription>
        </Alert>
      ) : status.isConnected ? (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <AlertTitle>Connexion WordPress établie</AlertTitle>
          <AlertDescription>
            L'API WordPress est accessible et fonctionne correctement.
            {status.version && ` Version de l'API: ${status.version}`}
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Erreur de connexion WordPress</AlertTitle>
          <AlertDescription>
            Impossible de se connecter à l'API WordPress. Veuillez vérifier que:
            <ul className="list-disc ml-5 mt-2">
              <li>L'URL de l'API est correcte (https://api.solio-group.com/wp-json/wp/v2)</li>
              <li>Le serveur WordPress est en ligne et accessible</li>
              <li>Les paramètres CORS sont correctement configurés</li>
            </ul>
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-2"
              onClick={checkConnection}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Réessayer
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default WordPressStatus;
