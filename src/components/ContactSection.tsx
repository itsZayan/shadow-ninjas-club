
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    branch: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        branch: '',
        message: ''
      });

      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoneClick = () => {
    window.open('https://wa.me/923101870059', '_blank');
  };

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
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Email</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Phone</label>
                  <Input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+92 310 1870059"
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Preferred Branch</label>
                  <select 
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-ninja-dark/50 border border-ninja-red/30 rounded-md text-white focus:border-ninja-red focus:outline-none"
                    required
                  >
                    <option value="">Select a branch</option>
                    <option value="g13">G-13 Main Dojo</option>
                    <option value="i14">I-14 Training Center</option>
                    <option value="g14">G-14 Elite Academy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-noto mb-2">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your interest in ninja training..."
                    rows={4}
                    className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full red-gradient hover:scale-105 transition-all duration-300 py-3 font-orbitron font-bold text-lg group"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
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
                <CardContent className="p-6 flex items-center space-x-4 cursor-pointer" onClick={handlePhoneClick}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ninja-red/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-ninja-red" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-white mb-1">WhatsApp Us</h4>
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
                    <p className="text-gray-300 font-noto">shadowartacademy@gmail.com</p>
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
                    <svg className="w-5 h-5 text-ninja-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/shadowninjasclub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-ninja-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 20.312c-3.346 0-6.058-2.713-6.058-6.058 0-3.346 2.712-6.058 6.058-6.058 3.346 0 6.058 2.712 6.058 6.058 0 3.345-2.712 6.058-6.058 6.058zm7.718-10.856a.806.806 0 01-.806-.806.806.806 0 01.806-.806.806.806 0 01.806.806.806.806 0 01-.806.806zm-3.584 8.863c-2.403 0-4.349-1.946-4.349-4.349s1.946-4.349 4.349-4.349 4.349 1.946 4.349 4.349-1.946 4.349-4.349 4.349z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@ShadowNinjasClub" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-ninja-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@shadowninja.club" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ninja-red/20 hover:bg-ninja-red/30 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-ninja-red" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
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
