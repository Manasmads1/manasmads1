import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-label"
      >
        07 / Let's Talk
      </motion.span>

      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg md:text-xl mb-4"
        >
          Got a project in mind?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-bold text-5xl md:text-8xl lg:text-9xl tracking-tight"
          style={{ WebkitTextStroke: '1px hsl(4 70% 46%)', color: 'transparent' }}
        >
          REACH OUT.
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <a
          href="mailto:manas.kumar.3100@gmail.com"
          className="group bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all duration-300 text-center"
        >
          <Mail size={20} className="text-primary mx-auto mb-3" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Email</p>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">manas.kumar.3100@gmail.com</p>
        </a>
        <a
          href="https://wa.me/918510946344"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all duration-300 text-center"
        >
          <MessageCircle size={20} className="text-primary mx-auto mb-3" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">WhatsApp</p>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">+91 85109 46344</p>
        </a>
        <a
          href="https://instagram.com/manasmads1"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all duration-300 text-center"
        >
          <Instagram size={20} className="text-primary mx-auto mb-3" />
          <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">Instagram</p>
          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">@manasmads1</p>
        </a>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
        <textarea
          rows={3}
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-medium text-primary hover:text-foreground transition-colors pt-2"
        >
          Send →
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
