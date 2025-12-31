import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "EPC, Construction, Oil and Gas, Offshore, Renewable Energy, Engineering, Infrastructure", 
  image = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
  url = "https://www.zentheragroups.com",
  type = 'website'
}) => {
  const siteTitle = `${title} | Zenthera Groups`;

  // Structured Data (JSON-LD) for Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Zenthera Groups",
    "url": "https://www.zentheragroups.com",
    "logo": "https://www.zentheragroups.com/logo.png",
    "description": "Global leaders in Offshore, Oil, Gas, and Power construction.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2800 Post Oak Blvd",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77056",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-713-555-0199",
      "contactType": "Customer Service"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zenthera Groups" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;