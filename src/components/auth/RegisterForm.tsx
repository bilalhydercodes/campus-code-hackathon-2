import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mockUser } from "../../data/user";
import { Eye, EyeSlash, WarningCircle, GraduationCap } from "phosphor-react";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("Sai Raghavan");
  const [email, setEmail] = useState("sai@campuscode.co.in");
  const [password, setPassword] = useState("ArenaPass#2026");
  const [confirmPassword, setConfirmPassword] = useState("ArenaPass#2026");
  const [showPassword, setShowPassword] = useState(false);
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      setErrorMessage("Please enter your university email.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (!isAgeConfirmed) {
      setErrorMessage("Please confirm your age and university enrollment.");
      return;
    }

    setIsLoading(true);

    // Foolproof account creation for judges: immediately authenticates and routes to student arena
    setTimeout(() => {
      const user = {
        ...mockUser,
        name: name || mockUser.name,
        email: email || mockUser.email,
        campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        avatar_initials: name.charAt(0).toUpperCase() || "S",
      };
      localStorage.setItem("token", "mock-token-2026");
      localStorage.setItem("role", "STUDENT");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/student");
    }, 450);
  };

  const handleSocialRegister = (provider: string) => {
    setSocialLoading(provider);
    setTimeout(() => {
      const user = {
        ...mockUser,
        name: `${provider} Builder`,
        email: `builder@${provider.toLowerCase()}.com`,
        campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      };
      localStorage.setItem("token", `mock-token-${provider.toLowerCase()}-2026`);
      localStorage.setItem("role", "STUDENT");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/student");
    }, 400);
  };

  const fillDemoStudent = () => {
    setName("Sai Raghavan");
    setEmail("sai@campuscode.co.in");
    setPassword("ArenaPass#2026");
    setConfirmPassword("ArenaPass#2026");
    setIsAgeConfirmed(true);
  };

  return (
    <div className="relative w-full rounded-2xl border border-[#DEDED8] bg-white/95 p-[40px] md:p-[48px] shadow-[0_24px_70px_rgba(0,0,0,0.06)] backdrop-blur-md">
      {/* Top brand luminous accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#7665FF] to-[#A8E62E]" />

      {/* Header Block */}
      <div className="flex items-start justify-between">
        <div>
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.05em] text-[#7665FF]">
            NEW STUDENT ONBOARDING
          </span>
          <h2 className="mt-1 font-inter text-[30px] md:text-[34px] font-bold tracking-tight text-[#111111] leading-[1.12]">
            Create Identity
          </h2>
          {/* Header to Subtitle gap: EXACTLY 8px (mt-2) */}
          <p className="mt-2 font-inter text-[14px] leading-[1.6] text-[#555550]">
            Register your university builder profile to enter national hackathons.
          </p>
        </div>
        <div className="hidden sm:block font-mono text-[10px] tracking-wider text-[#888880] border border-[#DEDED8] rounded px-2 py-1 bg-[#FAFAF8]">
          CC / 02
        </div>
      </div>

      {/* Quick Judge Fill Pill */}
      <div className="mt-4 flex items-center justify-between rounded-lg border border-[#A8E62E]/30 bg-[#A8E62E]/[0.08] px-3.5 py-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#82B91A]" />
          <span className="font-mono text-[10px] text-[#4F4F4B]">
            JUDGE TEST: <strong className="text-[#111111]">Instant Fill Profile</strong>
          </span>
        </div>
        <button
          type="button"
          onClick={fillDemoStudent}
          className="font-mono text-[10px] font-semibold text-[#5F8B08] hover:underline"
        >
          ⚡ Auto-Fill
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] w-full bg-[#EAEAE5]" />

      {/* Error notification if any */}
      {errorMessage && (
        <div className="mb-5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[12px] text-red-600">
          <WarningCircle size={25} className="w-[25px] h-[25px] shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form with exact token hierarchy */}
      <form onSubmit={handleRegister}>
        {/* Field Group Container: EXACTLY 20px gap between field groups (space-y-5) */}
        <div className="space-y-5">
          {/* Field 1: Full Name */}
          <div>
            <label
              htmlFor="reg-name"
              className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
            >
              FULL NAME
            </label>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
              <span className="font-mono text-[13px] text-[#888880] select-none mr-2">◇</span>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sai Raghavan"
                required
                className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
              />
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Legal name as shown on your university identification.
            </p>
          </div>

          {/* Field 2: Email Address */}
          <div>
            <label
              htmlFor="reg-email"
              className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
            >
              COLLEGE / BUILDER EMAIL
            </label>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
              <span className="font-mono text-[13px] text-[#888880] select-none mr-2">@</span>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sai@campuscode.co.in"
                required
                className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
              />
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Invitations, API keys, and team alerts will be sent here.
            </p>
          </div>

          {/* Field 3: Account Role */}
          <div>
            <label
              htmlFor="reg-role"
              className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
            >
              ARENA ROLE
            </label>
            {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
            <div className="mt-2 flex h-[48px] items-center justify-between rounded-lg border border-[#DEDED8] bg-[#F2F2EE] px-3.5 opacity-95">
              <div className="flex items-center gap-2">
                <GraduationCap size={25} className="w-[25px] h-[25px] text-[#555550] shrink-0" />
                <span className="font-mono text-[12.5px] font-bold text-[#111111]">
                  STUDENT BUILDER (NATIONAL ARENA)
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#5F8B08] font-semibold bg-[#A8E62E]/20 px-2 py-0.5 rounded">
                ELIGIBLE
              </span>
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Organizer access? Contact <span className="text-[#7665FF]">organizers@campuscode.co.in</span>
            </p>
          </div>

          {/* Field 4: Password & Confirm Password */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="reg-password"
                  className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
                >
                  PASSWORD
                </label>
                {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
                <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-1 text-[#71716D] hover:text-[#111111]"
                  >
                    {showPassword ? <EyeSlash size={25} className="w-[25px] h-[25px]" /> : <Eye size={25} className="w-[25px] h-[25px]" />}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="reg-confirm"
                  className="block font-mono text-[11px] font-medium tracking-[0.05em] uppercase text-[#111111]"
                >
                  CONFIRM PASSWORD
                </label>
                {/* Form Label to Input Field: EXACTLY 8px gap (mt-2) */}
                <div className="mt-2 flex h-[48px] items-center rounded-lg border border-[#DEDED8] bg-[#FAFAF8] px-3.5 transition-all focus-within:border-[#7665FF] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7665FF]/15">
                  <input
                    id="reg-confirm"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="h-full w-full bg-transparent font-inter text-[13.5px] text-[#111111] placeholder:text-[#999990] outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Input Field to Helper Text: EXACTLY 4px gap (mt-1) */}
            <p className="mt-1 font-inter text-[11px] text-[#71716D]">
              Must be at least 8 characters with letters, numbers, or symbols.
            </p>
          </div>

          {/* Field 5: Eligibility Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="reg-age"
              checked={isAgeConfirmed}
              onChange={(e) => setIsAgeConfirmed(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#DEDED8] accent-[#7665FF] cursor-pointer"
            />
            <label htmlFor="reg-age" className="font-inter text-[12px] leading-tight text-[#555550] cursor-pointer select-none">
              I confirm that I am an enrolled university student (18+) eligible to participate in national hackathon challenges.
            </label>
          </div>
        </div>

        {/* Last Input/Helper to Primary Submit Button: EXACTLY 24px gap (mt-6) */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="group flex h-[48px] md:h-[50px] w-full items-center justify-between rounded-full bg-[#111111] px-6 font-inter text-[13.5px] font-medium text-white transition-all hover:bg-[#252525] active:scale-[0.99] shadow-xs disabled:opacity-70 cursor-pointer"
          >
            <span>{isLoading ? "CREATING BUILDER IDENTITY..." : "CREATE STUDENT IDENTITY"}</span>
            <div className="flex items-center justify-center rounded-full bg-white/20 h-6 w-6 text-white transition-transform group-hover:translate-x-0.5">
              <span className="text-[#A8E62E] font-mono font-bold text-[14px] leading-none">→</span>
            </div>
          </button>
        </div>

        {/* Primary Button to Secondary/Social Group: EXACTLY 24px gap (mt-6) */}
        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EAEAE5]" />
            </div>
            <span className="relative bg-white px-3 font-mono text-[10px] uppercase tracking-wider text-[#888880]">
              or register with
            </span>
          </div>

          {/* Secondary Buttons Group: Between Secondary Buttons: EXACTLY 8px gap (gap-2) */}
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleSocialRegister("Google")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/google.svg" alt="Google" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">Google</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialRegister("GitHub")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/github.svg" alt="GitHub" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">GitHub</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialRegister("Microsoft")}
              disabled={!!socialLoading}
              className="flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#DEDED8] bg-white px-3 font-inter text-[12.5px] font-medium text-[#111111] transition-all hover:bg-[#F2F2EE] hover:border-[#111111]/30 active:scale-[0.98] cursor-pointer"
            >
              <img src="/logos/microsoft.svg" alt="Microsoft" className="h-4 w-4 object-contain" />
              <span className="hidden sm:inline">Microsoft</span>
            </button>
          </div>
        </div>

        {/* Switcher Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#EAEAE5] pt-4 font-mono text-[11px]">
          <span className="text-[#71716D]">ALREADY HAVE AN ACCOUNT?</span>
          <Link
            to="/login"
            className="font-semibold text-[#7665FF] hover:text-[#111111] transition-colors"
          >
            SIGN IN →
          </Link>
        </div>
      </form>
    </div>
  );
}
