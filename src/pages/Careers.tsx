
import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone, ExternalLink, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bharath_kurapati@berkeley.edu');
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
  };
  
  return (
    <div className="min-h-screen bg-dark-background">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6 text-white"
              >
                Join Our Team
              </motion.h1>
              
              {/* Our Story Section */}
              <div className="prose prose-lg max-w-none text-white">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-dark-card p-8 rounded-xl mb-12 border border-dark-border">
                    <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-xl font-medium text-white">🎯 We're building the AI operating system of Supply Chain decision making.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Product Overview</h3>
                        <p className="text-gray-300">
                          FeatureBox AI is a Berkeley-born startup backed by UC Launch and Berkeley SkyDeck Pad-13. We roll-up a data scientist, supply chain manager and a business consultant into a single intuitive product that helps SMBs forecast inventory smarter and reclaim lost revenue up to 45%.
                        </p>
                      </div>
                      
                      <p className="text-xl font-bold text-brand-purple">
                        Join us early. Build something meaningful. Grow with us.
                      </p>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">Numbers</h3>
                        <p className="text-gray-300">
                          We placed #2 in the UC Launch Accelerator Program across the UC Network, dubbed as one of the most investable ideas. We got accepted to UC Berkeley Skydeck, Pad-13 program with early validation from VCs across the Berkeley eco-system. We are working with mid-market customers and have begun a meaningful number of pilots!
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Open Roles Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6 flex items-center text-white">
                    <BookOpen className="mr-3 h-7 w-7 text-brand-purple" />
                    Open Roles
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-6 mb-8">
                    <Link to="/careers/data-science-intern" className="block">
                      <div className="bg-dark-card p-6 rounded-lg border border-dark-border hover:border-brand-purple hover:shadow-md transition-all">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-xl mb-2 text-white">🛠️ Data Science Intern – Supply-Chain Forecasting</h3>
                            <p className="text-gray-400 mb-4">Unpaid | Summer 2025 | 0-1 AI B2B Startup</p>
                            <span className="inline-block bg-dark-muted text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                              Berkeley, CA (Remote)
                            </span>
                          </div>
                          <ExternalLink className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="bg-dark-card rounded-xl border border-dark-border p-8 mt-12">
                    <h3 className="font-bold text-xl mb-6 text-white">Why Join Us?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✅</span>
                        <span>Real ownership and impact from day one</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✅</span>
                        <span>Career acceleration through real-world 0–1 startup experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✅</span>
                        <span>Hands-on learning: move fast, ship faster</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✅</span>
                        <span>Access to UC Launch & Berkeley SkyDeck's top startup ecosystems - Leverage UC Launch and SkyDeck's 800+ advisor network, workshops, and $750K+ partner benefits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 font-bold">✅</span>
                        <span>Build the next Hubspot of the B2B SaaS</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                
                {/* How to Apply Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6 text-white">How to Apply</h2>
                  <div className="bg-dark-card p-6 rounded-lg border border-dark-border mb-8">
                    <p className="text-gray-300">
                      Click on the role you're interested in. Fill out a short application form embedded (~5 min).
                      We'll review and reach out to shortlisted candidates.
                    </p>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6 text-white">Our Affiliations</h2>
                  <div className="space-y-4 mb-10">
                    <a 
                      href="https://newsroom.haas.berkeley.edu/ai-innovation-dominates-2025-uc-launch-demo-day-competition-at-berkeley-haas/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      AI innovation dominates 2025 UC LAUNCH Demo Day competition at Berkeley Haas - Haas News | Berkeley Haas
                    </a>
                    <a 
                      href="https://launch.berkeley.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More About UC Launch
                    </a>
                    <a 
                      href="https://skydeck.berkeley.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More About Berkeley SkyDeck Pad-13
                    </a>
                  </div>
                  
                  {/* Contact Section - Image Removed */}
                  <div className="bg-dark-card rounded-xl border border-dark-border p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6 text-white">Questions?</h3>
                    <div className="bg-dark-muted rounded-xl p-6 border border-dark-border">
                      <div className="flex flex-col items-center text-center mb-6">
                        <p className="text-gray-300 mb-4">
                          Reach us at <span className="font-medium">bharath_kurapati@berkeley.edu</span>. We're excited to hear from you!
                        </p>
                        <Button
                          onClick={handleCopyEmail}
                          className="bg-brand-purple hover:bg-brand-purpleLight"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Copy Email Address
                        </Button>
                      </div>
                      
                      {/* Person's image has been removed */}
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

export default Careers;
