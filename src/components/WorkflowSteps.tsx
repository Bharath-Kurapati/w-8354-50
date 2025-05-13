
import React from 'react';
import { Upload, Database, FileText, Target } from 'lucide-react';

const WorkflowSteps = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="h-8 w-8 text-indigo-600" />,
      title: "Upload file/Sheet",
      description: "Drag & drop your CSV—AI does the heavy lifting."
    },
    {
      number: 2,
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Fuzzy column mapper",
      description: "Our AI automatically recognizes your data structure."
    },
    {
      number: 3,
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Clean & enrich",
      description: "Data is sanitized and enhanced with external signals."
    },
    {
      number: 4,
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "AI forecast & narrative",
      description: "Get clear predictions with explanations of why."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What it does</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our simple 4-step workflow transforms your messy data into actionable forecasts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 relative">
                <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
