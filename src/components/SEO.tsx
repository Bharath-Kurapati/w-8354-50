
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  imageUrl?: string;
  type?: string;
}

const SEO = ({ 
  title = "FeatureBox AI | AI Operating System for Supply Chain Teams", 
  description = "Forecast inventory with 2X accuracy and 90% less effort. Mid-market CPG planners reclaim hundreds of hours and up to 45% of their revenue.", 
  imageUrl = "/lovable-uploads/b5eadd34-1511-430f-92c4-8028dcfe204a.png", 
  type = 'website' 
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:type" content={type} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
