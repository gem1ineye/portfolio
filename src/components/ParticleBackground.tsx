import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  isStar: boolean;
  shootingProgress?: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = Math.min(Math.floor(width * 0.07), 120);
    const MAX_DIST = 120;
    const particles: Particle[] = [];

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() < 0.15 ? Math.random() * 2 + 1 : Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.6 + 0.4,
      isStar: Math.random() < 0.3,
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    // Shooting stars
    let shootingStars: { x: number; y: number; len: number; speed: number; alpha: number }[] = [];
    let shootingTimer = 0;

    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.7,
        y: Math.random() * height * 0.4,
        len: 120 + Math.random() * 80,
        speed: 8 + Math.random() * 6,
        alpha: 1,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      shootingTimer++;
      if (shootingTimer > 200 && Math.random() < 0.008) {
        addShootingStar();
        shootingTimer = 0;
      }

      // Draw shooting stars
      shootingStars = shootingStars.filter((s) => s.alpha > 0.01);
      shootingStars.forEach((s) => {
        ctx.save();
        ctx.beginPath();
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y + s.len);
        grad.addColorStop(0, `rgba(0, 212, 255, 0)`);
        grad.addColorStop(0.6, `rgba(0, 212, 255, ${s.alpha})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y + s.len);
        ctx.stroke();
        ctx.restore();
        s.x += s.speed;
        s.y += s.speed;
        s.alpha -= 0.02;
      });

      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        // Mouse repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < 100) {
          const force = (100 - distMouse) / 100;
          p.vx += (dx / distMouse) * force * 0.4;
          p.vy += (dy / distMouse) * force * 0.4;
        }

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle/star
        ctx.save();
        ctx.globalAlpha = p.alpha;
        if (p.isStar && p.radius > 1) {
          // Glowing star
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
          gradient.addColorStop(0, "rgba(180, 240, 255, 0.9)");
          gradient.addColorStop(0.5, "rgba(0, 212, 255, 0.3)");
          gradient.addColorStop(1, "rgba(0, 212, 255, 0)");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = p.isStar ? "rgba(200, 240, 255, 0.95)" : "rgba(160, 200, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.3;
            ctx.save();
            ctx.globalAlpha = opacity;
            const lineGrad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            lineGrad.addColorStop(0, "rgba(0, 212, 255, 1)");
            lineGrad.addColorStop(1, "rgba(155, 48, 255, 1)");
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default ParticleBackground;
