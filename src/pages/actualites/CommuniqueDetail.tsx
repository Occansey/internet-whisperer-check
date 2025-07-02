
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { useTranslation } from "@/contexts/TranslationContext";

const CommuniqueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroBanner 
        title={t('communiques.detail.title')}
        description={t('communiques.detail.description')}
        glowColor="amber"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('communiques.detail.loading')}</h2>
            <p className="text-gray-600">Communique ID: {id}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommuniqueDetail;
