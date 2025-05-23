
import { MapPin, Clock, Phone, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BranchesSection = () => {
  const branches = [
    {
      name: "G-13 Dojo",
      location: "G-13 Sector, Islamabad",
      address: "Street 15, G-13/1, Islamabad",
      phone: "+92 300 1234567",
      schedule: [
        { day: "Mon-Wed-Fri", time: "6:00 PM - 8:00 PM", type: "Ninjutsu & Weapons" },
        { day: "Tue-Thu", time: "7:00 PM - 9:00 PM", type: "Judo & Combat" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM", type: "Open Training" }
      ],
      capacity: "50 Students",
      features: ["Traditional Dojo", "Weapons Arsenal", "Meditation Room"]
    },
    {
      name: "I-14 Training Center",
      location: "I-14 Sector, Islamabad",
      address: "Main Boulevard, I-14/2, Islamabad",
      phone: "+92 301 2345678",
      schedule: [
        { day: "Mon-Wed-Fri", time: "5:30 PM - 7:30 PM", type: "Youth Classes" },
        { day: "Tue-Thu", time: "8:00 PM - 10:00 PM", type: "Advanced Training" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM", type: "All Levels" }
      ],
      capacity: "40 Students",
      features: ["Modern Facility", "Youth Programs", "Family Classes"]
    },
    {
      name: "G-14 Elite Academy",
      location: "G-14 Sector, Islamabad",
      address: "Commercial Area, G-14/4, Islamabad",
      phone: "+92 302 3456789",
      schedule: [
        { day: "Daily", time: "6:00 AM - 8:00 AM", type: "Morning Warriors" },
        { day: "Mon-Fri", time: "6:00 PM - 8:00 PM", type: "Evening Classes" },
        { day: "Weekend", time: "2:00 PM - 6:00 PM", type: "Intensive Training" }
      ],
      capacity: "60 Students",
      features: ["Elite Training", "Competition Prep", "Master Classes"]
    }
  ];

  return (
    <section id="branches" className="py-20 ninja-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            OUR <span className="text-ninja-red">BRANCHES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Shadow Strike Dojo has expanded across Islamabad to bring elite ninja training 
            closer to warriors everywhere. Choose the location that suits you best.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Card key={branch.name} className="bg-card/50 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6">
                {/* Branch Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-orbitron font-bold text-xl text-white">
                      {branch.name}
                    </h3>
                    <div className="w-3 h-3 bg-ninja-red rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 text-ninja-red mt-1 flex-shrink-0" />
                    <div className="font-noto text-sm">
                      <div className="font-medium">{branch.location}</div>
                      <div className="text-gray-400">{branch.address}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-300 mb-2">
                    <Phone className="w-4 h-4 text-ninja-red" />
                    <span className="font-noto text-sm">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Users className="w-4 h-4 text-ninja-red" />
                    <span className="font-noto text-sm">{branch.capacity}</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-6">
                  <h4 className="font-orbitron font-bold text-white mb-3 flex items-center">
                    <Clock className="w-4 h-4 text-ninja-red mr-2" />
                    Training Schedule
                  </h4>
                  <div className="space-y-3">
                    {branch.schedule.map((session, idx) => (
                      <div key={idx} className="bg-ninja-red/10 rounded-lg p-3 border border-ninja-red/20">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-orbitron font-bold text-ninja-red text-sm">
                              {session.day}
                            </div>
                            <div className="text-white font-noto text-sm">
                              {session.type}
                            </div>
                          </div>
                          <div className="text-gray-300 font-noto text-sm text-right">
                            {session.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-orbitron font-bold text-white mb-3">
                    Special Features
                  </h4>
                  <div className="space-y-2">
                    {branch.features.map((feature) => (
                      <div key={feature} className="text-gray-300 font-noto text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-ninja-red rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-ninja-red/20">
                  <button className="w-full bg-ninja-red/20 hover:bg-ninja-red/30 text-white font-orbitron font-bold py-3 px-4 rounded-lg transition-colors duration-300 border border-ninja-red/30">
                    VISIT THIS BRANCH
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur border-ninja-red/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                READY TO BEGIN YOUR NINJA JOURNEY?
              </h3>
              <p className="text-gray-300 font-noto mb-6">
                Visit any of our branches for a free trial class. Experience the way of the shadow warrior.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="red-gradient hover:scale-105 transition-transform duration-300 px-8 py-3 rounded-lg font-orbitron font-bold text-white">
                  BOOK FREE TRIAL
                </button>
                <button className="border border-ninja-red/50 text-white hover:bg-ninja-red/10 px-8 py-3 rounded-lg font-noto transition-colors duration-300">
                  Call for Info
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
