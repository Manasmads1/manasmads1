import { Mail, MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-16 px-5">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
      <img src={logo} alt="M.A.D.S Logo" className="h-10 w-10 rounded-full object-cover" />
      <p className="text-[13px] tracking-[0.4em] uppercase font-body text-foreground">
        Manas
      </p>
      <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        Creative Technologist · Freelancer · India
      </p>
      <div className="flex items-center gap-5">
        <a href="https://instagram.com/manasmads1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={16} />
        </a>
        <a href="https://wa.me/918510946344" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle size={16} />
        </a>
        <a href="mailto:manas.kumar.3100@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={16} />
        </a>
      </div>
      <p className="text-[10px] text-muted-foreground">© 2025 Manas. All rights reserved.</p>
      <p className="text-[11px] italic text-primary">Built with intention.</p>
    </div>
  </footer>
);

export default Footer;
