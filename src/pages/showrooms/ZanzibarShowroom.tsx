import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { MapPin, Award, Zap, Battery } from "lucide-react";

const ZanzibarShowroom = () => {
  return (
    <Layout>
      <Helmet>
        <title>Zanzibar Showroom | Growth Energy - Clean Energy Solutions</title>
        <meta name="description" content="Visit our Zanzibar showrooms in Fumba Town and Jambiani/Paje. Discover our integrated clean energy and electric mobility solutions in Tanzania." />
        <meta name="keywords" content="Zanzibar showroom, Growth Energy, clean energy, solar power, electric mobility, Fumba Town, Jambiani, Tanzania" />
        <link rel="canonical" href="https://solio-group.com/showrooms/zanzibar" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zanzibar Showrooms
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our integrated clean energy and electric mobility solutions
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/lovable-uploads/2707389b-57ab-403a-93ec-d202304eb4bc.png"
                  alt="Growth Energy Zanzibar Advertisement - Clean Energy Solutions"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Zanzibar, Tanzania
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Showrooms in Zanzibar
                </h2>

                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    In Zanzibar, we are proud of our unique position as the foremost fully integrated clean energy and electric mobility company, with two offices and show rooms - one in Fumba, and the other in Jambiani/Paje.
                  </p>
                  
                  <p>
                    We have just launched our office and show room in Fumba Town and concluding preparations to fully launch our show room in Jambiani at the Kijani Commercial Park.
                  </p>

                  <p>
                    The Kijani Commercial Park is the first fully eco and green mall in Zanzibar and Tanzania, which is equipped with energy management and efficiency solution, battery energy storage back up, electric vehicle charging station and fully operational Solar Power Plant.
                  </p>

                  <p>
                    In Fumba Town, Zanzibar's eco-city, we are implementing several projects for CPS Africa, including Solar Plant and Battery Energy Storage Plant.
                  </p>

                  <p>
                    To celebrate this, we are running a campaign and giving out free and complimentary gifts to eligible respondents - in partnership with Escrow tech Uk. Eligible clients stand the chance to win multiple energy management solutions.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">Solar Solutions</h3>
                    </div>
                    <p className="text-sm text-gray-600">Complete solar power systems and energy management</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Battery className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-900">Energy Storage</h3>
                    </div>
                    <p className="text-sm text-gray-600">Advanced battery energy storage solutions</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold text-gray-900">EV Charging</h3>
                    </div>
                    <p className="text-sm text-gray-600">Electric vehicle charging stations</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold text-gray-900">Two Locations</h3>
                    </div>
                    <p className="text-sm text-gray-600">Fumba Town & Jambiani/Paje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Visit Our Showrooms
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fumba Town */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Fumba Town Office</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fumba Town, Main Entrance, Urban West P.O. Box 3564, Zanzibar</span>
                  </p>
                  <p className="text-gray-600">
                    Located in Zanzibar's premier eco-city, implementing solar and battery storage projects.
                  </p>
                </div>
              </div>

              {/* Jambiani/Paje */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">Kijani Commercial Park</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kijani Commercial Park, Jambiani/Paje, Zanzibar</span>
                  </p>
                  <p className="text-gray-600">
                    Tanzania's first fully eco and green mall with complete energy management solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ZanzibarShowroom;