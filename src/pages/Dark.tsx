import { useEffect } from "react";
import DarkAbout from "@/components/dark/DarkAbout";
import DarkHero from "@/components/dark/DarkHero";
import DarkMarquee from "@/components/dark/DarkMarquee";
import DarkProjects from "@/components/dark/DarkProjects";
import DarkServices from "@/components/dark/DarkServices";
import { DarkAchievements, DarkContact, DarkJourney } from "@/components/dark/DarkExtras";

const Dark = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark-portfolio");
    document.body.classList.add("dark-portfolio-body");
    const previousTitle = document.title;
    document.title = "Manas — 3D Creator";

    return () => {
      document.documentElement.classList.remove("dark-portfolio");
      document.body.classList.remove("dark-portfolio-body");
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="dark-mode min-h-screen overflow-x-clip bg-[#0C0C0C] font-dark text-[#D7E2EA]">
      <DarkHero />
      <DarkMarquee />
      <DarkAbout />
      <DarkServices />
      <DarkProjects />
      <DarkAchievements />
      <DarkJourney />
      <DarkContact />
    </div>
  );
};

export default Dark;