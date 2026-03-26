import SectionWrapper from "./SectionWrapper";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
        Get in <span className="text-gradient">Touch</span>
      </h2>
      <div className="w-16 h-0.5 bg-primary mb-4" />
      <p className="text-muted-foreground text-sm mb-10 max-w-lg">
        Available for freelance projects, collaborations, and creative work. Let's build something.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-5">
          <a
            href="mailto:manas.kumar.3100@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
          >
            <Mail size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">manas.kumar.3100@gmail.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/918510946344"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
          >
            <MessageCircle size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-medium">+91 85109 46344</p>
            </div>
          </a>
          <a
            href="https://instagram.com/manasmads1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
          >
            <Instagram size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Instagram</p>
              <p className="text-sm font-medium">@manasmads1</p>
            </div>
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-card border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-medium rounded-md py-3 hover:bg-primary-glow transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
