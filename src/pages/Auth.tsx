import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: {
          session
        }
      } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      if (isLogin) {
        const {
          error
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
      } else {
        const {
          error
        } = await supabase.auth.signUp({
          email,
          password
        });
        if (error) throw error;
      }
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-screen ninja-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-ninja-red rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-ninja-red rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-ninja-red rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Back to Home */}
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-ninja-red transition-colors duration-300 flex items-center gap-2 z-20">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-noto">Back to Home</span>
      </Link>

      <Card className="w-full max-w-md bg-ninja-dark/90 border-ninja-red/30 backdrop-blur-md relative z-10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-ninja-red bg-ninja-dark flex items-center justify-center shadow-lg glow-red overflow-hidden">
                <img src="/lovable-uploads/137df916-66da-4fb4-a42e-fc127d86e766.png" alt="Shadow Ninja Academy Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute inset-0 w-16 h-16 bg-ninja-red/20 blur-md rounded-full animate-pulse"></div>
            </div>
          </div>
          <CardTitle className="font-orbitron text-2xl text-white mb-2">
            {isLogin ? 'WELCOME BACK' : 'JOIN THE ACADEMY'}
          </CardTitle>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-ninja-red/30 bg-ninja-red/10">
            <Zap className="w-4 h-4 text-ninja-red mr-2" />
            <span className="text-ninja-red font-noto text-sm">Shadow Ninjas Club</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-noto">Email</Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-ninja-gray/50 border-ninja-red/30 text-white placeholder:text-gray-400 focus:border-ninja-red focus:ring-ninja-red/20" placeholder="Enter your email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-noto">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="bg-ninja-gray/50 border-ninja-red/30 text-white placeholder:text-gray-400 focus:border-ninja-red focus:ring-ninja-red/20 pr-10" placeholder="Enter your password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {!isLogin && <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white font-noto">Confirm Password</Label>
                <Input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="bg-ninja-gray/50 border-ninja-red/30 text-white placeholder:text-gray-400 focus:border-ninja-red focus:ring-ninja-red/20" placeholder="Confirm your password" required />
              </div>}

            {error && <div className="text-red-400 text-sm font-noto bg-red-400/10 border border-red-400/30 rounded p-3">
                {error}
              </div>}

            <Button type="submit" disabled={loading} className="w-full red-gradient hover:scale-105 transition-all duration-300 font-orbitron font-bold py-6 text-lg">
              {loading ? 'PROCESSING...' : isLogin ? 'ENTER THE ACADEMY' : 'BEGIN YOUR JOURNEY'}
            </Button>
          </form>

          <div className="text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-gray-400 hover:text-ninja-red transition-colors duration-300 font-noto">
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default Auth;