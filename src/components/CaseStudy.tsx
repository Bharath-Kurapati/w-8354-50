
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const CaseStudy = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how FeatureBox AI is transforming inventory management for leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div>
            <div className="mb-8">
              <blockquote className="text-xl italic mb-4">
                "FeatureBox AI cut our forecasting time by 95% while doubling our accuracy. We've been able to reduce safety stock levels without experiencing stockouts."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full overflow-hidden">
                    <AspectRatio ratio={1 / 1}>
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format"
                        alt="Supply Chain Manager at Herb Pharm"
                        className="object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-gray-400 text-sm">Supply Chain Manager, Herb Pharm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-emerald-400 text-4xl font-bold mb-2">2×</div>
              <p className="text-gray-300">More accurate forecasts vs. previous methods</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-emerald-400 text-4xl font-bold mb-2">95%</div>
              <p className="text-gray-300">Time saved on inventory planning process</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-emerald-400 text-4xl font-bold mb-2">$55M</div>
              <p className="text-gray-300">Revenue of brand using our solution</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className="bg-indigo-600">Live Since</Badge>
              </div>
              <p className="text-gray-300">April 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
