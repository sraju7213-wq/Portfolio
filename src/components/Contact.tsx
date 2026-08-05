import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowUpRight, Copy, Check } from "lucide-react";
import { contact } from "../data/content";
import SectionHeader from "./ui/SectionHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const formId = useId();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="INITIATE COLLABORATION"
          title="Let's Build Something Impactful"
          description="Have a web platform, brand identity, or product project in mind? Reach out directly or drop a message below."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Quick Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Box */}
            <div className="bg-[#121215] border border-white/10 rounded-xl p-6">
              <div className="font-mono text-xs text-[#ff4800] uppercase tracking-wider font-semibold mb-2">
                // DIRECT EMAIL INQUIRIES
              </div>
              <div className="flex items-center justify-between gap-3 bg-[#18181b] border border-white/10 p-3 rounded-lg mt-3">
                <span className="font-mono text-sm text-[#fafafa] truncate">
                  {contact.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-[#ff4800] text-white text-xs font-mono font-bold flex items-center gap-1 hover:bg-[#e03e00] transition-colors shrink-0"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            {/* Direct Cards */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center justify-between bg-[#121215] border border-white/10 rounded-xl p-5 hover:border-[#ff4800]/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#ff4800]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#71717a] uppercase">DIRECT PHONE</div>
                  <div className="font-mono text-sm font-semibold text-[#fafafa]">{contact.phone}</div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[#71717a] group-hover:text-[#ff4800] transition-colors" />
            </a>

            <div className="flex items-center gap-3 bg-[#121215] border border-white/10 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-white/10 flex items-center justify-center text-[#ff4800]">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#71717a] uppercase">STUDIO LOCATION</div>
                <div className="font-mono text-sm font-semibold text-[#fafafa]">{contact.location}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#121215] border border-white/10 rounded-xl p-5">
              <div className="font-mono text-xs text-[#71717a] uppercase tracking-wider mb-3">
                Connect Across Channels:
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {contact.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#18181b] border border-white/10 text-[#fafafa] hover:border-[#ff4800] hover:text-[#ff4800] transition-colors"
                  >
                    <span>{s.platform}</span>
                    <ArrowUpRight size={11} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Craft Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${formId}-name`} className="block font-mono text-[11px] text-[#71717a] uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      id={`${formId}-name`}
                      required
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-[#18181b] border border-white/10 text-[#fafafa] text-sm focus:outline-none focus:border-[#ff4800] transition-colors font-body placeholder:text-[#52525b]"
                    />
                  </div>

                  <div>
                    <label htmlFor={`${formId}-email`} className="block font-mono text-[11px] text-[#71717a] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id={`${formId}-email`}
                      required
                      type="email"
                      placeholder="e.g. alex@brand.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#18181b] border border-white/10 text-[#fafafa] text-sm focus:outline-none focus:border-[#ff4800] transition-colors font-body placeholder:text-[#52525b]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${formId}-subject`} className="block font-mono text-[11px] text-[#71717a] uppercase tracking-wider mb-1.5">
                    Project Scope / Subject
                  </label>
                  <input
                    id={`${formId}-subject`}
                    required
                    type="text"
                    placeholder="e.g. Luxury Web Redesign & Branding"
                    className="w-full px-4 py-3 rounded-lg bg-[#18181b] border border-white/10 text-[#fafafa] text-sm focus:outline-none focus:border-[#ff4800] transition-colors font-body placeholder:text-[#52525b]"
                  />
                </div>

                <div>
                  <label htmlFor={`${formId}-message`} className="block font-mono text-[11px] text-[#71717a] uppercase tracking-wider mb-1.5">
                    Project Details & Goals
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    required
                    rows={4}
                    placeholder="Tell me about your business goals, timeline, and key requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-[#18181b] border border-white/10 text-[#fafafa] text-sm focus:outline-none focus:border-[#ff4800] transition-colors font-body placeholder:text-[#52525b] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted || isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#ff4800] text-white text-xs font-mono font-bold hover:bg-[#e03e00] disabled:opacity-75 transition-colors shadow-lg shadow-[#ff4800]/20"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <CheckCircle2 size={16} /> MESSAGE TRANSMITTED SUCCESSFULLY
                      </motion.span>
                    ) : isSubmitting ? (
                      <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" /> SENDING MESSAGE...
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                        <Send size={15} /> SEND INQUIRY TO RAJU
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
