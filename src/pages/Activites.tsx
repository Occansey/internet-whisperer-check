import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Activites = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-solio-blue to-blue-900 text-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Activités
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Découvrez comment Solio Group accompagne ses clients dans leur transformation énergétique et digitale.
            </p>
          </div>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1560268935-c544aca9626a?q=80&w=1000"
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

      {/*
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Nos références</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Nous accompagnons des entreprises de toutes tailles et de tous secteurs dans leur transformation énergétique et digitale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&h=100&fit=crop"
                alt="Référence 1"
                className="w-full h-20 object-contain"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b2933e?w=200&h=100&fit=crop"
                alt="Référence 2"
                className="w-full h-20 object-contain"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=200&h=100&fit=crop"
                alt="Référence 3"
                className="w-full h-20 object-contain"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1521122425396-47c53f9c7d48?w=200&h=100&fit=crop"
                alt="Référence 4"
                className="w-full h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </section> */}

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
