import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/contexts/TranslationContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  const { language } = useTranslation();

  const content = language === 'fr' ? {
    title: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour : 6 janvier 2025",
    sections: [
      {
        title: "1. Objet",
        content: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web www.solio-group.com (ci-après \"le Site\") exploité par Solio Group. En accédant et en utilisant le Site, vous acceptez d'être lié par ces CGU."
      },
      {
        title: "2. Mentions Légales",
        content: `Éditeur du site :
Solio Group
Siège social : [Adresse]
Email : contact@solio-group.com
Téléphone : [Numéro]

Directeur de la publication : [Nom]

Hébergeur :
[Nom de l'hébergeur]
[Adresse de l'hébergeur]`
      },
      {
        title: "3. Accès au Site",
        content: "L'accès au Site est gratuit. Solio Group s'efforce d'assurer la disponibilité du Site 24h/24, 7j/7, mais ne peut garantir un accès continu en raison de la nature d'Internet. Solio Group se réserve le droit de suspendre, interrompre ou limiter l'accès au Site pour des raisons de maintenance ou de sécurité."
      },
      {
        title: "4. Utilisation du Site",
        content: "Vous vous engagez à utiliser le Site de manière conforme à la loi et aux présentes CGU. Il est notamment interdit de :",
        items: [
          "Porter atteinte aux droits de propriété intellectuelle de Solio Group",
          "Diffuser des contenus illicites, diffamatoires ou portant atteinte aux droits d'autrui",
          "Tenter d'accéder de manière non autorisée aux systèmes informatiques du Site",
          "Utiliser des robots, scrapers ou autres moyens automatisés",
          "Usurper l'identité d'une autre personne ou entité"
        ]
      },
      {
        title: "5. Propriété Intellectuelle",
        content: "Tous les contenus présents sur le Site (textes, images, logos, marques, etc.) sont la propriété exclusive de Solio Group ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite."
      },
      {
        title: "6. Données Personnelles",
        content: "La collecte et le traitement de vos données personnelles sont régis par notre Politique de Confidentialité, disponible sur le Site. En utilisant le Site, vous consentez à la collecte et au traitement de vos données conformément à cette politique."
      },
      {
        title: "7. Cookies",
        content: "Le Site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies via le panneau de gestion des cookies accessible sur le Site. Pour plus d'informations, consultez notre Politique de Cookies."
      },
      {
        title: "8. Liens Externes",
        content: "Le Site peut contenir des liens vers des sites web tiers. Solio Group n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité."
      },
      {
        title: "9. Responsabilité",
        content: "Solio Group s'efforce de fournir des informations exactes et à jour sur le Site, mais ne peut garantir l'exhaustivité ou l'exactitude des contenus. Solio Group décline toute responsabilité pour :",
        items: [
          "Les erreurs ou omissions dans les contenus",
          "Les interruptions ou dysfonctionnements du Site",
          "Les dommages résultant de l'utilisation ou de l'impossibilité d'utiliser le Site",
          "Les virus ou autres éléments nuisibles"
        ]
      },
      {
        title: "10. Candidatures et Recrutement",
        content: "Les candidatures soumises via le Site sont traitées conformément à notre Politique de Confidentialité et aux réglementations applicables en matière de protection des données. Solio Group se réserve le droit de rejeter toute candidature sans justification."
      },
      {
        title: "11. Modification des CGU",
        content: "Solio Group se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Il est de votre responsabilité de consulter régulièrement les CGU."
      },
      {
        title: "12. Droit Applicable et Juridiction",
        content: "Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront compétents, sauf disposition légale contraire. Pour les utilisateurs situés au Kenya, en Tanzanie ou au Burundi, les lois locales sur la protection des consommateurs s'appliquent également."
      },
      {
        title: "13. Contact",
        content: `Pour toute question concernant les présentes CGU :
Email : legal@solio-group.com
Adresse : [Adresse postale]`
      }
    ]
  } : {
    title: "Terms of Service",
    lastUpdated: "Last Updated: January 6, 2025",
    sections: [
      {
        title: "1. Purpose",
        content: "These Terms of Service (\"Terms\") govern the use of the website www.solio-group.com (hereinafter \"the Site\") operated by Solio Group. By accessing and using the Site, you agree to be bound by these Terms."
      },
      {
        title: "2. Legal Notice",
        content: `Site Publisher:
Solio Group
Headquarters: [Address]
Email: contact@solio-group.com
Phone: [Number]

Publication Director: [Name]

Host:
[Host Name]
[Host Address]`
      },
      {
        title: "3. Access to the Site",
        content: "Access to the Site is free. Solio Group strives to ensure the availability of the Site 24/7, but cannot guarantee continuous access due to the nature of the Internet. Solio Group reserves the right to suspend, interrupt, or limit access to the Site for maintenance or security reasons."
      },
      {
        title: "4. Use of the Site",
        content: "You agree to use the Site in accordance with the law and these Terms. It is prohibited to:",
        items: [
          "Infringe upon Solio Group's intellectual property rights",
          "Disseminate illegal, defamatory content or content that violates the rights of others",
          "Attempt unauthorized access to the Site's computer systems",
          "Use robots, scrapers, or other automated means",
          "Impersonate another person or entity"
        ]
      },
      {
        title: "5. Intellectual Property",
        content: "All content on the Site (texts, images, logos, trademarks, etc.) is the exclusive property of Solio Group or its partners and is protected by intellectual property laws. Any unauthorized reproduction, distribution, or use is strictly prohibited."
      },
      {
        title: "6. Personal Data",
        content: "The collection and processing of your personal data are governed by our Privacy Policy, available on the Site. By using the Site, you consent to the collection and processing of your data in accordance with this policy."
      },
      {
        title: "7. Cookies",
        content: "The Site uses cookies to improve your experience. You can manage your cookie preferences via the cookie management panel accessible on the Site. For more information, consult our Cookie Policy."
      },
      {
        title: "8. External Links",
        content: "The Site may contain links to third-party websites. Solio Group exercises no control over these sites and disclaims all responsibility for their content, availability, or privacy policy."
      },
      {
        title: "9. Liability",
        content: "Solio Group strives to provide accurate and up-to-date information on the Site but cannot guarantee the completeness or accuracy of the content. Solio Group disclaims all liability for:",
        items: [
          "Errors or omissions in the content",
          "Interruptions or malfunctions of the Site",
          "Damages resulting from the use or inability to use the Site",
          "Viruses or other harmful elements"
        ]
      },
      {
        title: "10. Applications and Recruitment",
        content: "Applications submitted via the Site are processed in accordance with our Privacy Policy and applicable data protection regulations. Solio Group reserves the right to reject any application without justification."
      },
      {
        title: "11. Modification of Terms",
        content: "Solio Group reserves the right to modify these Terms at any time. Modifications take effect upon publication on the Site. It is your responsibility to regularly consult the Terms."
      },
      {
        title: "12. Applicable Law and Jurisdiction",
        content: "These Terms are governed by French law. In case of dispute, French courts will have jurisdiction, unless otherwise required by law. For users located in Kenya, Tanzania, or Burundi, local consumer protection laws also apply."
      },
      {
        title: "13. Contact",
        content: `For any questions regarding these Terms:
Email: legal@solio-group.com
Address: [Postal address]`
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{content.title} - Solio Group</title>
        <meta name="description" content={content.title} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container max-w-4xl py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{content.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{content.lastUpdated}</p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            {content.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <p className="mb-2 whitespace-pre-line">{section.content}</p>
                {section.items && (
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermsOfService;
