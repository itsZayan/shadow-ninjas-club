
import { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStartJourney = () => {
    if (user) {
      window.open('https://wa.me/923101870059', '_blank');
    } else {
      navigate('/auth');
    }
  };

  const handleWatchVideos = () => {
    window.open('https://www.youtube.com/@ShadowNinjasClub', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 ninja-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-ninja-red rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-ninja-red rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
            <Zap className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Elite Ninja Training Academy</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-orbitron font-black text-4xl md:text-7xl lg:text-8xl text-white mb-6 text-shadow">
            <span className="block">SHADOW</span>
            <span className="text-ninja-red block">NINJAS</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-2">Club</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-noto leading-relaxed">
            Master the ancient arts of <span className="text-ninja-red font-bold">Ninjutsu</span>, 
            <span className="text-ninja-red font-bold"> Judo</span>, and traditional weapons. 
            Transform your body and mind through elite martial arts training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleStartJourney} className="red-gradient hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-orbitron font-bold group">
              {user ? 'CONTACT US NOW' : 'START YOUR JOURNEY'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={handleWatchVideos} variant="outline" className="border-ninja-red/50 text-white hover:bg-ninja-red/10 px-8 py-6 text-lg font-noto">
              Watch Training Videos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-orbitron font-bold text-3xl md:text-4xl text-ninja-red mb-2">9+</div>
              <div className="text-gray-400 font-noto">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron font-bold text-3xl md:text-4xl text-ninja-red mb-2">70+</div>
              <div className="text-gray-400 font-noto">Active Students</div>
            </div>
            <div className="text-center">
              <div className="font-orbitron font-bold text-3xl md:text-4xl text-ninja-red mb-2">3</div>
              <div className="text-gray-400 font-noto">Active Branches</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ninja-red/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ninja-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
