import { ReactNode } from "react";
interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  glowColor?: string;
  showBadge?: boolean;
}
const HeroBanner = ({
  title,
  subtitle,
  description,
  children,
  glowColor = "solio-yellow",
  showBadge = false
}: HeroBannerProps) => {
  const getGlowClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-400/20";
      case "blue":
        return "bg-blue-400/20";
      case "purple":
        return "bg-purple-400/20";
      case "red":
        return "bg-red-400/20";
      case "orange":
        return "bg-orange-400/20";
      case "pink":
        return "bg-pink-400/20";
      case "cyan":
        return "bg-cyan-400/20";
      case "emerald":
        return "bg-emerald-400/20";
      case "indigo":
        return "bg-indigo-400/20";
      case "rose":
        return "bg-rose-400/20";
      default:
        return "bg-solio-yellow/20";
    }
  };
  return <section className="relative bg-gradient-to-br from-gray-900 via-solio-blue to-blue-900 text-white overflow-hidden py-24">
      {/* Floating elements for modern touch */}
      <div className={`absolute top-20 right-10 w-32 h-32 ${getGlowClass(glowColor)} rounded-full blur-xl animate-pulse`}></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
      
      <div className="container relative z-20">
        <div className="max-w-4xl">
          {/* Modern badge - only show if showBadge is true */}
          {showBadge && <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-solio-yellow rounded-full mr-2 animate-pulse"></span>
              Innovation • Durabilité • Excellence
            </div>}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-solio-yellow bg-clip-text text-transparent">
              {title}
            </span>
            {subtitle && <>
                <br />
                
              </>}
          </h1>
          
          {description && <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl leading-relaxed">
              {description}
            </p>}
          
          {children}
        </div>
      </div>
    </section>;
};
export default HeroBanner;