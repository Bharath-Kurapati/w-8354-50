
import React from 'react';
import { 
  FileText, Database, Calendar, Table, Code, Cpu, 
  AlertTriangle, Mail, Clipboard, RefreshCw, 
  Upload, BarChart3, MessageSquare
} from 'lucide-react';

const WorkflowComparison = () => {
  return (
    <div className="w-full py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">FeatureBox AI Workflow</h2>
          <p className="text-gray-400">Our streamlined process delivers 2X more accuracy with 90% less effort</p>
        </div>
        
        <div className="space-y-3">
          <div 
            className="flex items-center bg-dark-card p-3 rounded-md border-l-4 border-l-emerald-500 border-t border-r border-b border-dark-border shadow-lg"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 mr-3">
              <Upload className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-xs text-white mr-2">
                  1
                </div>
                <span className="font-semibold text-white">Upload file / sheet</span>
              </div>
            </div>
          </div>
          
          <div 
            className="flex items-center bg-dark-card p-3 rounded-md border-l-4 border-l-emerald-500 border-t border-r border-b border-dark-border shadow-lg"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 mr-3">
              <Database className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-xs text-white mr-2">
                  2
                </div>
                <span className="font-semibold text-white">Auto-map columns</span>
              </div>
              <span className="text-xs text-gray-400">AI fuzzy match</span>
            </div>
          </div>
          
          <div 
            className="flex items-center bg-dark-card p-3 rounded-md border-l-4 border-l-emerald-500 border-t border-r border-b border-dark-border shadow-lg"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 mr-3">
              <BarChart3 className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-xs text-white mr-2">
                  3
                </div>
                <span className="font-semibold text-white">Generate forecast</span>
              </div>
              <span className="text-xs text-gray-400">ML + external signals</span>
            </div>
          </div>
          
          <div 
            className="flex items-center bg-dark-card p-3 rounded-md border-l-4 border-l-emerald-500 border-t border-r border-b border-dark-border shadow-lg"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 mr-3">
              <MessageSquare className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500/20 text-xs text-white mr-2">
                  4
                </div>
                <span className="font-semibold text-white">LLM-powered narrative & constraints panel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowComparison;
