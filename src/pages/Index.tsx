
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import MagicExperience from '@/components/MagicExperience';
import VisualCredibility from '@/components/VisualCredibility';
import Testimonials from '@/components/Testimonials';
import CaseStudy from '@/components/CaseStudy';
import Traction from '@/components/Traction';
import SecurityBanner from '@/components/SecurityBanner';
import CTABanner from '@/components/CTABanner';
import SEO from '@/components/SEO';
import VisionProducts from '@/components/VisionProducts';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="FeatureBox AI | AI Operating System for Supply Chain Teams" 
        description="Forecast inventory with 2X accuracy and 90% less effort. CPG planners reclaim hundreds of hours and up to 45% of their revenue."
        imageUrl="/lovable-uploads/b5eadd34-1511-430f-92c4-8028dcfe204a.png"
      />
      <Hero />
      <Benefits />
      <MagicExperience />
      <VisualCredibility />
      <Testimonials />
      <VisionProducts />
      <CaseStudy />
      <Traction />
      <SecurityBanner />
      <CTABanner />
    </PageLayout>
  );
};

export default Index;
