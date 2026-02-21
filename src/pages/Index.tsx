import ParticleBackground from "@/components/ParticleBackground";
import SpaceNavigation from "@/components/SpaceNavigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import AcademicSection from "@/components/AcademicSection";
import HobbiesSection from "@/components/HobbiesSection";
import SocialSection from "@/components/SocialSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-space-gradient overflow-x-hidden">
      {/* Global particle starfield */}
      <ParticleBackground />

      {/* Navigation */}
      <SpaceNavigation />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AcademicSection />
        <HobbiesSection />
        <SocialSection />
      </main>
    </div>
  );
};

export default Index;
