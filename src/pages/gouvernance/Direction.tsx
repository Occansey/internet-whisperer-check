
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const executiveTeam = [
  {
    id: "president-groupe-comex",
    name: "Alain MAWE",
    position: "Président du Groupe et du COMEX",
    image: "/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png",
    description: "Leader visionnaire avec plus de 15 ans d'expérience dans la transformation énergétique et le développement durable."
  },
  {
    id: "directeur-growth-energy",
    name: "Michel DUPONT",
    position: "Directeur de Growth Energy",
    image: "/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png",
    description: "Expert en énergie solaire et mobilité électrique, pionnier des solutions énergétiques innovantes en Afrique."
  },
  {
    id: "directrice-asking",
    name: "Sarah MARTIN",
    position: "Directrice de Asking",
    image: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png",
    description: "Spécialiste en transformation digitale et analyse de données, architecte de solutions technologiques avancées."
  },
  {
    id: "directrice-admin-financier",
    name: "Caroline BERNARD",
    position: "Directrice administratif et financier",
    image: "/lovable-uploads/aec6ae4e-7fc4-4651-af1d-d5f2787dd0a3.png",
    description: "Experte en gestion financière et stratégie d'entreprise, garante de la solidité financière du groupe."
  },
  {
    id: "directeur-mfg-technologies",
    name: "Thomas ROBERT",
    position: "Directeur de Mfg Technologies",
    image: "/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png",
    description: "Spécialiste en solutions ERP et technologies industrielles, expert en optimisation des processus manufacturiers."
  }
];

const Direction = () => {
  return (
    <Layout>
      <HeroBanner 
        title="Direction" 
        description="Découvrez l'équipe dirigeante du Groupe Solio, des leaders passionnés qui guident notre vision vers un avenir durable."
        glowColor="blue"
      />
      
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-solio-blue dark:text-solio-yellow">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-gray-600 dark:text-gray-200">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Direction;
