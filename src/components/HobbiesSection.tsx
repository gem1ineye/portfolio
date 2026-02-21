import { useEffect, useRef } from "react";
import {
  Activity,
  Microscope,
  Cpu,
  Headphones,
  Telescope,
  Gamepad2,
  ArrowUpRight
} from "lucide-react";

const hobbies = [
  {
    icon: Activity,
    title: "RUNNING",
    desc: "Marathon training and trail running to fuel the mind and discipline the body.",
    color: "cyan",
    link: "https://strava.app.link/I2TT8E2BV0b",
    bgImage: "/images/running.jpg",
  },
  {
    icon: Microscope,
    title: "TECH RESEARCH",
    desc: "Exploring cutting-edge papers, AI trends, and emerging web technologies.",
    color: "purple",
    link: "https://hashnode.com/@gem1ineye",
    bgImage: "/images/running.jpg",
  },

  {
    icon: Headphones,
    title: "MUSIC",
    desc: "Synthwave, lo-fi beats, and ambient soundscapes keep the creativity flowing.",
    color: "pink",
    link: "https://music.youtube.com/playlist?list=PLd3w9NkS4zCvxSzrVSFyjfsC4zZSFdcFk&si=xJANv6QSqOLl7gOC",
    bgImage: "/images/running.jpg",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-neon-cyan/60",
    bg: "group-hover:bg-neon-cyan/5",
    glow: "group-hover:shadow-neon-cyan",
    text: "group-hover:text-neon-cyan",
  },
  purple: {
    border: "hover:border-neon-purple/60",
    bg: "group-hover:bg-neon-purple/5",
    glow: "group-hover:shadow-neon-purple",
    text: "group-hover:text-neon-purple",
  },
  blue: {
    border: "hover:border-neon-blue/60",
    bg: "group-hover:bg-neon-blue/5",
    glow: "group-hover:shadow-neon-blue",
    text: "group-hover:text-neon-blue",
  },
  pink: {
    border: "hover:border-pink-400/60",
    bg: "group-hover:bg-pink-400/5",
    glow: "",
    text: "group-hover:text-pink-400",
  },
};

const HobbiesSection = () => {
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
    <section id="hobbies" className="relative py-28" ref={sectionRef}>
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(191 100% 50% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest text-neon-pink mb-2">
            [ 004 ] // HOBBIES
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            BEYOND THE CODE
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-4 max-w-xl">
            What fuels the developer behind the terminal — passions and pursuits
            outside the codebase.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {hobbies.map((hobby, idx) => {
            const colors = colorMap[hobby.color as keyof typeof colorMap];
            const Icon = hobby.icon;

            return (
              <div
                key={hobby.title}
                className={`relative overflow-hidden reveal group rounded-xl border border-white/5 ${colors.border} transition-all duration-300`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                {/* Background Image */}
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-500 z-0"
                  style={{ backgroundImage: `url(${hobby.bgImage})` }}
                />

                {/* Gradient Overlay (better than pure black) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 z-10" />

                {/* Content */}
                <div className="relative z-20 p-6 glass-card">
                  <div className="flex justify-between items-start mb-4">
                    <Icon className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />

                    {/* Visit Button */}
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full border border-white/10 hover:border-white/30 transition-all ${colors.text}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <h3
                    className={`font-display text-xs font-bold tracking-widest mb-2 text-foreground ${colors.text}`}
                  >
                    {hobby.title}
                  </h3>

                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {hobby.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
