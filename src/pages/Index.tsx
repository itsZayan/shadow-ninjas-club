
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrainingSection from '@/components/TrainingSection';
import AdventuresSection from '@/components/AdventuresSection';
import BranchesSection from '@/components/BranchesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  const trainingRef = useScrollAnimation();
  const adventuresRef = useScrollAnimation();
  const branchesRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div ref={trainingRef as React.RefObject<HTMLDivElement>}>
        <TrainingSection />
      </div>
      <div ref={adventuresRef as React.RefObject<HTMLDivElement>}>
        <AdventuresSection />
      </div>
      <div ref={branchesRef as React.RefObject<HTMLDivElement>}>
        <BranchesSection />
      </div>
      <div ref={contactRef as React.RefObject<HTMLDivElement>}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
