
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Activites = () => {
  return (
    <Layout>
      <HeroBanner
        title="Nos Activités"
        description="Découvrez comment Solio Group accompagne ses clients dans leur transformation énergétique et digitale."
        glowColor="blue"
      />

      {/* Audit Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">Demandez un audit gratuit</h2>
              <p className="text-gray-700 mb-4">
                Nos experts réalisent un audit complet de votre situation actuelle et vous proposent des solutions sur mesure pour optimiser votre performance énergétique et digitale.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  Analyse de vos besoins et de vos objectifs
                </li>
                <li className="mb-2">
                  Identification des axes d'amélioration
                </li>
                <li className="mb-2">
                  Recommandations personnalisées
                </li>
                <li>
                  Plan d'action concret
                </li>
              </ul>
              <Button asChild variant="activites" size="lg">
                <Link to="/contact">Demander un audit</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRpZ2l0YWwlMjBhdWRpdHxlbnwwfHwwfHx8Mg%3D%3D"
                alt="Audit énergétique et digital"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos domaines d'expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Nos domaines d'expertise</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Nous intervenons sur l'ensemble de la chaîne de valeur de la transformation énergétique et digitale, de la conception à la mise en œuvre.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Domaine 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">Énergie solaire</h3>
              <p className="text-gray-700">
                Développement de centrales solaires, solutions d'autoconsommation, stockage d'énergie, etc.
              </p>
            </div>

            {/* Domaine 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">Mobilité électrique</h3>
              <p className="text-gray-700">
                Bornes de recharge, flottes de véhicules électriques, solutions de gestion de l'énergie, etc.
              </p>
            </div>

            {/* Domaine 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">Transformation digitale</h3>
              <p className="text-gray-700">
                Conseil, développement d'applications, intégration de solutions, gestion de données, etc.
              </p>
            </div>

            {/* Domaine 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">Financement de projets</h3>
              <p className="text-gray-700">
                Ingénierie financière, recherche de financements, structuration de projets, etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à passer à l'action ?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            Contactez-nous dès maintenant pour discuter de vos projets et bénéficier de notre expertise.
          </p>
          <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Activites;
