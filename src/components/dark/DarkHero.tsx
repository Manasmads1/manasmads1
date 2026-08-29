import portrait from "@/assets/manas-portrait.png.asset.json";
import { ContactButton, FadeIn, Magnet } from "@/components/dark/primitives";
import ThemeSwitch from "@/components/ThemeSwitch";

const navLinks = [
  { label: "About", href: "#dark-about" },
  { label: "Price", href: "#dark-services" },
  { label: "Projects", href: "#dark-projects" },
  { label: "Contact", href: "#dark-contact" },
];

const DarkHero = () => (
  <section
    className="relative flex h-screen flex-col"
    style={{ overflowX: "clip", background: "#0C0C0C" }}
  >
      <FadeIn delay={0} y={-20}>
      <nav className="relative flex items-center justify-between px-6 pr-20 pt-6 md:px-10 md:pr-24 md:pt-8">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="fixed right-6 top-20 z-50 md:right-10">
        <ThemeSwitch isDark />
      </div>
    </FadeIn>

    <div className="overflow-hidden px-4">
      <FadeIn delay={0.15} y={40}>
        <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m manas
        </h1>
      </FadeIn>
    </div>

    <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
      <FadeIn delay={0.35} y={20}>
        <p
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
        >
          a developer &amp; creative technologist building things that get noticed
        </p>
      </FadeIn>

      <FadeIn delay={0.5} y={20}>
        <ContactButton />
      </FadeIn>
    </div>

    <FadeIn
      delay={0.6}
      y={30}
      className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
    >
      <Magnet padding={150} strength={3}>
        <img
          src={portrait.url}
          alt="Pencil-sketch portrait of Manas"
          className="w-full select-none object-contain"
          style={{
            filter: "invert(1) contrast(1.05)",
            maskImage: "radial-gradient(78% 78% at 50% 46%, #000 42%, transparent 76%)",
            WebkitMaskImage: "radial-gradient(78% 78% at 50% 46%, #000 42%, transparent 76%)",
          }}
        />
      </Magnet>
    </FadeIn>
  </section>
);

export default DarkHero;
