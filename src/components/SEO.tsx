
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "FeatureBox AI | Inventory forecasting for CPG brands",
  description = "Cut stock-outs & overstocks by ≥ 20% with FeatureBox AI's 4-step demand-planning workflow. Upload data today—see forecasts tomorrow.",
  imageUrl = "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
}) => {
  const siteUrl = window.location.origin;
  const canonicalUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${imageUrl}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${imageUrl}`} />

      {/* Canonical link */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
