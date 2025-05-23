
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Training', href: '#training' },
    { name: 'Adventures', href: '#adventures' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleJoinNow = () => {
    window.open('https://wa.me/923101870059', '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 ninja-gradient backdrop-blur-md border-b border-ninja-red/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red">
                <img 
                  src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" 
                  alt="Shadow Ninja Academy Logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <div className="absolute inset-0 w-12 h-12 bg-ninja-red/20 blur-md rounded-full animate-pulse"></div>
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
            <Button 
              onClick={handleJoinNow}
              className="red-gradient hover:scale-105 transition-transform duration-300 font-orbitron font-bold"
            >
              JOIN NOW
            </Button>
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
              <Button 
                onClick={handleJoinNow}
                className="red-gradient mt-4 font-orbitron font-bold"
              >
                JOIN NOW
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
