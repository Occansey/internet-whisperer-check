import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
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
    photo: "/lovable-uploads/ec9bfdff-09d6-4197-9fb2-36c08c4c0f7b.png",
    name: "Evrard Havyarimana",
    title: "Président du Groupe et du COMEX",
    linkedin: "https://fr.linkedin.com/in/evrard-havyarimana-07450a24",
    bio: "Evrard Havyarimana est le Président de Solio Group, un groupe engagé dans la transition énergétique et la transformation numérique.\n\n Diplômé d'un Master en Finance des Entreprises à l'IAE Bordeaux IV – Université de Bordeaux, il débute sa carrière dans les secteurs bancaire et du conseil, avant de se consacrer à l'entrepreneuriat avec la volonté d'apporter des solutions concrètes aux défis énergétiques et technologiques des marchés émergents.\n\n En 2019, il fonde à Paris Growth Supply, une entreprise dédiée à l'accompagnement de la croissance des entreprises.\n En 2025, cette entreprise devient Solio Group, pour refléter une ambition élargie et structurée autour de deux axes majeurs : la transition énergétique et la transformation digitale.\n\n En 2022, il co-fonde Growth Energy, une filiale spécialisée dans le développement, le financement et le déploiement de centrales solaires pour le secteur industriel et commercial, avec une attention particulière portée aux marchés africains.\n En 2023, il fonde Asking en France et au Canada, une entreprise technologique dédiée à l'exploitation intelligente des données pour renforcer la performance et la résilience des entreprises.\n\n En 2024, Solio Group (ex Growth Supply) accélère son expansion externe en rachetant MFG Technologies, intégrateur montréalais de solutions CRM et ERP fort de 20 ans d'expertise.\n À travers Solio Group et ses filiales, Evrard Havyarimana pilote une stratégie de croissance responsable, fondée sur l'impact mesurable, l'innovation technologique et la création de valeur durable sur les trois continents où le groupe est actif.\n"
  },
  {
    photo:  "/lovable-uploads/21b71e09-5fdb-4819-a954-2c32bfebb440.png",
    name: "John Okoro",
    title: "Directeur de Growth Energy",
    linkedin: "https://fr.linkedin.com/in/john-okoro-ugiagbe",
    bio: "\nJohn Okoro est à la tête de Growth Energy avec une expertise confirmée dans le secteur de l'énergie propre et de la décarbonation de l'industrie à l'international, et notamment en Afrique.\n\n Titulaire d'un diplôme d'ingénieur en chimie à Covenant University et d'un master en gestion de projet à Skema Business School à Paris, John est passionné par la transition énergétique durable en Afrique et est parmi les experts les plus recherchés du monde sur les sujets de développement des énergies renouvelables en Afrique.\n\n John est également titulaire du diplôme professionnel de gestion de projet (PMP), et membre de l'institut de gestion de projet (PMI) siégé aux États-Unis.\n Fort de plus de dix ans d'expérience dans plus de 20 pays d'Afrique subsaharienne et plus de 30 pays à travers le monde, il a dirigé des projets d'énergies renouvelables avec des entreprises comme Vergnet SA et le Groupe CMR.\n En décembre 2022, il quitte ses fonctions à CMR Group en tant que Directeur Commercial de la division solaire pour se consacrer pleinement à l'entrepreneuriat en tant que co-fondateur de Growth Energy, et continuer des projets passionnants de transition énergétique à travers le continent africain.\n\n Il a co-fondé en 2016 Friends of Nigeria à Paris, une association à but non lucratif, qui est devenue le plus grand réseau d'affaires du Nigéria en Europe dirigé par la diaspora, avec des équipes dans 4 pays d'Europe et propriétaire du forum annuel d'investissement au Nigéria, le plus reconnu d'Europe.\n"
  },
  {
    photo: "/lovable-uploads/aec6ae4e-7fc4-4651-af1d-d5f2787dd0a3.png",
    name: "Laure Duhorane",
    title: "Directrice de Asking",
    linkedin: "https://ca.linkedin.com/in/laure-duhorane?trk=public_post_feed-actor-name",
    bio: "\nLaure Duhorane oest à la tête d'Asking et est experte en communication et transformation digitale. Elle accompagne les entreprises dans leur évolution stratégique et digitale.\n\nDiplômée d'un Master en Management et Communication d'Entreprise de l'EFAP Paris, son expertise en gestion et innovation lui permet d'aider les organisations à optimiser leur impact et à s'adapter aux défis du numérique.\n\nDepuis 2024, elle a rejoint la direction de MFG Technologies dans le cadre d'une acquisition. Elle y dirige des initiatives de transformation numérique, de recrutement et de développement commercial, aidant les organisations à rationaliser leurs processus et à atteindre la croissance.\n\nElle est également membre du comité exécutif de Solio Group, où elle fait avancer sa vision de stimuler la croissance socio-économique à travers les industries et les communautés africaines par la transition vers l'énergie renouvelable et durable.\n\nPassionnée par le développement durable, elle allie vision stratégique et expérience pratique pour créer des changements significatifs et favoriser la croissance à long terme des organisations."
  },
  {
    photo: "/lovable-uploads/7ae14399-4ddf-44fe-aec4-6a1c3a702edb.png",
    name: "Isabelle Mauboussin",
    title: "Directrice administratif et financier",
    linkedin: "https://fr.linkedin.com/in/isabelle-mauboussin-53036930a?trk=people-guest_people_search-card",
    bio: "\nIsabelle Mauboussin occupe le poste de responsable administrative et financière de Solio Group.\n\nDiplômée d'un DESS en Comptabilité et Finance de l'Université Paris-Dauphine, elle a travaillé plus de 30 ans en cabinet d'expertise comptable.\n\nCes expériences lui ont appris à analyser les états financiers de différentes structures, à les accompagner dans leurs projets de développement et à travailler en confiance dans le respect des normes comptables et fiscales.\n\nReconnue pour sa rigueur et son professionnalisme, elle aime relever de nouveaux défis et trouver des solutions innovantes pour stimuler la croissance et la performance des entreprises.\n\nSon objectif est de contribuer activement à la réussite de chaque projet, d'optimiser les processus administratifs et comptables pour en faire un outil de gestion au service du pilotage de la stratégie de Solio Group."
  },
  {
    photo: "/lovable-uploads/d7789205-fcec-4153-ac30-a3bbf56f33fe.png",
    name: "Alain Normand",
    title: "Directeur de Mfg Technologies",
    linkedin: "https://linkedin.com/",
    bio: "\nAlain Normand est à la tête de MFG Technologies et se distingue comme un expert des systèmes ERP pour le secteur manufacturier.\n\nDiplômé en administration des affaires de HEC Montréal, il est passionné par la gestion d'entreprise efficace et propose les meilleures pratiques dans les systèmes de fabrication ERP : JobBOSS et Divalto.\n\nAvec plus de 20 ans d'expérience dans la mise en œuvre de systèmes ERP (systèmes manufacturiers) et en tant que comptable, son expertise fait en sorte qu'il se veut un entrepreneur hors-pair.\n\nIl est reconnu comme un allié précieux pour ses clients, travaillant pour eux et avec eux; ils sont toujours servis avec excellence et reçoivent des conseils haut-de-gamme pour améliorer la gestion de leur entreprise à travers ces plateformes.\n\nSon souci d'intégrité, sa grande humanité et son esprit authentique font de lui un Leader inspirant avec qui on souhaite être associé professionnellement – et les employés, collaborateurs de MFG, sont d'autant plus heureux de faire partie de son équipe!"
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
            className="w-full h-auto aspect-[3/4] object-cover object-top scale-75 md:scale-100"
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
      <HeroBanner 
        title="Comité Exécutif (COMEX)"
        description="Le COMEX assure la direction stratégique et l'alignement des activités entre les filiales. Il est composé des directeurs de chaque filiale ainsi que de la direction financière du groupe."
        glowColor="indigo"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
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
