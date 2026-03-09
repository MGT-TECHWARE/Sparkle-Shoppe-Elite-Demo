import { motion } from "motion/react";

const images = [
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.29-PM-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.28-PM-1-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.35-PM-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.27-PM-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.30-PM-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.16-PM-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.21-PM-1-400x516.jpeg",
  "https://thesparkleshoppe.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-17-at-3.43.22-PM-400x516.jpeg",
];

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-brand-light">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight"
            >
              Recent projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray text-[15px] max-w-sm leading-relaxed"
          >
            From sparkling windows to rejuvenated exteriors — see the
            difference professional care makes.
          </motion.p>
        </div>

        {/* Masonry-style columns layout */}
        <div className="columns-2 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="break-inside-avoid relative group overflow-hidden"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
