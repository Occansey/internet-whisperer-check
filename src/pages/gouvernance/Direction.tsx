
import Layout from "@/components/layout/Layout";

interface DirecteurProps {
  photo: string;
  nom: string;
  titre: string;
  linkedin: string;
}

const directeurs: DirecteurProps[] = [
  {
    photo: "/lovable-uploads/38e1e033-0379-4601-873f-710962a35680.png",
    nom: "Evrard Havyarimana",
    titre: "Chief Executive Officer – Group",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/d322134e-2cfd-4bd7-b6e1-e8ef5660a7dd.png",
    nom: "Isabelle Mauboussin",
    titre: "Directrice Administrative et Financière – Groupe",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/970f02bd-513b-4f97-8bf1-5fe21b553b25.png",
    nom: "John Okoro",
    titre: "Chief Executive Officer – Growth Energy",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/e2652189-1139-496f-8649-6600cb193628.png",
    nom: "François Botreau",
    titre: "Chief Technology Officer – Growth Energy",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/569c9019-c86f-4124-bdb4-f518f161ac3e.png",
    nom: "Laure Duhorane",
    titre: "Chief Executive Officer – Asking",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/006ae8fa-630d-4d55-86e8-c4da3eeddbd7.png",
    nom: "Alain Normand",
    titre: "Chief Executive Officer – MFG Technologies",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/df144786-5619-4878-bd8d-4713c1a22578.png",
    nom: "Patrick Charlet",
    titre: "Directeur des Opérations – MFG Technologies",
    linkedin: "https://www.linkedin.com/"
  },
  {
    photo: "/lovable-uploads/9fbf7b39-6bdb-4d17-9641-3eefd0bf8f17.png",
    nom: "Nancy Normand",
    titre: "Directrice des Talents – MFG Technologies",
    linkedin: "https://www.linkedin.com/"
  },
];

const DirectionCard = ({ photo, nom, titre, linkedin }: DirecteurProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={photo} 
          alt={nom} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-solio-blue">{nom}</h3>
        <p className="text-gray-700 mb-4">{titre}</p>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-solio-blue hover:text-solio-yellow flex items-center transition-colors"
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
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Direction du Groupe</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Notre équipe de direction combine expertise sectorielle, vision stratégique et sens de l'innovation pour assurer une croissance durable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
