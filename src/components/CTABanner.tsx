
import React from 'react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 bg-[#151820]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Ready to get started?
          </h2>
          <Button 
            size="lg" 
            className="bg-[#5145FF] hover:bg-[#6254ff] text-white rounded-md px-8 py-6 text-lg h-auto hover:translate-y-[-2px] transition-all"
          >
            Request Demo
          </Button>
          <p className="mt-4 text-gray-400 text-sm">
            Let's slash inventory waste →
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
