import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { useTranslation } from "@/contexts/TranslationContext";

interface DirecteurProps {
  photo: string;
  nom: string;
  titre: string;
  linkedin: string;
}

const DirectionCard = ({ photo, nom, titre, linkedin }: DirecteurProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
      <div className="flex-1 overflow-hidden">
        <img 
          src={photo} 
          alt={nom} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6 mt-auto">
        <h3 className="text-xl font-semibold mb-2 text-solio-blue">{nom}</h3>
        <p className="text-gray-700 mb-4">{titre}</p>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="solio-button"
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
  );
};

const Direction = () => {
  const { t } = useTranslation();
  
  const directeurs: DirecteurProps[] = [
    {
      photo: "/lovable-uploads/ec9bfdff-09d6-4197-9fb2-36c08c4c0f7b.png",
      nom: "Evrard Havyarimana",
      titre: "Président du Groupe et du Comex",
      linkedin: "https://fr.linkedin.com/in/evrard-havyarimana-07450a24"
    },
    {
      photo: "/lovable-uploads/7ae14399-4ddf-44fe-aec4-6a1c3a702edb.png",
      nom: "Isabelle Mauboussin",
      titre: "Directrice Administrative et Financière – Groupe",
      linkedin: "https://fr.linkedin.com/in/isabelle-mauboussin-53036930a?trk=people-guest_people_search-card"
    },
    {
      photo: "/lovable-uploads/21b71e09-5fdb-4819-a954-2c32bfebb440.png",
      nom: "John Okoro",
      titre: "Directeur Général - Growth Energy",
      linkedin: "https://fr.linkedin.com/in/john-okoro-ugiagbe"
    },
    {
      photo: "/lovable-uploads/d7789205-fcec-4153-ac30-a3bbf56f33fe.png",
      nom: "Alain Normand",
      titre: "Directeur Général - MFG Technologies",
      linkedin: "https://www.linkedin.com/in/alainnormand1/"
    },
    {
      photo: "/lovable-uploads/28216485-597e-46fc-bc4d-703d6671169c.png",
      nom: "Laure Duhorane",
      titre: "Directrice Général - Asking",
      linkedin: "https://ca.linkedin.com/in/laure-duhorane?trk=public_post_feed-actor-name"
    },
    {
      photo: "/lovable-uploads/de408ee9-d343-4578-bd30-ae9d93b1c647.png",
      nom: "Patrick Charlet",
      titre: "Directeur des Opérations – MFG Technologies",
      linkedin: "https://www.linkedin.com/in/patrick-charlet-10aa1565/"
    }
  ];

  return (
    <Layout>
      <HeroBanner 
        title={t('governance.direction.title')}
        description={t('governance.direction.description')}
        glowColor="purple"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directeurs.map((directeur) => (
              <DirectionCard
                key={directeur.nom}
                photo={directeur.photo}
                nom={directeur.nom}
                titre={directeur.titre}
                linkedin={directeur.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Direction;
