import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>

      <div className="container-tight relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-white leading-tight mb-5 max-w-3xl mx-auto text-balance"
        >
          Ready to see the difference?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-white/60 text-base md:text-lg max-w-lg mx-auto mb-10"
        >
          Get a free, no-obligation estimate for your home. Most quotes
          delivered within 24 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-[15px] font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-brand-blue/25"
          >
            Get Your Free Estimate
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:2143282239"
            className="text-white/50 hover:text-white text-[15px] font-medium transition-colors"
          >
            or call (214) 328-2239
          </a>
        </motion.div>
      </div>
    </section>
  );
}
