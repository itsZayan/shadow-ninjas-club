import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  capacity: string;
  imageUrl: string;
}

const UpcomingEventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Load events from localStorage (set by admin panel)
    const savedEvents = localStorage.getItem('adminEvents');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const handleRegister = (eventTitle: string) => {
    window.open('https://wa.me/923101870059', '_blank');
  };

  return (
    <section id="events" className="py-20 ninja-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-ninja-red rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-ninja-red rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-ninja-red/30 bg-ninja-red/10 mb-6">
            <Calendar className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Mark Your Calendar</span>
          </div>
          
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-6">
            UPCOMING <span className="text-ninja-red">EVENTS</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-noto">
            Join us for these special events and become part of our ninja community.
            Reserve your spot early as spaces fill quickly.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="bg-card/50 backdrop-blur border-ninja-red/20 hover:border-ninja-red/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-ninja-dark/80 flex items-center justify-center"
                    style={{
                      backgroundImage: event.imageUrl ? `url(${event.imageUrl})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex justify-between items-end">
                      <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-ninja-red transition-colors">
                        {event.title}
                      </h3>
                      <div className="px-3 py-1 bg-ninja-red/80 text-white text-xs font-orbitron rounded-full">
                        {event.date}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 font-noto text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 text-ninja-red mr-3 flex-shrink-0" />
                      <span className="font-noto text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-start text-gray-400">
                      <MapPin className="w-4 h-4 text-ninja-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-noto text-sm">{event.venue}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 text-ninja-red mr-3 flex-shrink-0" />
                      <span className="font-noto text-sm">{event.capacity}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleRegister(event.title)}
                    className="w-full red-gradient hover:scale-105 transition-all duration-300 font-orbitron font-bold"
                  >
                    REGISTER NOW
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-card/50 backdrop-blur border-ninja-red/20 p-8 text-center">
            <div className="text-xl text-gray-300 font-orbitron">
              Coming Soon
            </div>
            <p className="mt-4 text-gray-400 font-noto">
              Exciting events are being planned. Check back later for updates!
            </p>
          </Card>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-300 font-noto">
            More events will be announced soon. Stay connected with us on social media for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 