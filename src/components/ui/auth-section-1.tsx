"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrainGradient } from "@paper-design/shaders-react";
import { mockUser } from "@/data/user";
import { ArrowLeft } from "phosphor-react";

export interface AuthSectionOneProps {
  initialMode?: "login" | "register";
}

export default function AuthSectionOne({ initialMode = "register" }: AuthSectionOneProps) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [optOutUpdates, setOptOutUpdates] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(true);

  const isRegister = mode === "register";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const fullName = isRegister
        ? `${firstName.trim()} ${lastName.trim()}`.trim() || mockUser.name
        : mockUser.name;
      const user = {
        ...mockUser,
        name: fullName,
        email: email || mockUser.email,
        campus_code_id: `CC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        avatar_initials: (fullName.charAt(0) || "S").toUpperCase(),
      };
      localStorage.setItem("token", "mock-token-2026");
      localStorage.setItem("role", "STUDENT");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/student");
    }, 450);
  };

  const handleSocialAuth = (provider: string) => {
    setIsLoading(true);
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

  return (
    <section className="min-h-screen bg-[#F7F7F4] flex flex-col justify-center items-center p-3 xs:p-4 sm:p-6 lg:p-8 text-[#111111] antialiased [font-synthesis:none]">
      {/* Top navigation header above the card */}
      <div className="w-full max-w-[960px] flex items-center justify-between mb-3 px-1">
        <Link
          to="/"
          className="flex items-center gap-2 transition-transform hover:-translate-y-0.5"
        >
          <img
            src="/campuscode-logo.png"
            alt="CampusCode"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#71716D] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft size={16} className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main compact card container */}
      <div className="w-full max-w-[960px] rounded-2xl border border-[#DEDED8] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Form Container (responsive interior padding) */}
        <div className="flex items-center p-5 xs:p-6 sm:p-8 md:p-10 lg:p-11 bg-white">
          <div className="w-full max-w-[420px] mx-auto">
            {/* Header Block */}
            <div>
              <h1 className="font-inter text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                {isRegister ? "Create an account" : "Welcome back"}
              </h1>
            </div>

            {/* Social Authentication Buttons Group */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <SocialButton
                icon={<GoogleIcon />}
                label={isRegister ? "Sign up with Google" : "Sign in with Google"}
                onClick={() => handleSocialAuth("Google")}
              />
              <SocialButton
                icon={<AppleIcon />}
                label={isRegister ? "Sign up with Apple" : "Sign in with Apple"}
                onClick={() => handleSocialAuth("Apple")}
              />
            </div>

            {/* Divider */}
            <div className="my-4 sm:my-5 text-center font-mono text-[11px] uppercase tracking-wider text-[#888880]">
              or
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="space-y-3.5 sm:space-y-4">
                {isRegister ? (
                  <>
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <FieldBox
                        label="First Name"
                        value={firstName}
                        onChange={setFirstName}
                      />
                      <FieldBox
                        label="Last Name"
                        value={lastName}
                        onChange={setLastName}
                      />
                    </div>

                    {/* Email */}
                    <FieldBox
                      label="Email"
                      value={email}
                      type="email"
                      onChange={setEmail}
                    />

                    {/* Password */}
                    <FieldBox
                      label="Password"
                      value={password}
                      type="password"
                      onChange={setPassword}
                    />
                  </>
                ) : (
                  <>
                    {/* Login Fields */}
                    <FieldBox
                      label="Email"
                      value={email}
                      type="email"
                      onChange={setEmail}
                    />

                    <FieldBox
                      label="Password"
                      value={password}
                      type="password"
                      onChange={setPassword}
                    />
                  </>
                )}

                {/* Checkbox section */}
                <div className="space-y-2.5 pt-1 text-xs leading-5 text-[#71716D]">
                  <CheckboxLine
                    checked={optOutUpdates}
                    onChange={(checked) => setOptOutUpdates(checked)}
                  >
                    I don't want to receive promotional emails
                  </CheckboxLine>
                  <CheckboxLine
                    checked={agreedTerms}
                    onChange={(checked) => setAgreedTerms(checked)}
                  >
                    By proceeding, you agree to our{" "}
                    <a
                      href="#"
                      className="font-medium text-[#111111] underline underline-offset-2"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-[#111111] underline underline-offset-2"
                    >
                      Privacy Policy
                    </a>
                  </CheckboxLine>
                </div>
              </div>

              {/* Submit Button (24px gap) */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-black/40 bg-[#111111] text-base font-medium text-white transition-all hover:bg-black/85 active:scale-[0.99] disabled:opacity-70 cursor-pointer shadow-xs"
                >
                  <span>
                    {isLoading
                      ? "Authenticating..."
                      : isRegister
                      ? "Submit"
                      : "Sign In"}
                  </span>
                </button>
              </div>

              {/* Mode Switcher */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#EAEAE5] pt-3.5 font-mono text-[11px]">
                <span className="text-[#71716D]">
                  {isRegister ? "ALREADY HAVE AN ACCOUNT?" : "NEED A STUDENT ACCOUNT?"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (isRegister) {
                      navigate('/login');
                    } else {
                      setMode('register');
                    }
                  }}
                  className="font-semibold text-[#7665FF] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {isRegister ? "SIGN IN →" : "CREATE ACCOUNT →"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Animated GrainGradient Shader with #7665FF accent */}
        <div className="relative flex min-h-[380px] lg:min-h-0 overflow-hidden bg-black p-8 sm:p-10 text-white items-center">
          <GrainGradient
            speed={1}
            scale={1}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={0.5}
            noise={0.25}
            shape="corners"
            frame={2854.5}
            colors={["#FFFFFF", "#7665FF", "#7665FF", "#FFFFFF"]}
            colorBack="#00000000"
            className="absolute inset-0 bg-black"
          />

          <div className="relative z-10 flex h-full w-full flex-col justify-center">
            <h2 className="max-w-[420px] text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.05]">
              Think fast,
              <br />
              Build faster
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({
  icon,
  label,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-10 items-center justify-center gap-2 rounded-lg border border-black/20 bg-white px-2.5 text-xs sm:text-[13px] font-medium leading-none text-black transition-colors hover:bg-black/[0.04] active:scale-[0.98] cursor-pointer"
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate whitespace-nowrap">{label}</span>
    </button>
  );
}

function FieldBox({
  label,
  value = "",
  type = "text",
  onChange,
}: {
  label: string;
  value?: string;
  type?: string;
  onChange?: (val: string) => void;
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    onChange?.(val);
  };

  return (
    <label className="flex h-11 sm:h-12 items-center justify-between gap-3 rounded-lg border border-black/20 bg-white px-3.5 sm:px-4 text-base leading-none transition-all focus-within:border-[#7665FF] focus-within:ring-2 focus-within:ring-[#7665FF]/15 cursor-text">
      <input
        type={type}
        value={inputValue}
        aria-label={label}
        onChange={handleChange}
        className="min-w-0 flex-1 truncate bg-transparent text-black outline-none font-inter text-sm sm:text-base"
      />
      {!inputValue && (
        <span className="shrink-0 text-xs sm:text-sm font-normal text-black/45 select-none">
          {label}
        </span>
      )}
    </label>
  );
}

function CheckboxLine({
  children,
  checked = false,
  onChange,
}: {
  children: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer select-none">
      <span className="relative mt-0.5 size-3.5 shrink-0">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="peer size-full appearance-none rounded-[2px] border border-black/25 bg-white checked:border-black checked:bg-black cursor-pointer"
        />
        <svg
          viewBox="0 0 12 12"
          className="pointer-events-none absolute inset-0 hidden size-full p-0.5 text-white peer-checked:block"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 6.2 5 8.1 9 3.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[12px]">{children}</span>
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
        fill="#EB4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.42-1.07-3.98-1.04-2.05.03-3.94 1.19-4.99 3.02-2.13 3.69-.54 9.16 1.53 12.15 1.01 1.46 2.22 3.1 3.81 3.04 1.53-.06 2.11-.99 3.96-.99s2.37.99 3.99.96c1.65-.03 2.69-1.49 3.69-2.96 1.16-1.69 1.64-3.33 1.66-3.41-.04-.02-3.2-1.23-3.24-4.87ZM14.03 3.66c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.68.81-3.55 1.83-.78.9-1.46 2.34-1.28 3.72 1.35.1 2.73-.69 3.58-1.71Z" />
    </svg>
  );
}
