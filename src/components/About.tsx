import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Clock } from "lucide-react";

const features = [
  {
    title: "30+ Years of Expertise",
    description: "Thousands of homes across Dallas-Fort Worth served with consistent, reliable results.",
    icon: <Clock className="w-4.5 h-4.5" />,
  },
  {
    title: "Meticulous Standards",
    description: "Every job is inspected to our exacting standards before we consider it complete.",
    icon: <Sparkles className="w-4.5 h-4.5" />,
  },
  {
    title: "Fully Insured",
    description: "Licensed, bonded, and insured for your complete peace of mind on every project.",
    icon: <ShieldCheck className="w-4.5 h-4.5" />,
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-brand-light overflow-visible">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative pb-8 pr-8"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://thesparkleshoppe.com/wp-content/uploads/2023/07/paint.jpg"
                alt="The Sparkle Shoppe Elite team at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-brand-blue text-white p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-display font-bold leading-none">30+</p>
              <p className="text-sm font-semibold mt-1 tracking-wide text-white/80">Years of Service</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              About Our Company
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight mb-6">
              The standard for home care in Dallas-Fort Worth
            </h2>
            <p className="text-brand-gray text-base md:text-[17px] leading-relaxed mb-10">
              At The Sparkle Shoppe Elite, we've built our reputation on doing the work
              others overlook. Since 1994, we've served thousands of homeowners across
              the Metroplex with window cleaning, pressure washing, gutter maintenance,
              and full-service home care — always on time, always thorough.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-brand-blue/20 text-brand-blue">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-dark mb-1">{feature.title}</h4>
                    <p className="text-brand-gray text-[15px] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-dark hover:bg-black text-white px-8 py-4 text-[15px] font-semibold tracking-wide transition-all duration-300"
            >
              Request a Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
