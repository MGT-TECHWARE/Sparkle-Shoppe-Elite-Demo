import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Coupons() {
  return (
    <section id="coupons" className="section-padding bg-brand-light">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Special Offers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight"
          >
            Exclusive savings for you
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gray-200 bg-white p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-brand-blue/5" />
            <p className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3 relative z-10">
              New Customers
            </p>
            <p className="text-5xl md:text-6xl font-display font-bold text-brand-dark mb-4 relative z-10">
              15<span className="text-3xl align-top">%</span> OFF
            </p>
            <p className="text-brand-gray text-[15px] leading-relaxed mb-8 relative z-10">
              Present this offer when you schedule your first service
              and experience the difference professional care makes.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-dark transition-colors relative z-10"
            >
              Claim offer
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-brand-dark text-white p-10 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/5" />
            <p className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3 relative z-10">
              Returning Clients
            </p>
            <p className="text-5xl md:text-6xl font-display font-bold mb-4 relative z-10">
              10<span className="text-3xl align-top">%</span> OFF
            </p>
            <p className="text-white/50 text-[15px] leading-relaxed mb-8 relative z-10">
              Your loyalty means the world to us. Enjoy an exclusive
              discount on your next service as our thanks.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-white transition-colors relative z-10"
            >
              Claim offer
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
