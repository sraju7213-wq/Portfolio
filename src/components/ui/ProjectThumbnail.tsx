import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  gradient?: string;
  accent?: string;
  className?: string;
  imgClassName?: string;
};

export default function ProjectThumbnail({
  src,
  alt,
  gradient = "from-accent-aurora/20 to-accent-nebula/20",
  accent = "#6366f1",
  className = "",
  imgClassName = "",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const showImage = src && !errored;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Real image */}
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top brightness-[1.05] contrast-[1.05] transition-all duration-700 ${
            loaded ? "opacity-100 scale-[1.08]" : "opacity-0 scale-[1.12]"
          } ${imgClassName}`}
        />
      )}

      {/* Fallback gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showImage && loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Ambient glow */}
        <div
          className="absolute -inset-12 opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle at 50% 50%, ${accent}20, transparent 70%)` }}
        />

        {/* Initial letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[clamp(4rem,12vw,10rem)] font-heading font-black select-none"
            style={{
              color: `${accent}15`,
              textShadow: `0 0 60px ${accent}10`,
            }}
          >
            {alt.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      {/* Shimmer on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </div>
  );
}
