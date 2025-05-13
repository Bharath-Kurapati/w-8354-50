
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButton from './FloatingContactButton';

interface PageLayoutProps {
  children: React.ReactNode;
  showContact?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, showContact = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {showContact && <FloatingContactButton />}
      <Footer />
    </div>
  );
};

export default PageLayout;
