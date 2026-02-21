import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          purple: "hsl(var(--neon-purple))",
          blue: "hsl(var(--neon-blue))",
          pink: "hsl(var(--neon-pink))",
        },
        space: {
          dark: "hsl(var(--space-dark))",
          navy: "hsl(var(--space-navy))",
          panel: "hsl(var(--space-panel))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-delay": {
          "0%, 30%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 10px hsl(191 100% 50% / 0.5)" },
          "50%": { textShadow: "0 0 25px hsl(191 100% 50% / 1), 0 0 50px hsl(191 100% 50% / 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shooting-star": {
          "0%": { transform: "translateX(-200px) translateY(-200px)", opacity: "1" },
          "100%": { transform: "translateX(600px) translateY(600px)", opacity: "0" },
        },
        "cursor-blink": {
          "50%": { opacity: "0" },
        },
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-delay": "fade-in-delay 1s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "shooting-star": "shooting-star 1.5s ease-out forwards",
        "cursor-blink": "cursor-blink 1s step-end infinite",
        "border-spin": "border-spin 3s linear infinite",
      },
      backgroundImage: {
        "space-gradient": "radial-gradient(ellipse at 50% 0%, hsl(220 60% 8%) 0%, hsl(222 47% 3%) 70%)",
        "hero-gradient": "linear-gradient(180deg, hsl(222 47% 3% / 0.3) 0%, hsl(222 47% 3% / 0.8) 50%, hsl(222 47% 3%) 100%)",
        "card-gradient": "linear-gradient(135deg, hsl(220 40% 6% / 0.9), hsl(220 40% 4% / 0.9))",
        "neon-line": "linear-gradient(90deg, transparent, hsl(191 100% 50%), transparent)",
        "grid-fade": "linear-gradient(180deg, transparent 0%, hsl(222 47% 3%) 100%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 15px hsl(191 100% 50% / 0.5), 0 0 30px hsl(191 100% 50% / 0.25)",
        "neon-purple": "0 0 15px hsl(265 80% 60% / 0.5), 0 0 30px hsl(265 80% 60% / 0.25)",
        "neon-blue": "0 0 15px hsl(213 100% 60% / 0.4), 0 0 30px hsl(213 100% 60% / 0.2)",
        glass: "0 8px 32px hsl(222 47% 2% / 0.8), inset 0 1px 0 hsl(210 40% 96% / 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
