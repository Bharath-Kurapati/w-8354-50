
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

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="FeatureBox AI | AI Operating System for Supply Chain Teams" 
        description="Forecast inventory with 2X accuracy and 90% less effort. Mid-market CPG planners reclaim hundreds of hours and reclaim up to 45% of their revenue."
        imageUrl="/lovable-uploads/b5eadd34-1511-430f-92c4-8028dcfe204a.png"
      />
      <Hero />
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
