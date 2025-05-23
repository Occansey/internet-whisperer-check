import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, SortAsc, SortDesc } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  content: string;
}

export const articles: ArticleProps[] = [
  {
    id: "1",
    title: "Solio Group lance Asking, une nouvelle filiale dédiée à la transformation digitale",
    date: "15/03/2024",
    excerpt: "Le groupe Solio annonce le lancement de Asking, une filiale spécialisée dans l'accompagnement des entreprises dans leur transformation digitale.",
    image: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    content: "Le groupe Solio annonce le lancement de Asking, une filiale spécialisée dans l'accompagnement des entreprises dans leur transformation digitale. Asking propose une gamme complète de services, allant du conseil stratégique à la mise en œuvre de solutions innovantes, pour aider les entreprises à tirer le meilleur parti des technologies numériques."
  },
  {
    id: "2",
    title: "Solio Group acquiert MFG Technologies, un leader canadien des solutions ERP",
    date: "01/02/2024",
    excerpt: "Le groupe Solio renforce sa présence en Amérique du Nord avec l'acquisition de MFG Technologies, une entreprise spécialisée dans les solutions ERP pour les entreprises.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    content: "Le groupe Solio renforce sa présence en Amérique du Nord avec l'acquisition de MFG Technologies, une entreprise spécialisée dans les solutions ERP pour les entreprises. MFG Technologies propose une gamme complète de services, allant du conseil stratégique à la mise en œuvre de solutions innovantes, pour aider les entreprises à tirer le meilleur parti des technologies numériques."
  },
  {
    id: "3",
    title: "Solio Group signe un partenariat avec une entreprise leader dans le domaine de l'énergie solaire",
    date: "15/01/2024",
    excerpt: "Le groupe Solio annonce la signature d'un partenariat stratégique avec une entreprise leader dans le domaine de l'énergie solaire.",
    image: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    content: "Le groupe Solio annonce la signature d'un partenariat stratégique avec une entreprise leader dans le domaine de l'énergie solaire. Ce partenariat permettra au groupe Solio de renforcer son offre de services dans le domaine de la transition énergétique et de proposer des solutions innovantes à ses clients."
  },
  {
    id: "4",
    title: "Solio Group participe à un événement international sur la transformation digitale",
    date: "01/12/2023",
    excerpt: "Le groupe Solio a participé à un événement international sur la transformation digitale, où il a présenté ses dernières innovations et solutions.",
    content: "Le groupe Solio a participé à un événement international sur la transformation digitale, où il a présenté ses dernières innovations et solutions. Le groupe Solio a également animé une conférence sur le thème de la transformation digitale et de son impact sur les entreprises."
  },
  {
    id: "5",
    title: "Solio Group recrute de nouveaux talents pour accompagner sa croissance",
    date: "15/11/2023",
    excerpt: "Le groupe Solio recrute de nouveaux talents pour accompagner sa croissance et renforcer ses équipes dans les domaines de la transformation digitale et de la transition énergétique.",
    content: "Le groupe Solio recrute de nouveaux talents pour accompagner sa croissance et renforcer ses équipes dans les domaines de la transformation digitale et de la transition énergétique. Le groupe Solio propose de nombreuses opportunités de carrière pour les jeunes diplômés et les professionnels expérimentés."
  },
  {
    id: "6",
    title: "Solio Group ouvre une nouvelle filiale en Afrique de l'Ouest",
    date: "01/11/2023",
    excerpt: "Le groupe Solio annonce l'ouverture d'une nouvelle filiale en Afrique de l'Ouest, afin de renforcer sa présence sur le continent africain.",
    content: "Le groupe Solio annonce l'ouverture d'une nouvelle filiale en Afrique de l'Ouest, afin de renforcer sa présence sur le continent africain. Cette nouvelle filiale permettra au groupe Solio de proposer ses services et solutions à un plus grand nombre de clients en Afrique de l'Ouest."
  }
];

const Communiques = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    
    if (sortOrder === "asc") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });

  return (
    <Layout>
      <HeroBanner
        title="Communiqués de Presse"
        description="Retrouvez toutes les dernières actualités et communiqués de presse du groupe Solio."
        glowColor="cyan"
      />

      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-solio-blue">Tous nos communiqués</h2>
            <Button 
              variant="outline"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              Trier par date {sortOrder === "asc" ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.map((article) => (
              <Card key={article.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                {article.image && (
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-1 h-4 w-4" />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="solio" className="w-full" asChild>
                    <Link to={`/actualites/communiques/${article.id}`}>Lire l'article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Communiques;
