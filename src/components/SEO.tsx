
import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  imageUrl?: string;
  type?: string;
}

const SEO = ({ title, description, imageUrl, type = 'website' }: SEOProps) => {
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
