import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-blue text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-brand-dark leading-tight mb-5">
              Request a free quote
            </h2>
            <p className="text-brand-gray text-base md:text-[17px] leading-relaxed mb-10">
              Take the first step towards a pristine home. Our team will respond
              with a customized estimate within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-brand-blue/20 text-brand-blue">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Call Us</h4>
                  <p className="text-brand-gray text-[15px]">
                    <a href="tel:2143282239" className="hover:text-brand-blue transition-colors">(214) 328-2239</a>
                    {" "}&middot;{" "}
                    <a href="tel:2146421369" className="hover:text-brand-blue transition-colors">(214) 642-1369</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-brand-blue/20 text-brand-blue">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Email</h4>
                  <a href="mailto:thesparkleshoppetx@gmail.com" className="text-brand-gray text-[15px] hover:text-brand-blue transition-colors">
                    thesparkleshoppetx@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-brand-blue/20 text-brand-blue">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-dark mb-1">Service Area</h4>
                  <p className="text-brand-gray text-[15px]">
                    Dallas, Richardson, Plano, Frisco, Allen, McKinney
                    <br />
                    <span className="text-brand-gray/60">and the greater DFW Metroplex</span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/12143282239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 text-[15px] font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-4.5 h-4.5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-light border border-gray-200 p-8 md:p-10"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all bg-white text-[15px]"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all bg-white text-[15px]"
                    placeholder="(214) 555-0123"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all bg-white text-[15px]"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all bg-white text-[15px] appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="windows">Window Cleaning</option>
                  <option value="powerwash">Power Washing</option>
                  <option value="gutters">Gutter Cleaning</option>
                  <option value="house">House Cleaning</option>
                  <option value="fence">Fence Restoration</option>
                  <option value="driveway">Driveway Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold tracking-wide uppercase text-brand-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 outline-none transition-all bg-white text-[15px] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 text-[15px] font-semibold tracking-wide transition-all duration-300"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
