import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { contact } from "../data/content";

function AnimatedInput({
  label,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isActive = focused || hasValue;

  const sharedClasses = `w-full px-4 rounded-xl bg-bg-primary border text-text-primary text-sm placeholder:text-transparent transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-accent-cyan/20 ${
    focused ? "border-accent-cyan/50 shadow-[0_0_20px_rgba(0,229,255,0.08)]" : "border-border-subtle"
  }`;

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          required={required}
          rows={5}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(!!e.target.value);
          }}
          className={`${sharedClasses} resize-none pt-5 pb-2`}
        />
      ) : (
        <input
          type={type}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(!!e.target.value);
          }}
          className={`${sharedClasses} pt-5 pb-2`}
        />
      )}
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-300 ${
          isActive
            ? "top-2.5 text-[10px] text-accent-cyan/70 tracking-wider uppercase"
            : "top-1/2 -translate-y-1/2 text-sm text-text-muted/50"
        }`}
      >
        {label}
      </label>
      {focused && (
        <motion.div
          layoutId="input-glow"
          className="absolute inset-0 rounded-xl bg-accent-cyan/[0.03] pointer-events-none"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, external: false },
    { icon: MapPin, label: "Location", value: contact.location, href: "https://maps.google.com/?q=New+Delhi,+India", external: true },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-3">
            Let's work together
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Get in Touch
          </h2>
          <div className="section-divider" />
          <p className="text-text-secondary text-base max-w-xl mx-auto mt-6">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 bg-bg-card rounded-xl p-5 border border-border-subtle card-hover group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 border border-accent-cyan/20 flex items-center justify-center shrink-0 group-hover:border-accent-cyan/40 transition-colors">
                  <item.icon size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">{item.label}</p>
                  <p className="text-text-primary text-sm font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-bg-card rounded-2xl p-6 lg:p-8 border border-border-subtle space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <AnimatedInput label="Name" required />
                <AnimatedInput label="Email" type="email" required />
              </div>

              <AnimatedInput label="Subject" required />
              <AnimatedInput label="Tell me about your project..." required textarea />

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 relative overflow-hidden min-h-[48px]"
              >
                {submitted ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 relative z-10"
                  >
                    <CheckCircle size={18} />
                    Message Sent!
                  </motion.span>
                ) : (
                  <span className="flex items-center gap-2 relative z-10">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
                {!submitted && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-violet to-accent-cyan"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
