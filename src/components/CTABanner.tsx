
import React from 'react';
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600/10 to-emerald-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to get started?
          </h2>
          <Button 
            size="lg" 
            className="bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md px-8 hover:translate-y-[-2px] transition-all"
          >
            Request Demo
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
