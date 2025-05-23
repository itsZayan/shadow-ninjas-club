
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-ninja-gray to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            JOIN THE <span className="text-ninja-red">BROTHERHOOD</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Ready to begin your transformation? Contact us today and take the first step 
            towards becoming a modern ninja warrior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-ninja-red/20">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-ninja-red mr-3" />
                Send Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">First Name</label>
                    <Input 
                      placeholder="Enter your first name"
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">Last Name</label>
                    <Input 
                      placeholder="Enter your last name"
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Phone</label>
                  <Input 
                    type="tel"
                    placeholder="+92 310 1870059"
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Preferred Branch</label>
                  <select className="w-full p-3 bg-ninja-dark/50 border border-ninja-red/30 rounded-md text-white focus:border-ninja-red focus:outline-none">
                    <option value="">Select a branch</option>
                    <option value="g13">G-13 Main Dojo</option>
                    <option value="i14">I-14 Training Center</option>
                    <option value="g14">G-14 Elite Academy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your interest in ninja training..."
                    rows={4}
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red resize-none"
                  />
                </div>
                
                <Button className="w-full red-gradient hover:scale-105 transition-all duration-300 py-3 font-orbitron font-bold text-lg group">
                  SEND MESSAGE
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="bg-card/30 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-colors duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ninja-red/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-ninja-red" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-white mb-1">Call Us</h4>
                    <p className="text-gray-300 font-noto">+92 310 1870059</p>
                    <p className="text-gray-400 font-noto text-sm">Available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-colors duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ninja-red/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-ninja-red" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-white mb-1">Email Us</h4>
                    <p className="text-gray-300 font-noto">info@shadowstrikedojo.com</p>
                    <p className="text-gray-400 font-noto text-sm">Response within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-colors duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ninja-red/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-ninja-red" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-white mb-1">Visit Us</h4>
                    <p className="text-gray-300 font-noto">Main Branch: G-13 Sector</p>
                    <p className="text-gray-400 font-noto text-sm">Islamabad, Pakistan</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fees Information */}
            <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
              <CardContent className="p-6">
                <h4 className="font-orbitron font-bold text-white mb-4">FEES STRUCTURE</h4>
                <div className="space-y-3 text-gray-300 font-noto">
                  <div className="flex justify-between">
                    <span>Admission Fee:</span>
                    <span className="text-ninja-red">Rs. 2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Fee:</span>
                    <span className="text-ninja-red">Rs. 2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ninja Uniform:</span>
                    <span className="text-ninja-red">Rs. 3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Judo Uniform:</span>
                    <span className="text-ninja-red">Rs. 3,000/5,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
              <CardContent className="p-6">
                <h4 className="font-orbitron font-bold text-white mb-4">QUICK FACTS</h4>
                <div className="space-y-3 text-gray-300 font-noto">
                  <div className="flex justify-between">
                    <span>Age Groups:</span>
                    <span className="text-ninja-red">4+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class Duration:</span>
                    <span className="text-ninja-red">2 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equipment:</span>
                    <span className="text-ninja-red">Provided</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
              <CardContent className="p-6">
                <h4 className="font-orbitron font-bold text-white mb-4">FOLLOW US</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/people/Shadow-Ninjas-Club/61550120702772/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-ninja-red font-bold text-sm">fb</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/shadowninjasclub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-ninja-red font-bold text-sm">ig</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@ShadowNinjasClub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-ninja-red font-bold text-sm">yt</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@shadowninja.club" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-ninja-red font-bold text-sm">tt</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
