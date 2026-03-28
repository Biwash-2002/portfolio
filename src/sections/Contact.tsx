'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/utils/cn";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_contact: "",
    message: "",
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.user_name.trim()) newErrors.user_name = "Name is required";
    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Invalid email format";
    }
    if (!formData.user_contact.trim()) {
      newErrors.user_contact = "Contact is required";
    } else if (formData.user_contact.length !== 10) {
      newErrors.user_contact = "Must be exactly 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSuccess(true);
    setFormData({ user_name: "", user_email: "", user_contact: "", message: "" });
    setErrors({});
    setTimeout(() => setIsSuccess(false), 5000);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let filtered = value;
    if (name === "user_name") filtered = value.replace(/[^a-zA-Z\s]/g, "");
    else if (name === "user_contact") filtered = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, [name]: filtered }));
    if (errors[name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full flex items-center justify-center opacity-40 dark:opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Let's Connect"
            subtitle="I'm ready for new challenges and high-profile collaborations."
            align="center"
          />

          <div className="grid lg:grid-cols-12 gap-12 mt-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-4xl font-black tracking-tighter leading-none text-foreground">
                  Human <br />
                  <span className="text-primary italic">Interface.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Direct communication is the key to successful engineering. Reach out via
                  any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-6 p-4 rounded-[1.5rem] hover:bg-muted/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary border border-primary/10">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-bold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex gap-6 px-4">
                <a
                  href={personalInfo.socials.find((s) => s.name === "LinkedIn")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-muted dark:bg-card border border-border shadow-sm hover:border-primary/50 hover:text-primary transition-all text-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socials.find((s) => s.name === "GitHub")?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-muted dark:bg-card border border-border shadow-sm hover:border-primary/50 hover:text-primary transition-all text-foreground"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-8 p-10 md:p-14 bg-card border border-border shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] rounded-[3.5rem] relative"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 text-foreground"
                  >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-pulse">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tight">
                      Transmission Complete
                    </h3>
                    <p className="text-muted-foreground flex flex-col gap-1">
                      <span>Inquiry received.</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                        Estimated Response: 24h
                      </span>
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-3 rounded-xl border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                          Full Name
                        </label>
                        <input
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-transparent border-b-2 outline-none py-3 text-lg font-bold transition-all text-foreground",
                            errors.user_name
                              ? "border-red-500"
                              : "border-border focus:border-primary"
                          )}
                        />
                        {errors.user_name && (
                          <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">
                            {errors.user_name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-transparent border-b-2 outline-none py-3 text-lg font-bold transition-all text-foreground",
                            errors.user_email
                              ? "border-red-500"
                              : "border-border focus:border-primary"
                          )}
                        />
                        {errors.user_email && (
                          <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">
                            {errors.user_email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                        Contact Number
                      </label>
                      <input
                        name="user_contact"
                        maxLength={10}
                        value={formData.user_contact}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-transparent border-b-2 outline-none py-3 text-lg font-bold transition-all text-foreground",
                          errors.user_contact
                            ? "border-red-500"
                            : "border-border focus:border-primary"
                        )}
                      />
                      {errors.user_contact && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">
                          {errors.user_contact}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">
                        Message Detail
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Project overview and requirements..."
                        className={cn(
                          "w-full bg-transparent border-b-2 outline-none py-3 text-lg font-bold transition-all resize-none placeholder:text-muted-foreground/30 text-foreground",
                          errors.message
                            ? "border-red-500"
                            : "border-border focus:border-primary"
                        )}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest ml-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-6 bg-foreground text-background dark:bg-white dark:text-black rounded-2xl font-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Transmitting..." : "Send"}
                      <Send
                        size={18}
                        className="group-hover:translate-x-2 transition-transform"
                      />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
