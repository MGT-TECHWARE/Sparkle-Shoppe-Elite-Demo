import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container-tight relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-blue text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-6"
        >
          The Sparkle Shoppe Elite
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-medium text-white leading-[1.08] mb-7 text-balance max-w-5xl mx-auto"
        >
          Pristine Homes.{" "}
          <br className="hidden md:block" />
          Trusted Craftsmanship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
        >
          Serving Dallas&ndash;Fort Worth with expert window cleaning,
          gutter maintenance, pressure washing, and full-service home care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-9 py-4 text-base font-semibold tracking-wide transition-all duration-300"
          >
            Get a Free Estimate
            <ArrowRight className="w-4.5 h-4.5" />
          </a>
          <a
            href="tel:2143282239"
            className="inline-flex items-center gap-2.5 border border-white/30 hover:border-white/50 text-white px-9 py-4 text-base font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
          >
            <Phone className="w-4.5 h-4.5" />
            Call (214) 328-2239
          </a>
        </motion.div>
      </div>

      {/* Smooth bottom transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
