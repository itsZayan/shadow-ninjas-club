
import { Mountain, Sun, Compass, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdventuresSection = () => {
  const adventures = [
    {
      icon: Mountain,
      title: "Ninja Hiking Expeditions",
      description: "Develop endurance and mental toughness through challenging mountain trails",
      features: ["Stealth Movement", "Nature Navigation", "Team Building", "Survival Skills"],
      season: "Year Round"
    },
    {
      icon: Sun,
      title: "Summer Training Camps",
      description: "Intensive outdoor training combining martial arts with adventure",
      features: ["Intensive Training", "Outdoor Skills", "Combat Drills", "Friendship Building"],
      season: "June - August"
    },
    {
      icon: Compass,
      title: "Winter Warrior Camps",
      description: "Test your limits in challenging winter conditions",
      features: ["Cold Weather Training", "Mental Fortitude", "Team Challenges", "Hot Springs"],
      season: "December - February"
    },
    {
      icon: Award,
      title: "Championships",
      description: "Compete and showcase your skills in local and national tournaments",
      features: ["Competition Training", "Medal Events", "Skill Exhibition", "Team Competitions"],
      season: "Seasonal Events"
    }
  ];

  return (
    <section id="adventures" className="py-20 bg-gradient-to-b from-background to-ninja-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            NINJA <span className="text-ninja-red">ADVENTURES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Beyond the dojo walls, we forge warriors through thrilling adventures. 
            Build character, teamwork, and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {adventures.map((adventure, index) => (
            <Card key={adventure.title} className="bg-card/50 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <adventure.icon className="w-12 h-12 text-ninja-red group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-ninja-red/20 blur-xl rounded-full group-hover:bg-ninja-red/30 transition-colors duration-300"></div>
                </div>
                
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-ninja-red/20 text-ninja-red text-xs font-orbitron font-bold rounded-full">
                    {adventure.season}
                  </span>
                </div>
                
                <h3 className="font-orbitron font-bold text-lg text-white mb-3">
                  {adventure.title}
                </h3>
                
                <p className="text-gray-400 mb-4 font-noto text-sm">
                  {adventure.description}
                </p>
                
                <div className="space-y-2">
                  {adventure.features.map((feature) => (
                    <div key={feature} className="text-xs text-ninja-red/80 font-noto">
                      • {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Adventure Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                ADVENTURE BENEFITS
              </h3>
              <div className="space-y-4 text-gray-300 font-noto">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Character Building:</strong> Develop resilience, leadership, and teamwork
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Physical Fitness:</strong> Enhance endurance and outdoor skills
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Cultural Learning:</strong> Deepen understanding of martial arts philosophy
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Lifelong Memories:</strong> Create bonds and experiences that last forever
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
            <CardContent className="p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                TRAINING EQUIPMENT
              </h3>
              <div className="space-y-4 text-gray-300 font-noto">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Ninja Uniform:</strong> 3,000 PKR
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Judo Uniform:</strong> 3,000 - 5,000 PKR
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Training Weapons:</strong> Available for purchase at the dojo
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ninja-red rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Safety Gear:</strong> Required for sparring and competition
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdventuresSection;
