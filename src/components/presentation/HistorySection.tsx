
const HistorySection = () => {
  return (
    <section id="histoire" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-solio-blue">Notre histoire</h2>
            <p className="text-gray-700 mb-4">
              Solio Group est l'évolution naturelle de Growth Supply, une entreprise fondée en 2019 avec une mission ambitieuse : accélérer la transition énergétique en Afrique et accompagner la transformation numérique des organisations. En 2025, ce changement d'identité marque une nouvelle étape dans notre développement, reflétant notre vision élargie et notre engagement renforcé à proposer des solutions durables et technologiques pour un avenir meilleur.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise s'articule autour de deux axes stratégiques complémentaires :
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-6">
              <li className="mb-2">
                <span className="font-semibold">Transition énergétique</span> : Nous avons mobilisé plus de 15 millions USD d'investissements et lancé une trentaine de projets solaires dans cinq pays africains, fournissant une énergie propre et fiable à des milliers de foyers et d'entreprises.
              </li>
              <li>
                <span className="font-semibold">Transformation digitale</span> : L'acquisition de MFG Technologies au Canada et la création de notre filiale Asking, spécialisée dans la visualisation et l'analyse de données, ont élargi notre présence en Amérique du Nord et en Europe, ouvrant de nouvelles perspectives de croissance.
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png" 
              alt="Histoire de Solio Group" 
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
