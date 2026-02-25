import { useEffect, useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    name: "STOCK FORECAST",
    description:
      "AI-powered stock market prediction system leveraging LSTM neural networks trained on historical time-series data, with feature scaling, sliding window forecasting, and trend visualization for data-driven market insights.",
    tech: ["Python", "TensorFlow", "Keras", "LSTM", "Pandas", "NumPy"],
    github: "https://github.com/gem1ineye/StockMarket_Trend_Prediction.git",
    demo: "#",
    featured: true,
  },

  {
    name: "E-COMMERCE STORE",
    description:
      "Full-featured e-commerce platform built on the MERN stack with secure authentication, product management, cart system, Stripe payment integration, and admin dashboard for inventory and order control.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "RazorPay", "JWT"],
    github: "https://github.com/gem1ineye/E-Commi-V1.git",
    demo: "https://e-commi-v1.vercel.app",
    featured: true,
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-28" ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(265 80% 60% / 0.06) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest text-neon-purple mb-2">[ 002 ] // PROJECTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            MISSION ARCHIVE
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-4 max-w-xl">
            A curated selection of missions completed — each one a testament to precision engineering and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="reveal glass-card rounded-xl p-6 group flex flex-col relative overflow-hidden"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-neon-cyan">
                  <Star className="w-3 h-3 fill-neon-cyan" />
                  <span className="font-mono text-xs">FEATURED</span>
                </div>
              )}

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-neon-line opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan pulse-glow-cyan" />
                  <h3 className="font-display text-sm font-bold tracking-widest text-foreground">
                    {project.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 flex-1 justify-center py-2 rounded border border-neon-cyan/20 text-neon-cyan font-mono text-xs hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  GITHUB
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 flex-1 justify-center py-2 rounded border border-neon-purple/20 text-neon-purple font-mono text-xs hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LIVE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
