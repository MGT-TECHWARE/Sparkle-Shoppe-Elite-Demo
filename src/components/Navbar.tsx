import { Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white shadow-sm py-2"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex items-center justify-between">
        {/* Left — Logo */}
        <a href="#" className="flex items-center z-50 relative shrink-0">
          <img
            src="/logo.png"
            alt="The Sparkle Shoppe Elite"
            className={cn(
              "w-auto object-contain transition-all duration-500",
              isScrolled ? "h-12" : "h-14 md:h-16"
            )}
          />
        </a>

        {/* Center — Nav Links */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                isScrolled
                  ? "text-brand-dark/70 hover:text-brand-blue"
                  : "text-black/80 hover:text-brand-blue"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right — Phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:2143282239"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              isScrolled
                ? "text-brand-dark/60 hover:text-brand-dark"
                : "text-black/70 hover:text-black"
            )}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>(214) 328-2239</span>
          </a>
          <a
            href="#contact"
            className={cn(
              "px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300",
              isScrolled
                ? "bg-brand-blue hover:bg-brand-blue-dark text-white"
                : "border border-black/70 text-black/80 hover:bg-black hover:text-white"
            )}
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden z-50 relative p-2",
            isScrolled ? "text-brand-dark" : "text-black"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-display font-medium text-brand-dark hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col items-center gap-5 mt-6">
            <a
              href="tel:2143282239"
              className="flex items-center gap-2 text-lg text-brand-dark/60"
            >
              <PhoneCall className="w-5 h-5" />
              (214) 328-2239
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-blue text-white px-8 py-3 text-lg font-semibold"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
