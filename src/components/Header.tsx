
import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Training', href: '#training' },
    { name: 'Adventures', href: '#adventures' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' }
  ];

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

  const handleJoinNow = () => {
    window.open('https://wa.me/923101870059', '_blank');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="fixed top-0 w-full z-50 ninja-gradient backdrop-blur-md border-b border-ninja-red/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="w-full h-full rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red overflow-hidden">
                <img 
                  src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" 
                  alt="Shadow Ninja Academy Logo" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div className="absolute inset-0 w-full h-full bg-ninja-red/20 blur-md rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-orbitron font-bold text-xl text-white">
                SHADOW NINJA ACADEMY
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-ninja-red transition-colors duration-300 font-noto font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ninja-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white">
                  <User className="w-4 h-4" />
                  <span className="font-noto text-sm">{user.email}</span>
                </div>
                <Button 
                  onClick={handleJoinNow}
                  className="red-gradient hover:scale-105 transition-transform duration-300 font-orbitron font-bold mr-2"
                >
                  JOIN NOW
                </Button>
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-ninja-red/50 text-white hover:bg-ninja-red/10 font-noto"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : null}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-ninja-red/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-ninja-red transition-colors duration-300 font-noto"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-white">
                    <User className="w-4 h-4" />
                    <span className="font-noto text-sm">{user.email}</span>
                  </div>
                  <Button 
                    onClick={handleJoinNow}
                    className="red-gradient w-full font-orbitron font-bold"
                  >
                    JOIN NOW
                  </Button>
                  <Button 
                    onClick={handleSignOut}
                    variant="outline"
                    className="border-ninja-red/50 text-white hover:bg-ninja-red/10 w-full font-noto"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : null}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
