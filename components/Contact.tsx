import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, ArrowUpRight, Sparkles } from "lucide-react";
import { contact } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

function AnimatedInput({
  label,
  type = "text",
  required = false,
  textarea = false,
  id,
}: {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  id?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isActive = focused || hasValue;
  const inputId = id || useId();

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={inputId}
          required={required}
          rows={4}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(!!e.target.value); }}
          onChange={(e) => setHasValue(!!e.target.value)}
          className="w-full px-4 rounded-xl bg-bg-primary border text-text-primary text-sm placeholder:text-transparent transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 resize-none pt-5 pb-2 border-border-subtle relative z-10"
          aria-label={label}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => { setFocused(false); setHasValue(!!e.target.value); }}
          onChange={(e) => setHasValue(!!e.target.value)}
          className="w-full px-4 rounded-xl bg-bg-primary border text-text-primary text-sm placeholder:text-transparent transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 pt-5 pb-2 border-border-subtle relative z-10"
          autoComplete={type === "email" ? "email" : "on"}
        />
      )}
      <label
        htmlFor={inputId}
        className={`absolute left-4 pointer-events-none transition-all duration-300 z-20 ${
          isActive
            ? "top-2 text-[9px] text-accent-cyan/70 tracking-wider uppercase"
            : "top-1/2 -translate-y-1/2 text-sm text-text-muted/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, color: "from-cyan-400 to-blue-500" },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, color: "from-violet-400 to-purple-500" },
    { icon: MapPin, label: "Location", value: contact.location, href: "https://maps.google.com/?q=New+Delhi,+India", color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent-cyan/[0.03] blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          badge="Let's talk"
          title="Get in Touch"
          description="Brand identity, web experience, motion content, or AI tool — let's build something worth talking about."
        />

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <Reveal direction="left" delay={0.2} className="lg:col-span-2 space-y-3">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 bg-bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border-subtle group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-text-muted text-[10px]">{item.label}</p>
                  <p className="text-text-primary text-sm font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="p-4 rounded-xl bg-gradient-to-br from-accent-violet/10 to-accent-cyan/10 border border-accent-violet/20">
              <p className="text-xs font-medium text-text-primary mb-2">Social Platforms</p>
              <div className="flex flex-col gap-1">
                {contact.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-accent-cyan transition-colors flex items-center gap-1"
                  >
                    {social.platform} <ArrowUpRight size={10} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.3} className="lg:col-span-3">
            <div className="bg-bg-card/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border-subtle">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <AnimatedInput label="Name" required id={`${formId}-name`} />
                  <AnimatedInput label="Email" type="email" required id={`${formId}-email`} />
                </div>
                <AnimatedInput label="Subject" required id={`${formId}-subject`} />
                <AnimatedInput label="Tell me about your project..." required textarea id={`${formId}-message`} />

                <motion.button
                  type="submit"
                  disabled={submitted || isSubmitting}
                  whileHover={{ scale: submitted || isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: submitted || isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-primary font-semibold text-sm disabled:opacity-80 transition-all"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.span key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <CheckCircle size={16} /> Message Sent!
                      </motion.span>
                    ) : isSubmitting ? (
                      <motion.span key="loading" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <Send size={16} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
