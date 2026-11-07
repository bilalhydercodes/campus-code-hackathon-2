import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Sparkles, Users, Lock, ChevronRight } from 'lucide-react';
import { mockUser } from '@/data/user';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  // Animation state machine: 'IDLE' | 'TYPING' | 'PROCESSING' | 'SUCCESS' | 'FAILED'
  const [carState, setCarState] = useState<'IDLE' | 'TYPING' | 'PROCESSING' | 'SUCCESS' | 'FAILED'>('IDLE');

  // Triggered when an input gets focus or changes
  const handleFocus = () => {
    if (carState === 'IDLE' || carState === 'FAILED') {
      setCarState('TYPING');
    }
  };

  // Triggered when inputs lose focus
  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    if (carState === 'TYPING' && !email && !password) {
      setCarState('IDLE');
    }
  };

  const handleSuccessfulAuth = () => {
    const fullName = email ? email.split('@')[0] : mockUser.name;
    const user = {
      ...mockUser,
      name: fullName,
      email: email || mockUser.email,
      campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      avatar_initials: (fullName.charAt(0) || 'S').toUpperCase(),
    };
    localStorage.setItem('token', 'mock-token-2026');
    localStorage.setItem('role', 'STUDENT');
    localStorage.setItem('user', JSON.stringify(user));
    
    // Smooth transition to dashboard after car drives off-screen
    setTimeout(() => {
      navigate('/student');
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (carState === 'PROCESSING' || carState === 'SUCCESS') return;

    setCarState('PROCESSING');

    // Simulate 2.5-second network request before switching to SUCCESS or FAILED state
    setTimeout(() => {
      // Simulate failure if password is 'error' or 'wrong', otherwise success
      if (password.toLowerCase() === 'error' || password.toLowerCase() === 'wrong') {
        setCarState('FAILED');
      } else {
        setCarState('SUCCESS');
        handleSuccessfulAuth();
      }
    }, 2500);
  };

  const handleSocialLogin = (provider: string) => {
    if (carState === 'PROCESSING' || carState === 'SUCCESS') return;
    setCarState('PROCESSING');
    setTimeout(() => {
      setCarState('SUCCESS');
      const fullName = `${provider} Builder`;
      const user = {
        ...mockUser,
        name: fullName,
        email: `builder@${provider.toLowerCase()}.com`,
        campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        avatar_initials: provider.charAt(0).toUpperCase(),
      };
      localStorage.setItem('token', 'mock-token-2026');
      localStorage.setItem('role', 'STUDENT');
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        navigate('/student');
      }, 1200);
    }, 1500);
  };

  // State Machine Configuration
  const stateConfig = {
    IDLE: {
      carMove: 'translate-x-0',
      wheelSpin: 'wheel-idle',
      carAnimation: 'car-idle',
    },
    TYPING: {
      carMove: 'translate-x-[15px]',
      wheelSpin: 'wheel-typing',
      carAnimation: '',
    },
    PROCESSING: {
      carMove: 'translate-x-[75px] xs:translate-x-[95px] sm:translate-x-[110px]',
      wheelSpin: 'wheel-processing',
      carAnimation: '',
    },
    SUCCESS: {
      carMove: 'translate-x-[500px]', // Accelerates completely off-screen to the right
      wheelSpin: 'wheel-success',
      carAnimation: '',
    },
    FAILED: {
      carMove: 'translate-x-0', // Snaps back to translate-x-0
      wheelSpin: 'wheel-idle',
      carAnimation: 'car-error-shake', // Performs custom shake animation
    },
  };

  const currentConfig = stateConfig[carState];

  return (
    <div className="min-h-screen lg:h-screen w-full flex flex-col lg:flex-row bg-[#F4F7FA] font-sans overflow-y-auto lg:overflow-hidden">
      {/* Required Custom Keyframes for Car Animations */}
      <style>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fastSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes insaneSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes idleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes errorShake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-6px) rotate(-1.5deg); }
          30% { transform: translateX(6px) rotate(1.5deg); }
          45% { transform: translateX(-4px) rotate(-1deg); }
          60% { transform: translateX(4px) rotate(1deg); }
          75% { transform: translateX(-2px) rotate(-0.5deg); }
          90% { transform: translateX(2px) rotate(0.5deg); }
        }

        .wheel-idle {
          transform: rotate(0deg);
        }
        .wheel-typing {
          animation: slowSpin 1.6s linear infinite;
        }
        .wheel-processing {
          animation: fastSpin 0.35s linear infinite;
        }
        .wheel-success {
          animation: insaneSpin 0.1s linear infinite;
        }
        .car-idle {
          animation: idleBounce 2.5s ease-in-out infinite;
        }
        .car-error-shake {
          animation: errorShake 0.5s ease-in-out;
        }
        .car-transition {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .car-transition { transition: none !important; }
          .wheel-typing, .wheel-processing, .wheel-success, .car-idle, .car-error-shake { animation: none !important; }
        }
      `}</style>

      {/* LEFT SIDE - BRANDING (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-white relative overflow-hidden flex-col justify-center p-12 xl:p-16 border-r border-gray-100 h-full">
        {/* Soft Background Gradients */}
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-[#7665FF] opacity-15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-[#81B524] opacity-15 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-xl h-full flex flex-col justify-center">
          
          {/* Logo - click returns to Landing Page */}
          <Link to="/" className="flex items-center gap-3 mb-16 group w-fit">
            <svg width="32" height="24" viewBox="0 0 188 142" aria-hidden="true" className="shrink-0 transition-transform group-hover:scale-105">
              <polygon fill="#16151E" points="43,0 78,0 35,142 0,142" />
              <polygon fill="#7665FF" points="98,0 133,0 90,142 55,142" />
              <polygon fill="#81B524" points="153,0 188,0 145,142 110,142" />
            </svg>
            <span className="text-2xl font-extrabold text-[#16151E] tracking-tight">CampusCode</span>
            <span className="bg-[#16151E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider mt-1">ARENA</span>
          </Link>

          {/* Typography */}
          <h1 className="text-5xl xl:text-[64px] font-extrabold text-[#16151E] leading-[1.1] mb-6 tracking-tight">
            Welcome back<br />
            to the <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-[#7665FF] italic pr-2">spotlight.</span>
              {/* Brush stroke background */}
              <svg className="absolute -bottom-1 -left-2 w-[105%] h-[60%] z-0 text-[#7665FF]/20" preserveAspectRatio="none" viewBox="0 0 200 40" fill="currentColor">
                <path d="M5,20 Q50,5 100,15 T195,10 Q190,30 150,35 T10,30 Z" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg xl:text-xl text-gray-600 max-w-md leading-relaxed mb-16">
            Login to discover hackathons, collaborate with brilliant minds, and build your next big idea.
          </p>

          {/* Floating Glassmorphic Badges */}
          <div className="relative h-64 mt-8">
            
            {/* Badge 1: HackMate AI */}
            <div className="absolute top-0 left-0 bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-4 flex items-center gap-4 w-[280px] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-red-400 rounded-xl flex items-center justify-center text-white shrink-0 shadow-inner">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16151E] text-sm">HackMate AI</h4>
                <p className="text-xs text-gray-500 font-medium">Matched with 3 Builders</p>
              </div>
            </div>

            {/* Badge 2: IdeaCheck AI */}
            <div className="absolute bottom-10 left-[15%] bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-4 flex items-center gap-4 w-[280px] hover:-translate-y-1 transition-transform duration-300 z-10">
              <div className="w-12 h-12 bg-[#81B524] rounded-xl flex items-center justify-center text-white shrink-0 shadow-inner">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16151E] text-sm">IdeaCheck AI</h4>
                <p className="text-xs text-gray-500 font-medium">98% Viability Score</p>
              </div>
            </div>

            {/* Badge 3: Ambassador Activity */}
            <div className="absolute top-20 right-0 bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgb(0,0,0,0.08)] rounded-2xl p-5 w-[320px] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-3">
                <svg width="16" height="12" viewBox="0 0 188 142">
                  <polygon fill="#16151E" points="43,0 78,0 35,142 0,142" />
                  <polygon fill="#7665FF" points="98,0 133,0 90,142 55,142" />
                  <polygon fill="#81B524" points="153,0 188,0 145,142 110,142" />
                </svg>
                <span className="font-bold text-[#16151E] text-sm tracking-tight">CampusCode</span>
                <div className="ml-auto flex gap-1">
                  <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">Discover</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-1.5">
                <Users size={12} /> Ambassador activity
              </p>
              <div className="flex items-center gap-[-8px]">
                <div className="w-8 h-8 rounded-full bg-[#7665FF] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold z-30 shadow-sm">JD</div>
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white -ml-2 z-20 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-400 border-2 border-white -ml-2 z-10 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white -ml-2 flex items-center justify-center text-white shadow-sm z-0">
                  <span className="text-[10px] font-bold">+</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-3 xs:p-4 sm:p-6 relative z-10 min-h-full py-8 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <div className="w-full max-w-[506px] bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 p-5 xs:p-6 sm:p-9 relative mx-auto">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="flex items-center justify-center gap-2 mb-4 lg:hidden">
            <Link to="/" className="flex items-center gap-2">
              <svg width="24" height="18" viewBox="0 0 188 142" aria-hidden="true" className="shrink-0">
                <polygon fill="#16151E" points="43,0 78,0 35,142 0,142" />
                <polygon fill="#7665FF" points="98,0 133,0 90,142 55,142" />
                <polygon fill="#81B524" points="153,0 188,0 145,142 110,142" />
              </svg>
              <span className="text-xl font-extrabold text-[#16151E] tracking-tight">CampusCode</span>
            </Link>
          </div>

          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] font-extrabold text-[#16151E] tracking-tight mb-1.5">Sign in to your account</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Enter your credentials to access the Arena.</p>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            <button 
              type="button" 
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-xs sm:text-sm font-semibold text-gray-700 cursor-pointer min-h-[44px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            <button 
              type="button" 
              onClick={() => handleSocialLogin('GitHub')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-xs sm:text-sm font-semibold text-gray-700 cursor-pointer min-h-[44px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative bg-white px-4 text-sm text-gray-500 font-medium">or sign in with email</span>
          </div>

          {/* Form with onFocus, onBlur, and onSubmit */}
          <form 
            onSubmit={handleSubmit}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="space-y-4"
          >
            
            {/* Email Address */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); handleFocus(); }}
                className="w-full pl-10 pr-4 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7665FF]/20 focus:border-[#7665FF] transition-all" 
                placeholder="Email Address"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock size={18} />
              </div>
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => { setPassword(e.target.value); handleFocus(); }}
                className="w-full pl-10 pr-12 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7665FF]/20 focus:border-[#7665FF] transition-all" 
                placeholder="Password"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] bg-white checked:bg-[#7665FF] checked:border-[#7665FF] transition-colors cursor-pointer" 
                  />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-[#7665FF] hover:text-[#5c4ce0] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* CampusCode Antigravity Car Animation Container (Positioned directly above Submit Button) */}
            <div className="relative h-[76px] rounded-xl overflow-hidden bg-[#FAFAFA] my-4 select-none shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
              
              {/* Race Track / Speed Road Line */}
              <div className="absolute bottom-[20px] left-0 right-0 h-[1.5px] bg-gray-200 pointer-events-none"></div>
              <div className="absolute bottom-[20px] left-0 right-0 h-[1px] border-b border-dashed border-gray-300/80 pointer-events-none"></div>

              {/* Car Position Wrapper (Smooth X-axis Translation) */}
              <div 
                className={`absolute left-3 bottom-[18px] z-10 ${carState === 'FAILED' ? '' : 'car-transition'} ${currentConfig.carMove}`}
              >
                {/* Car Animation Wrapper (Idle Bounce & Error Shake) */}
                <div className={`relative w-[118px] h-[32px] ${currentConfig.carAnimation}`}>
                  
                  {/* Subtle Underglow / Road Contact Shadow */}
                  <div className="absolute bottom-[1px] left-2 w-[102px] h-[3px] bg-gradient-to-r from-transparent via-[#16151E]/20 to-transparent rounded-full filter blur-[1px]"></div>

                  {/* 2D SVG Sports Car Silhouette */}
                  <svg width="118" height="32" viewBox="0 0 118 32" fill="none" className="block relative z-[2] drop-shadow-sm">
                    <defs>
                      <clipPath id="sportsCarBodyClip">
                        <path d="M 2 24.5 L 9 24.5 A 11.5 11.5 0 0 1 32 24.5 L 78 24.5 A 11.5 11.5 0 0 1 101 24.5 L 114 24.5 C 116 24.5 117 23 116 21 C 114 17.5 102 13 89 11.5 C 83 11.5 73 4.5 64 4 C 55 4 43 4.5 36 6 C 27 8 16 11 9 11.5 C 4 12 1.5 12.5 0.5 13 C -0.5 16 0 21 2 24.5 Z" />
                      </clipPath>
                    </defs>

                    {/* Obsidian Midnight (#16151E) Aerodynamic Sports Car Body */}
                    <path 
                      d="M 2 24.5 L 9 24.5 A 11.5 11.5 0 0 1 32 24.5 L 78 24.5 A 11.5 11.5 0 0 1 101 24.5 L 114 24.5 C 116 24.5 117 23 116 21 C 114 17.5 102 13 89 11.5 C 83 11.5 73 4.5 64 4 C 55 4 43 4.5 36 6 C 27 8 16 11 9 11.5 C 4 12 1.5 12.5 0.5 13 C -0.5 16 0 21 2 24.5 Z" 
                      fill="#16151E" 
                    />

                    {/* Interior Details Clipped to Car Body */}
                    <g clipPath="url(#sportsCarBodyClip)">
                      {/* Dark Tinted Glass Canopy (#2D2C3D) */}
                      <path d="M 36 7 C 43 5.2 53 4.8 62 4.8 C 70 4.8 78 8.5 85 11.5 L 36 11.5 Z" fill="#2D2C3D" />
                      {/* Glass Divider / B-Pillar */}
                      <line x1="58" y1="5" x2="55" y2="11.5" stroke="#16151E" strokeWidth="1.8" />
                      {/* Windshield Dynamic Sheen */}
                      <path d="M 72 6 L 79 11 L 76 11 L 70 6 Z" fill="#4B4861" opacity="0.6" />

                      {/* Three Brand Diagonal Stripes on Side */}
                      {/* Stripe 1: Obsidian Midnight #2D2C3D */}
                      <polygon points="45,-2 52,-2 39,34 32,34" fill="#2D2C3D" />
                      {/* Stripe 2: Electric Violet #7665FF */}
                      <polygon points="53.5,-2 60.5,-2 47.5,34 40.5,34" fill="#7665FF" />
                      {/* Stripe 3: Terminal Lime #81B524 */}
                      <polygon points="62,-2 69,-2 56,34 49,34" fill="#81B524" />

                      {/* Aerodynamic Door Intake Scoop */}
                      <path d="M 38 14 C 44 14 54 16 63 16 C 71 16 78 14.5 83 13.5" stroke="#0D0C12" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                      
                      {/* Side Skirt Accent Line (Electric Violet #7665FF) */}
                      <line x1="33" y1="24" x2="77" y2="24" stroke="#7665FF" strokeWidth="1.2" strokeLinecap="round" />
                      {/* Front Splitter Accent (Terminal Lime #81B524) */}
                      <line x1="102" y1="24" x2="114" y2="24" stroke="#81B524" strokeWidth="1.2" strokeLinecap="round" />
                    </g>

                    {/* Rear Fender Muscular Highlight Line */}
                    <path d="M 8 12.5 C 15 12 21 15 28 15" stroke="#252333" strokeWidth="0.8" fill="none" strokeLinecap="round" />

                    {/* Sleek Aerodynamic Side Mirror */}
                    <path d="M 78 10 C 80 8.5 83 9 84 10.5 C 83 11 81 11 78 10.5 Z" fill="#16151E" stroke="#2D2C3D" strokeWidth="0.5" />

                    {/* Front Neon Headlight (Electric Violet #7665FF) */}
                    <polygon points="107,15.5 114,18.5 109,19.5 105,16.5" fill="#7665FF" />
                    <polygon points="108,16.5 113,18.5 110,19 106,17" fill="#C4BDFF" />

                    {/* Rear Neon Taillight (Electric Violet #7665FF) */}
                    <path d="M 1 13.5 L 6 13" stroke="#7665FF" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>

                  {/* Independent Rear Wheel */}
                  <div className="absolute left-[10.5px] -bottom-[2px] w-[21px] h-[21px] rounded-full z-[3]">
                    <div className={`w-full h-full rounded-full ${currentConfig.wheelSpin}`}>
                      <svg viewBox="0 0 24 24" width="21" height="21" className="w-full h-full">
                        {/* Outer Tire */}
                        <circle cx="12" cy="12" r="11" fill="#16151E" stroke="#252433" strokeWidth="1.2" />
                        {/* Neon Terminal Lime Rim Edge (#81B524) */}
                        <circle cx="12" cy="12" r="8.5" fill="#191824" stroke="#81B524" strokeWidth="1.2" />
                        {/* Multi-spoke Alloy Wheel Spokes */}
                        <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="7.75" y1="4.64" x2="16.25" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="16.25" y1="4.64" x2="7.75" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        {/* Center Hub & Violet Accent (#7665FF) */}
                        <circle cx="12" cy="12" r="3" fill="#16151E" stroke="#7665FF" strokeWidth="1" />
                        <circle cx="12" cy="12" r="1.3" fill="#7665FF" />
                      </svg>
                    </div>
                  </div>

                  {/* Independent Front Wheel */}
                  <div className="absolute left-[79.5px] -bottom-[2px] w-[21px] h-[21px] rounded-full z-[3]">
                    <div className={`w-full h-full rounded-full ${currentConfig.wheelSpin}`}>
                      <svg viewBox="0 0 24 24" width="21" height="21" className="w-full h-full">
                        {/* Outer Tire */}
                        <circle cx="12" cy="12" r="11" fill="#16151E" stroke="#252433" strokeWidth="1.2" />
                        {/* Neon Terminal Lime Rim Edge (#81B524) */}
                        <circle cx="12" cy="12" r="8.5" fill="#191824" stroke="#81B524" strokeWidth="1.2" />
                        {/* Multi-spoke Alloy Wheel Spokes */}
                        <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="7.75" y1="4.64" x2="16.25" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="16.25" y1="4.64" x2="7.75" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        {/* Center Hub & Lime Accent (#81B524) */}
                        <circle cx="12" cy="12" r="3" fill="#16151E" stroke="#81B524" strokeWidth="1" />
                        <circle cx="12" cy="12" r="1.3" fill="#81B524" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={carState === 'PROCESSING' || carState === 'SUCCESS'}
              className="w-full bg-[#5D6BF8] hover:bg-[#4855E0] text-white py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all group disabled:opacity-80 disabled:cursor-not-allowed shadow-md shadow-[#5D6BF8]/20 cursor-pointer"
            >
              <span className="font-semibold text-[15px]">
                {carState === 'PROCESSING' 
                  ? 'Authenticating...' 
                  : carState === 'SUCCESS' 
                  ? 'Access Granted' 
                  : 'Sign In'}
              </span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-[#5D6BF8] hover:text-[#4855E0] transition-colors">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
