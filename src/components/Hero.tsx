
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 overflow-hidden bg-dark-background">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-inter font-extrabold leading-tight tracking-tight mb-6 text-white">
            Forecast inventory with{' '}
            <span className="text-gradient inline-block">
              2X
            </span>
            {' '}accuracy—in 90% less time.
          </h1>
          <p className="text-lg text-gray-300 mb-8 font-inter font-normal max-w-3xl mx-auto">
            Mid-market CPG planners reclaim hundreds of hours and reclaim up to 45% of their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md px-8 hover:translate-y-[-2px] transition-all font-inter"
            >
              Get my forecast
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-purple text-brand-purple bg-brand-purple/10 hover:bg-brand-purple/20 flex items-center rounded-md px-8 font-inter"
            >
              <Play className="mr-2 h-4 w-4" /> Watch 90-sec demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
