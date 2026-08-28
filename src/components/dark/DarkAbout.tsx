import { AnimatedText, ContactButton, FadeIn } from "@/components/dark/primitives";

const decor = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "absolute top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "absolute top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const bio =
  "I'm Manas, a Class 12 CBSE Non-Medical student with Computer Science and an endless curiosity to explore, learn, and build. Alongside technology, I'm exploring the freelance world through content creation, affiliate marketing, and creative digital work. Let's build something incredible together!";

const DarkAbout = () => (
  <section
    id="dark-about"
    className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    style={{ background: "#0C0C0C" }}
  >
    {decor.map((d) => (
      <FadeIn key={d.src} delay={d.delay} duration={0.9} x={d.x} y={0} className={d.className}>
        <img src={d.src} alt="" className="w-full" loading="lazy" />
      </FadeIn>
    ))}

    <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <AnimatedText
        text={bio}
        className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
      />
    </div>

    <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
      <FadeIn delay={0.1}>
        <ContactButton />
      </FadeIn>
    </div>
  </section>
);

export default DarkAbout;
