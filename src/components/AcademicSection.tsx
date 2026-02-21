import { useEffect, useRef } from "react";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Computer Science & Engineering",
    org: "Jaypee University of Engineering & Technology, Guna",
    period: "2021 — 2025",
    detail: "Graduated · CGPA: 7.1",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Software Engineering",
      "Web Technologies",
      "Artificial Neural Network And Applications",
      "Computer Networks",
      "Engineering Mathematics",
    ],
    color: "cyan",
  },
  {
    type: "coursework",
    icon: BookOpen,
    title: "Higher Secondary Education",
    org: "Guru Nanak Public School, Kota, Rajasthan",
    period: "2019-2020",
    detail: "Percentage: 77%",
    items: ["Physics", "Mathematics", "Chemistry"],
    color: "purple",
  },
  {
    type: "cert",
    icon: Award,
    title: "Secondary Education",
    org: "Guru Nanak Public School, Kota, Rajasthan",
    period: "2016 —2017",
    detail: "Percentage: 82%",
    items: [
      "Science","Mathematics", "English", "Social Science", "Hindi",
    ],
    color: "blue",
  },
];

const colorMap = {
  cyan: {
    dot: "bg-neon-cyan shadow-neon-cyan",
    icon: "text-neon-cyan border-neon-cyan/30",
    badge: "text-neon-cyan border-neon-cyan/30",
    glow: "hover:border-neon-cyan/50",
  },
  purple: {
    dot: "bg-neon-purple shadow-neon-purple",
    icon: "text-neon-purple border-neon-purple/30",
    badge: "text-neon-purple border-neon-purple/30",
    glow: "hover:border-neon-purple/50",
  },
  blue: {
    dot: "bg-neon-blue shadow-neon-blue",
    icon: "text-neon-blue border-neon-blue/30",
    badge: "text-neon-blue border-neon-blue/30",
    glow: "hover:border-neon-blue/50",
  },
};

const AcademicSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="academic" className="relative py-28" ref={sectionRef}>
      <div
        className="absolute top-0 left-1/2 w-px h-full pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent, hsl(191 100% 50% / 0.1), transparent)" }}
      />

      <div className="container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest text-neon-blue mb-2">[ 003 ] // ACADEMIC</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            KNOWLEDGE BASE
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const colors = colorMap[item.color as keyof typeof colorMap];
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal relative pl-16"
                  style={{ transitionDelay: `${idx * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`timeline-dot absolute left-[18px] top-6 ${colors.dot}`} />

                  <div className={`glass-card rounded-xl p-6 border border-transparent ${colors.glow} transition-all duration-300`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${colors.icon}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-sm font-bold text-foreground leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs mt-0.5">{item.org}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono ${colors.badge}`}>
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                        <p className="text-muted-foreground text-xs mt-1">{item.detail}</p>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((it) => (
                        <span
                          key={it}
                          className="text-xs px-3 py-1 rounded glass-panel font-mono text-muted-foreground border border-white/5"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
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

export default AcademicSection;
