
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import ActivitesSection from "@/components/home/ActivitesSection";
import FilialesSection from "@/components/home/FilialesSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-solio-blue">Présentation du Groupe</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Solio Group est un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale. Nous concevons et mettons en œuvre des solutions durables, adaptées aux besoins opérationnels de nos clients, en alliant expertise technologique, engagement sociétal et performance économique.
          </p>
        </div>
      </div>
      <MissionVisionSection />
      <ActivitesSection />
      <FilialesSection />
    </Layout>
  );
};

export default Index;
