import type { ProjectMockupKind } from "@/components/ProjectsSection";

const artwork: Record<Exclude<ProjectMockupKind, "reel">, { src: string; alt: string }> = {
  ad: {
    src: "/projects/brand-ad.webp",
    alt: "Brand advertising project artwork with a dark video interface and creative AI elements",
  },
  web: {
    src: "/projects/full-stack.webp",
    alt: "Full stack development project artwork with a code editor and React, HTML, CSS, and Python elements",
  },
  design: {
    src: "/projects/canva-design.webp",
    alt: "Canva design project artwork with a design editor, templates, and visual layout elements",
  },
};

/** Original supplied project artwork, cropped into three responsive showcase panels. */
const ProjectMockup = ({ kind }: { kind: ProjectMockupKind }) => {
  if (kind === "reel") return null;
  const item = artwork[kind];

  return (
    <div className="relative -mx-2 flex h-40 items-center justify-center overflow-hidden rounded-xl md:h-44">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-white/10 opacity-70" />
    </div>
  );
};

export default ProjectMockup;
