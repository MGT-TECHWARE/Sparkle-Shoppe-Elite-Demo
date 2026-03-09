import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Window Cleaning",
    description: "Streak-free clarity that invites natural light and enhances your home's appearance inside and out.",
    image: "/service-window-cleaning.png",
  },
  {
    title: "Power Washing",
    description: "Revitalize driveways, patios, and siding — removing years of buildup in hours.",
    image: "/service-power-washing.png",
  },
  {
    title: "Gutter Cleaning",
    description: "Prevent water damage and protect your foundation with thorough gutter maintenance.",
    image: "/service-gutter-cleaning.png",
  },
  {
    title: "House Cleaning",
    description: "Comprehensive interior cleaning tailored to your home's specific needs and schedule.",
    image: "/service-house-cleaning.png",
  },
  {
    title: "Fence Restoration",
    description: "Restore and protect your fences with professional staining and repair services.",
    image: "/service-fence-restoration.png",
  },
  {
    title: "Driveway Painting",
    description: "Refresh your driveway with professional painting and protective sealing.",
    image: "/service-driveway-painting.png",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight mb-5"
          >
            Services built around your home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-base md:text-[17px] leading-relaxed"
          >
            From sparkling windows to restored fences, every service is delivered
            with 30+ years of hands-on expertise.
          </motion.p>
        </div>

        {/* Top row — 2 large cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {services.slice(0, 2).map((service, index) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-4 max-w-md">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:text-white transition-colors duration-300">
                  Get a quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom row — 4 smaller cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(2).map((service, index) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.08 }}
              className="group relative overflow-hidden block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-white/50 text-[13px] leading-relaxed hidden sm:block">
                  {service.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
