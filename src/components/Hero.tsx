
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Forecast inventory with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent inline-block">
                2× more accuracy
              </span>
              —without spreadsheets.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              FeatureBox AI turns messy ERP & Excel data into crystal-clear demand plans that slash stock-outs and overstock by{' '}
              <span className="font-semibold">≥ 20%</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#00B37E] hover:bg-emerald-600 text-white rounded-md px-8 hover:translate-y-[-2px] transition-all"
              >
                Get my forecast
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#5145FF] text-[#5145FF] hover:bg-indigo-50 flex items-center rounded-md px-8"
              >
                <Play className="mr-2 h-4 w-4" /> Watch 90-sec demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 rounded-xl"></div>
            <div className="relative bg-white shadow-xl rounded-xl p-4 border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="FeatureBox AI Dashboard" 
                className="rounded-lg w-full h-auto shadow-lg animate-pulse-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
