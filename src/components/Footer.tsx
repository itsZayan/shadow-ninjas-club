
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="ninja-gradient border-t border-ninja-red/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red overflow-hidden">
                  <img 
                    src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" 
                    alt="Shadow Ninjas Club Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 w-8 h-8 bg-ninja-red/20 blur-md rounded-full"></div>
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-xl text-white">
                  SHADOW NINJAS CLUB
                </h3>
              </div>
            </div>
            <p className="text-gray-400 font-noto mb-4 max-w-md">
              A branch of F.S Ninja Academy, dedicated to training elite warriors in the ancient 
              arts of ninjutsu, judo, and traditional weapons. Transform your mind, body, and spirit.
            </p>
            <div className="text-gray-400 font-noto text-sm">
              <p className="mb-1">Part of <span className="text-ninja-red">F.S Ninja Academy</span></p>
              <p>Training warriors since 2009</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-gray-400 font-noto">
              <li><a href="#hero" className="hover:text-ninja-red transition-colors duration-300">Home</a></li>
              <li><a href="#training" className="hover:text-ninja-red transition-colors duration-300">Training</a></li>
              <li><a href="#adventures" className="hover:text-ninja-red transition-colors duration-300">Adventures</a></li>
              <li><a href="#branches" className="hover:text-ninja-red transition-colors duration-300">Branches</a></li>
              <li><a href="#contact" className="hover:text-ninja-red transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">CONTACT</h4>
            <div className="space-y-3 text-gray-400 font-noto">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ninja-red" />
                <span>+92 310 1870059</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ninja-red" />
                <span>shadowartacademy@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-ninja-red mt-1" />
                <div>
                  <div>G-13, I-14, G-14</div>
                  <div>Islamabad, Pakistan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ninja-red/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-noto text-sm mb-4 md:mb-0">
            © 2024 Shadow Ninjas Club. All rights reserved. | A branch of F.S Ninja Academy
          </div>
          <div className="flex space-x-6 text-gray-400 font-noto text-sm">
            <a href="#" className="hover:text-ninja-red transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-ninja-red transition-colors duration-300">Terms of Service</a>
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
