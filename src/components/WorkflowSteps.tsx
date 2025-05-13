
import React from 'react';
import { Upload, Database, FileText, Target } from 'lucide-react';

const WorkflowSteps = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="h-8 w-8 text-emerald-500" />,
      title: "Upload file/Sheet",
      description: "Drag & drop your CSV—AI does the heavy lifting."
    },
    {
      number: 2,
      icon: <Database className="h-8 w-8 text-emerald-500" />,
      title: "Fuzzy column mapper",
      description: "Our AI automatically recognizes your data structure."
    },
    {
      number: 3,
      icon: <FileText className="h-8 w-8 text-emerald-500" />,
      title: "Clean & enrich",
      description: "Data is sanitized and enhanced with external signals."
    },
    {
      number: 4,
      icon: <Target className="h-8 w-8 text-emerald-500" />,
      title: "AI forecast & narrative",
      description: "Get clear predictions with explanations of why."
    }
  ];

  return (
    <section className="py-16 bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair mb-4 text-white">What it does</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-montserrat">
            Our simple 4-step workflow transforms your messy data into actionable forecasts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-dark-background rounded-lg shadow-lg p-6 border border-dark-border relative">
                <div className="absolute top-4 right-4 bg-indigo-900/50 text-indigo-400 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white font-montserrat">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
