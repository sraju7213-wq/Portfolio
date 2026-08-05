import { useMemo } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
  floatX: number;
  floatY: number;
};

const colors = ["rgba(0, 240, 255,", "rgba(99, 102, 241,", "rgba(255, 255, 255,"];

export default function FloatingParticles({ count = 8 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.04 + 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        floatX: (Math.random() - 0.5) * 40,
        floatY: -30 - Math.random() * 20,
      });
    }
    return arr;
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `${p.color} ${p.opacity * 2})`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color} ${p.opacity * 2})`,
            animation: `particle-float-${i % 3} ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      <style>{`
        @keyframes particle-float-0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.04; }
          50% { transform: translate(15px, -25px); opacity: 0.1; }
        }
        @keyframes particle-float-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.03; }
          50% { transform: translate(-20px, -30px); opacity: 0.08; }
        }
        @keyframes particle-float-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.05; }
          50% { transform: translate(10px, -20px); opacity: 0.09; }
        }
      `}</style>
    </div>
  );
}
