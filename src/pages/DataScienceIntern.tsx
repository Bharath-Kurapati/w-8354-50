
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';

const DataScienceIntern = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/careers" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-2">🛠️ Data Science Intern – Supply-Chain Forecasting</h1>
                <p className="text-xl text-gray-600">Unpaid | Summer 2025 | 0-1 AI B2B Startup</p>
              </motion.div>
              
              <div className="prose prose-lg max-w-none">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 The Opportunity</h2>
                    <p>
                      Join a tiny, fast-moving startup born at UC Berkeley (SkyDeck Pad-13 & <strong>UC Launch Accelerator #2 winner</strong>).
                      We're building forecasting tech that already serves paying customers—and we're looking for an undergraduate data-science
                      intern to help us level up the engine this summer. You'll work <strong>full-time (~40 hrs/week)</strong> alongside the founders,
                      own meaningful pieces of the stack, and see your code hit production.
                    </p>
                    <div className="mt-4">
                      <a 
                        href="https://newsroom.haas.berkeley.edu/ai-innovation-dominates-2025-uc-launch-demo-day-competition-at-berkeley-haas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-base"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Check out our recent press release
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 What You'll Tackle</h2>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>
                        <strong>Build the Forecasting Engine</strong> – Research, design, and develop statistical & ML approaches
                        (Holt-Winters → Prophet → LightGBM/DeepAR) that power scenario-based demand plans.
                      </li>
                      <li>
                        <strong>Automate Data Wrangling & Pipelines</strong> – Ingest and clean diverse customer datasets
                        (Shopify, CPG ERPs, CSV dumps), then stand up reproducible notebooks/scripts & lightweight ETL that feed models on GCP.
                      </li>
                      <li>
                        <strong>Thoughtful Gen-AI Integration</strong> – Prototype where generative AI can add real value
                        (e.g., smart mapping, summary insights) and wire it into the product responsibly.
                      </li>
                      <li>
                        <strong>Product Collaboration</strong> – Pair with engineering & PM to translate forecasts into
                        UI components, alerts, and workflows that merchants rely on.
                      </li>
                      <li>
                        <strong>Documentation & Knowledge-Sharing</strong> – Keep crisp READMEs, experiment logs, and
                        hand-off notes so future contributors can build on your work.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 About You</h2>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Pursuing a BS in Data Science, CS, Stats, IEOR, or similar ('26/'27 grad ideal).</li>
                      <li>Comfortable with Python, pandas, Jupyter/Colab, scikit-learn/statsmodels, and SQL basics.</li>
                      <li>Have tinkered with at least one time-series library (Prophet, ARIMA, Holt-Winters, etc.).</li>
                      <li>Startup DNA: you chase clarity, move quickly, and ask good questions when specs are fuzzy.</li>
                      <li>Able to translate findings into clear written & verbal explanations.</li>
                      <li>
                        <em>Nice-to-haves:</em> GitHub portfolio, BigQuery/GCP familiarity, supply-chain coursework or club work.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 Why You'll Love It</h2>
                    <ul className="space-y-3 list-disc pl-6">
                      <li><strong>Real Impact</strong> – Your models land in live merchant workflows, not a slide deck.</li>
                      <li><strong>Agency from Day 1</strong> – Own chunky problems, get mentorship, and run.</li>
                      <li><strong>Learning Firehose</strong> – Exposure to 0→1 product strategy, ML ops, and startup execution.</li>
                      <li><strong>Tight-Knit Team</strong> – Work directly with the founders (supply-chain PM + ML engineer).</li>
                      <li><strong>SkyDeck Resources</strong> – Tap into 800+ advisors, 40+ workshops, and $750k+ partner credits.</li>
                      <li><strong>Growth-Stage Traction</strong> – Join a Berkeley-born startup with real customers and expanding metrics.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 Logistics</h2>
                    <ul className="space-y-3 list-disc pl-6">
                      <li><strong>Location</strong> – Remote (US-friendly hours).</li>
                      <li><strong>Commitment</strong> – ~40 hrs/week, May 5 – Aug 15 (± flex).</li>
                      <li><strong>Compensation</strong> – Unpaid.</li>
                      <li><strong>Start</strong> – ASAP (SkyDeck Pad-13 cohort kicks off May 5).</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10">
                    <h2 className="text-2xl font-bold mb-4">📌 How to Apply</h2>
                    <ol className="space-y-4 list-decimal pl-6">
                      <li>Skim our website</li>
                      <li>
                        Submit the short Google Form
                        <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSeN2ez0C0Ofu3kqs7NpcXoyOaQg3wzFATBtPeF-gqX8iR4xDw/viewform?usp=header"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Apply Here
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                      <li>Attach a résumé or GitHub and tell us about a messy-data project you loved.</li>
                    </ol>
                    
                    <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-700">
                        We review on a rolling basis—expect a quick challenge prompt and a casual chat with the founders. 
                        Can't wait to meet you!
                      </p>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeN2ez0C0Ofu3kqs7NpcXoyOaQg3wzFATBtPeF-gqX8iR4xDw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-brand-purple hover:bg-brand-purpleLight text-lg px-8 py-6">
                          Apply Now
                          <ExternalLink className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default DataScienceIntern;
