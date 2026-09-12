import React, { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight, ChevronRight } from "lucide-react";
import logo from "../assets/keyenlogo.png";
import WaitlistForm from "./waitlistForm";

const footerLinks = {
  Company: ["About Us", "Careers", "Press & Media", "Blog", "Contact Us"],
  Riders: ["How It Works", "Safety", "Cities", "Accessibility", "Lost & Found"],
  Drivers: [
    "Drive with Keyen",
    "Driver Requirements",
    "Earnings",
    "Driver Support",
    "Fleet Solutions",
  ],
  Legal: [
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
  ],
};

const socials = [
  {
    label: "Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <WaitlistForm
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />

      <footer className="bg-slate-950 text-white font-noto relative overflow-hidden">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* CTA Banner */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h6 className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-3 font-display">
                Coming Soon
              </h6>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-[1.1]">
                Be the First to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Ride with Keyen
                </span>
              </h2>
              <p className="text-gray-400 text-base mt-4 leading-relaxed">
                Join thousands already on the waitlist. We're launching soon —
                don't miss your spot.
              </p>
            </div>
            <button
              id="footer-waitlist-btn"
              onClick={() => setShowWaitlist(true)}
              className="group relative shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold font-display uppercase tracking-wide overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_50px_-5px_rgba(37,99,235,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <img
                src={logo}
                alt="Keyen"
                className="w-28 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Technology-powered mobility and logistics built to simplify the
                way people, businesses, and communities move.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@keyen.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@keyen.com
                </a>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-white text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +234 800 000 0000
                </a>
                <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Lagos, Nigeria
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3 mt-1">
                {socials.map(({ svg, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h5 className="text-white font-bold font-display uppercase text-xs tracking-[0.2em]">
                  {category}
                </h5>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group flex items-center gap-1 text-gray-500 hover:text-white text-sm transition-colors duration-200"
                      >
                        <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-1 transition-all group-hover:ml-0" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Keyen Technologies Ltd. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-gray-300 text-xs transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
