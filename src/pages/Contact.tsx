
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState(0);

  const offices = [
    {
      city: "Burundi",
      address: "Boulevard de l'Uprona, Rohero I, Bujumbura",
      phone: "+257 22 24 13 03",
      email: "info.burundi@solio-group.com",
      hours: "Lun - Ven: 8h00 - 17h00"
    },
    {
      city: "Abuja",
      address: "Plot 1348, Tiamiyu Savage Street, Victoria Island, Lagos",
      phone: "+234 803 123 4567",
      email: "info.nigeria@solio-group.com",
      hours: "Lun - Ven: 9h00 - 18h00"
    },
    {
      city: "Canada",
      address: "1000 Rue de la Gauchetière O, Montréal, QC H3B 0A2",
      phone: "+1 514 123 4567",
      email: "info.canada@solio-group.com",
      hours: "Lun - Ven: 9h00 - 17h00"
    },
    {
      city: "France",
      address: "15 Rue de la Paix, 75001 Paris",
      phone: "+33 1 23 45 67 89",
      email: "info.france@solio-group.com",
      hours: "Lun - Ven: 9h00 - 18h00"
    }
  ];

  return (
    <Layout>
      <HeroBanner 
        title="Contactez-nous"
        description="Nous sommes présents dans plusieurs pays pour mieux vous servir. N'hésitez pas à nous contacter pour discuter de vos projets."
        glowColor="green"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6 text-solio-blue">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
            
            {/* Office Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-solio-blue">Nos bureaux</h2>
              
              {/* Office Selection Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOffice(index)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      activeOffice === index
                        ? "bg-solio-blue text-white border-solio-blue"
                        : "bg-white text-gray-700 border-gray-200 hover:border-solio-blue"
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>
              
              {/* Active Office Details */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-solio-blue">
                  {offices[activeOffice].city}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-solio-blue mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{offices[activeOffice].address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-solio-blue flex-shrink-0" />
                    <a 
                      href={`tel:${offices[activeOffice].phone}`}
                      className="text-gray-700 hover:text-solio-blue transition-colors"
                    >
                      {offices[activeOffice].phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-solio-blue flex-shrink-0" />
                    <a 
                      href={`mailto:${offices[activeOffice].email}`}
                      className="text-gray-700 hover:text-solio-blue transition-colors"
                    >
                      {offices[activeOffice].email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-solio-blue flex-shrink-0" />
                    <p className="text-gray-700">{offices[activeOffice].hours}</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact Info */}
              <div className="bg-gradient-to-r from-solio-blue to-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Contact rapide</h3>
                <p className="mb-2">
                  <strong>Siège social:</strong> Burundi
                </p>
                <p className="mb-2">
                  <strong>Email général:</strong>{" "}
                  <a href="mailto:contact@solio-group.com" className="underline">
                    contact@solio-group.com
                  </a>
                </p>
                <p>
                  <strong>Urgences:</strong>{" "}
                  <a href="tel:+25722241303" className="underline">
                    +257 22 24 13 03
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
