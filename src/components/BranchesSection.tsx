import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Branch {
  id: string;
  name: string;
  address: string;
  timing: string;
  phone: string;
  specialties: string[];
}

const BranchesSection = () => {
  const [branches, setBranches] = useState<Branch[]>([
    {
      id: '1',
      name: 'G-13 Branch',
      address: 'G-13/2 park front of mughal market',
      timing: 'Monday, Wednesday, Friday\nAsr to Maghrib',
      phone: '+92 310 1870059',
      specialties: ['Ninjutsu', 'Judo', 'Weapons Training']
    },
    {
      id: '2',
      name: 'I-14 Branch',
      address: 'I-14',
      timing: 'Tuesday, Thursday, Saturday\nAsr to Maghrib',
      phone: '+92 310 1870059',
      specialties: ['Traditional Martial Arts', 'Self Defense']
    },
    {
      id: '3',
      name: 'G-14 Branch',
      address: 'G-14 Park',
      timing: 'Saturday and Sunday\n5:00 AM',
      phone: '+92 310 1870059',
      specialties: ['Kids Training', 'Basic Ninjutsu']
    },
    {
      id: '4',
      name: 'D-12 Branch',
      address: 'D-12',
      timing: 'Monday, Tuesday, Saturday\nAsr to Maghrib',
      phone: '+92 310 1870059',
      specialties: ['Ninjutsu', 'Self Defense', 'Weapons Training']
    }
  ]);

  useEffect(() => {
    // Load branches from localStorage (set by admin panel)
    const savedBranches = localStorage.getItem('adminBranches');
    if (savedBranches) {
      setBranches(JSON.parse(savedBranches));
    }
  }, []);

  const handleContact = () => {
    window.open('https://wa.me/923101870059', '_blank');
  };

  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-ninja-dark to-ninja-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
            <MapPin className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Find Us</span>
          </div>
          
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            OUR <span className="text-ninja-red">BRANCHES</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            We have multiple locations across Islamabad for your convenience.
            Join the branch closest to you and begin your martial arts journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <Card 
              key={branch.id}
              className="bg-card/30 backdrop-blur border-ninja-red/20 hover:border-ninja-red/40 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <h3 className="font-orbitron font-bold text-xl text-white mb-4 group-hover:text-ninja-red transition-colors">
                  {branch.name}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-noto">
                      {branch.address}
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-noto whitespace-pre-line">
                      {branch.timing}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-ninja-red mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-noto">
                      {branch.phone}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {branch.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-ninja-red/10 text-ninja-red border border-ninja-red/30 font-noto"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <Button 
                  onClick={handleContact}
                  className="w-full red-gradient hover:scale-105 transition-all duration-300 font-orbitron font-bold"
                >
                  CONTACT
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
