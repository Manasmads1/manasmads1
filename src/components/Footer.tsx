import { Mail, MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const socials = [
  { href: "https://instagram.com/manasmads1", Icon: Instagram, label: "Instagram", external: true },
  { href: "https://wa.me/918510946344", Icon: MessageCircle, label: "WhatsApp", external: true },
  { href: "mailto:manas.kumar.3100@gmail.com", Icon: Mail, label: "Email", external: false },
];

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="shell flex flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover shadow-soft"
        />
        <div>
          <p className="font-heading text-sm font-semibold tracking-tight">Manas</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Creative Technologist · Freelancer · India
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {socials.map(({ href, Icon, label, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground"
          >
            <Icon size={17} aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="text-[12px] text-muted-foreground md:text-right">
        <p>© 2026 Manas. All rights reserved.</p>
        <p className="mt-1 font-mono text-[11px] text-accent">Built with intention.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
