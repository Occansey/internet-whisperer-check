
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ExecutiveMemberProps {
  photo: string;
  name: string;
  title: string;
  linkedin: string;
  bio: string;
}

const executives: ExecutiveMemberProps[] = [
  {
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop",
    name: "Evrard Havyarimana",
    title: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/",
    bio: "Evrard Havyarimana is the President of Solio Group, a company committed to energy transition and digital transformation. He graduated in 2010 with a Master's degree in Corporate Finance from IAE Bordeaux IV – University of Bordeaux. He began his career in the banking and consulting sectors before fully dedicating himself to entrepreneurship. In 2019, he founded Growth Supply, a group that became Solio Group in 2025 to reflect a broader and more integrated vision of its activities across Africa, Europe, and North America. In 2022, he launched Growth Energy, a subsidiary specializing in the development, financing, and deployment of solar power plants for industrial clients. In 2023, he founded Asking in both France and Canada, a digital company that helps business leaders strategically leverage data to drive growth. In 2024, this company acquired MFG Technologies, a Canadian digital firm specializing in ERP solutions integration for businesses. In parallel, in 2021, he launched the Burundian Business Club France, a business network bringing together a committed community of leaders, entrepreneurs, investors, and experts—united by values of collaboration, excellence, and innovation—to drive economic development and foster strategic partnerships."
  },
  {
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop",
    name: "John Okoro",
    title: "Managing Director Growth Energy",
    linkedin: "https://www.linkedin.com/",
    bio: "Backed by a decade of hands-on experience across diverse regions—including Sub-Saharan Africa and key international markets—John has led clean energy projects with firms like Vergnet SA and the CMR Group, focusing on practical, scalable solutions tailored to local needs. His work has consistently bridged the gap between technical execution and long-term impact, enabling access to sustainable energy for underserved communities and supporting the broader energy transition in emerging markets. As co-founder of Growth Energy, John plays a central role in accelerating the deployment of renewable energy infrastructure across Africa by fostering collaboration between governments, industry leaders, investors, and local innovators. He is also a founding member of Friends of Nigeria, an initiative aimed at driving inclusive development through energy access, policy advocacy, and knowledge exchange. John's approach to leadership is rooted in systems thinking, adaptability, and a deep commitment to innovation. He is particularly passionate about connecting talent and ideas across borders, believing that the clean energy transition must be powered not only by technology, but by trust, collaboration, and local empowerment. Through his work, John continues to champion energy solutions that are not only environmentally sustainable but also economically viable and socially inclusive—laying the groundwork for resilient, future-ready communities across Africa and beyond."
  },
  {
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1287&auto=format&fit=crop",
    name: "Laure Duhorane",
    title: "Managing Director Asking",
    linkedin: "https://www.linkedin.com/",
    bio: "Managing Director of Asking and an expert in communications and digital transformation, Laure supports companies in their strategic and digital evolution. Her expertise in management and innovation enables her to help organizations optimize their impact and adapt to digital challenges. Since 2024, she has joined the management of MFG Technologies as part of an acquisition. There, she leads digital transformation, recruitment and business development initiatives, helping organizations streamline their processes and achieve growth. She is also a member of Solio Group's Executive Committee, where she advances its vision of stimulating socio-economic growth across African industries and communities through the transition to renewable and sustainable energy. Passionate about sustainable development, she combines strategic vision and practical experience to create meaningful change and foster long-term growth for organizations."
  },
  {
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1287&auto=format&fit=crop",
    name: "Isabelle Mauboussin",
    title: "Chief Financial Officer",
    linkedin: "https://www.linkedin.com/",
    bio: "Isabelle Mauboussin is the Administrative and Financial Manager of Solio Group. She has worked for over 30 years in accounting firms. These experiences have taught her how to analyze the financial statements of various organizations, support them in their development projects, and work with trust while adhering to accounting and tax regulations. She enjoys taking on new challenges and finding innovative solutions to drive business growth and performance. Her goal is to actively contribute to the success of every project and to optimize administrative and accounting processes, turning them into a management tool that supports Solio Group's strategic direction."
  },
  {
    photo: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?q=80&w=1287&auto=format&fit=crop",
    name: "Alain Normand",
    title: "Managing Director MFG Technologies",
    linkedin: "https://www.linkedin.com/",
    bio: "With over 20 years of hands-on experience in ERP systems such as JobBOSS and Divalto, as well as a solid foundation in accounting, Alain brings a rare combination of technical expertise and financial acumen to the table. His deep understanding of business processes allows him to see the big picture while paying close attention to operational details, ensuring that every recommendation is both strategic and actionable. Alain is more than just a consultant—he's a trusted partner who thrives on helping businesses streamline their workflows, boost efficiency, and achieve sustainable growth. Whether you're looking to implement a new ERP system, optimize existing operations, or improve financial visibility, Alain offers tailored solutions that align with your specific goals. As a seasoned entrepreneur himself, he understands the pressures and priorities that leaders face. His collaborative approach and commitment to excellence make him a go-to advisor for companies seeking clarity, structure, and measurable results. With Alain by your side, you can feel confident that your business is not only running smoothly—but evolving intelligently."
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
            className="w-full h-96 object-cover"
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
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Comité Exécutif (COMEX)</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Le COMEX assure la direction stratégique et l'alignement des activités entre les filiales. Il est composé des CEO de chaque filiale ainsi que de la direction financière du groupe.
          </p>
          
          <Tabs defaultValue="havyarimana" className="w-full">
            <TabsList className="flex mb-8 w-full max-w-3xl mx-auto overflow-x-auto">
              {executives.map((exec) => (
                <TabsTrigger key={exec.name.toLowerCase().replace(' ', '-')} value={exec.name.toLowerCase().split(' ')[1]} className="flex-1">
                  {exec.name.split(' ')[1]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {executives.map((exec) => (
              <TabsContent key={exec.name.toLowerCase().replace(' ', '-')} value={exec.name.toLowerCase().split(' ')[1]} className="mt-0">
                <ExecutiveProfile executive={exec} />
              </TabsContent>
            ))}
          </Tabs>
          
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
