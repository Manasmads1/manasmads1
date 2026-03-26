import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(0_0%_5%/0.95)] backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2">
          <img src={logo} alt="M.A.D.S Logo" className="h-9 w-9 rounded-full object-cover" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-[13px] font-body font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-[11px] font-body tracking-[0.15em] uppercase text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-dot-pulse" />
            Available for Work
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col items-center gap-5 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-dot-pulse" />
              Available for Work
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
