import { motion } from "motion/react";
import { Phone, ClipboardList, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Call us, fill out our form, or message us on WhatsApp. We respond within 24 hours with a detailed, no-obligation estimate.",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "We Schedule & Prepare",
    description: "We confirm a time that works for you, arrive on schedule, and walk through the scope of work before we start.",
    icon: <ClipboardList className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Enjoy the Results",
    description: "We complete the job to our exacting standards, do a final walkthrough with you, and leave your home spotless.",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight"
          >
            Three steps to a pristine home
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector line between steps */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-gray-200" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-brand-blue/20 text-brand-blue bg-white relative z-10">
                  {step.icon}
                </div>
                <p className="text-brand-blue text-xs font-bold tracking-widest mb-3">{step.number}</p>
                <h3 className="text-lg font-bold text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-gray text-[15px] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
