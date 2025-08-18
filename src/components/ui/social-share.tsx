
import { Facebook, Twitter, Share2, Copy, Download } from "lucide-react";
import { Button } from "./button";
import { toast } from "./use-toast";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./dropdown-menu";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface SocialShareProps {
  title: string;
  className?: string;
  compact?: boolean;
  showPdfDownload?: boolean;
}

export function SocialShare({ title, className = "", compact = false, showPdfDownload = false }: SocialShareProps) {
  const url = window.location.href;
  
  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`);
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Lien copié",
      description: "Le lien a été copié dans votre presse-papiers.",
    });
  };

  const downloadPDF = async () => {
    try {
      toast({
        title: "Génération du PDF",
        description: "Génération du PDF en cours...",
      });

      // Find the project content element (excluding header/navigation)
      const projectContent = document.querySelector('[data-project-content]');
      if (!projectContent) {
        throw new Error("Contenu du projet non trouvé");
      }

      const element = projectContent as HTMLElement;

      // Save original styles
      const originalOverflow = document.body.style.overflow;
      const originalWidth = element.style.width;
      const originalMaxWidth = element.style.maxWidth;
      const originalTransform = element.style.transform;

      try {
        // Prepare DOM for mobile view capture
        document.body.style.overflow = 'visible';
        element.style.width = '375px';
        element.style.maxWidth = '375px';
        element.style.transform = 'scale(1)';

        // Force mobile responsive styles
        document.documentElement.style.setProperty('--force-mobile', '375px');
        
        // Wait for layout to settle
        await new Promise(resolve => setTimeout(resolve, 500));

        // Calculate actual content dimensions
        const rect = element.getBoundingClientRect();
        const actualHeight = Math.max(
          element.scrollHeight,
          element.offsetHeight,
          rect.height
        );

        // Create canvas with optimized settings for full page capture
        const canvas = await html2canvas(element, {
          scale: 1.5, // Lower scale for better performance
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 375,
          windowWidth: 375,
          removeContainer: true,
          imageTimeout: 15000,
          logging: false,
          onclone: (clonedDoc) => {
            // Apply mobile styles to cloned document
            const clonedElement = clonedDoc.querySelector('[data-project-content]') as HTMLElement;
            if (clonedElement) {
              clonedElement.style.width = '375px';
              clonedElement.style.maxWidth = '375px';
              clonedElement.style.overflow = 'visible';
              
              // Apply mobile viewport meta tag to cloned document
              const metaViewport = clonedDoc.createElement('meta');
              metaViewport.name = 'viewport';
              metaViewport.content = 'width=375, initial-scale=1';
              if (clonedDoc.head) {
                clonedDoc.head.appendChild(metaViewport);
              }
            }
          }
        });

        // Create PDF with proper dimensions
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        
        const imgData = canvas.toDataURL('image/png', 0.95);
        const imgProps = pdf.getImageProperties(imgData);
        
        // Calculate dimensions to fit mobile width properly
        const pdfWidth = pageWidth - 20; // 10mm margin on each side
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        // Check if content fits on one page
        if (pdfHeight <= pageHeight - 20) {
          // Single page
          pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth, pdfHeight);
        } else {
          // Multiple pages
          const pageContentHeight = pageHeight - 20; // Account for margins
          const totalPages = Math.ceil(pdfHeight / pageContentHeight);
          
          for (let i = 0; i < totalPages; i++) {
            if (i > 0) pdf.addPage();
            
            const yOffset = -(i * pageContentHeight);
            pdf.addImage(imgData, 'PNG', 10, 10 + yOffset, pdfWidth, pdfHeight);
          }
        }
        
        // Download the PDF
        const fileName = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_mobile.pdf`;
        pdf.save(fileName);

        toast({
          title: "PDF téléchargé",
          description: "Le PDF mobile du projet a été généré avec succès.",
        });

      } finally {
        // Restore original styles
        document.body.style.overflow = originalOverflow;
        element.style.width = originalWidth;
        element.style.maxWidth = originalMaxWidth;
        element.style.transform = originalTransform;
        document.documentElement.style.removeProperty('--force-mobile');
      }

    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      toast({
        title: "Erreur",
        description: "Impossible de générer le PDF. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  if (compact) {
    return (
      <div className={`flex justify-end gap-2 ${className}`}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="text-blue-600 hover:text-blue-700">
              <Share2 className="h-4 w-4 text-blue-600" />
              <span className="sr-only">Partager</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={shareOnWhatsApp} className="cursor-pointer">
              <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.881 11.881 0 005.647 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.476-8.414z"/>
              </svg>
              WhatsApp
            </DropdownMenuItem>
            <DropdownMenuItem onClick={shareOnFacebook} className="cursor-pointer">
              <Facebook className="h-4 w-4 mr-2 text-blue-600" />
              Facebook
            </DropdownMenuItem>
            <DropdownMenuItem onClick={shareOnTwitter} className="cursor-pointer">
              <Twitter className="h-4 w-4 mr-2 text-blue-400" />
              Twitter/X
            </DropdownMenuItem>
            <DropdownMenuItem onClick={copyLink} className="cursor-pointer">
              <Copy className="h-4 w-4 mr-2" />
              Copier le lien
            </DropdownMenuItem>
            {showPdfDownload && (
              <DropdownMenuItem onClick={downloadPDF} className="cursor-pointer">
                <Download className="h-4 w-4 mr-2" />
                Télécharger PDF
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
      <div className="text-sm font-medium text-gray-700">Partager :</div>
      <div className="flex gap-2">
        <Button variant="outline" size="icon" onClick={shareOnWhatsApp} title="Partager sur WhatsApp">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.881 11.881 0 005.647 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.476-8.414z"/>
          </svg>
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnFacebook} title="Partager sur Facebook">
          <Facebook className="h-4 w-4 text-blue-600" />
        </Button>
        <Button variant="outline" size="icon" onClick={shareOnTwitter} title="Partager sur Twitter/X">
          <Twitter className="h-4 w-4 text-blue-400" />
        </Button>
        <Button variant="outline" size="icon" onClick={copyLink} title="Copier le lien">
          <Copy className="h-4 w-4" />
        </Button>
        {showPdfDownload && (
          <Button variant="outline" size="icon" onClick={downloadPDF} title="Télécharger PDF">
            <Download className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
