import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <AboutSection />
    <SkillsSection />
    <ToolsSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
