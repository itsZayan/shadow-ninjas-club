import { useState, useEffect } from 'react';
import { DollarSign, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Fee {
  id: string;
  name: string;
  amount: string;
  description: string;
}

const PricingSection = () => {
  const [fees, setFees] = useState<Fee[]>([
    { id: '1', name: 'Admission Fee', amount: '2,000', description: 'One-time payment' },
    { id: '2', name: 'Monthly Fee', amount: '2,000', description: 'Per month' },
    { id: '3', name: 'Ninja Uniform', amount: '3,000', description: 'Required for training' },
    { id: '4', name: 'Judo Uniform', amount: '3,000/5,000', description: 'Required for judo classes' }
  ]);

  useEffect(() => {
    // Load fees from localStorage (set by admin panel)
    const savedFees = localStorage.getItem('adminFees');
    if (savedFees) {
      setFees(JSON.parse(savedFees));
    }
  }, []);

  const handleContactClick = () => {
    window.open('https://wa.me/923101870059', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-ninja-dark to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
            <DollarSign className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Affordable Training</span>
          </div>
          
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            TRAINING <span className="text-ninja-red">FEES</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Join our martial arts community with affordable fees.
            Invest in your physical and mental growth through our expert training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fees.map(fee => (
            <Card key={fee.id} className="bg-card/30 backdrop-blur border-ninja-red/20 overflow-hidden hover:border-ninja-red/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-2">{fee.name}</h3>
                  <div className="text-2xl font-bold text-ninja-red mb-2">Rs. {fee.amount}</div>
                  <p className="text-gray-400 text-sm font-noto">{fee.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-noto">Professional instructors</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-noto">Quality training equipment</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-noto">Safe training environment</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleContactClick}
                  className="w-full red-gradient hover:scale-105 transition-all duration-300 font-orbitron font-bold"
                >
                  JOIN NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 font-noto">
            Contact us for group discounts or any questions about our pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 