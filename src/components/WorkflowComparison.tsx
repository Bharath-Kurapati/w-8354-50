
import React from 'react';
import { 
  FileText, Database, Calendar, Table, Code, Cpu, 
  AlertTriangle, Mail, Clipboard, RefreshCw, 
  Upload, ArrowRight, BarChart3, MessageSquare
} from 'lucide-react';

const WorkflowComparison = () => {
  const oldWorkflowSteps = [
    { icon: <FileText className="h-4 w-4 text-gray-400" />, label: "Collect ERP export" },
    { icon: <Database className="h-4 w-4 text-gray-400" />, label: "Pull Shopify CSV" },
    { icon: <Calendar className="h-4 w-4 text-gray-400" />, label: "Scrape promo calendar" },
    { icon: <Table className="h-4 w-4 text-gray-400" />, label: "Merge in Excel" },
    { icon: <Code className="h-4 w-4 text-gray-400" />, label: "Write Python cleanup script" },
    { icon: <Cpu className="h-4 w-4 text-gray-400" />, label: "Tune Holt-Winters model" },
    { icon: <AlertTriangle className="h-4 w-4 text-gray-400" />, label: "Debug errors" },
    { icon: <Mail className="h-4 w-4 text-gray-400" />, label: "Email planners for constraints" },
    { icon: <Clipboard className="h-4 w-4 text-gray-400" />, label: "Paste results into sheet" },
    { icon: <RefreshCw className="h-4 w-4 text-gray-400" />, label: "Re-forecast next week" }
  ];

  const newWorkflowSteps = [
    { icon: <Upload className="h-5 w-5 text-emerald-500" />, label: "Upload file or drag-drop sheet" },
    { icon: <ArrowRight className="h-5 w-5 text-emerald-500" />, label: "Auto-map columns (AI fuzzy match)" },
    { icon: <BarChart3 className="h-5 w-5 text-emerald-500" />, label: "One-click forecast (ML + external signals)" },
    { icon: <MessageSquare className="h-5 w-5 text-emerald-500" />, label: "Instant narrative & constraints panel" }
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 py-8">
      {/* Left Column - Old Way */}
      <div className="flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-montserrat font-semibold text-white mb-1">Manual forecasting</h3>
          <p className="text-sm text-gray-400">10+ steps · data scientist required · error-prone</p>
        </div>
        <div className="space-y-2">
          {oldWorkflowSteps.map((step, index) => (
            <div 
              key={`old-${index}`} 
              className="flex items-center bg-dark-muted p-2 rounded border border-dark-border"
              style={{ maxWidth: "280px" }}
            >
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-800 text-xs text-white mr-2">
                {index + 1}
              </div>
              <div className="mr-2">
                {step.icon}
              </div>
              <span className="text-sm text-gray-300">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Arrow */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <ArrowRight className="h-12 w-12 text-indigo-500" />
          <span className="text-indigo-400 font-semibold">90% less work</span>
        </div>
      </div>

      {/* Right Column - New Way */}
      <div className="flex-1">
        <div className="mb-4">
          <h3 className="text-xl font-montserrat font-semibold text-white mb-1">4-step autopilot</h3>
          <p className="text-sm text-gray-400">Minutes · no code · 20% fewer inventory errors</p>
        </div>
        <div className="space-y-3">
          {newWorkflowSteps.map((step, index) => (
            <div 
              key={`new-${index}`} 
              className="flex items-center bg-dark-card p-3 rounded-md border-l-4 border-l-emerald-500 border-t border-r border-b border-dark-border shadow-lg"
              style={{ maxWidth: "320px" }}
            >
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 mr-3">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-xs text-white mr-2">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-white">{step.label.split('(')[0]}</span>
                </div>
                {step.label.includes('(') && (
                  <span className="text-xs text-gray-400">{step.label.split('(')[1].replace(')', '')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;
