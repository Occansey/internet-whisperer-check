import Layout from '@/components/layout/Layout';
import { useTranslation } from '@/contexts/TranslationContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const { language } = useTranslation();

  const content = language === 'fr' ? {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 6 janvier 2025",
    sections: [
      {
        title: "1. Introduction",
        content: `Solio Group (ci-après "nous", "notre" ou "le Groupe") s'engage à protéger et respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) de l'Union européenne, à la loi française Informatique et Libertés, à la loi kényane sur la protection des données (Kenya Data Protection Act 2019), à la loi tanzanienne sur la protection des données (Tanzania Data Protection Act 2022), et aux réglementations applicables au Burundi.`
      },
      {
        title: "2. Responsable du Traitement",
        content: `Solio Group
Adresse : [Adresse du siège social]
Email : privacy@solio-group.com
Téléphone : [Numéro de téléphone]

Pour toute question concernant vos données personnelles, vous pouvez contacter notre Délégué à la Protection des Données (DPO) à : dpo@solio-group.com`
      },
      {
        title: "3. Données Collectées",
        subsections: [
          {
            subtitle: "3.1 Données fournies directement",
            items: [
              "Nom complet",
              "Adresse email",
              "Numéro de téléphone",
              "Entreprise et poste occupé",
              "CV et lettre de motivation (pour les candidatures)",
              "Messages et correspondances"
            ]
          },
          {
            subtitle: "3.2 Données collectées automatiquement",
            items: [
              "Adresse IP",
              "Type de navigateur et appareil",
              "Pages visitées et durée de visite",
              "Cookies et technologies similaires",
              "Données de localisation approximative"
            ]
          }
        ]
      },
      {
        title: "4. Base Légale et Finalités du Traitement",
        content: `Nous traitons vos données personnelles sur les bases légales suivantes :`,
        subsections: [
          {
            subtitle: "4.1 Consentement",
            items: [
              "Envoi de newsletters et communications marketing",
              "Utilisation de cookies non essentiels",
              "Traitement des candidatures spontanées"
            ]
          },
          {
            subtitle: "4.2 Exécution d'un contrat",
            items: [
              "Traitement des candidatures à des postes spécifiques",
              "Gestion des relations commerciales",
              "Fourniture de services demandés"
            ]
          },
          {
            subtitle: "4.3 Intérêt légitime",
            items: [
              "Amélioration de notre site web",
              "Analyse statistique de l'utilisation",
              "Sécurité et prévention de la fraude",
              "Communications institutionnelles"
            ]
          },
          {
            subtitle: "4.4 Obligations légales",
            items: [
              "Conservation des documents fiscaux et comptables",
              "Conformité aux réglementations du travail",
              "Réponse aux demandes des autorités compétentes"
            ]
          }
        ]
      },
      {
        title: "5. Durée de Conservation",
        content: `Nous conservons vos données personnelles pendant les durées suivantes :`,
        items: [
          "Candidatures : 2 ans à compter de la dernière interaction",
          "Relations commerciales : Durée de la relation + 5 ans (obligations comptables)",
          "Cookies : Selon les préférences (maximum 13 mois)",
          "Données de sécurité : 1 an",
          "Obligations légales : Selon les exigences réglementaires de chaque juridiction"
        ]
      },
      {
        title: "6. Partage des Données",
        content: `Nous pouvons partager vos données avec :`,
        items: [
          "Filiales du Solio Group (Kenya, Tanzanie, Burundi, France, Canada, Nigéria)",
          "Prestataires de services (hébergement, marketing, support technique)",
          "Autorités légales et réglementaires lorsque requis par la loi",
          "Partenaires commerciaux avec votre consentement explicite"
        ],
        note: "Tous les transferts de données hors de l'Union européenne sont effectués conformément au RGPD, notamment via des clauses contractuelles types approuvées par la Commission européenne."
      },
      {
        title: "7. Vos Droits",
        content: `Conformément au RGPD, à la loi Informatique et Libertés, et aux lois locales sur la protection des données, vous disposez des droits suivants :`,
        rights: [
          {
            name: "Droit d'accès",
            desc: "Obtenir une copie de vos données personnelles"
          },
          {
            name: "Droit de rectification",
            desc: "Corriger des données inexactes ou incomplètes"
          },
          {
            name: "Droit à l'effacement",
            desc: "Demander la suppression de vos données (\"droit à l'oubli\")"
          },
          {
            name: "Droit à la limitation",
            desc: "Restreindre le traitement de vos données"
          },
          {
            name: "Droit à la portabilité",
            desc: "Recevoir vos données dans un format structuré"
          },
          {
            name: "Droit d'opposition",
            desc: "S'opposer au traitement de vos données"
          },
          {
            name: "Droit de retirer le consentement",
            desc: "Retirer votre consentement à tout moment"
          },
          {
            name: "Droit de plainte",
            desc: "Déposer une réclamation auprès de la CNIL (France), l'ODPC (Kenya), ou l'autorité locale compétente"
          }
        ],
        exercise: "Pour exercer vos droits, contactez-nous à : privacy@solio-group.com ou dpo@solio-group.com"
      },
      {
        title: "8. Sécurité des Données",
        content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :`,
        measures: [
          "Chiffrement SSL/TLS pour les transmissions",
          "Contrôles d'accès stricts et authentification",
          "Surveillance et détection des intrusions",
          "Sauvegardes régulières et plan de reprise",
          "Formation du personnel à la protection des données",
          "Audits de sécurité réguliers"
        ]
      },
      {
        title: "9. Cookies et Technologies Similaires",
        content: `Notre site utilise des cookies. Vous pouvez gérer vos préférences de cookies à tout moment via le panneau de paramètres des cookies accessible en bas de page.`,
        types: [
          {
            type: "Cookies nécessaires",
            desc: "Essentiels au fonctionnement du site (authentification, sécurité)"
          },
          {
            type: "Cookies fonctionnels",
            desc: "Améliorent votre expérience (langue, thème)"
          },
          {
            type: "Cookies analytiques",
            desc: "Nous aident à comprendre l'utilisation du site"
          },
          {
            type: "Cookies marketing",
            desc: "Personnalisent les publicités"
          }
        ]
      },
      {
        title: "10. Transferts Internationaux",
        content: `Le Solio Group opère dans plusieurs pays (France, Kenya, Tanzanie, Burundi, Canada, Nigéria). Vos données peuvent être transférées et traitées dans ces pays. Nous assurons un niveau de protection adéquat à travers :`,
        items: [
          "Clauses contractuelles types de l'UE",
          "Règles d'entreprise contraignantes (BCR)",
          "Décisions d'adéquation de la Commission européenne",
          "Garanties appropriées conformes aux réglementations locales"
        ]
      },
      {
        title: "11. Protection des Mineurs",
        content: `Notre site n'est pas destiné aux personnes de moins de 16 ans (ou l'âge minimum légal dans votre juridiction). Nous ne collectons pas sciemment de données personnelles d'enfants. Si vous pensez que nous avons collecté des données d'un mineur, contactez-nous immédiatement.`
      },
      {
        title: "12. Modifications de cette Politique",
        content: `Nous pouvons mettre à jour cette politique de confidentialité périodiquement. La date de dernière mise à jour est indiquée en haut de ce document. Les modifications importantes vous seront notifiées par email ou via un avis sur notre site.`
      },
      {
        title: "13. Contact et Réclamations",
        content: `Pour toute question ou pour exercer vos droits :

Email : privacy@solio-group.com
DPO : dpo@solio-group.com
Adresse postale : [Adresse]

Autorités de contrôle :
• France : CNIL (www.cnil.fr)
• Kenya : Office of the Data Protection Commissioner (www.odpc.go.ke)
• Tanzanie : Personal Data Protection Commission
• Burundi : Autorité locale de protection des données`
      }
    ]
  } : {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 6, 2025",
    sections: [
      {
        title: "1. Introduction",
        content: `Solio Group (hereinafter "we", "our" or "the Group") is committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, share, and protect your personal data in accordance with the European Union's General Data Protection Regulation (GDPR), French Data Protection Law (Informatique et Libertés), Kenya Data Protection Act 2019, Tanzania Data Protection Act 2022, and applicable regulations in Burundi.`
      },
      {
        title: "2. Data Controller",
        content: `Solio Group
Address: [Head office address]
Email: privacy@solio-group.com
Phone: [Phone number]

For any questions regarding your personal data, you can contact our Data Protection Officer (DPO) at: dpo@solio-group.com`
      },
      {
        title: "3. Data Collected",
        subsections: [
          {
            subtitle: "3.1 Data provided directly",
            items: [
              "Full name",
              "Email address",
              "Phone number",
              "Company and job title",
              "CV and cover letter (for applications)",
              "Messages and correspondence"
            ]
          },
          {
            subtitle: "3.2 Data collected automatically",
            items: [
              "IP address",
              "Browser type and device",
              "Pages visited and duration",
              "Cookies and similar technologies",
              "Approximate location data"
            ]
          }
        ]
      },
      {
        title: "4. Legal Basis and Processing Purposes",
        content: `We process your personal data on the following legal bases:`,
        subsections: [
          {
            subtitle: "4.1 Consent",
            items: [
              "Sending newsletters and marketing communications",
              "Use of non-essential cookies",
              "Processing spontaneous applications"
            ]
          },
          {
            subtitle: "4.2 Contract Performance",
            items: [
              "Processing applications for specific positions",
              "Managing business relationships",
              "Providing requested services"
            ]
          },
          {
            subtitle: "4.3 Legitimate Interest",
            items: [
              "Improving our website",
              "Statistical analysis of usage",
              "Security and fraud prevention",
              "Institutional communications"
            ]
          },
          {
            subtitle: "4.4 Legal Obligations",
            items: [
              "Retention of tax and accounting documents",
              "Compliance with labor regulations",
              "Response to requests from competent authorities"
            ]
          }
        ]
      },
      {
        title: "5. Retention Period",
        content: `We retain your personal data for the following periods:`,
        items: [
          "Applications: 2 years from last interaction",
          "Business relationships: Duration of relationship + 5 years (accounting obligations)",
          "Cookies: According to preferences (maximum 13 months)",
          "Security data: 1 year",
          "Legal obligations: According to regulatory requirements of each jurisdiction"
        ]
      },
      {
        title: "6. Data Sharing",
        content: `We may share your data with:`,
        items: [
          "Solio Group subsidiaries (Kenya, Tanzania, Burundi, France, Canada, Nigeria)",
          "Service providers (hosting, marketing, technical support)",
          "Legal and regulatory authorities when required by law",
          "Business partners with your explicit consent"
        ],
        note: "All data transfers outside the European Union are carried out in accordance with GDPR, notably through standard contractual clauses approved by the European Commission."
      },
      {
        title: "7. Your Rights",
        content: `In accordance with GDPR, French Data Protection Law, and local data protection laws, you have the following rights:`,
        rights: [
          {
            name: "Right of Access",
            desc: "Obtain a copy of your personal data"
          },
          {
            name: "Right to Rectification",
            desc: "Correct inaccurate or incomplete data"
          },
          {
            name: "Right to Erasure",
            desc: "Request deletion of your data (\"right to be forgotten\")"
          },
          {
            name: "Right to Restriction",
            desc: "Restrict the processing of your data"
          },
          {
            name: "Right to Portability",
            desc: "Receive your data in a structured format"
          },
          {
            name: "Right to Object",
            desc: "Object to the processing of your data"
          },
          {
            name: "Right to Withdraw Consent",
            desc: "Withdraw your consent at any time"
          },
          {
            name: "Right to Complain",
            desc: "File a complaint with CNIL (France), ODPC (Kenya), or local competent authority"
          }
        ],
        exercise: "To exercise your rights, contact us at: privacy@solio-group.com or dpo@solio-group.com"
      },
      {
        title: "8. Data Security",
        content: `We implement appropriate technical and organizational measures to protect your data:`,
        measures: [
          "SSL/TLS encryption for transmissions",
          "Strict access controls and authentication",
          "Intrusion monitoring and detection",
          "Regular backups and recovery plan",
          "Staff training on data protection",
          "Regular security audits"
        ]
      },
      {
        title: "9. Cookies and Similar Technologies",
        content: `Our site uses cookies. You can manage your cookie preferences at any time via the cookie settings panel accessible at the bottom of the page.`,
        types: [
          {
            type: "Necessary Cookies",
            desc: "Essential for site functionality (authentication, security)"
          },
          {
            type: "Functional Cookies",
            desc: "Enhance your experience (language, theme)"
          },
          {
            type: "Analytics Cookies",
            desc: "Help us understand site usage"
          },
          {
            type: "Marketing Cookies",
            desc: "Personalize advertisements"
          }
        ]
      },
      {
        title: "10. International Transfers",
        content: `Solio Group operates in multiple countries (France, Kenya, Tanzania, Burundi, Canada, Nigeria). Your data may be transferred and processed in these countries. We ensure an adequate level of protection through:`,
        items: [
          "EU standard contractual clauses",
          "Binding Corporate Rules (BCR)",
          "European Commission adequacy decisions",
          "Appropriate safeguards compliant with local regulations"
        ]
      },
      {
        title: "11. Protection of Minors",
        content: `Our site is not intended for persons under 16 years old (or the minimum legal age in your jurisdiction). We do not knowingly collect personal data from children. If you believe we have collected data from a minor, contact us immediately.`
      },
      {
        title: "12. Changes to this Policy",
        content: `We may update this privacy policy periodically. The last update date is indicated at the top of this document. Significant changes will be notified to you by email or via a notice on our site.`
      },
      {
        title: "13. Contact and Complaints",
        content: `For any questions or to exercise your rights:

Email: privacy@solio-group.com
DPO: dpo@solio-group.com
Postal address: [Address]

Supervisory Authorities:
• France: CNIL (www.cnil.fr)
• Kenya: Office of the Data Protection Commissioner (www.odpc.go.ke)
• Tanzania: Personal Data Protection Commission
• Burundi: Local data protection authority`
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{content.title} - Solio Group</title>
        <meta name="description" content={`${content.title} - GDPR Compliant`} />
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
              <div key={idx} className="mb-8">
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                {section.content && (
                  <p className="mb-3 whitespace-pre-line">{section.content}</p>
                )}
                {section.subsections && (
                  <div className="ml-4 space-y-4">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="font-medium mb-2">{sub.subtitle}</h3>
                        <ul className="list-disc ml-6 space-y-1">
                          {sub.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {section.items && (
                  <ul className="list-disc ml-6 space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                )}
                {section.rights && (
                  <div className="space-y-3 ml-4">
                    {section.rights.map((right, rightIdx) => (
                      <div key={rightIdx}>
                        <h4 className="font-medium">{right.name}</h4>
                        <p className="text-sm text-muted-foreground">{right.desc}</p>
                      </div>
                    ))}
                    <p className="text-sm italic mt-4">{section.exercise}</p>
                  </div>
                )}
                {section.measures && (
                  <ul className="list-disc ml-6 space-y-1">
                    {section.measures.map((measure, measureIdx) => (
                      <li key={measureIdx} className="text-sm">{measure}</li>
                    ))}
                  </ul>
                )}
                {section.types && (
                  <div className="space-y-2 ml-4">
                    {section.types.map((type, typeIdx) => (
                      <div key={typeIdx}>
                        <h4 className="font-medium">{type.type}</h4>
                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.note && (
                  <p className="text-sm italic mt-3 text-muted-foreground">{section.note}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
