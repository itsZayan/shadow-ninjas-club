
import { MapPin, Clock, Phone, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BranchesSection = () => {
  const branches = [
    {
      name: "G-13 Main Dojo",
      location: "G-13 Sector, Islamabad",
      address: "Street 15, G-13/1, Islamabad",
      phone: "+92 310 1870059",
      schedule: [
        { day: "Monday", time: "Asr to Maghrib", type: "General Training + Judo" },
        { day: "Wednesday", time: "Asr to Maghrib", type: "Kicks, Fights + Judo" },
        { day: "Friday", time: "Asr to Maghrib", type: "Weapons Training Only" }
      ],
      capacity: "45 Active Students",
      features: ["Main Branch", "Traditional Dojo", "Weapons Arsenal", "Meditation Room"],
      mapLink: "https://maps.app.goo.gl/VM6DF2SzjjhV4J4R7"
    },
    {
      name: "I-14 Training Center",
      location: "I-14 Sector, Islamabad",
      address: "Main Boulevard, I-14/2, Islamabad",
      phone: "+92 310 1870059",
      schedule: [
        { day: "Tuesday", time: "Asr to Maghrib", type: "General Training" },
        { day: "Thursday", time: "Asr to Maghrib", type: "General Training" },
        { day: "Saturday", time: "Asr to Maghrib", type: "General Training" }
      ],
      capacity: "20 Active Students",
      features: ["Modern Facility", "Youth Programs", "Family Classes"],
      mapLink: "https://maps.app.goo.gl/YYiKH6b83JY7V2vQ7"
    },
    {
      name: "G-14 Elite Academy",
      location: "G-14 Sector, Islamabad",
      address: "Commercial Area, G-14/4, Islamabad",
      phone: "+92 310 1870059",
      schedule: [
        { day: "Saturday", time: "5:00 AM", type: "Morning Training" },
        { day: "Sunday", time: "5:00 AM", type: "Morning Training" }
      ],
      capacity: "5 Active Students",
      features: ["Elite Training", "Early Morning Sessions", "Advanced Programs"],
      mapLink: "https://maps.app.goo.gl/CCgf8B4Vv5V6B2S7A"
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
                  <button 
                    onClick={() => window.open(branch.mapLink, '_blank')}
                    className="w-full bg-ninja-red/20 hover:bg-ninja-red/30 text-white font-orbitron font-bold py-3 px-4 rounded-lg transition-colors duration-300 border border-ninja-red/30"
                  >
                    VISIT THIS BRANCH
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Championships Section */}
        <div className="mt-16 text-center">
          <Card className="bg-card/30 backdrop-blur border-ninja-red/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                CHAMPIONSHIPS & COMPETITIONS
              </h3>
              <p className="text-gray-300 font-noto mb-6">
                Participate in local and national martial arts championships. Test your skills 
                against other warriors and bring honor to Shadow Strike Dojo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="red-gradient hover:scale-105 transition-transform duration-300 px-8 py-3 rounded-lg font-orbitron font-bold text-white">
                  VIEW CHAMPIONSHIPS
                </button>
                <button className="border border-ninja-red/50 text-white hover:bg-ninja-red/10 px-8 py-3 rounded-lg font-noto transition-colors duration-300">
                  Competition Calendar
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
