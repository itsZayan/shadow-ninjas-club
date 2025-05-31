import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrainingSection from '@/components/TrainingSection';
import AdventuresSection from '@/components/AdventuresSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import BranchesSection from '@/components/BranchesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div>
        <TrainingSection />
      </div>
      <div>
        <AdventuresSection />
      </div>
      <div>
        <UpcomingEventsSection />
      </div>
      <div>
        <BranchesSection />
      </div>
      <div>
        <PricingSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
