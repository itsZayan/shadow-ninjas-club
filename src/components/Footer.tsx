import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ninja-gradient border-t border-ninja-red/20" itemScope itemType="http://schema.org/Organization">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red overflow-hidden">
                  <img 
                    src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" 
                    alt="Shadow Ninjas Club Logo - Ninjutsu Academy in Islamabad" 
                    className="w-full h-full object-cover rounded-full"
                    itemProp="logo"
                  />
                </div>
                <div className="absolute inset-0 w-8 h-8 bg-ninja-red/20 blur-md rounded-full"></div>
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-white" itemProp="name">
                  SHADOW NINJAS CLUB
                </h3>
              </div>
            </div>
            <p className="text-gray-400 font-noto mb-4 max-w-md" itemProp="description">
              A premier branch of F.S Ninja Academy, dedicated to training elite warriors in the ancient 
              arts of ninjutsu, judo, and traditional weapons. Transform your mind, body, and spirit 
              through authentic martial arts training in Islamabad.
            </p>
            <div className="text-gray-400 font-noto text-sm">
              <p className="mb-1">Part of <span className="text-ninja-red">F.S Ninja Academy</span></p>
              <p itemProp="foundingDate">Training warriors since 2023</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/shadowninjasclub" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full border border-ninja-red/30 bg-ninja-red/10 flex items-center justify-center hover:bg-ninja-red/20 transition-all duration-300">
                <Facebook className="w-5 h-5 text-ninja-red" />
              </a>
              <a href="https://instagram.com/shadowninjasclub" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full border border-ninja-red/30 bg-ninja-red/10 flex items-center justify-center hover:bg-ninja-red/20 transition-all duration-300">
                <Instagram className="w-5 h-5 text-ninja-red" />
              </a>
              <a href="https://youtube.com/@shadowninjasclub" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube" className="w-10 h-10 rounded-full border border-ninja-red/30 bg-ninja-red/10 flex items-center justify-center hover:bg-ninja-red/20 transition-all duration-300">
                <Youtube className="w-5 h-5 text-ninja-red" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-gray-400 font-noto">
              <li><a href="#hero" className="hover:text-ninja-red transition-colors duration-300">Home</a></li>
              <li><a href="#training" className="hover:text-ninja-red transition-colors duration-300">Ninjutsu Training</a></li>
              <li><a href="#adventures" className="hover:text-ninja-red transition-colors duration-300">Adventures</a></li>
              <li><a href="#branches" className="hover:text-ninja-red transition-colors duration-300">Our Branches</a></li>
              <li><a href="#events" className="hover:text-ninja-red transition-colors duration-300">Upcoming Events</a></li>
              <li><a href="#pricing" className="hover:text-ninja-red transition-colors duration-300">Training Fees</a></li>
              <li><a href="#contact" className="hover:text-ninja-red transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">CONTACT US</h4>
            <div className="space-y-3 text-gray-400 font-noto">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ninja-red" />
                <span itemProp="telephone">+92 310 1870059</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ninja-red" />
                <span itemProp="email">shadowartacademy@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-ninja-red mt-1" />
                <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                  <div itemProp="streetAddress">G-13, I-14, G-14, D-12</div>
                  <div><span itemProp="addressLocality">Islamabad</span>, <span itemProp="addressCountry">Pakistan</span></div>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-sm">Training hours: Asr to Maghrib (Varies by branch)</p>
                <p className="text-sm">Weekend morning classes available at G-14 branch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ninja-red/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-noto text-sm mb-4 md:mb-0">
            © 2025 Shadow Ninjas Club. All rights reserved. | A branch of F.S Ninja Academy
          </div>
          <div className="flex space-x-6 text-gray-400 font-noto text-sm">
            <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-ninja-red transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-ninja-red transition-colors duration-300">Terms of Service</Link>
            <Link to="/admin" className="hover:text-ninja-red transition-colors duration-300">Admin</Link>
            <a href="https://pakninjas.com/about-fs-ninja-academy/" target="_blank" rel="noopener noreferrer" className="hover:text-ninja-red transition-colors duration-300">
              F.S Ninja Academy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
