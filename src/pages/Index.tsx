
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import PainPoints from '@/components/PainPoints';
import WorkflowSteps from '@/components/WorkflowSteps';
import Features from '@/components/Features';
import Personas from '@/components/Personas';
import CaseStudy from '@/components/CaseStudy';
import Traction from '@/components/Traction';
import PricingTeaser from '@/components/PricingTeaser';
import SecurityBanner from '@/components/SecurityBanner';
import CTABanner from '@/components/CTABanner';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="FeatureBox AI | Inventory forecasting for CPG brands" 
        description="Cut stock-outs & overstocks by ≥ 20% with FeatureBox AI's 4-step demand-planning workflow. Upload data today—see forecasts tomorrow."
        imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
      />
      <Hero />
      <PainPoints />
      <WorkflowSteps />
      <Features />
      <Personas />
      <CaseStudy />
      <Traction />
      <PricingTeaser />
      <SecurityBanner />
      <CTABanner />
    </PageLayout>
  );
};

export default Index;
