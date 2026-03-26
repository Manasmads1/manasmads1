import { Mail, MessageCircle, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border py-12 px-5">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
      <img src={logo} alt="M.A.D.S Logo" className="h-12 w-12 rounded-full object-cover" />
      <p className="text-sm font-heading italic text-muted-foreground">
        Manas Mads — Creator. Coder. Storyteller.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://instagram.com/manasmads1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Instagram size={18} />
        </a>
        <a href="https://wa.me/918510946344" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <MessageCircle size={18} />
        </a>
        <a href="mailto:manas.kumar.3100@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">© 2025 Manas Kumar. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
