import { useEffect, useState } from "react";

import heroGrid from "@/assets/hero-grid.jpg";
import profileImg from "/profile.jpg";
import { ArrowRight, Download, MapPin, Coffee, Briefcase } from "lucide-react";

const TYPING_SKILLS = ["React Developer", "Node.js Engineer", "MongoDB Expert", "Express Architect", "MERN Stack Dev"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const current = TYPING_SKILLS[skillIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setSkillIndex((s) => (s + 1) % TYPING_SKILLS.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, skillIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Hero background grid image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGrid}
          alt="Synthwave grid background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-0 scanlines pointer-events-none" />
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-neon-line opacity-50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Status badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel border border-neon-cyan/20 rounded-full animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-neon-cyan pulse-glow-cyan" />
            <span className="font-mono text-xs text-neon-cyan tracking-widest">
              SYSTEM ONLINE · MERN DEVELOPER
            </span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tighter animate-fade-in">
              <span className="gradient-text">HARSHIT</span>
              <br />
              <span className="text-foreground"></span>
            </h1>

            {/* Typing animation */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <p className="font-mono text-lg md:text-xl neon-text-cyan tracking-wide">
                {displayText}
                <span
                  className={`inline-block w-0.5 h-5 ml-1 bg-neon-cyan align-middle transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                />
              </p>
            </div>

            {/* Tagline */}
            <p
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Architecting digital universes with the{" "}
              <span className="text-neon-purple font-semibold">MERN stack</span>
              . Turning complex ideas into elegant, high-performance
              applications that live beyond the stars.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm tracking-widest font-bold overflow-hidden rounded"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(191 100% 50%), hsl(213 100% 60%))",
                  color: "hsl(222 47% 3%)",
                  boxShadow:
                    "0 0 20px hsl(191 100% 50% / 0.5), 0 0 40px hsl(191 100% 50% / 0.2)",
                }}
              >
                <span> VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume/Harshit_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-3 px-7 py-3.5 font-display text-sm tracking-widest font-bold rounded border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
                style={{ boxShadow: "0 0 10px hsl(265 80% 60% / 0.2)" }}
              >
                <Download className="w-4 h-4" />
                 RESUME
              </a>
            </div>
          </div>

          {/* RIGHT — Profile card */}
          <div
            className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(191 100% 50%), hsl(265 80% 60%), hsl(213 100% 60%))",
                  filter: "blur(8px)",
                }}
              />

              {/* Card */}
              <div className="relative glass-panel rounded-2xl overflow-hidden border border-neon-cyan/20 w-72 md:w-80">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan/70" />
                  <span className="font-mono text-xs text-muted-foreground ml-2 tracking-widest">
                    PROFILE.exe
                  </span>
                </div>

                {/* Profile image */}
                <div className="relative overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Alex Nova — MERN Stack Developer"
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Image overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, hsl(220 40% 6%) 0%, transparent 60%)",
                    }}
                  />
                  {/* Status indicator */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel border border-neon-cyan/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan pulse-glow-cyan" />
                    <span className="font-mono text-xs text-neon-cyan">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                    Gem1ineye
                  </h3>
                  <p className="font-mono text-xs neon-text-cyan mb-4">
                    MERN Stack Developer
                  </p>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-neon-purple flex-shrink-0" />
                      <span className="font-mono text-xs">
                        Kota, Rajasthan, India
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <Briefcase className="w-3.5 h-3.5 text-neon-cyan flex-shrink-0" />
                      <span className="font-mono text-xs">
                        Runner, Collector, Tech Enthusiast
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <Coffee className="w-3.5 h-3.5 text-neon-blue flex-shrink-0" />
                      <span className="font-mono text-xs">
                        Fueled by caffeine & code
                      </span>
                    </div>
                  </div>

                  {/* Tech stack mini badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                    {[
                      "React",
                      "Node",
                      "MongoDB",
                      "Express",
                      "Python",
                      "C/C++",
                      "TensorFlow",
                    ].map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating corner decorations */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/60 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-neon-purple/60 rounded-bl-lg" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-12 animate-float">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
