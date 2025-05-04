
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowUpDown, SortDesc, SortAsc } from "lucide-react";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const articles: ArticleProps[] = [
  {
    id: "growth-supply-becomes-solio",
    title: "Growth Supply becomes Solio Group: for a solar and connected future",
    date: "12 Avril 2025",
    description: "Six years ago, Growth Supply was born with an ambitious mission: accelerating the solar transition in Africa.",
    image: "/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png",
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
    date: "5 Mars 2025",
    description: "Asking Canada, a subsidiary of Solio Group and a specialist in digital tool integration, announces the acquisition of MFG Technologies.",
    image: "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png",
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

Founded in 2003, MFG Technologies is a leader in ERP integration, serving the manufacturing industry in Quebec. With over 20 years of experience and more than 75 successful ERP software implementations, MFG Technologies has built a reputation for excellence and reliability.`
  },
  {
    id: "change-management",
    title: "Change management in the implementation of digital tools",
    date: "14 Février 2025",
    description: "Digital transformation projects often involve profound changes to processes, systems and ways of working within an organisation.",
    image: "/lovable-uploads/7ee09634-30ae-45fa-9325-6a4fbecf9e35.png",
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
  }
];

const ArticleCard = ({ article }: { article: ArticleProps }) => {
  const getArticleImage = (id: string) => {
    if (id === "mfg-technologies-joins-asking") {
      return "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png";
    } else if (id === "change-management") {
      return "/lovable-uploads/7ee09634-30ae-45fa-9325-6a4fbecf9e35.png";
    }
    return article.image;
  };

  return (
    <Card className="mb-8 overflow-hidden">
      <div className="relative h-64">
        <img 
          src={getArticleImage(article.id)} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{article.date}</span>
        </div>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription className="text-base">{article.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/actualites/communiques/${article.id}`} className="w-full">
          <Button variant="outline" className="w-full">Lire l'article</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const Communiques = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date.split(' ').reverse().join('-'));
    const dateB = new Date(b.date.split(' ').reverse().join('-'));
    
    return sortOrder === 'asc' 
      ? dateA.getTime() - dateB.getTime() 
      : dateB.getTime() - dateA.getTime();
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
