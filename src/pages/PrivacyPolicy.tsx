import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 ninja-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
              <Shield className="w-4 h-4 text-ninja-red mr-2" />
              <span className="text-ninja-red font-noto text-sm">Privacy Protection</span>
            </div>
            
            <h1 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
              PRIVACY <span className="text-ninja-red">POLICY</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
              At Shadow Ninjas Club, we respect your privacy and are committed to protecting your personal information.
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">We collect personal information when you:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Register for classes or training sessions</li>
                  <li>Contact us through our website form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Participate in our events or competitions</li>
                </ul>
                <p className="text-gray-300 mb-4">The personal information we may collect includes:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Age and date of birth (for appropriate class placement)</li>
                  <li>Emergency contact details</li>
                  <li>Health information relevant to martial arts training</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Manage your membership and process payments</li>
                  <li>Communicate with you about classes, events, and schedule changes</li>
                  <li>Provide personalized training advice and support</li>
                  <li>Ensure your safety during training sessions</li>
                  <li>Improve our services and develop new programs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-6">We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-6">We implement a variety of security measures to maintain the safety of your personal information. Personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential.</p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="list-none text-gray-300 mb-6 space-y-2">
                  <li>Email: shadowartacademy@gmail.com</li>
                  <li>Phone: +92 310 1870059</li>
                  <li>Address: G-13/2, Islamabad, Pakistan</li>
                </ul>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">Updates to This Policy</h2>
                <p className="text-gray-300">This Privacy Policy was last updated on May 30, 2025. We may update this policy from time to time, and any changes will be posted on this page.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 