import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, SortDesc, SortAsc } from "lucide-react";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
  tags: string[];
}

export const articles: ArticleProps[] = [
  {
    id: "growth-supply-becomes-solio",
    title: "Growth Supply becomes Solio Group: for a solar and connected future",
    date: "2025-04-12",
    description: "Six years ago, Growth Supply was born with an ambitious mission: accelerating the solar transition in Africa.",
    image: "/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png",
    tags: ["solio"],
    content: "Six years ago, Growth Supply was born with an ambitious mission: accelerating the solar transition in Africa.\n\nSince then, our expertise has developed around two key strategic steps:\n\n🔹 Energy transition: With five committed partners, we have launched around thirty solar projects across five African countries, providing clean energy to thousands of households and businesses. The result? Over 37,000 lives transformed through access to reliable and sustainable electricity and 15 million USD investment secured.\n\n🔹 Digital transformation: The acquisition of MFG Technologies in Canada and the creation of our subsidiary Asking, specializing in data visualization and analysis—far beyond the energy sector—have opened up new opportunities in North America.\n\nToday, our vision and ambitions have grown. Growth Supply becomes Solio Group.\n\nThis new identity reflects our commitment to offering sustainable and technological solutions to shape a better future.\n\nWhy Solio?\n\n🔆 Sol: The Sun—source of clean energy and a symbol of transformation toward a sustainable future.\n\n🚀 Io: Digital at the heart of our mission.\n\n\"Solio Group embodies a bold vision: a sustainable and connected future, where innovation drives change. This new name reflects the expansion of our offer, combining solar energy and digital solutions to address Africa's energy challenges while opening our market to North America. We are taking action, determined to play a decisive role in Africa's solar transition and to make a real and immediate impact on the ground.\"\n\n— Evrard Havyarimana, President of Solio Group\n\nThe future is solar. The future is digital.\n\nQuestions? Contact us and join Solio Group for a sustainable and connected future.\n\n📩 Press contact: contact@solio-group.com"
  },
  {
    id: "change-management",
    title: "Change management in the implementation of digital tools",
    date: "2025-02-14",
    description: "Digital transformation projects often involve profound changes to processes, systems and ways of working within an organisation.",
    image: "/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png",
    tags: ["asking", "digital","testtag"],
    content: "Digital transformation projects often involve profound changes to processes, systems and ways of working within an organisation.\n\nWithout effective change management, these initiatives can be met with significant resistance from employees, leading to delays, budget overruns and, in the worst case, total project failure.\n\nIf you're not sure where to start, here are the keys to effective change management.\n\nThe keys to effective change management\nChange management involves anticipating, planning for and managing the organisational and human impacts associated with the adoption of new technology.\n\nThis includes communicating project objectives transparently, training employees to acquire the necessary skills and creating an environment that encourages acceptance and adoption of change.\n\nTo effectively manage change management in the implementation of digital tools, several key steps need to be followed.\n\nIdentify the objective of the change: Clearly identify what you want to change and what you need to work towards, whether in financial, marketing or HR terms.\nCarry out an audit to determine the need for change: Analyse the current situation to understand the source of the need and identify potential resistance to change.\nImplement change: Designate a responsible team, communicate transparently, organise training workshops and use collaborative tools to ensure that objectives are monitored and achieved.\nAdaptive management: Make teams accountable, define clear objectives and give meaning to tasks.\nChange management: Monitor the adoption of change, measure its effectiveness and adjust if necessary.\nThese steps are generic but essential, but don't hesitate to adapt them to the reality of your situation and, above all, keep your door open to suggestions.\n\nAdaptability and vision in change management\nWhen Steve Jobs returned to Apple in 1997, he led the company to a series of successes thanks to his bold vision. His approach led to the creation of iconic products and to the company being valued at unprecedented levels.\n\nThe key lesson from this experience is to stay true to the original vision while accepting the evolution necessary to remain competitive.\n\nIn the context of an SME and a project, it is important to maintain the fundamental vision while adapting the company to meet changing needs.\n\nIt's about returning to the company's distinctive vision, and then finding ways to progressively improve its execution.\n\nThe change management process starts by identifying a starting point, determining the desired direction and adjusting the business strategy accordingly.\n\nAdaptability, essential for survival in a constantly changing market.\nBusiness leaders must therefore maintain their vision while making the necessary changes to remain competitive.\n\nAdopting a new tool within an organisation is essential to achieving efficiency and innovation.\n\nFor the transition to be successful, it is necessary to understand employee needs, ensure transparent communication, involve stakeholders, provide adequate training and ongoing support, and encourage adoption by highlighting the benefits of the tools, customising features and respecting privacy and data rights.\n\nTo facilitate the integration of a new tool while ensuring the well-being of everyone and the performance of your organisation, don't hesitate to follow these tips."
  },
  {
    id: "nairobi-office-opening",
    title: "Ouverture de notre nouveau siège social à Nairobi",
    date: "2024-09-05",
    description: "Growth Energy s'installe à Nairobi, le centre économique de l'Afrique de l'Est, pour diriger ses opérations à travers l'Afrique.",
    image: "/lovable-uploads/e30ad55c-eb19-409d-b49a-f5d005911527.png",
    tags: ["growth-energy", "africa", "expansion"],
    content: "✨ Ouverture de notre nouveau siège social à hashtag#Nairobi ✨\n\nNous sommes ravis de partager cette décision stratégique alors que nous nous installons à Nairobi, le centre économique de l'Afrique de l'Est, par le biais de notre nouvelle hashtag#subsidiary GEFI Solutions SEZ Limited.\n\n📍 Niché dans le prestigieux quartier des Deux Rivières, au sein d'une zone économique spéciale désignée, nous opérerons à partir des bureaux de Two Rivers International Finance & Innovation Centre SEZ, dotés d'une infrastructure de pointe largement alimentée par l'énergie solaire. Cette décision reflète notre engagement profond en faveur de la durabilité et des innovations écologiques.\n\nMais il ne s'agit pas seulement d'un nouveau bureau.\n\nDepuis notre base de Nairobi, nous dirigerons les opérations à travers hashtag#Africa, en nous concentrant sur les marchés clés tels que l'hashtag#Burundi, le hashtag#Nigeria, le hashtag#Tanzania et hashtag#Kenya.\n\nÊtre sur le terrain nous permettra de travailler plus étroitement avec nos clients et de gérer efficacement des projets de grande envergure sur le continent.\n\n🙋 ♂️ Nous invitons tous nos hashtag#partners – de hashtag#developers à hashtag#investors, ainsi que des hashtag#banks et des fonds d'investissement – à venir nous rendre visite et à explorer les opportunités passionnantes dans le secteur en plein essor des hashtag#energy renouvelables en Afrique.\n\n👥 Dans le cadre de cette expansion, nous cherchons également à développer notre hashtag#team avec des techniciens et des hashtag#commercial hashtag#talents de haut niveau qui prendront la tête de nos projets innovants à travers l'Afrique.\n\n🌍 Vous voulez faire partie de ce voyage ? Construisons ensemble un avenir plus vert et plus hashtag#sustainable pour l'Afrique.\n\n👉 Contactez-nous pour planifier une visite ou pour discuter de la manière dont nous pouvons hashtag#collaborate sur des hashtag#projects révolutionnaires : https://lnkd.in/eSCsr8fp\n\nNous sommes impatients de vous accueillir à Nairobi et d'embarquer avec vous pour ce passionnant voyage africain. 🌱"
  },
  {
    id: "fumba-town-partnership",
    title: "Un accord de partenariat clé pour un avenir durable",
    date: "2025-03-12",
    description: "Growth Energy signe un contrat avec CPS Africa pour déployer une centrale solaire à Fumba Town, Zanzibar.",
    image: "/lovable-uploads/edf32f55-1dff-4fb5-a043-9370022d89b9.png",
    tags: ["growth-energy", "partnership", "solar", "africa"],
    content: "🚀 Un accord de partenariat clé pour un avenir 🌍 hashtag#sustainable hashtag#energy \n\nNous sommes ravis d'annoncer une étape importante dans notre engagement en faveur de l'énergie propre et durable !\n\nVendredi dernier, Growth Energy, filiale de l'Solio Group, a signé un contrat avec hashtag#CPSAfrica, premier promoteur urbain durable et inclusif d'Afrique, pour le déploiement d'une centrale électrique hashtag#solar d'une capacité installée de 600 kWc et d'un système de stockage d'énergie par batterie de 600 kWh pour fournir de l'énergie propre à hashtag#FumbaTown à hashtag#Zanzibar, un développement à usage mixte de CPS hashtag#Africa.\n\n👉 Cette 1ère phase fournira de l'énergie renouvelable à 2 000 ménages, jetant ainsi les bases d'une transition énergétique durable non seulement pour la ville de Fumba, mais pour Zanzibar dans son ensemble.\n\nMais ce n'est que le début ! 🔆 Dans les phases futures, l'objectif est de construire une centrale solaire d'une capacité totale de 5 MWc de solaire photovoltaïque et de 10 MWh de stockage d'énergie par batterie, ce qui aura un impact positif sur 10 000 ménages et répondra à la demande croissante d'énergie à Zanzibar.\n\n« Nous sommes ravis de hashtag#partner avec Growth Energy sur ce hashtag#project révolutionnaire. Fournir une énergie propre et fiable à la ville de Fumba et à ses habitants est au cœur de notre vision d'une hashtag#urban hashtag#development durable et inclusive en Afrique. Ensemble, nous faisons un pas en avant pour faire de Zanzibar un modèle de vie écologique. » - M. Sebastian Dietzold, PDG de CPS Africa. \n\n« Ce contrat représente non seulement des années de travail acharné et de hashtag#collaboration mais aussi un engagement commun à créer des solutions durables. Je suis ravi de voir cette première phase se concrétiser et j'ai hâte de livrer un projet qui établit une nouvelle norme en matière d'énergie renouvelable dans la région. » - M. John Okoro, directeur général de Growth Energy\n\n« Nous sommes fiers de donner vie à ce partenariat et nous nous engageons à livrer ce projet à temps et selon les normes les plus élevées. Cette initiative reflète notre mission de faire progresser les solutions énergétiques durables qui transforment hashtag#communities. Meilleurs vœux aux deux équipes alors que nous nous lançons dans cette aventure passionnante. » - M. Evrard HAVYARIMANA, chef de la direction de Growth Supply Group.\n\nCette réalisation est le fruit de deux années de collaboration. Nous sommes fiers de voir ce projet ambitieux se concrétiser et attendons avec impatience la mise en service de cette première centrale solaire d'ici #2025.\n\nUn grand merci à la direction et aux équipes visionnaires de CPS Africa. 👏 \n\nEnsemble, nous bâtissons un avenir plus vert et plus prometteur. 💚"
  },
  {
    id: "provence-africa-connect-award",
    title: "Growth Energy remporte le prix Provence Africa Connect",
    date: "2024-12-05",
    description: "Notre entreprise a été désignée Lauréat Export 2024 lors du prestigieux concours Provence Africa Connect.",
    image: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    tags: ["growth-energy", "award", "africa"],
    content: "Notre entreprise Growth Energy a remporté hier à Aix-en-Provence le prestigieux concours Provence Africa Connect 🌍 où nous avons été désigné Lauréat hashtag#Export 2024 ! 🎉 Notre directeur général, John Okoro, était présent pour réceptionner ce prestigieux prix au nom de toute l'équipe.\n\nCe prix, qui valorise les hashtag#entrepreneurs et les hashtag#entreprises renforçant les liens entre l'hashtag#Europe et l'hashtag#Afrique, est une belle reconnaissance pour Growth Energy et notre mission : contribuer à un avenir énergétique durable sur le continent africain. 🌱⚡\n\nIl est aussi le fruit des derniers mois du travail par toute les équipes de Growth Energy : au cours des 12 derniers mois, nous avons implanté 3 nouveau bureaux et hashtag#filiales sur le continent afin de poursuivre notre mission à laquelle nous restons fermement engagés.\n\nNous souhaitons exprimer notre profonde gratitude à Madame Margaux Gillard, qui nous a partagé l'opportunité de ce concours et permis de nous engager dans cette aventure.\n\n🙏 Un immense hashtag#merci également au Le Carburateur, le réseau d'innovation dynamique auquel nous somme rattachés dans la métropole 🚀\n\nAvec ce prix nous sommes ravis de rejoindre bientôt Africalink, le plus grand réseau des entreprises impliquées sur le continent Africain.\n\nUn grand merci à toutes nos équipes, tous nos hashtag#clients et nos hashtag#partenaires. Ce prix est aussi grâce à vous. 🙏 🤍"
  },
  {
    id: "gem-electric-charging-station",
    title: "Une station de recharge électrique 100% solaire au Burundi",
    date: "2025-03-20",
    description: "GEM E-mobility annonce la mise en place de la première borne de recharge électrique alimentée par l'énergie solaire au Burundi.",
    image: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
    tags: ["gem", "e-mobility", "africa", "innovation"],
    content: "Dans 2 mois, la toute première station de recharge électrique 100 % solaire du pays sera mise en place. Il sera équipé de panneaux solaires, qui lui permettront de rester alimenté, même en cas de pannes d'électricité potentielles. Cela lui permettra de disposer de réserves suffisantes pour rester opérationnel même la nuit. - Evrard HAVYARIMANA, PDG de GEM E-mobility.\n\nHier, une étape majeure pour la mobilité durable en hashtag#Burundi a été franchie lors de la journée portes ouvertes dédiée à la mobilité électrique, sous le thème « Accélérer la mobilité électrique au Burundi ».\n\nAvec les fréquentes coupures de courant et les pénuries de carburant en toile de fond, le développement de solutions énergétiques alternatives est devenu essentiel. Allier l'électromobilité à l'énergie solaire offre une réponse concrète et durable à ces enjeux.\n\nGEM E-mobility, filiale de Growth Energy, a eu l'honneur d'y participer, avec son PDG, Evrard HAVYARIMANA, en annonçant une innovation révolutionnaire pour l'électromobilité au Burundi 🚀.\n\nLa première borne de recharge électrique sera opérationnelle dans deux mois, entièrement conçue et construite par les équipes de Growth Energy.\n\nCette station, entièrement alimentée par l'énergie solaire, représente une révolution pour la mobilité verte, contribuant à accélérer l'adoption de l'électromobilité et à réduire les émissions de CO₂.\n\nUn grand merci à nos hashtag#partners, le Ministère du Commerce et des Transports du Burundi, engagé à soutenir la transition vers une mobilité plus propre et plus durable, et à Skyline, pionnier de la vente de véhicules électriques dans le pays, qui ont rendu possible cet événement visionnaire.\n\n🌱 Vous êtes impliqué dans hashtag#electric hashtag#mobility ? Collaborons pour créer ensemble des solutions innovantes et durables !"
  },  
  {
    id: "mfg-rejoint-asking",
    title: "MFG technologies rejoint ASKING",
    date: "2024-10-24",
    description: "MFG Technologies rejoint ASKING, renforçant l'offre ERP au Canada avec Divalto/JobBOSS. Une fusion stratégique après 18 mois.",
    image: "/lovable-uploads/b77cf79f-d356-421a-9ea3-721e54aa6b2f.png",
    tags: ["asking", "digital"],
    content: "Nous y sommes ! 🎉\n \n C'est officiel : MFG Technologies a rejoint ASKING, renforçant ainsi notre présence au Canada (Business, Politics & Sports).\n \n L'intégration de leur expertise en #ERP, avec des solutions comme #Divalto et #JobBOSS, complète parfaitement notre gamme de services pour répondre aux besoins variés de nos clients.\n \n Alain Normand, je suis vraiment enthousiaste à l'idée de ce #JointVenture, ainsi que de travailler avec une équipe aussi passionnée et partageant nos #valeurs est un réel plaisir.\n \n Je tiens également à exprimer ma gratitude à Nancy C. Normand, Laure D., Isabelle MAUBOUSSIN\n et à toute l'équipe qui s'est donnée corps et âme pour que cette #fusion puisse voir le jour.\n \n Un grand #MERCI à Adexia inc. pour leur soutien précieux,\n et accompagnement tout au long de ces 18 derniers mois vers cette nouvelle étape passionnante.\n \n MFG Technologies\n #NOUS\n #ENSEMBLE\n #MAINTENANT\n Bienvenue à bord!!!!\n \n Curieux de découvrir comment l'offre d'MFG peut transformer votre entreprise ?\n \n Cliquez ici : https://www.mfgtech.ca/fr/"
  },
  {
    id: "crm-performance",
    title: "CRM : Le Pillier Invisible de Votre Croissance Client",
    date: "2025-02-20",
    description: "Un CRM efficace automatise, offre une vision claire et s'adapte à votre croissance – essentiel pour une stratégie client réussie.",
    image: "/lovable-uploads/c34d4a55-db59-4ab1-80ad-28d25685bdcf.png",
    tags: ["asking", "digital"],
    content: "💡 Un CRM performant transforme chaque interaction client en levier de croissance !\n\nDans un monde où la relation client est essentielle, il est crucial d'avoir le bon outil pour structurer sa stratégie. Laure D., Directrice générale d'ASKING & membre de Claude, partage 3 éléments clés à considérer avant d'investir dans un CRM :\n\n✅ Automatisation : Gagnez du temps sur les tâches répétitives comme l'envoi d'e-mails ou la qualification des leads.\n\n📊 Vision globale : Assurez-vous d'avoir une vue claire sur votre pipeline de vente et vos opportunités.\n\n🔗 Scalabilité : Choisissez un CRM qui s'intègre à vos autres outils et grandit avec votre entreprise.\n\nMais surtout : un CRM n'est efficace que si votre stratégie est claire en amont ! 🏆 Quels sont vos critères pour choisir un CRM ? Vos expériences nous intéressent !"
  }
];

const Communiques = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Function to convert date to French format
  const formatFrenchDate = (dateStr: string): string => {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  // Function to parse date properly for sorting
  const parseDate = (dateStr: string): Date => {
    return new Date(dateStr);
  };

  const filteredAndSortedArticles = articles
    .filter(article => {
      const matchesSearch = searchTerm === "" || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = selectedFilter === "all" || 
        article.tags.some(tag => {
          if (selectedFilter === "asking") return tag === "asking";
          if (selectedFilter === "growth-energy") return tag === "growth-energy" || tag === "gem";
          if (selectedFilter === "solio") return tag === "solio";
          return false;
        });
      
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date).getTime();
      const dateB = parseDate(b.date).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  return (
    <Layout>
      <HeroBanner 
        title="Communiqués"
        description="Découvrez les dernières actualités et communiqués de presse du groupe Solio."
        glowColor="orange"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full p-3 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant={selectedFilter === "all" ? "default" : "outline"}
                onClick={() => setSelectedFilter("all")}
                className="rounded-lg"
              >
                Tous
              </Button>
              <Button 
                variant={selectedFilter === "asking" ? "default" : "outline"}
                onClick={() => setSelectedFilter("asking")}
                className="rounded-lg"
              >
                Asking
              </Button>
              <Button 
                variant={selectedFilter === "growth-energy" ? "default" : "outline"}
                onClick={() => setSelectedFilter("growth-energy")}
                className="rounded-lg"
              >
                Growth Energy
              </Button>
              <Button 
                variant={selectedFilter === "solio" ? "default" : "outline"}
                onClick={() => setSelectedFilter("solio")}
                className="rounded-lg"
              >
                Solio
              </Button>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
              className="flex items-center gap-2 rounded-lg"
            >
              {sortOrder === "desc" ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
              Date {sortOrder === "desc" ? "(Plus récent)" : "(Plus ancien)"}
            </Button>
          </div>
          
          {filteredAndSortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow rounded-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="flex-initial">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{formatFrenchDate(article.date)}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs rounded-lg">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex-initial">
                    <Button variant="solio" className="w-full rounded-lg" asChild>
                      <Link to={`/actualites/communiques/${article.id}`}>Lire l'article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Communiques;
