
import React from 'react';
import { Button } from '@/components/ui/button';

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
            {' '}accuracy and 90% less effort.
          </h1>
          <p className="text-lg text-white font-inter font-normal max-w-3xl mx-auto mb-3">
            CPG planners reclaim hundreds of hours and up to 45% of their revenue.
          </p>
          <p className="text-xl text-white font-inter mb-8">
            One platform. Three ways to unlock trapped value quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/featureboxai/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md px-8 hover:translate-y-[-2px] transition-all font-inter"
              >
                Request a Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
