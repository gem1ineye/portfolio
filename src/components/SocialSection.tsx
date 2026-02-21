import { useEffect, useRef } from "react";
import { Instagram, Linkedin, Github, Mail, ArrowUpRight,CodeXml } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GITHUB",
    handle: "@gem1ineye",
    href: "https://github.com/gem1ineye",
    color: "cyan",
    desc: "Open source projects & code",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    handle: "Harshit",
    href: "https://www.linkedin.com/in/gem1ineye/",
    color: "blue",
    desc: "Professional network",
  },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    handle: "@gem1ineye",
    href: "https://instagram.com/gem1ineye",
    color: "pink",
    desc: "Behind the scenes & life",
  },
  {
    icon: Mail,
    label: "EMAIL",
    handle: "harshitnerd@gmail.com",
    href: "mailto:harshitnerd@gmail.com",
    color: "purple",
    desc: "Direct transmission",
  },
  {
    icon: CodeXml,
    label: "LeetCode",
    handle: "@gem1ineye",
    href: "https://leetcode.com/u/gem1ineye/",
    color: "orange",
    desc: "Open source projects & code",
  },
];

const colorMap = {
  orange: {
  border: "border-neon-orange/20 hover:border-neon-orange",
  icon: "text-neon-orange",
  bg: "hover:bg-neon-orange/5",
  glow: "hover:shadow-neon-orange",
  badge: "bg-neon-orange/10 text-neon-orange",
},
  cyan: {
    border: "border-neon-cyan/20 hover:border-neon-cyan",
    icon: "text-neon-cyan",
    bg: "hover:bg-neon-cyan/5",
    glow: "hover:shadow-neon-cyan",
    badge: "bg-neon-cyan/10 text-neon-cyan",
  },
  blue: {
    border: "border-neon-blue/20 hover:border-neon-blue",
    icon: "text-neon-blue",
    bg: "hover:bg-neon-blue/5",
    glow: "hover:shadow-neon-blue",
    badge: "bg-neon-blue/10 text-neon-blue",
  },
  pink: {
    border: "border-pink-400/20 hover:border-pink-400",
    icon: "text-pink-400",
    bg: "hover:bg-pink-400/5",
    glow: "",
    badge: "bg-pink-400/10 text-pink-400",
  },
  purple: {
    border: "border-neon-purple/20 hover:border-neon-purple",
    icon: "text-neon-purple",
    bg: "hover:bg-neon-purple/5",
    glow: "hover:shadow-neon-purple",
    badge: "bg-neon-purple/10 text-neon-purple",
  },
};

const SocialSection = () => {
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
    <section id="contact" className="relative py-28 pb-40" ref={sectionRef}>
      {/* Bottom grid fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-grid-fade pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="font-mono text-xs tracking-widest text-neon-purple mb-2">[ 005 ] // CONTACT</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            OPEN CHANNEL
          </h2>
          <div className="section-divider mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Ready to collaborate on the next great mission? Establish a connection through any of these channels.
          </p>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, idx) => {
            const colors = colorMap[social.color as keyof typeof colorMap];
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal group flex items-center gap-4 p-5 rounded-xl border glass-card ${colors.border} ${colors.bg} ${colors.glow} transition-all duration-300`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg border ${colors.border} flex items-center justify-center flex-shrink-0 transition-all duration-300 ${colors.bg}`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-display text-xs font-bold tracking-widest ${colors.icon} mb-0.5`}>
                    {social.label}
                  </p>
                  <p className="text-foreground font-mono text-sm truncate">{social.handle}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{social.desc}</p>
                </div>
                <ArrowUpRight className={`w-4 h-4 ${colors.icon} opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0`} />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="reveal text-center mt-20">
          <div className="h-px w-48 mx-auto bg-neon-line mb-6 opacity-30" />
          <p className="font-mono text-xs text-muted-foreground tracking-widest">
            Learn Apply Create  · © 2026 · MERN STACK DEVELOPER
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
