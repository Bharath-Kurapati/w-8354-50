
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import MagicExperience from '@/components/MagicExperience';
import Benefits from '@/components/Benefits';
import CaseStudy from '@/components/CaseStudy';
import Traction from '@/components/Traction';
import SecurityBanner from '@/components/SecurityBanner';
import CTABanner from '@/components/CTABanner';
import SEO from '@/components/SEO';
import VisionProducts from '@/components/VisionProducts';
import SocialProof from '@/components/SocialProof';
import FeatureHighlights from '@/components/FeatureHighlights';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="FeatureBox AI | Inventory forecasting for CPG brands" 
        description="Cut stock-outs & overstocks by ≥ 20% with FeatureBox AI's 4-step demand-planning workflow. Upload data today—see forecasts tomorrow."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <Hero />
      <FeatureHighlights />
      <MagicExperience />
      <Benefits />
      <VisionProducts />
      <CaseStudy />
      <Traction />
      <SecurityBanner />
      <CTABanner />
    </PageLayout>
  );
};

export default Index;
