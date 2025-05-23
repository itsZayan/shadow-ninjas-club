
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrainingSection from '@/components/TrainingSection';
import AdventuresSection from '@/components/AdventuresSection';
import BranchesSection from '@/components/BranchesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrainingSection />
      <AdventuresSection />
      <BranchesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
