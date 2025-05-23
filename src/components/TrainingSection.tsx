
import { Sword, Shield, Target, Zap, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrainingSection = () => {
  const disciplines = [
    {
      icon: Sword,
      title: "Ninjutsu",
      description: "Master the ancient art of stealth, combat, and spiritual discipline",
      skills: ["Stealth Techniques", "Combat Forms", "Mental Training", "Philosophy"]
    },
    {
      icon: Shield,
      title: "Judo",
      description: "Learn the gentle way - throws, grappling, and ground techniques",
      skills: ["Throwing Techniques", "Grappling", "Ground Work", "Competition"]
    },
    {
      icon: Target,
      title: "Weapons Training",
      description: "Traditional weapons mastery including nunchaku, sword, sai, and more",
      skills: ["Nunchaku", "Katana", "Sai", "Archery", "Chain Whip"]
    },
    {
      icon: Zap,
      title: "Combat Training",
      description: "Striking arts, boxing fundamentals, and practical self-defense",
      skills: ["Striking", "Boxing", "Kicks", "Self-Defense"]
    }
  ];

  const features = [
    { icon: Users, title: "Expert Instructors", desc: "Learn from certified masters" },
    { icon: Clock, title: "Flexible Schedule", desc: "Multiple class times available" },
    { icon: Target, title: "All Skill Levels", desc: "From beginners to advanced" }
  ];

  return (
    <section id="training" className="py-20 ninja-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            TRAINING <span className="text-ninja-red">DISCIPLINES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Master multiple martial arts disciplines under one roof. Our comprehensive training 
            programs develop both physical prowess and mental fortitude.
          </p>
        </div>

        {/* Main Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {disciplines.map((discipline, index) => (
            <Card key={discipline.title} className="bg-card/50 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <discipline.icon className="w-12 h-12 text-ninja-red mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-ninja-red/20 blur-xl rounded-full group-hover:bg-ninja-red/30 transition-colors duration-300"></div>
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-3">
                  {discipline.title}
                </h3>
                <p className="text-gray-400 mb-4 font-noto">
                  {discipline.description}
                </p>
                <div className="space-y-2">
                  {discipline.skills.map((skill) => (
                    <div key={skill} className="text-sm text-ninja-red/80 font-noto">
                      • {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="relative mb-4">
                <feature.icon className="w-8 h-8 text-ninja-red mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="font-orbitron font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 font-noto">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Training Schedule */}
        <Card className="bg-card/30 backdrop-blur border-ninja-red/20">
          <CardContent className="p-8">
            <h3 className="font-orbitron font-bold text-2xl text-white mb-6 text-center">
              WEEKLY TRAINING SCHEDULE
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-orbitron font-bold text-ninja-red mb-2">G-13 MAIN DOJO</div>
                <div className="text-gray-300 font-noto">
                  <div>Mon, Wed, Fri</div>
                  <div className="text-sm text-gray-400">Asr to Maghrib</div>
                  <div className="text-xs text-ninja-red mt-2">*Friday: Weapons Only</div>
                </div>
              </div>
              <div className="text-center">
                <div className="font-orbitron font-bold text-ninja-red mb-2">I-14 BRANCH</div>
                <div className="text-gray-300 font-noto">
                  <div>Tue, Thu, Sat</div>
                  <div className="text-sm text-gray-400">Asr to Maghrib</div>
                </div>
              </div>
              <div className="text-center">
                <div className="font-orbitron font-bold text-ninja-red mb-2">G-14 BRANCH</div>
                <div className="text-gray-300 font-noto">
                  <div>Saturday & Sunday</div>
                  <div className="text-sm text-gray-400">5:00 AM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrainingSection;
