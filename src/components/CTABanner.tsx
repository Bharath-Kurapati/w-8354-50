
import React from 'react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to see your first forecast in &lt; 24h?
          </h2>
          <Button 
            size="lg" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-8 hover:translate-y-[-2px] transition-all"
          >
            Book my demo
          </Button>
          <p className="mt-4 text-gray-600 text-sm">
            Let's slash inventory waste →
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
