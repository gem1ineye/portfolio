import { useEffect, useRef } from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
  BarChart3,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "FRONTEND",
    color: "cyan",
    skills: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    icon: Server,
    title: "BACKEND",
    color: "purple",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware"],
  },
  {
    icon: Database,
    title: "DATABASE",
    color: "blue",
    skills: ["MongoDB", "Mongoose", "Aggregation", "Indexing", "Atlas"],
  },
  {
    icon: Wrench,
    title: "TOOLS",
    color: "pink",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Docker", "npm"],
  },
  {
    icon: BarChart3,
    title: "DATA ENGINEERING",
    color: "blue",
    skills: [
      "Data Preprocessing",
      "Feature Engineering",
      "Data Visualization",
      "Matplotlib",
      "Seaborn",
      "Model Deployment (API)",
      "Jupyter Notebook",
      "Experiment Tracking",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    color: "cyan",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "LSTM",
      "Model Evaluation",
    ],
  },
];

const colorMap = {
  cyan: {
    border: "border-neon-cyan/30 hover:border-neon-cyan",
    icon: "text-neon-cyan",
    badge: "skill-badge",
    glow: "shadow-neon-cyan",
    title: "neon-text-cyan",
  },
  purple: {
    border: "border-neon-purple/30 hover:border-neon-purple",
    icon: "text-neon-purple",
    badge: "skill-badge-purple",
    glow: "shadow-neon-purple",
    title: "neon-text-purple",
  },
  blue: {
    border: "border-neon-blue/30 hover:border-neon-blue",
    icon: "text-neon-blue",
    badge: "tech-tag",
    glow: "shadow-neon-blue",
    title: "text-neon-blue",
  },
  pink: {
    border: "border-pink-400/30 hover:border-pink-400",
    icon: "text-pink-400",
    badge: "skill-badge",
    glow: "",
    title: "text-pink-400",
  },
};

const AboutSection = () => {
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
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glow blob */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(191 100% 50% / 0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest text-neon-cyan mb-2">
            [ 001 ] // ABOUT
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            SYSTEM PROFILE
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="reveal">
            <div className="glass-panel rounded-xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, hsl(191 100% 50% / 0.08), transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg border border-neon-cyan/40 flex items-center justify-center pulse-glow-cyan text-2xl">
                  🧑‍💻
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Harshit
                  </h3>
                  <p className="font-mono text-xs text-neon-cyan">
                    Full Stack & AI/ML Developer
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer specializing in the MERN
                stack and Artificial Intelligence. I build scalable web
                applications and intelligent systems that combine clean frontend
                experiences with powerful backend architectures and data-driven
                intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a strong foundation in Computer Science, I integrate
                machine learning models into real-world applications — from
                predictive analytics to intelligent automation — focusing on
                performance, scalability, and practical impact.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects", value: "5+" },
                  { label: "Technologies", value: "20+" },
                  { label: "Commits", value: "300+" },
                  { label: "Full-Stack & AI/ML Development", value: "Hitting" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-lg p-4 text-center"
                  >
                    <p className="font-display text-2xl font-black neon-text-cyan">
                      {stat.value}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => {
              const colors = colorMap[cat.color as keyof typeof colorMap];
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`reveal glass-card rounded-xl p-6 border transition-all duration-300 ${colors.border}`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${colors.icon}`} />
                    <h4
                      className={`font-display text-sm font-bold tracking-widest ${colors.title}`}
                    >
                      {cat.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${colors.badge} text-xs px-3 py-1 rounded font-mono`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
