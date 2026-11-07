import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, Users, ChevronRight, Check } from 'lucide-react';
import { mockUser } from '@/data/user';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  
  // Animation state machine: 'IDLE' | 'TYPING' | 'PROCESSING' | 'SUCCESS' | 'FAILED'
  const [carState, setCarState] = useState<'IDLE' | 'TYPING' | 'PROCESSING' | 'SUCCESS' | 'FAILED'>('IDLE');

  const handleFocus = () => {
    if (carState === 'IDLE' || carState === 'FAILED') {
      setCarState('TYPING');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    if (carState === 'TYPING' && !name && !email && !password) {
      setCarState('IDLE');
    }
  };

  const handleSuccessfulAuth = () => {
    const fullName = name.trim() || (email ? email.split('@')[0] : 'Builder');
    const user = {
      ...mockUser,
      name: fullName,
      email: email || mockUser.email,
      campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      avatar_initials: (fullName.charAt(0) || 'B').toUpperCase(),
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
    if (!agreeTerms) return;
    if (carState === 'PROCESSING' || carState === 'SUCCESS') return;

    setCarState('PROCESSING');

    setTimeout(() => {
      if (password.toLowerCase() === 'error' || password.toLowerCase() === 'wrong') {
        setCarState('FAILED');
      } else {
        setCarState('SUCCESS');
        handleSuccessfulAuth();
      }
    }, 2200);
  };

  const handleSocialRegister = (provider: string) => {
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
      carMove: 'translate-x-[500px]',
      wheelSpin: 'wheel-success',
      carAnimation: '',
    },
    FAILED: {
      carMove: 'translate-x-0',
      wheelSpin: 'wheel-idle',
      carAnimation: 'car-error-shake',
    },
  };

  const currentConfig = stateConfig[carState];

  return (
    <div className="min-h-screen lg:h-screen w-full flex flex-col lg:flex-row bg-[#F4F7FA] font-sans overflow-y-auto lg:overflow-hidden">
      {/* Custom Keyframes for Sports Car Animations */}
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

        .wheel-idle { transform: rotate(0deg); }
        .wheel-typing { animation: slowSpin 1.6s linear infinite; }
        .wheel-processing { animation: fastSpin 0.35s linear infinite; }
        .wheel-success { animation: insaneSpin 0.1s linear infinite; }
        .car-idle { animation: idleBounce 2.5s ease-in-out infinite; }
        .car-error-shake { animation: errorShake 0.5s ease-in-out; }
        .car-transition { transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }

        @media (prefers-reduced-motion: reduce) {
          .car-transition { transition: none !important; }
          .wheel-typing, .wheel-processing, .wheel-success, .car-idle, .car-error-shake { animation: none !important; }
        }
      `}</style>

      {/* LEFT SIDE - BRANDING (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-white relative overflow-hidden flex-col justify-center p-12 xl:p-16 border-r border-gray-100 h-full">
        {/* Soft Ambient Brand Gradients */}
        <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-[#81B524] opacity-15 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-[#7665FF] opacity-15 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-xl h-full flex flex-col justify-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-12 xl:mb-14 group w-fit">
            <svg width="32" height="24" viewBox="0 0 188 142" aria-hidden="true" className="shrink-0 transition-transform group-hover:scale-105">
              <polygon fill="#16151E" points="43,0 78,0 35,142 0,142" />
              <polygon fill="#7665FF" points="98,0 133,0 90,142 55,142" />
              <polygon fill="#81B524" points="153,0 188,0 145,142 110,142" />
            </svg>
            <span className="text-2xl font-extrabold text-[#16151E] tracking-tight">CampusCode</span>
            <span className="bg-[#16151E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full tracking-wider mt-1">ARENA</span>
          </Link>

          {/* Typography */}
          <h1 className="text-5xl xl:text-[62px] font-extrabold text-[#16151E] leading-[1.1] mb-5 tracking-tight">
            Join the arena.<br />
            Build what <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-[#81B524] italic pr-2">matters.</span>
              <svg className="absolute -bottom-1 -left-2 w-[105%] h-[60%] z-0 text-[#81B524]/20" preserveAspectRatio="none" viewBox="0 0 200 40" fill="currentColor">
                <path d="M5,20 Q50,5 100,15 T195,10 Q190,30 150,35 T10,30 Z" />
              </svg>
            </span>
          </h1>
          
          <p className="text-base xl:text-lg text-gray-600 max-w-md leading-relaxed mb-10">
            Create your student developer profile to discover challenges, form teams, and ship production-ready projects.
          </p>

          {/* Floating Glassmorphic Badges */}
          <div className="relative h-56 mt-4">
            
            {/* Badge 1: Active Track */}
            <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgb(0,0,0,0.06)] rounded-2xl p-4 w-[280px] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#81B524] animate-pulse"></span>
                <span className="font-bold text-[#16151E] text-xs uppercase tracking-wider">ReBuild '26 Active</span>
              </div>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Frontend recreation arena with real prizes and mock data ready.
              </p>
            </div>

            {/* Badge 2: Builder Community */}
            <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgb(0,0,0,0.08)] rounded-2xl p-4.5 w-[300px] hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-[#7665FF]" />
                <span className="font-bold text-[#16151E] text-xs">Community Network</span>
              </div>
              <p className="text-xs text-gray-500 mb-2.5">
                4,200+ active student builders across top engineering institutes.
              </p>
              <div className="flex items-center -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#7665FF] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">MB</div>
                <div className="w-7 h-7 rounded-full bg-[#81B524] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">AK</div>
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">SR</div>
                <div className="w-7 h-7 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold">+500</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE - REGISTER FORM (Matching Login Style) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-3 xs:p-4 sm:p-6 relative z-10 min-h-full py-8 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <div className="w-full max-w-[506px] bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 p-5 xs:p-6 sm:p-9 relative mx-auto">
          
          {/* Mobile Logo */}
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
            <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] font-extrabold text-[#16151E] tracking-tight mb-1.5">Create your account</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Join the arena and start building bold products today.</p>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
            <button 
              type="button" 
              onClick={() => handleSocialRegister('Google')}
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
              onClick={() => handleSocialRegister('GitHub')}
              className="flex items-center justify-center gap-2 py-2.5 px-3 sm:px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-xs sm:text-sm font-semibold text-gray-700 cursor-pointer min-h-[44px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Continue with GitHub</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-5 sm:mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <span className="relative bg-white px-4 text-xs sm:text-sm text-gray-500 font-medium">or register with email</span>
          </div>

          {/* Registration Form */}
          <form 
            onSubmit={handleSubmit}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="space-y-3.5 sm:space-y-4"
          >
            {/* Full Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input 
                type="text" 
                value={name}
                onChange={(e) => { setName(e.target.value); handleFocus(); }}
                className="w-full pl-10 pr-4 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7665FF]/20 focus:border-[#7665FF] transition-all" 
                placeholder="Full Name"
                required
              />
            </div>

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
                placeholder="Create Password"
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

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <div className="relative flex items-center justify-center mt-0.5">
                <input 
                  type="checkbox" 
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[4px] bg-white checked:bg-[#7665FF] checked:border-[#7665FF] transition-colors cursor-pointer" 
                  required
                />
                <Check size={12} className="absolute text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" />
              </div>
              <label htmlFor="agreeTerms" className="text-xs sm:text-[13px] text-gray-600 cursor-pointer leading-snug">
                I agree to the <span className="text-[#7665FF] font-medium hover:underline">Terms of Service</span> and <span className="text-[#7665FF] font-medium hover:underline">Privacy Policy</span>
              </label>
            </div>

            {/* CampusCode Antigravity Car Animation Container */}
            <div className="relative h-[76px] rounded-xl overflow-hidden bg-[#FAFAFA] my-4 select-none shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
              {/* Race Track / Speed Road Line */}
              <div className="absolute bottom-[20px] left-0 right-0 h-[1.5px] bg-gray-200 pointer-events-none"></div>
              <div className="absolute bottom-[20px] left-0 right-0 h-[1px] border-b border-dashed border-gray-300/80 pointer-events-none"></div>

              {/* Car Position Wrapper */}
              <div 
                className={`absolute left-3 bottom-[18px] z-10 ${carState === 'FAILED' ? '' : 'car-transition'} ${currentConfig.carMove}`}
              >
                {/* Car Animation Wrapper */}
                <div className={`relative w-[118px] h-[32px] ${currentConfig.carAnimation}`}>
                  <div className="absolute bottom-[1px] left-2 w-[102px] h-[3px] bg-gradient-to-r from-transparent via-[#16151E]/20 to-transparent rounded-full filter blur-[1px]"></div>

                  {/* 2D SVG Sports Car Silhouette */}
                  <svg width="118" height="32" viewBox="0 0 118 32" fill="none" className="block relative z-[2] drop-shadow-sm">
                    <defs>
                      <clipPath id="sportsCarBodyClipRegister">
                        <path d="M 2 24.5 L 9 24.5 A 11.5 11.5 0 0 1 32 24.5 L 78 24.5 A 11.5 11.5 0 0 1 101 24.5 L 114 24.5 C 116 24.5 117 23 116 21 C 114 17.5 102 13 89 11.5 C 83 11.5 73 4.5 64 4 C 55 4 43 4.5 36 6 C 27 8 16 11 9 11.5 C 4 12 1.5 12.5 0.5 13 C -0.5 16 0 21 2 24.5 Z" />
                      </clipPath>
                    </defs>

                    <path 
                      d="M 2 24.5 L 9 24.5 A 11.5 11.5 0 0 1 32 24.5 L 78 24.5 A 11.5 11.5 0 0 1 101 24.5 L 114 24.5 C 116 24.5 117 23 116 21 C 114 17.5 102 13 89 11.5 C 83 11.5 73 4.5 64 4 C 55 4 43 4.5 36 6 C 27 8 16 11 9 11.5 C 4 12 1.5 12.5 0.5 13 C -0.5 16 0 21 2 24.5 Z" 
                      fill="#16151E" 
                    />

                    <g clipPath="url(#sportsCarBodyClipRegister)">
                      <path d="M 36 7 C 43 5.2 53 4.8 62 4.8 C 70 4.8 78 8.5 85 11.5 L 36 11.5 Z" fill="#2D2C3D" />
                      <line x1="58" y1="5" x2="55" y2="11.5" stroke="#16151E" strokeWidth="1.8" />
                      <path d="M 72 6 L 79 11 L 76 11 L 70 6 Z" fill="#4B4861" opacity="0.6" />

                      <polygon points="45,-2 52,-2 39,34 32,34" fill="#2D2C3D" />
                      <polygon points="53.5,-2 60.5,-2 47.5,34 40.5,34" fill="#7665FF" />
                      <polygon points="62,-2 69,-2 56,34 49,34" fill="#81B524" />

                      <path d="M 38 14 C 44 14 54 16 63 16 C 71 16 78 14.5 83 13.5" stroke="#0D0C12" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                      <line x1="33" y1="24" x2="77" y2="24" stroke="#7665FF" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="102" y1="24" x2="114" y2="24" stroke="#81B524" strokeWidth="1.2" strokeLinecap="round" />
                    </g>

                    <path d="M 8 12.5 C 15 12 21 15 28 15" stroke="#252333" strokeWidth="0.8" fill="none" strokeLinecap="round" />
                    <path d="M 78 10 C 80 8.5 83 9 84 10.5 C 83 11 81 11 78 10.5 Z" fill="#16151E" stroke="#2D2C3D" strokeWidth="0.5" />
                    <polygon points="107,15.5 114,18.5 109,19.5 105,16.5" fill="#7665FF" />
                    <polygon points="108,16.5 113,18.5 110,19 106,17" fill="#C4BDFF" />
                    <path d="M 1 13.5 L 6 13" stroke="#7665FF" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>

                  {/* Rear Wheel */}
                  <div className="absolute left-[10.5px] -bottom-[2px] w-[21px] h-[21px] rounded-full z-[3]">
                    <div className={`w-full h-full rounded-full ${currentConfig.wheelSpin}`}>
                      <svg viewBox="0 0 24 24" width="21" height="21" className="w-full h-full">
                        <circle cx="12" cy="12" r="11" fill="#16151E" stroke="#252433" strokeWidth="1.2" />
                        <circle cx="12" cy="12" r="8.5" fill="#191824" stroke="#81B524" strokeWidth="1.2" />
                        <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="7.75" y1="4.64" x2="16.25" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="16.25" y1="4.64" x2="7.75" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="3" fill="#16151E" stroke="#7665FF" strokeWidth="1" />
                        <circle cx="12" cy="12" r="1.3" fill="#7665FF" />
                      </svg>
                    </div>
                  </div>

                  {/* Front Wheel */}
                  <div className="absolute left-[79.5px] -bottom-[2px] w-[21px] h-[21px] rounded-full z-[3]">
                    <div className={`w-full h-full rounded-full ${currentConfig.wheelSpin}`}>
                      <svg viewBox="0 0 24 24" width="21" height="21" className="w-full h-full">
                        <circle cx="12" cy="12" r="11" fill="#16151E" stroke="#252433" strokeWidth="1.2" />
                        <circle cx="12" cy="12" r="8.5" fill="#191824" stroke="#81B524" strokeWidth="1.2" />
                        <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="7.75" y1="4.64" x2="16.25" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
                        <line x1="16.25" y1="4.64" x2="7.75" y2="19.36" stroke="#5D5A73" strokeWidth="1.4" strokeLinecap="round" />
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
              disabled={carState === 'PROCESSING' || carState === 'SUCCESS' || !agreeTerms}
              className="w-full bg-[#5D6BF8] hover:bg-[#4855E0] text-white py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all group disabled:opacity-80 disabled:cursor-not-allowed shadow-md shadow-[#5D6BF8]/20 cursor-pointer"
            >
              <span className="font-semibold text-[15px]">
                {carState === 'PROCESSING' 
                  ? 'Creating Account...' 
                  : carState === 'SUCCESS' 
                  ? 'Access Granted' 
                  : 'Create Account'}
              </span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Switcher to Login */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#5D6BF8] hover:text-[#4855E0] transition-colors">
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
