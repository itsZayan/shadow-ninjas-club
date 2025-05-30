import { FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 ninja-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
              <FileText className="w-4 h-4 text-ninja-red mr-2" />
              <span className="text-ninja-red font-noto text-sm">Legal Agreement</span>
            </div>
            
            <h1 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
              TERMS OF <span className="text-ninja-red">SERVICE</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
              Please read these terms carefully before participating in our training programs or using our services.
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By enrolling in our training programs, using our facilities, or accessing our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">2. Membership and Registration</h2>
                <p className="text-gray-300 mb-6">
                  To participate in our training programs, you must register and provide accurate and complete information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">3. Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Membership fees are as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Admission Fee: Rs. 2,000 (one-time payment)</li>
                  <li>Monthly Fee: Rs. 2,000</li>
                  <li>Ninja Uniform: Rs. 3,000</li>
                  <li>Judo Uniform: Rs. 3,000/5,000</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  Monthly fees are due on the 1st of each month. Failure to pay fees may result in suspension of training privileges until payment is made.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">4. Code of Conduct</h2>
                <p className="text-gray-300 mb-4">
                  All members are expected to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                  <li>Respect instructors, staff, and fellow students</li>
                  <li>Arrive on time for classes</li>
                  <li>Wear proper training attire</li>
                  <li>Maintain personal hygiene</li>
                  <li>Follow safety guidelines and instructions</li>
                </ul>
                <p className="text-gray-300 mb-6">
                  Shadow Ninjas Club reserves the right to deny entry or terminate the membership of any individual who violates this code of conduct.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">5. Health and Safety</h2>
                <p className="text-gray-300 mb-6">
                  Martial arts training involves physical activity that may pose risks. You are responsible for ensuring that you are physically fit to participate in our programs. We recommend consulting with a physician before starting any new physical activity program. By participating in our programs, you acknowledge and accept these risks.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">6. Liability Waiver</h2>
                <p className="text-gray-300 mb-6">
                  By participating in our programs, you agree to waive any and all claims against Shadow Ninjas Club, its instructors, employees, and affiliates for any injury, loss, or damage that may occur during or as a result of participating in our activities.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">7. Media Release</h2>
                <p className="text-gray-300 mb-6">
                  Shadow Ninjas Club may photograph or record classes and events. By participating in our programs, you grant us permission to use these images and recordings for promotional purposes, including on our website and social media channels.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">8. Schedule Changes</h2>
                <p className="text-gray-300 mb-6">
                  We reserve the right to modify the class schedule, change instructors, or cancel classes when necessary. We will make reasonable efforts to provide advance notice of any changes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-ninja-red/20">
            <CardContent className="p-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="font-orbitron text-2xl text-white mb-4">9. Termination of Membership</h2>
                <p className="text-gray-300 mb-6">
                  You may terminate your membership by providing written notice at least 30 days in advance. We reserve the right to terminate or suspend memberships for violations of these terms or for any other reason at our discretion.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">10. Changes to Terms</h2>
                <p className="text-gray-300 mb-6">
                  We may update these terms from time to time. We will notify members of significant changes by posting a notice on our website or through direct communication.
                </p>
                
                <h2 className="font-orbitron text-2xl text-white mb-4">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                <ul className="list-none text-gray-300 mb-6 space-y-2">
                  <li>Email: shadowartacademy@gmail.com</li>
                  <li>Phone: +92 310 1870059</li>
                  <li>Address: G-13/2, Islamabad, Pakistan</li>
                </ul>
                
                <p className="text-gray-300">
                  These Terms of Service were last updated on May 30, 2025.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService; 