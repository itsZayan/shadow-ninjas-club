
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrainingSection from '@/components/TrainingSection';
import AdventuresSection from '@/components/AdventuresSection';
import BranchesSection from '@/components/BranchesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      
      // If no user, redirect to auth page
      if (!session?.user) {
        navigate('/auth');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
      
      // If no user, redirect to auth page
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen ninja-gradient flex items-center justify-center">
        <div className="text-white font-orbitron text-xl">Loading...</div>
      </div>
    );
  }

  // Only render the main app if user is authenticated
  if (!user) {
    return null; // Will redirect to auth page
  }

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
        <BranchesSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
