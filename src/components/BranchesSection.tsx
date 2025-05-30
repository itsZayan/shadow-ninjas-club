import { MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      name: "G-13 Branch",
      address: "G-13/2 park front of mughal market",
      timing: "Monday, Wednesday, Friday\nAsr to Maghrib",
      phone: "+92 310 1870059",
      instructor: "",
      specialties: ["Ninjutsu", "Judo", "Weapons Training"]
    },
    {
      id: 2,
      name: "I-14 Branch",
      address: "I-14",
      timing: "Tuesday, Thursday, Saturday\nAsr to Maghrib",
      phone: "+92 310 1870059",
      instructor: "",
      specialties: ["Traditional Martial Arts", "Self Defense"]
    },
    {
      id: 3,
      name: "G-14 Branch",
      address: "G-14 Park",
      timing: "Saturday and Sunday\n5:00 AM",
      phone: "+92 310 1870059",
      instructor: "",
      specialties: ["Kids Training", "Basic Ninjutsu"]
    },
    {
      id: 4,
      name: "D-12 Branch",
      address: "D-12",
      timing: "Monday, Tuesday, Saturday\nAsr to Maghrib",
      phone: "+92 310 1870059",
      instructor: "",
      specialties: ["Ninjutsu", "Self Defense", "Weapons Training"]
    }
  ];

  return (
    <section id="branches" className="py-20 ninja-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-ninja-red rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-ninja-red rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
            <MapPin className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Training Locations</span>
          </div>
          
          <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white mb-6">
            OUR <span className="text-ninja-red">BRANCHES</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Train at any of our world-class facilities across Islamabad. Each branch is equipped with 
            traditional and modern training equipment for the ultimate ninja experience.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch) => (
            <Card key={branch.id} className="bg-ninja-dark/90 border-ninja-red/30 backdrop-blur-md hover:border-ninja-red/50 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl text-white group-hover:text-ninja-red transition-colors">
                  {branch.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-ninja-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-noto">{branch.address}</p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-ninja-red mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-noto whitespace-pre-line">{branch.timing}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-ninja-red flex-shrink-0" />
                  <a href={`tel:${branch.phone}`} className="text-ninja-red hover:text-white transition-colors font-noto">
                    {branch.phone}
                  </a>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {branch.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-ninja-red/20 text-ninja-red rounded-full border border-ninja-red/30 font-noto"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 font-noto">
            Ready to start your ninja journey? Contact any of our branches to schedule your first session.
          </p>
          <a
            href="https://wa.me/923101870059"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 red-gradient rounded-lg font-orbitron font-bold hover:scale-105 transition-transform duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
