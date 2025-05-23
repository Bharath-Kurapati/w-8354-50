
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b5eadd34-1511-430f-92c4-8028dcfe204a.png" 
                  alt="FeatureBox AI" 
                  className="h-16 w-auto mr-2" 
                />
              </div>
              <span className="text-2xl font-bold text-brand-purple">FeatureBox AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/featurebox-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-brand-purple transition-colors font-inter flex items-center"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Follow us on LinkedIn
            </a>
            <a 
              href="https://calendly.com/featureboxai/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="default" 
                className="bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md font-inter"
              >
                Request Demo
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="https://www.linkedin.com/company/featurebox-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-purple hover:bg-gray-900 rounded-md font-inter"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Follow us on LinkedIn
            </a>
            <div className="px-3 py-2">
              <a 
                href="https://calendly.com/featureboxai/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="default" 
                  className="w-full bg-brand-purple hover:bg-brand-purpleLight text-white rounded-md font-inter"
                >
                  Request Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
