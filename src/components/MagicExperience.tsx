
import React from 'react';
import { Check } from 'lucide-react';
import { Plug, Brush as Broom, TrendingUp, Lightbulb } from 'lucide-react';

const MagicExperience = () => {
  const features = [
    {
      icon: "Connect",
      description: "Your ERP & storefronts data drop or direct connections."
    },
    {
      icon: "Clean",
      description: "AI scrubs & stitches data automatically."
    },
    {
      icon: "Forecast",
      description: "AI orchestrator cooks up the magic."
    },
    {
      icon: "Explain",
      description: "LLM turns spikes & dips into plain-English insights. Narrative ready for your teams."
    }
  ];

  return (
    <section className="py-16 bg-dark-background">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-inter font-extrabold mb-8 text-white text-center">
          Why FeatureBox AI feels like magic
        </h2>
        
        <div className="dark-card-magic modern-saas-layout">
          {/* Left Column - Text */}
          <div className="text-column">
            <h3 className="text-2xl font-inter font-extrabold text-white mb-6">
              From 50-hour slog to 15-minute autopilot
            </h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-jade flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="font-inter font-bold text-brand-jade">
                      {feature.icon}
                    </span>{" "}
                    <span className="text-gray-300 font-inter">
                      – {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-block mt-6 text-sm text-brand-jade hover:underline font-inter"
            >
              See it in action ↗
            </a>
          </div>
          
          {/* Right Column - Visual representation based on reference image */}
          <div className="visual-column">
            <div className="w-full md:w-[480px] h-[340px] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="w-full h-full bg-dark-card flex flex-col items-center justify-center p-6">
                <div className="text-center">
                  {/* First frame - Grey whirlwind (OLD) */}
                  <div className="mb-6">
                    <p className="text-gray-400 font-inter mb-2">[Animation Frame 1: Grey whirlwind of spreadsheets & code]</p>
                    <p className="text-white text-2xl font-bold">OLD</p>
                  </div>
                  
                  {/* Second frame - 4-icon ribbon */}
                  <div className="mb-8">
                    <p className="text-gray-400 font-inter">[Animation Frame 2: 4-icon ribbon with Connector, Cleaner, Forecaster, Insights]</p>
                  </div>
                  
                  {/* Key stats in badges */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-indigo-900/70 px-4 py-3 rounded-full">
                      <p className="text-white font-inter font-bold">2X accuracy</p>
                    </div>
                    <div className="bg-brand-jade/30 px-4 py-3 rounded-full">
                      <p className="text-white font-inter font-bold">90% less work</p>
                    </div>
                    <div className="bg-[#FF9F40]/30 px-4 py-3 rounded-full">
                      <p className="text-white font-inter font-bold">Up to 45% more revenue</p>
                    </div>
                    <div className="flex items-center justify-center bg-brand-purple/30 px-4 py-3 rounded-full">
                      <div className="h-6 w-6 rounded-full bg-brand-jade flex items-center justify-center mr-2">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-white font-inter font-bold">Go live in days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicExperience;
