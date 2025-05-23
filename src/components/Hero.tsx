
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChartLine, BarChart3, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 lg:pt-32 pb-16 overflow-hidden bg-dark-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-inter font-extrabold leading-tight tracking-tight mb-6 text-white">
              Forecast inventory with{' '}
              <span className="text-gradient inline-block">
                2X
              </span>
              {' '}accuracy and 90% less effort.
            </h1>
            <p className="text-lg text-white font-inter font-normal mb-6">
              Supply Chain planners reclaim hundreds of hours and up to 45% of their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
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
          
          {/* Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#2A2A2A] shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold">AI Forecasting Dashboard</h3>
                <div className="flex space-x-2">
                  <span className="bg-red-500 rounded-full w-3 h-3"></span>
                  <span className="bg-yellow-500 rounded-full w-3 h-3"></span>
                  <span className="bg-green-500 rounded-full w-3 h-3"></span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#252525] p-3 rounded-md">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 text-brand-jade mr-2" />
                    <span className="text-xs text-gray-400">Accuracy</span>
                  </div>
                  <p className="text-lg font-bold text-white">95.8%</p>
                </div>
                <div className="bg-[#252525] p-3 rounded-md">
                  <div className="flex items-center mb-2">
                    <BarChart3 className="h-4 w-4 text-brand-purple mr-2" />
                    <span className="text-xs text-gray-400">Efficiency</span>
                  </div>
                  <p className="text-lg font-bold text-white">+78%</p>
                </div>
                <div className="bg-[#252525] p-3 rounded-md">
                  <div className="flex items-center mb-2">
                    <ChartLine className="h-4 w-4 text-[#FF9F40] mr-2" />
                    <span className="text-xs text-gray-400">Revenue</span>
                  </div>
                  <p className="text-lg font-bold text-white">+45%</p>
                </div>
              </div>
              
              <div className="h-48 bg-[#252525] rounded-md p-3 mb-4 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-400">Monthly Forecast</span>
                  <span className="text-xs text-brand-jade">Updated 3h ago</span>
                </div>
                <div className="h-32 flex items-end space-x-2">
                  {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 h-full flex flex-col justify-end">
                      <div 
                        className="bg-gradient-to-t from-brand-purple to-brand-purpleLight rounded-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-[8px] text-gray-500 mt-1">{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>Real-time data processing</span>
                <span className="text-brand-jade">AI-powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
