export default function SvgNoiseBackground({ 
  opacity = 0.035, 
  blendMode = 'overlay' 
}: { 
  opacity?: number; 
  blendMode?: 'overlay' | 'soft-light' | 'multiply' | 'screen';
}) {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[55]"
      style={{ mixBlendMode: blendMode }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <filter id="premium-noise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.85" 
            numOctaves="4" 
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix 
            type="saturate" 
            values="0" 
            in="noise"
            result="desaturated"
          />
          <feComponentTransfer in="desaturated" result="adjusted">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#premium-noise)" 
          style={{ opacity }}
        />
      </svg>
    </div>
  );
}