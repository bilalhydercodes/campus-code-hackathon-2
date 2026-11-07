"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  PaperPlaneTilt,
  GithubLogo as Github,
  InstagramLogo as Instagram,
  LinkedinLogo as Linkedin,
  TwitterLogo as Twitter,
} from "phosphor-react"

function Footerdemo() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 4000)
      setEmail("")
    }
  }

  return (
    <footer className="relative border-t border-[#111111]/[0.08] dark:border-white/[0.08] bg-[#F7F7F4] dark:bg-[#0E0E12] text-[#111111] dark:text-[#F7F7F4] transition-colors duration-300">
      {/* Subtle 2-3% atmospheric transition from CTA */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(118, 101, 255, 0.025), transparent)',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1320px] px-6 py-14 lg:px-11">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Stay Connected / Newsletter */}
          <div className="relative">
            <a href="#" className="mb-4 inline-flex items-center">
              <img
                src="/campuscode-logo.png"
                alt="CampusCode"
                className="h-8 w-auto object-contain object-left dark:brightness-110"
              />
            </a>
            <h2 className="mb-2 text-2xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-sm text-[#71716D] dark:text-[#A1A1AA]">
              Join our arena dispatch for weekly hackathon alerts, new tracks, and team drops.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your student email"
                className="pr-12 backdrop-blur-sm border-[#DEDED8] dark:border-white/10 dark:bg-white/5 focus-visible:ring-[#7665FF]"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#7665FF] hover:bg-[#6352F0] text-white transition-transform hover:scale-105"
              >
                <PaperPlaneTilt size={25} className="w-[25px] h-[25px]" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs font-medium text-[#82B91A]">
                ✓ Welcome to the CampusCode dispatch!
              </p>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold tracking-tight text-[#111111] dark:text-white">
              Quick Links
            </h3>
            <nav className="space-y-2.5 text-sm text-[#71716D] dark:text-[#A1A1AA]">
              <a href="#" className="block transition-colors hover:text-[#7665FF] dark:hover:text-white">
                Home
              </a>
              <a href="#about" className="block transition-colors hover:text-[#7665FF] dark:hover:text-white">
                About Us
              </a>
              <a href="#how" className="block transition-colors hover:text-[#7665FF] dark:hover:text-white">
                How It Works
              </a>
              <a href="#hackathons" className="block transition-colors hover:text-[#7665FF] dark:hover:text-white">
                Active Challenges
              </a>
              <a href="#community" className="block transition-colors hover:text-[#7665FF] dark:hover:text-white">
                Student Community
              </a>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="mb-4 text-base font-semibold tracking-tight text-[#111111] dark:text-white">
              Contact Us
            </h3>
            <address className="space-y-2.5 text-sm not-italic text-[#71716D] dark:text-[#A1A1AA]">
              <p className="font-medium text-[#111111] dark:text-white">CampusCode HQ</p>
              <p>Anna Salai, Tech Corridor</p>
              <p>Chennai, Tamil Nadu 600002</p>
              <p className="pt-1">
                Phone:{" "}
                <a href="tel:+914448202026" className="hover:text-[#7665FF]">
                  +91 (044) 4820-2026
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:hello@campuscode.in" className="hover:text-[#7665FF]">
                  hello@campuscode.in
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Follow Us & Theme Toggle */}
          <div className="relative">
            <h3 className="mb-4 text-base font-semibold tracking-tight text-[#111111] dark:text-white">
              Follow Us
            </h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DEDED8] dark:border-white/10 bg-white dark:bg-white/5 text-[#111111] dark:text-white transition-colors hover:bg-[#F0F0EC] dark:hover:bg-white/10 hover:text-[#7665FF]"
                    >
                      <Twitter size={25} className="w-[25px] h-[25px]" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter / X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DEDED8] dark:border-white/10 bg-white dark:bg-white/5 text-[#111111] dark:text-white transition-colors hover:bg-[#F0F0EC] dark:hover:bg-white/10 hover:text-[#7665FF]"
                    >
                      <Linkedin size={25} className="w-[25px] h-[25px]" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DEDED8] dark:border-white/10 bg-white dark:bg-white/5 text-[#111111] dark:text-white transition-colors hover:bg-[#F0F0EC] dark:hover:bg-white/10 hover:text-[#7665FF]"
                    >
                      <Instagram size={25} className="w-[25px] h-[25px]" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DEDED8] dark:border-white/10 bg-white dark:bg-white/5 text-[#111111] dark:text-white transition-colors hover:bg-[#F0F0EC] dark:hover:bg-white/10 hover:text-[#7665FF]"
                    >
                      <Github size={25} className="w-[25px] h-[25px]" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Explore code on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#111111]/[0.08] dark:border-white/[0.08] pt-8 text-center md:flex-row">
          <p className="font-mono text-xs text-[#71716D] dark:text-[#A1A1AA]">
            CampusCode © 2026 · LEARN · BUILD · COMPETE · SHIP · ALL RIGHTS RESERVED
          </p>
          <nav className="flex flex-wrap justify-center gap-5 font-mono text-xs text-[#71716D] dark:text-[#A1A1AA]">
            <a href="#" className="transition-colors hover:text-[#7665FF] dark:hover:text-white">
              Hackathon Rules
            </a>
            <a href="#" className="transition-colors hover:text-[#7665FF] dark:hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-[#7665FF] dark:hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-[#7665FF] dark:hover:text-white">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
