import { motion } from "motion/react";
import { Star } from "lucide-react";

const stats = [
  { value: "3,500+", label: "Homes Served" },
  { value: "30+", label: "Years Experience" },
  { value: "4.9", label: "Google Rating", icon: true },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

export function TrustedBy() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container-tight">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                  {stat.value}
                </span>
                {stat.icon && (
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                )}
              </div>
              <p className="text-brand-gray text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
