
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LinkedInCoverProps {
  exportRef?: React.RefObject<HTMLDivElement>;
  showExportInstructions?: boolean;
}

const LinkedInCover: React.FC<LinkedInCoverProps> = ({
  exportRef,
  showExportInstructions = true,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-white">LinkedIn Cover Image Preview</h2>
      
      {showExportInstructions && (
        <div className="mb-6 p-4 bg-gray-800 rounded-md">
          <p className="text-white">
            To use this image: take a screenshot of the cover below and upload it to your LinkedIn company page.
            The recommended LinkedIn cover image size is 1584 x 396 pixels.
          </p>
        </div>
      )}
      
      <div ref={exportRef} className="w-full border border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <AspectRatio ratio={4/1} className="bg-dark-background">
          <div className="relative w-full h-full bg-gradient-to-r from-black via-dark-background to-black p-6 flex flex-col justify-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {/* Purple accent gradient */}
              <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-brand-purple/40 to-transparent"></div>
              
              {/* Jade accent */}
              <div className="absolute bottom-0 left-0 w-2/3 h-1 bg-brand-jade"></div>
              
              {/* Floating elements - data visualization hints */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-brand-purple/10 animate-pulse-slow"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-brand-jade/10 animate-float"></div>
              
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-20" 
                style={{
                  backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
              </div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="md:w-7/12 space-y-2">
                <div className="flex items-center mb-2">
                  <div className="bg-brand-purple rounded-md p-1 mr-3">
                    <img 
                      src="/lovable-uploads/7fd38d18-a5d9-498b-8fd4-418f32b5ca22.png" 
                      alt="FeatureBox AI Logo" 
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Feature<span className="text-brand-purple">Box AI</span>
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl text-white font-medium mb-2">
                  AI Operating System for Supply Chain Decisions
                </p>
                
                <p className="text-base md:text-lg text-gradient font-inter">
                  <span className="text-brand-purple font-bold">Data Scientist</span>{" "}
                  <span className="text-blue-400 font-bold">Supply Chain Pro</span>{" "}&{" "}
                  <span className="text-brand-jade font-bold">Business Consultant</span>{" "}
                  <span className="text-white">in every SMB</span>
                </p>
              </div>
              
              <div className="md:w-5/12 mt-4 md:mt-0 flex justify-end">
                <div className="bg-dark-card p-3 rounded-lg border border-gray-700 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-brand-purple"></div>
                    <div className="h-2 w-16 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="h-3 w-3 rounded-full bg-brand-jade"></div>
                    <div className="h-2 w-24 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-brand-purple/20 to-brand-jade/20 rounded-md mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      
      <div className="mt-6 text-sm text-gray-400">
        <p>The cover image follows LinkedIn's recommended dimensions (4:1 aspect ratio).</p>
      </div>
    </div>
  );
};

export default LinkedInCover;
