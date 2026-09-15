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

type Props = {
  kind: ProjectMockupKind;
  index: string;
};

/** Fixed-ratio reference header: the source artwork is already composed for this frame. */
const ProjectMockup = ({ kind, index }: Props) => {
  if (kind === "reel") return null;
  const item = artwork[kind];

  return (
    <div className="project-art-frame">
      <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
      <span className="project-art-index">{index}</span>
    </div>
  );
};

export default ProjectMockup;
