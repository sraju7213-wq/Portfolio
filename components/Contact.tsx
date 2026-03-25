import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { contact } from "../data/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: "Location", value: contact.location, href: "#" },
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
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
                <div>
                  <label className="block text-text-muted text-xs mb-2 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-text-muted text-xs mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-muted text-xs mb-2 tracking-wide uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-text-muted text-xs mb-2 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
