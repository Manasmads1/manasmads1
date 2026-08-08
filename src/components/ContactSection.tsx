import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Linkedin, ArrowRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import SectionHeading from "@/components/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { reveal, stagger, viewportOnce } from "@/lib/motion";

const DiscordIcon = ({ size = 17 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.2.36-.43.84-.59 1.226a18.27 18.27 0 0 0-5.487 0C9.647 3.84 9.41 3.36 9.21 3a19.74 19.74 0 0 0-4.435 1.37C1.96 8.58 1.19 12.68 1.57 16.72A19.9 19.9 0 0 0 7.62 19.8c.49-.67.93-1.38 1.3-2.13-.71-.27-1.4-.6-2.04-.99.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.24 0c.17.14.33.27.5.4-.65.39-1.33.72-2.05.99.38.75.81 1.46 1.3 2.13a19.86 19.86 0 0 0 6.06-3.08c.44-4.68-.79-8.75-3.11-12.35ZM8.68 14.26c-1.18 0-2.16-1.09-2.16-2.42 0-1.34.95-2.43 2.16-2.43 1.21 0 2.19 1.1 2.17 2.43 0 1.33-.96 2.42-2.17 2.42Zm6.64 0c-1.18 0-2.16-1.09-2.16-2.42 0-1.34.95-2.43 2.16-2.43 1.21 0 2.18 1.1 2.16 2.43 0 1.33-.95 2.42-2.16 2.42Z" />
  </svg>
);

const DISCORD_HANDLE = "manasmads1";

type Channel = {
  label: string;
  value: string;
  href?: string;
  hint?: string;
  Icon: (props: { size?: number }) => JSX.Element;
  external?: boolean;
  copy?: string;
};

const channels: Channel[] = [
  {
    label: "Email",
    value: "manas.kumar.3100@gmail.com",
    href: "mailto:manas.kumar.3100@gmail.com",
    Icon: ({ size }) => <Mail size={size} aria-hidden="true" />,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+91 85109 46344",
    href: "https://wa.me/918510946344",
    Icon: ({ size }) => <MessageCircle size={size} aria-hidden="true" />,
    external: true,
  },
  {
    label: "Instagram",
    value: "@manasmads1",
    href: "https://instagram.com/manasmads1",
    Icon: ({ size }) => <Instagram size={size} aria-hidden="true" />,
    external: true,
  },
  {
    label: "Discord",
    value: DISCORD_HANDLE,
    hint: "Click to copy",
    copy: DISCORD_HANDLE,
    Icon: ({ size }) => <DiscordIcon size={size} />,
  },
  {
    label: "LinkedIn",
    value: "in/manasmads1",
    href: "https://www.linkedin.com/in/manasmads1/",
    Icon: ({ size }) => <Linkedin size={size} aria-hidden="true" />,
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/12";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(1, "Please write a short message").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const mailtoHref = `mailto:manas.kumar.3100@gmail.com?subject=${encodeURIComponent(
    `Project enquiry from ${form.name || "your site"}`,
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_HANDLE);
      toast.success("Discord username copied");
    } catch {
      toast.error("Couldn't copy — the username is " + DISCORD_HANDLE);
    }
  };

  return (
    <section id="contact" className="section-padding shell">
      <SectionHeading
        index="08"
        label="Let's Talk"
        title={
          <>
            LET&apos;S <span className="text-gradient">CONNECT.</span>
          </>
        }
      />

      <motion.ul
        variants={stagger(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {channels.map(({ label, value, href, Icon, external, hint, copy }) => {
          const inner = (
            <>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-foreground transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={17} />
              </span>
              <span className="min-w-0 text-left">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate text-[15px] font-medium">{value}</span>
                {hint && (
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">{hint}</span>
                )}
              </span>
              {copy ? (
                <Copy
                  size={15}
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-muted-foreground transition-colors duration-500 group-hover:text-accent"
                />
              ) : (
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-muted-foreground transition-transform duration-500 group-hover:translate-x-1"
                />
              )}
            </>
          );

          const cls =
            "group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-md";

          return (
            <motion.li key={label} variants={reveal}>
              {copy ? (
                <button type="button" onClick={copyDiscord} className={cls} aria-label={`Copy Discord username ${value}`}>
                  {inner}
                </button>
              ) : (
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cls}
                >
                  {inner}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div
        variants={stagger(0.05, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6"
      >
        <motion.form
          variants={reveal}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            const parsed = schema.safeParse(form);
            if (!parsed.success) {
              const next: Record<string, string> = {};
              parsed.error.issues.forEach((i) => {
                next[String(i.path[0])] = i.message;
              });
              setErrors(next);
              return;
            }
            setErrors({});
            toast.success("Opening your mail app with the message ready to send");
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
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              {errors.name && (
                <p id="contact-name-error" className="text-[12px] text-destructive">
                  {errors.name}
                </p>
              )}
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
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              {errors.email && (
                <p id="contact-email-error" className="text-[12px] text-destructive">
                  {errors.email}
                </p>
              )}
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
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-[12px] text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <MagneticButton>
              Send
              <ArrowRight size={15} aria-hidden="true" />
            </MagneticButton>
            <p className="text-[12.5px] text-muted-foreground">
              Opens your mail app — usually a reply within a day.
            </p>
          </div>
        </motion.form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        className="mt-16 border-t border-border pt-10"
      >
        <p className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
          Let&apos;s Create Something Worth Building.
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
          Katsu Made Owarnai
        </p>
        <p className="mt-2 text-[14px] text-muted-foreground">
          Never a no when there&apos;s something creative to build.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
