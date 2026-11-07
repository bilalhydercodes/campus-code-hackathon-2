import { useState } from 'react';
import {
  mockDispatches,
  OfficialDispatch
} from '../../data/officialCommunication';
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Download,
  CheckCircle2,
  Calendar,
  User,
  Radio,
  Search,
  ChevronRight,
  ExternalLink,
  Printer,
  Copy,
  Check,
  Send,
  HelpCircle,
  FileCheck2,
  Sparkles,
  Lock
} from 'lucide-react';

interface OfficialCommunicationViewProps {
  userName?: string;
  onNavigateTab?: (tab: string) => void;
}

export default function OfficialCommunicationView({
  userName = 'Mahammad Bilal Hyder',
  onNavigateTab,
}: OfficialCommunicationViewProps) {
  const [dispatches, setDispatches] = useState<OfficialDispatch[]>(mockDispatches);
  const [selectedId, setSelectedId] = useState<string>(dispatches[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  // Digital Signature Modal State
  const [showSignModal, setShowSignModal] = useState<boolean>(false);
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const [signSuccessAlert, setSignSuccessAlert] = useState<boolean>(false);

  // Inquiry Desk Modal State
  const [showInquiryModal, setShowInquiryModal] = useState<boolean>(false);
  const [inquiryCategory, setInquiryCategory] = useState<string>('Problem Statement Clarification');
  const [inquirySubject, setInquirySubject] = useState<string>('');
  const [inquiryMessage, setInquiryMessage] = useState<string>('');
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const selectedDispatch =
    dispatches.find((d) => d.id === selectedId) || dispatches[0];

  const filteredDispatches = dispatches.filter((d) => {
    const matchesCategory =
      activeCategory === 'ALL' || d.category === activeCategory;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.refId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.sender.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyHash = (hash: string) => {
    navigator.clipboard?.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleConfirmSignature = () => {
    setIsSigning(true);
    setTimeout(() => {
      const now = new Date();
      const timestampString = `Nov 06, 2026 · ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} IST`;

      setDispatches((prev) =>
        prev.map((d) =>
          d.id === selectedDispatch.id
            ? { ...d, signed: true, signedAt: timestampString }
            : d
        )
      );
      setIsSigning(false);
      setShowSignModal(false);
      setSignSuccessAlert(true);
      setTimeout(() => setSignSuccessAlert(false), 4000);
    }, 600);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquirySubject.trim() || !inquiryMessage.trim()) return;

    setInquirySubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setInquirySubject('');
      setInquiryMessage('');
      setInquirySubmitted(false);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  const pendingSignaturesCount = dispatches.filter((d) => d.requiresSign && !d.signed).length;

  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-16 select-none font-inter text-[#111111]">
      {/* Top Breadcrumb & User Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-gray-500">
          <span>CAMPUSCODE</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-gray-900">STUDENT</span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-bold text-purple-600">OFFICIAL COMMUNICATION</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowInquiryModal(true)}
            className="flex items-center gap-1.5 font-mono text-xs font-bold text-purple-700 hover:text-purple-900 cursor-pointer uppercase transition-colors"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>ORGANIZER DESK</span>
          </button>
          <span className="text-gray-300">|</span>
          <button
            type="button"
            onClick={() => onNavigateTab?.('Profile')}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 font-semibold text-gray-800 shadow-2xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
              {userName.charAt(0)}
            </span>
            <span>{userName}</span>
          </button>
        </div>
      </div>

      {/* Live Operations Ticker Banner */}
      <div className="relative overflow-hidden rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-white px-4 py-3 text-xs shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
            </span>
            <span className="font-mono font-bold text-purple-900 uppercase tracking-wider">
              OFFICIAL BROADCAST REGISTER
            </span>
            <span className="hidden sm:inline text-purple-300">•</span>
            <span className="text-purple-800 font-medium truncate">
              All directives issued in this chamber are binding under ReBuild '26 Regulations
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2.5 py-0.5 font-mono text-[11px] font-bold text-purple-800">
              <Radio className="h-3 w-3 animate-pulse text-purple-600" /> ACTIVE FEED
            </span>
            {pendingSignaturesCount > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 font-mono text-[11px] font-bold text-amber-800 animate-pulse">
                <AlertTriangle className="h-3 w-3 text-amber-600" /> {pendingSignaturesCount} SIGNATURE REQUIRED
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Signature Confirmation Toast */}
      {signSuccessAlert && (
        <div className="flex items-center justify-between rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-900 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check className="h-4 w-4 stroke-[3]" />
            </span>
            <div>
              <p className="text-sm font-bold">Directive Digitally Certified!</p>
              <p className="text-xs text-emerald-700">
                Your cryptographic acknowledgment has been recorded on the immutable steering audit trail.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSignSuccessAlert(false)}
            className="text-xs font-semibold text-emerald-800 hover:underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Split-View Chamber */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Dispatches Feed (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5 shadow-xs space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black tracking-tight text-gray-900 font-inter">
                Council Dispatches
              </h2>
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-mono font-bold text-gray-600">
                {filteredDispatches.length} Total
              </span>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search directives, ref IDs, councils..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50/50 pl-9 pr-3 py-2 text-xs font-medium placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['ALL', 'DIRECTIVE', 'JURY & RUBRIC', 'SPONSOR PERKS', 'CIRCULAR'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-black text-white shadow-2xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'JURY & RUBRIC' ? 'JURY' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dispatch Cards List */}
          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1">
            {filteredDispatches.map((dispatch) => {
              const isSelected = dispatch.id === selectedDispatch.id;
              return (
                <div
                  key={dispatch.id}
                  onClick={() => setSelectedId(dispatch.id)}
                  className={`group relative rounded-xl border p-4 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-black bg-white shadow-[4px_4px_0px_0px_#8B5CF6] -translate-y-0.5'
                      : 'border-black/10 bg-white hover:border-black/30 hover:bg-gray-50/80 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-extrabold text-gray-400 tracking-wider">
                      {dispatch.refId}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {dispatch.priority === 'URGENT' && (
                        <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-black text-rose-700 tracking-wide uppercase">
                          URGENT
                        </span>
                      )}
                      {dispatch.requiresSign && (
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wide uppercase flex items-center gap-1 ${
                            dispatch.signed
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800 animate-pulse'
                          }`}
                        >
                          {dispatch.signed ? '✓ Signed' : 'Sign Req'}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-1">
                    {dispatch.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {dispatch.summary}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400 font-mono pt-2 border-t border-gray-100">
                    <span className="truncate max-w-[170px]">{dispatch.senderTitle}</span>
                    <span>{dispatch.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Formal Letterhead Memo Reader (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border-[2px] border-black bg-white p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000]">
            {/* Background Watermark Crest */}
            <div className="pointer-events-none absolute right-4 top-4 select-none opacity-[0.03]">
              <ShieldCheck className="h-96 w-96 text-black" />
            </div>

            {/* Top Memo Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-black px-2 py-0.5 text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                  MEMO REF: {selectedDispatch.refId}
                </span>
                <span className="rounded border border-purple-200 bg-purple-50 px-2 py-0.5 text-[10px] font-mono font-bold text-purple-700 uppercase">
                  {selectedDispatch.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-mono font-bold text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                  title="Print this memo"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>PRINT</span>
                </button>
              </div>
            </div>

            {/* Formal Executive Letterhead */}
            <div className="space-y-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-inter">
                    {selectedDispatch.title}
                  </h1>
                  <p className="mt-1 font-mono text-xs font-bold text-purple-700 uppercase">
                    ISSUED BY: {selectedDispatch.council}
                  </p>
                </div>
              </div>

              {/* Memorandum Metadata Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border border-gray-200 bg-gray-50/70 p-3.5 text-xs font-mono">
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">FROM:</span>
                  <strong className="text-gray-900 truncate block">{selectedDispatch.sender}</strong>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">OFFICE:</span>
                  <span className="text-gray-700 truncate block">{selectedDispatch.senderTitle}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">DATE:</span>
                  <span className="text-gray-700 block">{selectedDispatch.date}</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[10px] uppercase">TIME (IST):</span>
                  <span className="text-gray-700 block">{selectedDispatch.timestamp}</span>
                </div>
              </div>

              {/* Cryptographic SHA-256 Verification Ribbon */}
              <div className="flex items-center justify-between gap-2 rounded-lg border border-purple-100 bg-purple-50/50 px-3 py-2 text-[11px] font-mono text-purple-900">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <Lock className="h-3.5 w-3.5 text-purple-600 shrink-0" />
                  <span className="text-purple-700 shrink-0 font-bold">SHA-256:</span>
                  <span className="truncate text-purple-950 font-medium">
                    {selectedDispatch.sha256}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyHash(selectedDispatch.sha256)}
                  className="flex shrink-0 items-center gap-1 rounded bg-white px-2 py-0.5 text-[10px] font-bold text-purple-700 shadow-2xs hover:bg-purple-100 cursor-pointer"
                >
                  {copiedHash ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Memo Body Content */}
            <div className="space-y-4 text-sm leading-relaxed text-gray-800 border-t border-gray-100 pt-6">
              {selectedDispatch.body.map((para, i) => (
                <p key={i} className="text-gray-700 font-normal">
                  {para}
                </p>
              ))}

              {/* Key Directives Checklist Callout */}
              <div className="rounded-xl border-[2px] border-black/80 bg-[#FFFDF0] p-5 shadow-[3px_3px_0px_0px_#000] space-y-3 mt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" /> Key Directives & Action Items
                </h4>
                <ul className="space-y-2">
                  {selectedDispatch.keyDirectives.map((dir, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-900 font-medium leading-relaxed">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black text-[9px] font-black text-white mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{dir}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Attachments */}
              {selectedDispatch.attachments.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-gray-100 mt-6">
                  <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    OFFICIAL ATTACHMENTS ({selectedDispatch.attachments.length})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedDispatch.attachments.map((att, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50/80 p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <FileText className="h-4 w-4 text-purple-600 shrink-0" />
                          <div className="truncate">
                            <p className="text-xs font-bold text-gray-900 truncate">{att.name}</p>
                            <p className="text-[10px] font-mono text-gray-400">{att.size}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            // Mock attachment download
                            const element = document.createElement('a');
                            const file = new Blob([`Official CampusCode Directive Attachment: ${att.name}`], { type: 'text/plain' });
                            element.href = URL.createObjectURL(file);
                            element.download = att.name;
                            document.body.appendChild(element);
                            element.click();
                            document.body.removeChild(element);
                          }}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:text-black hover:border-black cursor-pointer shadow-2xs"
                          title="Download attachment"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Digital Certification / Signing Footer Action */}
              <div className="pt-6 border-t-2 border-black mt-8">
                {selectedDispatch.requiresSign ? (
                  selectedDispatch.signed ? (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs">
                          <FileCheck2 className="h-5 w-5 stroke-[2.5]" />
                        </span>
                        <div>
                          <p className="text-xs font-mono font-bold text-emerald-950 uppercase tracking-wider">
                            DIGITALLY CERTIFIED & SIGNED
                          </p>
                          <p className="text-xs text-emerald-800">
                            Signed by <strong className="text-emerald-950">{userName}</strong> on {selectedDispatch.signedAt}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-800 bg-emerald-200/60 px-3 py-1 rounded-full self-start sm:self-center">
                        ✓ COMPLIANCE VERIFIED
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-amber-300 bg-amber-50/80 p-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-700" />
                          <h4 className="text-xs font-mono font-black text-amber-950 uppercase tracking-wider">
                            ACTION REQUIRED: PARTICIPANT ACKNOWLEDGMENT
                          </h4>
                        </div>
                        <p className="text-xs text-amber-800">
                          This directive requires your formal digital signature to validate compliance for Round 1 score release.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowSignModal(true)}
                        className="flex items-center justify-center gap-2 rounded-lg border-[2px] border-black bg-black px-5 py-2.5 text-xs font-black text-white uppercase tracking-wider shadow-[3px_3px_0px_0px_#8B5CF6] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-800 cursor-pointer shrink-0"
                      >
                        <Sparkles className="h-4 w-4 text-purple-400" />
                        <span>Sign & Acknowledge</span>
                      </button>
                    </div>
                  )
                ) : (
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>STATUS: IMMUTABLE HISTORICAL CIRCULAR</span>
                    <span className="text-emerald-600 font-bold">✓ AUTHORIZED BY STEERING COUNCIL</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DIGITAL SIGNATURE MODAL                                  */}
      {/* ======================================================== */}
      {showSignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-2xl border-[2px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-black text-gray-900">Digital Acknowledgment</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSignModal(false)}
                className="text-gray-400 hover:text-black font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <p>
                You are executing a binding participant sign-off on:
              </p>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 font-mono">
                <strong className="text-gray-900 block text-sm font-sans mb-1">
                  {selectedDispatch.title}
                </strong>
                <span className="text-[11px] text-purple-700">REF: {selectedDispatch.refId}</span>
              </div>
              <div className="rounded-lg bg-purple-50 border border-purple-200 p-3 space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">SIGNER:</span>
                  <strong className="text-gray-900">{userName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">ROLE:</span>
                  <strong className="text-gray-900">Participant / Team Lead</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-mono">CERTIFICATE ID:</span>
                  <strong className="text-purple-700">CC-2026-8492</strong>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 italic">
                By clicking "Certify & Sign", your digital signature and real-time timestamp will be recorded on the official organizer ledger.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowSignModal(false)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isSigning}
                onClick={handleConfirmSignature}
                className="flex items-center gap-2 rounded-lg border-[2px] border-black bg-black px-5 py-2 text-xs font-black text-white uppercase tracking-wider shadow-[3px_3px_0px_0px_#8B5CF6] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-800 disabled:opacity-50 cursor-pointer"
              >
                {isSigning ? (
                  <span>Signing...</span>
                ) : (
                  <>
                    <Check className="h-4 w-4 stroke-[3]" />
                    <span>Certify & Sign</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ORGANIZER INQUIRY DESK MODAL                             */}
      {/* ======================================================== */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl border-[2px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-black text-gray-900">Official Inquiry Desk</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowInquiryModal(false)}
                className="text-gray-400 hover:text-black font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h4 className="text-base font-bold text-gray-900">Inquiry #CC-INQ-882 Logged</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Your ticket has been routed to the ReBuild '26 Steering Council on-call leads. Expected response within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono">
                    Inquiry Category
                  </label>
                  <select
                    value={inquiryCategory}
                    onChange={(e) => setInquiryCategory(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer"
                  >
                    <option value="Problem Statement Clarification">Problem Statement Clarification</option>
                    <option value="Judging Rubric & Grading Criteria">Judging Rubric & Grading Criteria</option>
                    <option value="API Access & Sponsor Tokens">API Access & Sponsor Tokens</option>
                    <option value="Team Roster & Submission Checkpoint">Team Roster & Submission Checkpoint</option>
                    <option value="Platform Exception / Extension Request">Platform Exception / Extension Request</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono">
                    Subject / Short Summary
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Clarification regarding Round 1 mobile breakpoint testing"
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-700 font-mono">
                    Detailed Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide full context, team name, and any error logs or specific sections of the directive you are inquiring about..."
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="font-mono text-[11px] text-gray-400">
                    Priority: Standard SLA &lt; 15m
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowInquiryModal(false)}
                      className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 rounded-lg border-[2px] border-black bg-black px-4 py-1.5 text-xs font-black text-white uppercase tracking-wider shadow-[3px_3px_0px_0px_#8B5CF6] hover:bg-zinc-800 cursor-pointer"
                    >
                      <Send className="h-3 w-3" />
                      <span>Transmit Ticket</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
