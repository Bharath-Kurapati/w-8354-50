
import React from 'react';
import { BarChart, Clock, MessageSquare, ArrowRight, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "The most powerful forecasting engine, you have ever met!",
      description: "An AI-orchestrated engine that acts as your own data scientist with access to top statistical and ML models."
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Effortless Data Connections/Onboarding",
      description: "You don't have to slog away hours in cleaning, pulling and setting up the data. We are building integrations to the most popular ERP systems and channels out there!"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Explainability",
      description: "Your own Supply Chain consultant who answers to questions like- \"Why did the forecast move?\" narratives & driver charts to build trust. Save time for users who debug the results to understand trends better before making capital decisions."
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-white" />,
      title: "Planner‑centric UX & workflow",
      description: "10+ Step process to a simple intuitive 4-step process"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Mid‑market focus",
      description: "We are purpose building our tools for those who cannot afford a on the call data scientist, consultant and a team of experts. Your supply chain team deserves better and we are here to deliver the help."
    }
  ];

  return (
    <section className="py-16 bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why we're better</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            FeatureBox AI is built specifically for mid-market brands who need powerful forecasting without complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-dark-card p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-[#5145FF] rounded-full inline-flex">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
