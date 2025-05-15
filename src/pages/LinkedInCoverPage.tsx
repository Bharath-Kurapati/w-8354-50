
import React, { useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import LinkedInCover from '@/components/LinkedInCover';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const LinkedInCoverPage = () => {
  const coverRef = useRef<HTMLDivElement>(null);
  
  return (
    <PageLayout>
      <SEO 
        title="LinkedIn Cover Generator | FeatureBox AI" 
        description="Create a LinkedIn cover image for FeatureBox AI based on brand guidelines"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">LinkedIn Cover Image Generator</h1>
          
          <div className="mb-8 p-5 bg-dark-card rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Instructions</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This tool generates a LinkedIn cover image using FeatureBox AI branding. Follow these steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Review the preview image below</li>
                <li>Take a screenshot of the cover image (excluding the surrounding elements)</li>
                <li>Upload the screenshot to your LinkedIn company page</li>
                <li>Position the image appropriately in LinkedIn's editor</li>
              </ol>
              <p className="mt-4 text-sm">
                <strong>Note:</strong> LinkedIn's recommended cover image dimensions are 1584 × 396 pixels (4:1 aspect ratio).
              </p>
            </div>
          </div>
          
          <LinkedInCover exportRef={coverRef} />
          
          <div className="mt-10 text-center">
            <p className="text-white mb-4">Need a different design? Let us know!</p>
            <Button 
              className="bg-brand-purple hover:bg-brand-purpleLight text-white"
              onClick={() => window.history.back()}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LinkedInCoverPage;
