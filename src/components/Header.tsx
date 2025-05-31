import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: isHomePage ? '#hero' : '/' },
    { name: 'Training', href: isHomePage ? '#training' : '/#training' },
    { name: 'Adventures', href: isHomePage ? '#adventures' : '/#adventures' },
    { name: 'Events', href: isHomePage ? '#events' : '/#events' },
    { name: 'Branches', href: isHomePage ? '#branches' : '/#branches' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' }
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

  const renderNavLink = (item: { name: string; href: string }) => {
    if (item.href.startsWith('#')) {
      return (
        <a
          key={item.name}
          href={item.href}
          className="text-white hover:text-ninja-red transition-colors duration-300 font-noto font-medium relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ninja-red transition-all duration-300 group-hover:w-full"></span>
        </a>
      );
    } else if (item.href.startsWith('/#')) {
      return (
        <Link
          key={item.name}
          to={item.href}
          className="text-white hover:text-ninja-red transition-colors duration-300 font-noto font-medium relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ninja-red transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    } else {
      return (
        <Link
          key={item.name}
          to={item.href}
          className="text-white hover:text-ninja-red transition-colors duration-300 font-noto font-medium relative group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ninja-red transition-all duration-300 group-hover:w-full"></span>
        </Link>
      );
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 ninja-gradient backdrop-blur-md border-b border-ninja-red/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <div className="w-full h-full rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red overflow-hidden">
                <img 
                  src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" 
                  alt="Shadow Ninjas Club Logo" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div className="absolute inset-0 w-full h-full bg-ninja-red/20 blur-md rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="font-orbitron font-bold text-xl text-white">
                SHADOW NINJAS CLUB
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => renderNavLink(item))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={handleJoinNow}
                  className="red-gradient hover:scale-105 transition-transform duration-300 font-orbitron font-bold"
                >
                  JOIN NOW
                </Button>
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  size="icon"
                  className="border-ninja-red/50 text-white hover:bg-ninja-red/10"
                >
                  <LogOut className="w-4 h-4" />
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
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-ninja-red transition-colors duration-300 font-noto"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white hover:text-ninja-red transition-colors duration-300 font-noto"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {user ? (
                <div className="space-y-3">
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
