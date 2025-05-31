import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication - in a real app, this would be done on the server
    if (username === 'ninjutsu' && password === 'shadowninjasclub') {
      // Set admin status in localStorage
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminLoginTime', Date.now().toString());
      
      // Show success toast
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
        variant: "default",
      });
      
      // Navigate to admin dashboard
      navigate('/admin/dashboard');
    } else {
      // Show error toast
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 ninja-gradient min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-card/50 backdrop-blur border-ninja-red/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ninja-red/20 rounded-full mb-4">
                    <Lock className="w-8 h-8 text-ninja-red" />
                  </div>
                  
                  <h1 className="font-orbitron font-bold text-2xl text-white">Admin Login</h1>
                  <p className="text-gray-400 mt-2 font-noto">Enter your credentials to access the admin panel</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">Username</label>
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-noto mb-2">Password</label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-ninja-dark/50 border-ninja-red/30 text-white placeholder-gray-400 focus:border-ninja-red"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full red-gradient hover:scale-105 transition-all duration-300 py-3 font-orbitron font-bold text-lg"
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdminLogin;