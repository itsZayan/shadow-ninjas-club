import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, LogOut, Plus, Trash, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Types
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

interface Branch {
  id: string;
  name: string;
  address: string;
  timing: string;
  phone: string;
  specialties: string[];
}

interface Fee {
  id: string;
  name: string;
  amount: string;
  description: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Verify localStorage works correctly on Vercel
  useEffect(() => {
    try {
      // Verify that localStorage is accessible
      const testValue = 'verify-' + Date.now();
      localStorage.setItem('admin-storage-test', testValue);
      const retrievedValue = localStorage.getItem('admin-storage-test');
      
      if (retrievedValue !== testValue) {
        toast({
          title: "Storage Warning",
          description: "Your browser storage may not be working correctly. Changes might not be saved.",
          variant: "destructive",
        });
      } else {
        localStorage.removeItem('admin-storage-test');
      }
    } catch (error) {
      console.error("localStorage error:", error);
      toast({
        title: "Storage Error",
        description: "Cannot access browser storage. Admin functionality may be limited.",
        variant: "destructive",
      });
    }
  }, [toast]);

  // Event management
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem('adminEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
    title: '',
    date: '',
    time: '',
    venue: '',
    description: '',
    capacity: '',
    imageUrl: '/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png'
  });
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  // Branch management
  const [branches, setBranches] = useState<Branch[]>(() => {
    const savedBranches = localStorage.getItem('adminBranches');
    return savedBranches ? JSON.parse(savedBranches) : [
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
    ];
  });
  const [editingBranchId, setEditingBranchId] = useState<string | null>(null);
  const [editedBranch, setEditedBranch] = useState<Branch | null>(null);

  // Fee management
  const [fees, setFees] = useState<Fee[]>(() => {
    const savedFees = localStorage.getItem('adminFees');
    return savedFees ? JSON.parse(savedFees) : [
      { id: '1', name: 'Admission Fee', amount: '2,000', description: 'One-time payment' },
      { id: '2', name: 'Monthly Fee', amount: '2,000', description: 'Per month' },
      { id: '3', name: 'Ninja Uniform', amount: '3,000', description: 'Required for training' },
      { id: '4', name: 'Judo Uniform', amount: '3,000/5,000', description: 'Required for judo classes' }
    ];
  });
  const [editingFeeId, setEditingFeeId] = useState<string | null>(null);
  const [editedFee, setEditedFee] = useState<Fee | null>(null);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
      variant: "default",
    });
  };

  // Event functions
  const handleAddEvent = () => {
    const newId = Date.now().toString();
    const eventToAdd = { id: newId, ...newEvent };
    const updatedEvents = [...events, eventToAdd];
    setEvents(updatedEvents);
    localStorage.setItem('adminEvents', JSON.stringify(updatedEvents));
    
    // Reset form
    setNewEvent({
      title: '',
      date: '',
      time: '',
      venue: '',
      description: '',
      capacity: '',
      imageUrl: '/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png'
    });
    
    toast({
      title: "Event added",
      description: `${eventToAdd.title} has been added successfully`,
      variant: "default",
    });
  };

  const handleDeleteEvent = (id: string) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem('adminEvents', JSON.stringify(updatedEvents));
    
    toast({
      title: "Event deleted",
      description: "The event has been deleted successfully",
      variant: "default",
    });
  };

  const handleEditEvent = (event: Event) => {
    setEditingEventId(event.id);
    setNewEvent({
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      description: event.description,
      capacity: event.capacity,
      imageUrl: event.imageUrl
    });
  };

  const handleSaveEditedEvent = () => {
    if (!editingEventId) return;
    
    const updatedEvents = events.map(event => 
      event.id === editingEventId ? { id: editingEventId, ...newEvent } : event
    );
    
    setEvents(updatedEvents);
    localStorage.setItem('adminEvents', JSON.stringify(updatedEvents));
    
    // Reset form
    setEditingEventId(null);
    setNewEvent({
      title: '',
      date: '',
      time: '',
      venue: '',
      description: '',
      capacity: '',
      imageUrl: '/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png'
    });
    
    toast({
      title: "Event updated",
      description: "The event has been updated successfully",
      variant: "default",
    });
  };

  // Branch functions
  const handleEditBranch = (branch: Branch) => {
    setEditingBranchId(branch.id);
    setEditedBranch({ ...branch });
  };

  const handleSaveBranch = () => {
    if (!editingBranchId || !editedBranch) return;
    
    const updatedBranches = branches.map(branch => 
      branch.id === editingBranchId ? editedBranch : branch
    );
    
    setBranches(updatedBranches);
    localStorage.setItem('adminBranches', JSON.stringify(updatedBranches));
    
    setEditingBranchId(null);
    setEditedBranch(null);
    
    toast({
      title: "Branch updated",
      description: "Branch information has been updated successfully",
      variant: "default",
    });
  };

  // Fee functions
  const handleEditFee = (fee: Fee) => {
    setEditingFeeId(fee.id);
    setEditedFee({ ...fee });
  };

  const handleSaveFee = () => {
    if (!editingFeeId || !editedFee) return;
    
    const updatedFees = fees.map(fee => 
      fee.id === editingFeeId ? editedFee : fee
    );
    
    setFees(updatedFees);
    localStorage.setItem('adminFees', JSON.stringify(updatedFees));
    
    setEditingFeeId(null);
    setEditedFee(null);
    
    toast({
      title: "Fee updated",
      description: "Fee information has been updated successfully",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-to-b from-background to-ninja-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-orbitron font-bold text-3xl text-white">Admin Dashboard</h1>
            
            <Button 
              variant="outline" 
              className="border-ninja-red/50 text-white hover:bg-ninja-red/10"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="mb-8 bg-card/50 border border-ninja-red/20 p-1">
              <TabsTrigger value="events" className="data-[state=active]:bg-ninja-red/20 data-[state=active]:text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="branches" className="data-[state=active]:bg-ninja-red/20 data-[state=active]:text-white">
                <MapPin className="w-4 h-4 mr-2" />
                Branches
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-ninja-red/20 data-[state=active]:text-white">
                <DollarSign className="w-4 h-4 mr-2" />
                Pricing
              </TabsTrigger>
            </TabsList>
            
            {/* Events Tab */}
            <TabsContent value="events">
              <Card className="bg-card/50 backdrop-blur border-ninja-red/20 mb-8">
                <CardContent className="p-6">
                  <h2 className="font-orbitron font-bold text-xl text-white mb-4">
                    {editingEventId ? 'Edit Event' : 'Add New Event'}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-300 font-noto mb-2">Event Title</label>
                      <Input
                        value={newEvent.title}
                        onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                        placeholder="Summer Tournament"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-noto mb-2">Date</label>
                      <Input
                        value={newEvent.date}
                        onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                        placeholder="July 15"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-noto mb-2">Time</label>
                      <Input
                        value={newEvent.time}
                        onChange={e => setNewEvent({...newEvent, time: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                        placeholder="10:00 AM - 4:00 PM"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-noto mb-2">Venue</label>
                      <Input
                        value={newEvent.venue}
                        onChange={e => setNewEvent({...newEvent, venue: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                        placeholder="G-13 Main Dojo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-noto mb-2">Capacity</label>
                      <Input
                        value={newEvent.capacity}
                        onChange={e => setNewEvent({...newEvent, capacity: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                        placeholder="100 participants"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-300 font-noto mb-2">Description</label>
                      <Textarea
                        value={newEvent.description}
                        onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                        className="bg-ninja-dark/50 border-ninja-red/30 text-white resize-none"
                        placeholder="Annual summer tournament featuring competitions..."
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    {editingEventId ? (
                      <>
                        <Button 
                          variant="outline" 
                          className="border-ninja-red/50 text-white hover:bg-ninja-red/10"
                          onClick={() => {
                            setEditingEventId(null);
                            setNewEvent({
                              title: '',
                              date: '',
                              time: '',
                              venue: '',
                              description: '',
                              capacity: '',
                              imageUrl: '/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png'
                            });
                          }}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                        <Button 
                          className="red-gradient"
                          onClick={handleSaveEditedEvent}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </>
                    ) : (
                      <Button 
                        className="red-gradient"
                        onClick={handleAddEvent}
                        disabled={!newEvent.title || !newEvent.date}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Event
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">Manage Events</h3>
              
              {events.length === 0 ? (
                <Card className="bg-card/30 backdrop-blur border-ninja-red/20 p-6 text-center">
                  <p className="text-gray-400">No events have been added yet.</p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {events.map(event => (
                    <Card key={event.id} className="bg-card/30 backdrop-blur border-ninja-red/20">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-orbitron font-bold text-white">{event.title}</h4>
                            <p className="text-gray-400 text-sm">{event.date} • {event.time}</p>
                            <p className="text-gray-400 text-sm mt-1">{event.venue}</p>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-ninja-red/50 text-white hover:bg-ninja-red/10 h-8 px-2"
                              onClick={() => handleEditEvent(event)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="border-destructive/50 text-destructive hover:bg-destructive/10 h-8 px-2"
                              onClick={() => handleDeleteEvent(event.id)}
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
            
            {/* Branches Tab */}
            <TabsContent value="branches">
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">Manage Branches</h3>
              
              <div className="space-y-4">
                {branches.map(branch => (
                  <Card key={branch.id} className="bg-card/30 backdrop-blur border-ninja-red/20">
                    <CardContent className="p-4">
                      {editingBranchId === branch.id && editedBranch ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Branch Name</label>
                            <Input
                              value={editedBranch.name}
                              onChange={e => setEditedBranch({...editedBranch, name: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Address</label>
                            <Input
                              value={editedBranch.address}
                              onChange={e => setEditedBranch({...editedBranch, address: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Timing</label>
                            <Textarea
                              value={editedBranch.timing}
                              onChange={e => setEditedBranch({...editedBranch, timing: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white resize-none"
                              rows={2}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Phone</label>
                            <Input
                              value={editedBranch.phone}
                              onChange={e => setEditedBranch({...editedBranch, phone: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="outline" 
                              className="border-ninja-red/50 text-white hover:bg-ninja-red/10"
                              onClick={() => {
                                setEditingBranchId(null);
                                setEditedBranch(null);
                              }}
                            >
                              <X className="w-4 h-4 mr-2" />
                              Cancel
                            </Button>
                            <Button 
                              className="red-gradient"
                              onClick={handleSaveBranch}
                            >
                              <Save className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-orbitron font-bold text-white">{branch.name}</h4>
                            <p className="text-gray-400 text-sm mt-1">{branch.address}</p>
                            <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">{branch.timing}</p>
                            <p className="text-gray-400 text-sm mt-1">{branch.phone}</p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-ninja-red/50 text-white hover:bg-ninja-red/10 h-8 px-2"
                            onClick={() => handleEditBranch(branch)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Pricing Tab */}
            <TabsContent value="pricing">
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">Manage Pricing</h3>
              
              <div className="space-y-4">
                {fees.map(fee => (
                  <Card key={fee.id} className="bg-card/30 backdrop-blur border-ninja-red/20">
                    <CardContent className="p-4">
                      {editingFeeId === fee.id && editedFee ? (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Fee Name</label>
                            <Input
                              value={editedFee.name}
                              onChange={e => setEditedFee({...editedFee, name: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Amount (PKR)</label>
                            <Input
                              value={editedFee.amount}
                              onChange={e => setEditedFee({...editedFee, amount: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-300 font-noto mb-2">Description</label>
                            <Input
                              value={editedFee.description}
                              onChange={e => setEditedFee({...editedFee, description: e.target.value})}
                              className="bg-ninja-dark/50 border-ninja-red/30 text-white"
                            />
                          </div>
                          
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="outline" 
                              className="border-ninja-red/50 text-white hover:bg-ninja-red/10"
                              onClick={() => {
                                setEditingFeeId(null);
                                setEditedFee(null);
                              }}
                            >
                              <X className="w-4 h-4 mr-2" />
                              Cancel
                            </Button>
                            <Button 
                              className="red-gradient"
                              onClick={handleSaveFee}
                            >
                              <Save className="w-4 h-4 mr-2" />
                              Save
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-baseline">
                              <h4 className="font-orbitron font-bold text-white">{fee.name}:</h4>
                              <span className="ml-4 text-ninja-red font-bold">Rs. {fee.amount}</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">{fee.description}</p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-ninja-red/50 text-white hover:bg-ninja-red/10 h-8 px-2"
                            onClick={() => handleEditFee(fee)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard; 