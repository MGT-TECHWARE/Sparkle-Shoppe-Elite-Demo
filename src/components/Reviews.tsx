import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Carolyn Black",
    date: "November 2025",
    text: "I contacted Jose with a last minute request for an exterior window cleaning. He was able to give me an estimate and have someone at the home within 24hrs. The work was superior and fairly priced. I highly recommend The Sparkle Shoppe.",
    avatar: "https://secure.gravatar.com/avatar/df2e45815ac50b52b02d0fe9adfb55d4141374d56570aef5ad28d179d574abde?s=80&d=mm&r=g",
  },
  {
    name: "Carolyn & Michael Filak",
    date: "November 2024",
    text: "We've used Mildred and her crew to clean our home for many years. They are professional, honest, provide flexible scheduling, and do a very thorough cleaning. Prices are extremely reasonable.",
    avatar: "https://secure.gravatar.com/avatar/ebcf64464abfafc8fc1139d8662bf431?s=80&d=mm&r=g",
  },
  {
    name: "Linda DeBonis",
    date: "November 2024",
    text: "I have used Mildred to clean my house for over 5 years. She does a superb job and is extremely trustworthy. This company did an expert job on my windows as well. I highly recommend them!",
    avatar: "https://secure.gravatar.com/avatar/45081c120de0b70b102421369ac335ef?s=80&d=mm&r=g",
  },
  {
    name: "Kay Wright",
    date: "Recent",
    text: "The Sparkle Shoppe provides awesome services — I've used them for several years. Osnar, the service technician does such a nice job. Efficient, fast, professional, and thorough.",
    avatar: "https://secure.gravatar.com/avatar/420635c82c5664a3e2d5680a521dd61a373011e286940a60cab68f0c5a4d931e?s=80&d=mm&r=g",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-brand-dark text-white relative overflow-hidden">
      <div className="container-tight relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-[2.75rem] font-bold leading-tight"
            >
              What our clients say
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/40 text-sm font-medium">Based on Google Reviews</span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-white/10 p-8 md:p-10 hover:border-brand-blue/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white/70 text-[15px] leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-white/40">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
