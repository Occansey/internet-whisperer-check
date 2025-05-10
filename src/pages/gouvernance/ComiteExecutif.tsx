
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface ExecutiveMemberProps {
  photo: string;
  name: string;
  title: string;
  linkedin: string;
  bio: string;
}

const executives: ExecutiveMemberProps[] = [
  {
    photo: "/lovable-uploads/38e1e033-0379-4601-873f-710962a35680.png",
    name: "Evrard Havyarimana",
    title: "Président du Groupe et du COMEX",
    linkedin: "https://fr.linkedin.com/in/evrard-havyarimana-07450a24",
    bio: "Evrard Havyarimana est le Président de Solio Group, un groupe engagé dans la transition énergétique et la transformation numérique.\n\nDiplômé en 2010 d'un Master en Finance des Entreprises de l'IAE de Bordeaux IV – Université de Bordeaux, il a débuté sa carrière dans le secteur bancaire et le conseil, avant de se consacrer pleinement à l'entrepreneuriat.\n\nEn 2019, il a fondé Growth Supply, un groupe qui deviendra Solio Group en 2025, pour refléter une vision plus large et intégrée de ses activités sur les continents africain, européen et américain. En 2022, il a lancé Growth Energy, une filiale spécialisée dans le développement, le financement et le déploiement des centrales solaires pour l'industrie.\n\nEn 2023, il a fondé Asking en France et au Canada, une entreprise numérique qui accompagne les dirigeants dans l'exploitation stratégique des données pour mieux piloter leur croissance. En 2024, cette entreprise a acquis MFG Technologies, une entreprise numérique intégratrice de solutions ERP pour les entreprises au Canada.\n\nEn parallèle, il a initié en 2021 le Burundian Business Club France, un club d'affaires avec une communauté engagée de leaders, entrepreneurs, investisseurs et experts, unie par des valeurs de collaboration, d'excellence et d'innovation, pour stimuler le développement économique et favoriser les partenariats stratégiques."
  },
  {
    photo: "/lovable-uploads/1ed3a8e7-9fb3-4c51-ae7b-1ee297f65665.png",
    name: "John Okoro",
    title: "Directeur de Growth Energy",
    linkedin: "https://fr.linkedin.com/in/john-okoro-ugiagbe",
    bio: "John Okoro dirige Growth Energy avec une expertise confirmée dans le secteur de l'énergie propre en Afrique.\n\nFort de plus de dix ans d'expérience dans plus de 20 pays d'Afrique subsaharienne et plus de 30 pays à travers le monde, il a dirigé des projets d'énergie propre avec des entreprises comme Vergnet SA et le Groupe CMR.\n\nCofondateur de Growth Energy et de Friends of Nigeria, il se consacre à la promotion de solutions d'énergie propre et à la promotion de la collaboration internationale.\n\nTitulaire d'un Master en Génie Énergétique de l'Université de Bordeaux, John est passionné par la connexion entre les personnes et les idées, et s'engage à promouvoir la transition énergétique durable en Afrique."
  },
  {
    photo: "/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png",
    name: "Laure Duhorane",
    title: "Directrice de Asking",
    linkedin: "https://ca.linkedin.com/in/laure-duhorane?trk=public_post_feed-actor-name",
    bio: "Laure Duhorane occupe le poste de Directrice Générale d'Asking et est experte en communication et transformation digitale. Elle accompagne les entreprises dans leur évolution stratégique et digitale.\n\nDiplômée d'un Master en Management et Communication d'Entreprise de l'EFAP Paris, son expertise en gestion et innovation lui permet d'aider les organisations à optimiser leur impact et à s'adapter aux défis du numérique.\n\nDepuis 2024, elle a rejoint la direction de MFG Technologies dans le cadre d'une acquisition. Elle y dirige des initiatives de transformation numérique, de recrutement et de développement commercial, aidant les organisations à rationaliser leurs processus et à atteindre la croissance.\n\nElle est également membre du comité exécutif de Solio Group, où elle fait avancer sa vision de stimuler la croissance socio-économique à travers les industries et les communautés africaines par la transition vers l'énergie renouvelable et durable.\n\nPassionnée par le développement durable, elle allie vision stratégique et expérience pratique pour créer des changements significatifs et favoriser la croissance à long terme des organisations."
  },
  {
    photo: "/lovable-uploads/107cf1de-5dfb-449e-a260-1ec6bfd00547.png",
    name: "Isabelle Mauboussin",
    title: "Directrice administratif et financier",
    linkedin: "https://fr.linkedin.com/in/isabelle-mauboussin-53036930a?trk=people-guest_people_search-card",
    bio: "Isabelle Mauboussin occupe le poste de responsable administrative et financière de Solio Group.\n\nDiplômée d'un DESS en Comptabilité et Finance de l'Université Paris-Dauphine, elle a travaillé plus de 30 ans en cabinet d'expertise comptable.\n\nCes expériences lui ont appris à analyser les états financiers de différentes structures, à les accompagner dans leurs projets de développement et à travailler en confiance dans le respect des normes comptables et fiscales.\n\nReconnue pour sa rigueur et son professionnalisme, elle aime relever de nouveaux défis et trouver des solutions innovantes pour stimuler la croissance et la performance des entreprises.\n\nSon objectif est de contribuer activement à la réussite de chaque projet, d'optimiser les processus administratifs et comptables pour en faire un outil de gestion au service du pilotage de la stratégie de Solio Group."
  },
  {
    photo: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png",
    name: "Alain Normand",
    title: "Directeur de Mfg Technologies",
    linkedin: "https://linkedin.com/",
    bio: "Alain Normand est à la tête de MFG Technologies et se distingue comme un expert des systèmes ERP pour le secteur manufacturier.\n\nDiplômé en administration des affaires de HEC Montréal, il est passionné par la gestion d'entreprise efficace et propose les meilleures pratiques dans les systèmes de fabrication ERP : JobBOSS et Divalto.\n\nAvec plus de 20 ans d'expérience dans la mise en œuvre de systèmes ERP (systèmes manufacturiers) et en tant que comptable, son expertise fait en sorte qu'il se veut un entrepreneur hors-pair.\n\nIl est reconnu comme un allié précieux pour ses clients, travaillant pour eux et avec eux; ils sont toujours servis avec excellence et reçoivent des conseils haut-de-gamme pour améliorer la gestion de leur entreprise à travers ces plateformes.\n\nSon souci d'intégrité, sa grande humanité et son esprit authentique font de lui un Leader inspirant avec qui on souhaite être associé professionnellement – et les employés, collaborateurs de MFG, sont d'autant plus heureux de faire partie de son équipe!"
  }
];

const ExecutiveProfile = ({ executive }: { executive: ExecutiveMemberProps }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-1/3">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img 
            src={executive.photo} 
            alt={executive.name} 
            className="w-full h-auto aspect-[3/4] object-cover object-top"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-solio-blue">{executive.name}</h3>
          <p className="text-gray-700">{executive.title}</p>
          <a 
            href={executive.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-solio-blue hover:text-solio-yellow flex items-center transition-colors mt-2"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" className="mr-1">
              <path 
                fill="currentColor" 
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <Card>
          <CardContent className="prose max-w-none pt-6">
            <h2 className="text-xl font-semibold mb-4">Biographie</h2>
            <p className="whitespace-pre-line">{executive.bio}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ComiteExecutif = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Comité Exécutif (COMEX)</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Le COMEX assure la direction stratégique et l'alignement des activités entre les filiales. Il est composé des directeurs de chaque filiale ainsi que de la direction financière du groupe.
          </p>
          
          {isMobile && (
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4">Membres du COMEX</h3>
                <nav className="flex flex-col space-y-2">
                  {executives.map((exec) => (
                    <a 
                      href={`#exec-${exec.name.toLowerCase().split(' ')[1]}`}
                      key={exec.name}
                      className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-solio-blue"
                    >
                      {exec.title}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <div className="space-y-16">
                {executives.map((exec, index) => (
                  <div key={exec.name} id={`exec-${exec.name.toLowerCase().split(' ')[1]}`} className={`pt-4 ${index > 0 ? "border-t border-gray-200" : ""}`}>
                    <ExecutiveProfile executive={exec} />
                  </div>
                ))}
              </div>
            </div>
            
            {!isMobile && (
              <div className="w-full md:w-1/4 mt-8 md:mt-0">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-4">Membres du COMEX</h3>
                      <nav className="flex flex-col space-y-2">
                        {executives.map((exec) => (
                          <a 
                            href={`#exec-${exec.name.toLowerCase().split(' ')[1]}`}
                            key={exec.name}
                            className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-solio-blue"
                          >
                            {exec.title}
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Réunions du COMEX</h2>
            <p className="text-gray-700">
              Le COMEX se réunit régulièrement pour orienter les choix stratégiques, harmoniser les projets et garantir la performance globale du groupe.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComiteExecutif;
