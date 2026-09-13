import { Globe, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/keyenlogo.png";
import menu from "../assets/jam_menu.svg";
import cancle from "../assets/cancle.svg";

type TabKey = "Ride" | "Drive" | "Earn" | "Company";

const tabContent: Record<TabKey, any> = {
  Ride: {
    heading: "Get a ride in minutes",
    description:
      "Available on web and mobile. Register to use Keyen on web or click the links below to download the Keyen mobile application.",
    showAppButtons: true,
    links: [
      { text: "Request a ride", href: "#" },
      { text: "Price estimator", href: "#" },
      { text: "Ride options", href: "#" },
    ],
  },
  Drive: {
    heading: "Drive and earn on your terms",
    description:
      "Join our community of drivers. Work on your own schedule, be your own boss, and get paid fast with Keyen.",
    showAppButtons: false,
    links: [
      { text: "Sign up to drive", href: "#" },
      { text: "Driver requirements", href: "#" },
      { text: "Vehicle requirements", href: "#" },
    ],
  },
  Earn: {
    heading: "Multiple ways to earn",
    description:
      "Whether you're driving passengers, delivering packages, or managing a fleet, Keyen offers flexible earning opportunities.",
    showAppButtons: false,
    links: [
      { text: "Delivery driver", href: "#" },
      { text: "Fleet management", href: "#" },
      { text: "Keyen for Business", href: "#" },
    ],
  },
  Company: {
    heading: "Moving the world forward",
    description:
      "We are building the future of mobility in Africa. Learn more about our mission, our team, and our commitment to safety.",
    showAppButtons: false,
    links: [
      { text: "About us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Safety", href: "#" },
    ],
  },
};

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("Ride");

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (IsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [IsOpen]);

  const navLinks: TabKey[] = ["Ride", "Drive", "Earn", "Company"];

  return (
    <>
      <div className="w-full h-[70px] bg-white z-[60] relative">
        <div className="max-w-7xl w-full mx-auto px-4 py-1 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="w-23 relative z-[60]">
            <img src={logo} alt="Keyen" className="w-full object-cover" />
          </div>
          <div className="flex items-center gap-8 relative z-[60]">
            {/* Language */}
            <div className="hidden sm:flex rounded-md bg-gray-300/40 px-3 py-2 items-center gap-1 text-xs font-semibold cursor-pointer hover:bg-gray-300 duration-300">
              <Globe size={18} />
              EN
            </div>
            {/* CTA */}
            <button className="hidden sm:block bg-[#2563EB] text-white px-5 py-2 rounded-md cursor-pointer text-sm font-medium hover:bg-blue-700 transition-colors">
              Join Driver's Waitlist
            </button>

            {/* Menu */}
            <div className="cursor-pointer" onClick={() => setIsOpen(!IsOpen)}>
              {IsOpen ? (
                <img
                  src={cancle}
                  alt="Close menu"
                  className="w-[35px] h-[35px] object-contain transition-transform hover:rotate-90 duration-300"
                />
              ) : (
                <img
                  src={menu}
                  alt="Open menu"
                  className="w-[35px] h-[35px] object-contain transition-transform hover:scale-110 duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {IsOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 top-[70px] bg-white z-50 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full min-h-[calc(100vh-70px)] flex flex-col md:flex-row">
              {/* Left Side: Nav Links */}
              <div className="w-full md:w-[35%] lg:w-[30%] bg-gray-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-r border-gray-100">
                <div className="flex flex-col gap-8">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                    >
                      <button
                        onClick={() => setActiveTab(item)}
                        className={`text-4xl md:text-5xl lg:text-6xl font-display font-black text-left transition-colors flex items-center gap-4 group ${
                          activeTab === item ? "text-primary" : "text-gray-300 hover:text-gray-900"
                        }`}
                      >
                        {item}
                        {activeTab === item && (
                          <motion.span
                            layoutId="activeTabIndicator"
                            className="hidden md:block w-3 h-3 rounded-full bg-primary"
                          />
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Dynamic Content */}
              <div className="w-full md:flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="max-w-2xl"
                  >
                    <h3 className="font-display font-black text-3xl md:text-5xl text-gray-900 mb-6">
                      {tabContent[activeTab].heading}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
                      {tabContent[activeTab].description}
                    </p>

                    {/* Secondary Links */}
                    <div className="flex flex-col gap-4 mb-12">
                      {tabContent[activeTab].links.map((link: any, idx: number) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-primary transition-colors group w-fit"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.text}
                          <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        </a>
                      ))}
                    </div>

                    {/* App Download Buttons (Only for Ride tab) */}
                    {tabContent[activeTab].showAppButtons && (
                      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                        {/* App Store Button */}
                        <a
                          href="#"
                          className="flex items-center gap-3 px-6 py-4 bg-black text-white hover:bg-gray-800 rounded-xl transition-all duration-300 group shadow-lg"
                        >
                          <svg
                            className="w-8 h-8 shrink-0 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          <div className="text-left">
                            <p className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold group-hover:text-gray-100 transition-colors">
                              Download on the
                            </p>
                            <p className="text-white font-bold font-display text-base leading-tight">
                              App Store
                            </p>
                          </div>
                        </a>

                        {/* Google Play Button */}
                        <a
                          href="#"
                          className="flex items-center gap-3 px-6 py-4 bg-black text-white hover:bg-gray-800 rounded-xl transition-all duration-300 group shadow-lg"
                        >
                          <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M3.18 1.13C2.49 1.52 2 2.28 2 3.18v17.64c0 .9.49 1.66 1.18 2.05l.1.05 9.87-9.87v-.22L3.28 1.08l-.1.05Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M16.44 16.16l-3.29-3.29v-.22l3.29-3.29.07.04 3.9 2.21c1.11.63 1.11 1.66 0 2.3l-3.9 2.21-.07.04Z"
                              fill="#FBBC04"
                            />
                            <path
                              d="M16.51 16.12 13.15 12.78 3.18 22.87c.37.39.94.41 1.58.05l11.75-6.8"
                              fill="#EA4335"
                            />
                            <path
                              d="M16.51 7.88 4.76 1.08C4.12.72 3.55.74 3.18 1.13l9.97 9.97 3.36-3.22Z"
                              fill="#34A853"
                            />
                          </svg>
                          <div className="text-left">
                            <p className="text-gray-300 text-[10px] uppercase tracking-wider font-semibold group-hover:text-gray-100 transition-colors">
                              Get it on
                            </p>
                            <p className="text-white font-bold font-display text-base leading-tight">
                              Google Play
                            </p>
                          </div>
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

