"use client";

import React from "react";
import { AntigravityCertificate } from "@/components/ui/antigravity-certificate";
import { Award, Code, Monitor, Shield } from "lucide-react";

const certificatesData = [
  {
    icon: <Award className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />,
    title: "React Frontend Specialist",
    issuer: "Frontend Masters",
    date: "Issued Nov 5, 2026",
    verified: true,
    isActive: true,
  },
  {
    icon: <Code className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />,
    title: "Advanced Web Security",
    issuer: "Coursera",
    date: "Issued Oct 31, 2026",
    verified: true,
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />,
    title: "ReBuild '26 Arena Hackathon",
    issuer: "CampusCode Engineering",
    date: "Issued Oct 15, 2026",
    verified: false,
  },
  {
    icon: <Shield className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />,
    title: "Digital Leadership Program",
    issuer: "Collins Aerospace",
    date: "Issued Jul 12, 2026",
    verified: false,
  },
];

export default function AntigravityCertificatesDemo() {
  return (
    <div className="min-h-screen w-full bg-[#F7F7F4] p-8 md:p-16">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
            My Certificates
          </h1>
          <p className="text-sm text-[#71716D]">
            Manage and verify your earned credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <AntigravityCertificate
              key={index}
              index={index}
              icon={cert.icon}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              verified={cert.verified}
              isActive={cert.isActive}
              onShare={(e) => {
                e.stopPropagation();
                alert(`Share link copied for ${cert.title}`);
              }}
              onDownload={(e) => {
                e.stopPropagation();
                alert(`Downloading ${cert.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
