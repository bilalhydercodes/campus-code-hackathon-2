import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Code,
  Monitor,
  Shield,
  Share2,
  Download,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';

export interface CertificateData {
  id: string;
  iconType: 'award' | 'code' | 'monitor' | 'shield';
  title: string;
  issuer: string;
  issueDate: string;
  verified: boolean;
  isActive?: boolean;
  credentialId: string;
  skills: string[];
}

const CERTIFICATES: CertificateData[] = [
  {
    id: 'cert-1',
    iconType: 'award',
    title: 'React Frontend Specialist',
    issuer: 'Frontend Masters',
    issueDate: 'Issued Nov 5, 2026',
    verified: true,
    isActive: true,
    credentialId: 'CC-FM-2026-9942',
    skills: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'cert-2',
    iconType: 'code',
    title: 'Advanced Web Security',
    issuer: 'Coursera',
    issueDate: 'Issued Oct 31, 2026',
    verified: true,
    credentialId: 'CC-COUR-2026-8812',
    skills: ['OWASP Top 10', 'Zero-Trust Auth', 'JWT Security'],
  },
  {
    id: 'cert-3',
    iconType: 'monitor',
    title: "ReBuild '26 Arena Hackathon",
    issuer: 'CampusCode Engineering',
    issueDate: 'Issued Oct 15, 2026',
    verified: false,
    credentialId: 'CC-RB26-NAT-008',
    skills: ['Frontend Rebuild', 'UI/UX Engineering', 'Pixel Precision'],
  },
  {
    id: 'cert-4',
    iconType: 'shield',
    title: 'Digital Leadership Program',
    issuer: 'Collins Aerospace',
    issueDate: 'Issued Jul 12, 2026',
    verified: false,
    credentialId: 'CC-COLLINS-2026-44',
    skills: ['Systems Engineering', 'Leadership', 'Cloud Operations'],
  },
];

const FEATURED_ITEMS = [
  { id: 'f1', title: 'Get CampusCode on LinkedIn', link: 'https://www.linkedin.com/company/campuscode' },
  { id: 'f2', title: 'Advanced React Frontend Specialist', link: '#' },
  { id: 'f3', title: 'Web Security Fundamentals', link: '#' },
];

export default function CertificatesView() {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (cert: CertificateData, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(`${window.location.origin}/certificates#${cert.id}`);
    setCopiedId(cert.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (cert: CertificateData, e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Downloading certificate: ${cert.title} (${cert.credentialId})`);
  };

  const renderIcon = (type: CertificateData['iconType']) => {
    switch (type) {
      case 'award':
        return <Award className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />;
      case 'code':
        return <Code className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />;
      case 'monitor':
        return <Monitor className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />;
      case 'shield':
        return <Shield className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />;
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1240px] space-y-6">
      {/* Title & Subtitle matching screenshot */}
      <div className="space-y-1.5">
        <h1 className="font-inter text-[32px] sm:text-[36px] font-bold text-[#111111] tracking-tight">
          My Certificates
        </h1>
        <p className="font-inter text-[15px] text-[#71716D]">
          Manage and verify your earned credentials
        </p>
      </div>

      {/* Main 2-Column Grid + Right Featured Column */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Left Side: 2-Column Certificates Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 w-full">
          {CERTIFICATES.map((cert, index) => {
            const isHighlighted = cert.isActive;

            return (
              <motion.div
                key={cert.id}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.2 + (index % 2) * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.35,
                }}
                onClick={() => setSelectedCert(cert)}
                className={`group relative flex flex-col justify-between rounded-[24px] bg-white p-7 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-2 border-[#7665FF]/60 ring-4 ring-[#7665FF]/[0.06]'
                    : 'border border-[#E5E5DF] hover:border-[#7665FF]/40'
                }`}
              >
                <div>
                  {/* Top Row: Icon & Verified Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F4F0] transition-transform duration-300 group-hover:scale-105">
                      {renderIcon(cert.iconType)}
                    </div>

                    {cert.verified && (
                      <span className="rounded-lg bg-[#F0EDFF] px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#7665FF] uppercase select-none">
                        VERIFIED
                      </span>
                    )}
                  </div>

                  {/* Title & Issuer */}
                  <div className="mt-6 space-y-1 text-left">
                    <h3 className="font-inter text-[20px] font-bold text-[#111111] tracking-tight leading-snug group-hover:text-[#7665FF] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-inter text-[14px] text-[#71716D]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Issue Date & Actions */}
                <div className="mt-8 flex items-center justify-between pt-2">
                  <span className="font-inter text-[13px] text-[#71716D]">
                    {cert.issueDate}
                  </span>

                  <div className="flex items-center gap-1.5 text-[#111111]">
                    <button
                      type="button"
                      onClick={(e) => handleShare(cert, e)}
                      title="Share Credential"
                      className="rounded-full p-2 hover:bg-[#F4F4F0] hover:text-[#7665FF] transition-colors cursor-pointer"
                    >
                      {copiedId === cert.id ? (
                        <CheckCircle2 className="w-4 h-4 text-[#4D7C0F]" />
                      ) : (
                        <Share2 className="w-4 h-4" strokeWidth={2} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleDownload(cert, e)}
                      title="Download PDF"
                      className="rounded-full p-2 hover:bg-[#F4F4F0] hover:text-[#7665FF] transition-colors cursor-pointer"
                    >
                      <Download className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Featured Box matching screenshot */}
        <div className="w-full lg:w-[320px] xl:w-[340px] shrink-0 rounded-[24px] bg-white border border-[#E5E5DF] p-6 shadow-sm">
          <h2 className="font-inter text-[18px] font-bold text-[#111111] mb-2">
            Featured
          </h2>

          <div className="divide-y divide-[#F0F0EC]">
            {FEATURED_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="group flex items-center justify-between py-4.5 transition-colors cursor-pointer"
              >
                <span className="font-inter text-[14px] font-medium text-[#111111] group-hover:text-[#7665FF] transition-colors pr-3 leading-snug">
                  {item.title}
                </span>
                <ArrowRight className="w-4 h-4 text-[#111111] group-hover:text-[#7665FF] group-hover:translate-x-1 transition-all shrink-0" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Dialog for Certificate Details */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/40 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-[24px] border border-[#E5E5DF] bg-white p-7 text-[#111111] shadow-[0_24px_50px_rgba(17,17,17,0.16)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F4F0] text-[#111111]">
                {renderIcon(selectedCert.iconType)}
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-[#71716D] hover:text-[#111111] hover:bg-[#F2F2EE] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-1">
              <span className="rounded-lg bg-[#F0EDFF] px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#7665FF] uppercase select-none">
                VERIFIED CREDENTIAL
              </span>
              <h3 className="font-inter text-[22px] font-bold text-[#111111] tracking-tight pt-2">
                {selectedCert.title}
              </h3>
              <p className="font-inter text-[14px] text-[#71716D]">
                Issued by {selectedCert.issuer}
              </p>
            </div>

            <div className="mt-6 space-y-2.5 rounded-xl bg-[#F7F7F4] border border-[#E5E5DF] p-4 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-[#71716D]">Credential ID</span>
                <span className="font-bold text-[#7665FF]">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71716D]">Status</span>
                <span className="font-medium text-[#4D7C0F]">Verified on CampusCode</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#71716D]">Issue Date</span>
                <span className="text-[#111111]">{selectedCert.issueDate}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => handleDownload(selectedCert, e)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] text-white py-3 text-[13.5px] font-medium hover:bg-[#252525] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                onClick={(e) => handleShare(selectedCert, e)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E5DF] bg-[#F7F7F4] hover:bg-[#EAEAE5] px-5 py-3 text-[13.5px] font-medium text-[#111111] transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#71716D]" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
