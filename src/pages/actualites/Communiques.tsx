import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, ArrowUpDown, SortDesc, SortAsc } from "lucide-react";

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
    date: "12 Avril 2025",
    description: "Six years ago, Growth Supply was born with an ambitious mission: accelerating the solar transition in Africa.",
    image: "/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png",
    tags: ["solio", "growth-energy"],
    content: `Six years ago, Growth Supply was born with an ambitious mission: accelerating the solar transition in Africa.

Since then, our expertise has developed around two key strategic steps:

🔹 Energy transition: With five committed partners, we have launched around thirty solar projects across five African countries, providing clean energy to thousands of households and businesses. The result? Over 37,000 lives transformed through access to reliable and sustainable electricity and 15 million USD investment secured.

🔹 Digital transformation: The acquisition of MFG Technologies in Canada and the creation of our subsidiary Asking, specializing in data visualization and analysis—far beyond the energy sector—have opened up new opportunities in North America.

Today, our vision and ambitions have grown. Growth Supply becomes Solio Group.

This new identity reflects our commitment to offering sustainable and technological solutions to shape a better future.

Why Solio?

🔆 Sol: The Sun—source of clean energy and a symbol of transformation toward a sustainable future.

🚀 Io: Digital at the heart of our mission.

"Solio Group embodies a bold vision: a sustainable and connected future, where innovation drives change. This new name reflects the expansion of our offer, combining solar energy and digital solutions to address Africa's energy challenges while opening our market to North America. We are taking action, determined to play a decisive role in Africa's solar transition and to make a real and immediate impact on the ground."

— Evrard Havyarimana, President of Solio Group

The future is solar. The future is digital.

Questions? Contact us and join Solio Group for a sustainable and connected future.

📩 Press contact: contact@solio-group.com`
  },
  {
    id: "mfg-technologies-joins-asking",
    title: "MFG Technologies joins Asking, strengthening Solio Group's presence in Canada",
    date: "24 Octobre 2024",
    description: "Asking Canada, a subsidiary of Solio Group and a specialist in digital tool integration, announces the acquisition of MFG Technologies.",
    image: "/lovable-uploads/d5a062de-bcad-4d5f-9ad1-6a37bd3e6795.png",
    tags: ["asking", "mfg-technologies"],
    content: `Asking Canada, a subsidiary of Solio Group and a specialist in digital tool integration, announces the acquisition of MFG Technologies, a company specializing in Divalto ERP integration for the manufacturing industry in Quebec. This strategic acquisition aligns with Asking's mission to provide value and growth opportunities to businesses by leveraging cutting-edge technologies and innovative solutions.

"The acquisition of MFG Technologies reflects our commitment to expanding our presence in the Canadian market. After collaborating with major energy players in France, Canada was the next challenge for expanding our digital transformation activities. We chose MFG Technologies not only for their expertise but also because of their corporate culture, which perfectly aligns with ours. MFG Technologies is a human-sized company with a strong international outlook. We are thrilled to welcome MFG Technologie's talented team to the Asking family and look forward to succeeding together." Evrard Havyarimana, CEO, Solio Group.

Promoting Innovation and Customer Success

"By partnering with ERP implementation specialists, we combined our expertise with a recognized player to create a powerful synergy. This will allow us to offer complementary and personalized solutions to our clients while strengthening our positioning in the Canadian market." Laure Duhorane, Managing Director, Asking Canada.

MFG Technologies' expertise in ERP integration (Divalto, JobBOSS) perfectly complements Asking's range of business solutions, particularly its CRM solution integration services. This partnership is a winning strategy for Asking's entry into the Canadian market.

"We joined Asking not only for their recognized expertise but also for their vision and values, which resonate perfectly with ours. MFG is a company that values excellence, international openness, and global collaboration. We are excited to work together to bring even more value and innovation to our clients." Alain Normand, CEO of MFG Technologies.

About Asking

Asking supports organizations in optimizing their processes and achieving their objectives through the effective use of digital tools. His areas of expertise include the development, integration, and maintenance of IT solutions notably the CRM Salesforce, but also the implementation of ERP software like SAP.

The company also specializes in the extraction and valorization of digital data (Business Intelligence & ETL). Its Business intelligence and data visualization services are designed to put the right data in the hands of decision-makers, transforming raw numbers into insights. Asking's mission is to be the catalyst for positive change, helping businesses navigate the complexities of the modern marketplace and achieve sustainable growth.

About MFG Technologies

Founded in 2003, MFG Technologies is a leader in ERP integration, serving the manufacturing industry in Quebec. With over 20 years of experience and more than 75 successful ERP software implementations, MFG Technologies has built a reputation for excellence and reliability.
  },
  {
    id: "change-management",
    title: "Change management in the implementation of digital tools",
    date: "14 Février 2025",
    description: "Digital transformation projects often involve profound changes to processes, systems and ways of working within an organisation.",
    image: "/lovable-uploads/01a4ab22-92e2-42b9-8388-93e78df5d7d4.png",
    tags: ["asking", "digital"],
    content: `Digital transformation projects often involve profound changes to processes, systems and ways of working within an organisation.

Without effective change management, these initiatives can be met with significant resistance from employees, leading to delays, budget overruns and, in the worst case, total project failure.

If you're not sure where to start, here are the keys to effective change management.

The keys to effective change management
Change management involves anticipating, planning for and managing the organisational and human impacts associated with the adoption of new technology.

This includes communicating project objectives transparently, training employees to acquire the necessary skills and creating an environment that encourages acceptance and adoption of change.

To effectively manage change management in the implementation of digital tools, several key steps need to be followed.

Identify the objective of the change: Clearly identify what you want to change and what you need to work towards, whether in financial, marketing or HR terms.
Carry out an audit to determine the need for change: Analyse the current situation to understand the source of the need and identify potential resistance to change.
Implement change: Designate a responsible team, communicate transparently, organise training workshops and use collaborative tools to ensure that objectives are monitored and achieved.
Adaptive management: Make teams accountable, define clear objectives and give meaning to tasks.
Change management: Monitor the adoption of change, measure its effectiveness and adjust if necessary.
These steps are generic but essential, but don't hesitate to adapt them to the reality of your situation and, above all, keep your door open to suggestions.

Adaptability and vision in change management
When Steve Jobs returned to Apple in 1997, he led the company to a series of successes thanks to his bold vision. His approach led to the creation of iconic products and to the company being valued at unprecedented levels.

The key lesson from this experience is to stay true to the original vision while accepting the evolution necessary to remain competitive.

In the context of an SME and a project, it is important to maintain the fundamental vision while adapting the company to meet changing needs.

It's about returning to the company's distinctive vision, and then finding ways to progressively improve its execution.

The change management process starts by identifying a starting point, determining the desired direction and adjusting the business strategy accordingly.

Adaptability, essential for survival in a constantly changing market.
Business leaders must therefore maintain their vision while making the necessary changes to remain competitive.

Adopting a new tool within an organisation is essential to achieving efficiency and innovation.

For the transition to be successful, it is necessary to understand employee needs, ensure transparent communication, involve stakeholders, provide adequate training and ongoing support, and encourage adoption by highlighting the benefits of the tools, customising features and respecting privacy and data rights.

To facilitate the integration of a new tool while ensuring the well-being of everyone and the performance of your organisation, don't hesitate to follow these tips.`
  },
  {
    id: "nairobi-office-opening",
    title: "Ouverture de notre nouveau siège social à Nairobi",
    date: "05 Septembre 2024",
    description: "Growth Energy s'installe à Nairobi, le centre économique de l'Afrique de l'Est, pour diriger ses opérations à travers l'Afrique.",
    image: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png",
    tags: ["growth-energy", "africa", "expansion"],
    content: `✨ Ouverture de notre nouveau siège social à hashtag#Nairobi ✨

Nous sommes ravis de partager cette décision stratégique alors que nous nous installons à Nairobi, le centre économique de l'Afrique de l'Est, par le biais de notre nouvelle hashtag#subsidiary GEFI Solutions SEZ Limited.

📍 Niché dans le prestigieux quartier des Deux Rivières, au sein d'une zone économique spéciale désignée, nous opérerons à partir des bureaux de Two Rivers International Finance & Innovation Centre SEZ, dotés d'une infrastructure de pointe largement alimentée par l'énergie solaire. Cette décision reflète notre engagement profond en faveur de la durabilité et des innovations écologiques.

Mais il ne s'agit pas seulement d'un nouveau bureau.

Depuis notre base de Nairobi, nous dirigerons les opérations à travers hashtag#Africa, en nous concentrant sur les marchés clés tels que l'hashtag#Burundi, le hashtag#Nigeria, le hashtag#Tanzania et hashtag#Kenya.

Être sur le terrain nous permettra de travailler plus étroitement avec nos clients et de gérer efficacement des projets de grande envergure sur le continent.

🙋 ♂️ Nous invitons tous nos hashtag#partners – de hashtag#developers à hashtag#investors, ainsi que des hashtag#banks et des fonds d'investissement – à venir nous rendre visite et à explorer les opportunités passionnantes dans le secteur en plein essor des hashtag#energy renouvelables en Afrique.

👥 Dans le cadre de cette expansion, nous cherchons également à développer notre hashtag#team avec des techniciens et des hashtag#commercial hashtag#talents de haut niveau qui prendront la tête de nos projets innovants à travers l'Afrique.

🌍 Vous voulez faire partie de ce voyage ? Construisons ensemble un avenir plus vert et plus hashtag#sustainable pour l'Afrique.

👉 Contactez-nous pour planifier une visite ou pour discuter de la manière dont nous pouvons hashtag#collaborate sur des hashtag#projects révolutionnaires : https://lnkd.in/eSCsr8fp

Nous sommes impatients de vous accueillir à Nairobi et d'embarquer avec vous pour ce passionnant voyage africain. 🌱`
  },
  {
    id: "fumba-town-partnership",
    title: "Un accord de partenariat clé pour un avenir durable",
    date: "12 Mars 2025",
    description: "Growth Energy signe un contrat avec CPS Africa pour déployer une centrale solaire à Fumba Town, Zanzibar.",
    image: "/lovable-uploads/edf32f55-1dff-4fb5-a043-9370022d89b9.png",
    tags: ["growth-energy", "partnership", "solar", "africa"],
    content: `🚀 Un accord de partenariat clé pour un avenir 🌍 hashtag#sustainable hashtag#energy 

Nous sommes ravis d'annoncer une étape importante dans notre engagement en faveur de l'énergie propre et durable !

Vendredi dernier, Growth Energy, filiale de l'Solio Group, a signé un contrat avec hashtag#CPSAfrica, premier promoteur urbain durable et inclusif d'Afrique, pour le déploiement d'une centrale électrique hashtag#solar d'une capacité installée de 600 kWc et d'un système de stockage d'énergie par batterie de 600 kWh pour fournir de l'énergie propre à hashtag#FumbaTown à hashtag#Zanzibar, un développement à usage mixte de CPS hashtag#Africa.

👉 Cette 1ère phase fournira de l'énergie renouvelable à 2 000 ménages, jetant ainsi les bases d'une transition énergétique durable non seulement pour la ville de Fumba, mais pour Zanzibar dans son ensemble.

Mais ce n'est que le début ! 🔆 Dans les phases futures, l'objectif est de construire une centrale solaire d'une capacité totale de 5 MWc de solaire photovoltaïque et de 10 MWh de stockage d'énergie par batterie, ce qui aura un impact positif sur 10 000 ménages et répondra à la demande croissante d'énergie à Zanzibar.

« Nous sommes ravis de hashtag#partner avec Growth Energy sur ce hashtag#project révolutionnaire. Fournir une énergie propre et fiable à la ville de Fumba et à ses habitants est au cœur de notre vision d'une hashtag#urban hashtag#development durable et inclusive en Afrique. Ensemble, nous faisons un pas en avant pour faire de Zanzibar un modèle de vie écologique. » - M. Sebastian Dietzold, PDG de CPS Africa. 

« Ce contrat représente non seulement des années de travail acharné et de hashtag#collaboration mais aussi un engagement commun à créer des solutions durables. Je suis ravi de voir cette première phase se concrétiser et j'ai hâte de livrer un projet qui établit une nouvelle norme en matière d'énergie renouvelable dans la région. » - M. John Okoro, directeur général de Growth Energy

« Nous sommes fiers de donner vie à ce partenariat et nous nous engageons à livrer ce projet à temps et selon les normes les plus élevées. Cette initiative reflète notre mission de faire progresser les solutions énergétiques durables qui transforment hashtag#communities. Meilleurs vœux aux deux équipes alors que nous nous lançons dans cette aventure passionnante. » - M. Evrard HAVYARIMANA, chef de la direction de Growth Supply Group.

Cette réalisation est le fruit de deux années de collaboration. Nous sommes fiers de voir ce projet ambitieux se concrétiser et attendons avec impatience la mise en service de cette première centrale solaire d'ici #2025.

Un grand merci à la direction et aux équipes visionnaires de CPS Africa. 👏 

Ensemble, nous bâtissons un avenir plus vert et plus prometteur. 💚`
  },
  {
    id: "provence-africa-connect-award",
    title: "Growth Energy remporte le prix Provence Africa Connect",
    date: "05 Décembre 2024",
    description: "Notre entreprise a été désignée Lauréat Export 2024 lors du prestigieux concours Provence Africa Connect.",
    image: "/lovable-uploads/9944073d-a36f-4be9-8d3c-36f8ff0890bb.png",
    tags: ["growth-energy", "award", "africa"],
    content: `Notre entreprise Growth Energy a remporté hier à Aix-en-Provence le prestigieux concours Provence Africa Connect 🌍 où nous avons été désigné Lauréat hashtag#Export 2024 ! 🎉 Notre directeur général, John Okoro, était présent pour réceptionner ce prestigieux prix au nom de toute l'équipe.

Ce prix, qui valorise les hashtag#entrepreneurs et les hashtag#entreprises renforçant les liens entre l'hashtag#Europe et l'hashtag#Afrique, est une belle reconnaissance pour Growth Energy et notre mission : contribuer à un avenir énergétique durable sur le continent africain. 🌱⚡

Il est aussi le fruit des derniers mois du travail par toute les équipes de Growth Energy : au cours des 12 derniers mois, nous avons implanté 3 nouveau bureaux et hashtag#filiales sur le continent afin de poursuivre notre mission à laquelle nous restons fermement engagés.

Nous souhaitons exprimer notre profonde gratitude à Madame Margaux Gillard, qui nous a partagé l'opportunité de ce concours et permis de nous engager dans cette aventure.

🙏 Un immense hashtag#merci également au Le Carburateur, le réseau d'innovation dynamique auquel nous somme rattachés dans la métropole 🚀

Avec ce prix nous sommes ravis de rejoindre bientôt Africalink, le plus grand réseau des entreprises impliquées sur le continent Africain.

Un grand merci à toutes nos équipes, tous nos hashtag#clients et nos hashtag#partenaires. Ce prix est aussi grâce à vous. 🙏 🤍`
  },
  {
    id: "gem-electric-charging-station",
    title: "Une station de recharge électrique 100% solaire au Burundi",
    date: "20 Mars 2025",
    description: "GEM E-mobility annonce la mise en place de la première borne de recharge électrique alimentée par l'énergie solaire au Burundi.",
    image: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
    tags: ["gem", "e-mobility", "africa", "innovation"],
    content: `Dans 2 mois, la toute première station de recharge électrique 100 % solaire du pays sera mise en place. Il sera équipé de panneaux solaires, qui lui permettront de rester alimenté, même en cas de pannes d'électricité potentielles. Cela lui permettra de disposer de réserves suffisantes pour rester opérationnel même la nuit. - Evrard HAVYARIMANA, PDG de GEM E-mobility.

Hier, une étape majeure pour la mobilité durable en hashtag#Burundi a été franchie lors de la journée portes ouvertes dédiée à la mobilité électrique, sous le thème « Accélérer la mobilité électrique au Burundi ».

Avec les fréquentes coupures de courant et les pénuries de carburant en toile de fond, le développement de solutions énergétiques alternatives est devenu essentiel. Allier l'électromobilité à l'énergie solaire offre une réponse concrète et durable à ces enjeux.

GEM E-mobility, filiale de Growth Energy, a eu l'honneur d'y participer, avec son PDG, Evrard HAVYARIMANA, en annonçant une innovation révolutionnaire pour l'électromobilité au Burundi 🚀.

La première borne de recharge électrique sera opérationnelle dans deux mois, entièrement conçue et construite par les équipes de Growth Energy.

Cette station, entièrement alimentée par l'énergie solaire, représente une révolution pour la mobilité verte, contribuant à accélérer l'adoption de l'électromobilité et à réduire les émissions de CO₂.

Un grand merci à nos hashtag#partners, le Ministère du Commerce et des Transports du Burundi, engagé à soutenir la transition vers une mobilité plus propre et plus durable, et à Skyline, pionnier de la vente de véhicules électriques dans le pays, qui ont rendu possible cet événement visionnaire.

🌱 Vous êtes impliqué dans hashtag#electric hashtag#mobility ? Collaborons pour créer ensemble des solutions innovantes et durables !`
  }
];

const getTagColor = (tag: string) => {
  switch (tag) {
    case "solio":
      return "bg-solio-blue text-white";
    case "growth-energy":
      return "bg-yellow-100 text-yellow-800";
    case "asking":
      return "bg-blue-100 text-blue-800";
    case "mfg-technologies":
      return "bg-purple-100 text-purple-800";
    case "gem":
      return "bg-green-100 text-green-800";
    case "africa":
      return "bg-orange-100 text-orange-800";
    case "digital":
      return "bg-indigo-100 text-indigo-800";
    case "partnership":
      return "bg-pink-100 text-pink-800";
    case "award":
      return "bg-amber-100 text-amber-800";
    case "expansion":
      return "bg-cyan-100 text-cyan-800";
    case "innovation":
      return "bg-emerald-100 text-emerald-800";
    case "solar":
      return "bg-red-100 text-red-800";
    case "e-mobility":
      return "bg-lime-100 text-lime-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  return (
    <Card className="mb-8 overflow-hidden h-full flex flex-col">
      <div className="relative h-64">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="flex-1">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{article.date}</span>
        </div>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription className="text-base">{article.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-3">
          {article.tags.map((tag, index) => (
            <Badge key={index} className={getTagColor(tag)}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardFooter>
        <Link to={`/actualites/communiques/${article.id}`} className="w-full">
          <Button variant="solio" className="w-full">Lire l'article</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const compareDates = (a: string, b: string, order: 'asc' | 'desc'): number => {
  // Convert dates like "12 Avril 2025" to Date objects
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split(' ');
    const months: { [key: string]: number } = {
      'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
      'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
    };
    return new Date(parseInt(year), months[month], parseInt(day));
  };

  const dateA = parseDate(a);
  const dateB = parseDate(b);
  
  if (order === 'asc') {
    return dateA.getTime() - dateB.getTime();
  } else {
    return dateB.getTime() - dateA.getTime();
  }
};

const Communiques = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  const sortedArticles = [...articles].sort((a, b) => {
    return compareDates(a.date, b.date, sortOrder);
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Communiqués</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les dernières annonces, partenariats et actualités du groupe Solio.
          </p>
          
          <div className="flex justify-end mb-6">
            <Button 
              variant="outline" 
              onClick={toggleSortOrder}
              className="flex items-center gap-2"
            >
              {sortOrder === 'asc' ? (
                <>
                  <SortAsc className="h-4 w-4" />
                  Plus anciens en premier
                </>
              ) : (
                <>
                  <SortDesc className="h-4 w-4" />
                  Plus récents en premier
                </>
              )}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Communiques;
