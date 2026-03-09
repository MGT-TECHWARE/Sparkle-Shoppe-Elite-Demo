import { PhoneCall, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-white/95 inline-block px-4 py-2.5 rounded mb-6">
              <img
                src="/logo.png"
                alt="The Sparkle Shoppe Elite"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-[15px] leading-relaxed">
              Professional cleaning and home care services across the
              Dallas-Fort Worth Metroplex since 1994.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Services", "About", "Gallery", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 text-[15px] hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:2143282239" className="flex items-center gap-3 text-white/40 text-[15px] hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  (214) 328-2239
                </a>
              </li>
              <li>
                <a href="tel:2146421369" className="flex items-center gap-3 text-white/40 text-[15px] hover:text-white transition-colors">
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  (214) 642-1369
                </a>
              </li>
              <li>
                <a href="mailto:thesparkleshoppetx@gmail.com" className="flex items-center gap-3 text-white/40 text-[15px] hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  thesparkleshoppetx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-[15px]">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                2909 Clearwater Dr, Mesquite, TX 75181
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-6">
              Hours
            </h4>
            <ul className="space-y-3 text-[15px]">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/40">Mon &ndash; Sat</span>
                <span className="text-white font-medium">24 hours</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/40">Sunday</span>
                <span className="text-brand-blue font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/30">
          <p>&copy; 2026 The Sparkle Shoppe Elite. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
