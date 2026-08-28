import { useEffect, useRef, useState } from "react";

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const rowOne = [...gifs.slice(0, 11), ...gifs.slice(0, 11), ...gifs.slice(0, 11)];
const rowTwo = [...gifs.slice(11), ...gifs.slice(11), ...gifs.slice(11)];

const Tile = ({ src }: { src: string }) => (
  <img
    src={src}
    alt=""
    loading="lazy"
    className="rounded-2xl object-cover"
    style={{ width: 420, height: 270, minWidth: 420 }}
  />
);

const DarkMarquee = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-3 overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: "#0C0C0C" }}
      aria-hidden="true"
    >
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
      >
        {rowOne.map((src, i) => (
          <Tile key={`a-${i}`} src={src} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
      >
        {rowTwo.map((src, i) => (
          <Tile key={`b-${i}`} src={src} />
        ))}
      </div>
    </section>
  );
};

export default DarkMarquee;
