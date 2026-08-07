import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const channels = [
  {
    label: "Email",
    value: "manas.kumar.3100@gmail.com",
    href: "mailto:manas.kumar.3100@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+91 85109 46344",
    href: "https://wa.me/918510946344",
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "Instagram",
    value: "@manasmads1",
    href: "https://instagram.com/manasmads1",
    Icon: Instagram,
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/12";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `mailto:manas.kumar.3100@gmail.com?subject=${encodeURIComponent(
    `Project enquiry from ${form.name || "your site"}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="section-padding shell">
      <SectionHeading
        index="08"
        label="Let's Talk"
        align="center"
        title={
          <>
            Got a project in mind? <span className="text-gradient">Reach out.</span>
          </>
        }
        className="mx-auto items-center text-center"
      />

      <motion.div
        variants={stagger(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start"
      >
        <motion.ul variants={reveal} className="grid gap-3">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-md"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-[15px] font-medium">{value}</span>
                </span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-muted-foreground transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.form
          variants={reveal}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
          className="glass space-y-4 rounded-3xl p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-[13px] font-medium">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-[13px] font-medium">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-[13px] font-medium">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me about the project…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <MagneticButton>
              Send message
              <ArrowRight size={15} aria-hidden="true" />
            </MagneticButton>
            <p className="text-[12.5px] text-muted-foreground">
              Opens your mail app — usually a reply within a day.
            </p>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
