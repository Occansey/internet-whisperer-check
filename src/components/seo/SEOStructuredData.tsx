
import { Helmet } from "react-helmet-async";

interface SEOStructuredDataProps {
  type: 'webpage' | 'organization' | 'service' | 'article';
  data: any;
}

const SEOStructuredData = ({ type, data }: SEOStructuredDataProps) => {
  const getStructuredData = () => {
    const baseContext = "https://schema.org";
    
    switch (type) {
      case 'webpage':
        return {
          "@context": baseContext,
          "@type": "WebPage",
          ...data
        };
      case 'organization':
        return {
          "@context": baseContext,
          "@type": "Organization",
          ...data
        };
      case 'service':
        return {
          "@context": baseContext,
          "@type": "Service",
          ...data
        };
      case 'article':
        return {
          "@context": baseContext,
          "@type": "Article",
          ...data
        };
      default:
        return data;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEOStructuredData;
