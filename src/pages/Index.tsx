import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import BackgroundSystem from "@/components/BackgroundSystem";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
    <div className="relative min-h-dvh bg-background">
      <LoadingScreen />
      <BackgroundSystem />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <SkillsSection />
        <ToolsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
);

export default Index;
