'use client';

type HeroHeight = 'full' | 'medium-tall' | 'medium' | 'half';
type HeroOverlay = 'dark' | 'light';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  height?: HeroHeight;
  overlay?: HeroOverlay;
  eyebrow?: string;
}

const Hero = ({
  title,
  subtitle,
  image = '/mall-2.png',
  height = 'full',
  overlay = 'dark',
  eyebrow,
}: HeroProps) => {
  const heightClasses: Record<HeroHeight, string> = {
    'full': 'h-screen min-h-[520px]',
    'medium-tall': 'h-[70vh] min-h-[440px]',
    'medium': 'h-[55vh] min-h-[360px]',
    'half': 'h-[45vh] min-h-[300px]',
  };

  const overlayClasses: Record<HeroOverlay, string> = {
    'dark': 'bg-gradient-to-b from-dl-navy/70 via-dl-navy/35 to-dl-navy/70',
    'light': 'bg-white/70',
  };

  const isDark = overlay === 'dark';

  return (
    <div className={`relative flex items-center justify-center w-full overflow-hidden ${heightClasses[height]}`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      {isDark && <div className="absolute inset-0 pattern-lines" />}

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className={`text-center ${isDark ? 'text-white' : 'text-dl-navy'}`}>
          {eyebrow && (
            <span className={`inline-block text-xs sm:text-sm tracking-[0.3em] uppercase font-medium animate-hero-fade ${isDark ? 'text-dl-gold' : 'text-dl-teal'}`}>
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] animate-hero-fade text-balance">
            {title}
          </h1>
          <div className="flex justify-center mt-5 md:mt-7">
            <div className="animate-hero-line h-[2px] bg-gradient-to-r from-transparent via-dl-gold to-transparent" />
          </div>
          {subtitle && (
            <p className={`mt-5 md:mt-7 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed animate-hero-fade-delay ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {height === 'full' && isDark && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
        </div>
      )}
    </div>
  );
};

export default Hero;
