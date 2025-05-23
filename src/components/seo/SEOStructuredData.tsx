
import { Helmet } from "react-helmet-async";

interface SEOStructuredDataProps {
  type: 'webpage' | 'organization' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'product';
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
      case 'breadcrumb':
        return {
          "@context": baseContext,
          "@type": "BreadcrumbList",
          ...data
        };
      case 'faq':
        return {
          "@context": baseContext,
          "@type": "FAQPage",
          ...data
        };
      case 'product':
        return {
          "@context": baseContext,
          "@type": "Product",
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
