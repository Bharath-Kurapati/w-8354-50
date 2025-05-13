
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import WorkflowComparison from './WorkflowComparison';

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 overflow-hidden bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair leading-tight tracking-tight mb-6 text-white">
            Forecast inventory with{' '}
            <span className="text-gradient inline-block">
              2× more accuracy
            </span>
            —without spreadsheets.
          </h1>
          <p className="text-lg text-gray-300 mb-8 font-montserrat max-w-3xl mx-auto">
            FeatureBox AI turns messy ERP & Excel data into crystal-clear demand plans that slash stock-outs and overstock by{' '}
            <span className="font-semibold text-emerald-400">≥ 20%</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md px-8 hover:translate-y-[-2px] transition-all font-montserrat"
            >
              Get my forecast
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#5145FF] text-[#5145FF] bg-[#5145FF]/10 hover:bg-[#5145FF]/20 flex items-center rounded-md px-8 font-montserrat"
            >
              <Play className="mr-2 h-4 w-4" /> Watch 90-sec demo
            </Button>
          </div>
        </div>

        <div className="relative mt-16 mx-auto max-w-5xl">
          <div className="glass-effect p-8 rounded-xl">
            <WorkflowComparison />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
