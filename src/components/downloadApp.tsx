import React from "react";
import { Zap, MapPin, Star, Shield } from "lucide-react";
import bgImg from "../assets/download_app_bg.jpg";
import phoneImg from "../assets/phone_mockup_app.jpg";

const leftFeatures = [
  {
    id: "01",
    title: "Fast Booking",
    description:
      "Request a ride in seconds. Our smart matching connects you with the nearest driver instantly, no waiting around.",
  },
  {
    id: "02",
    title: "Easy to Use",
    description:
      "A clean, intuitive interface designed for everyone. Set your pickup, choose your ride, and you're on your way.",
  },
];

const rightFeatures = [
  {
    id: "03",
    title: "GPS Tracking",
    description:
      "Track your ride in real-time from pickup to destination. Share your live location with family for extra peace of mind.",
  },
  {
    id: "04",
    title: "Rewarding Rides",
    description:
      "Earn points with every trip. Redeem rewards for discounts, free rides, and exclusive Keyen perks.",
  },
];

const DownloadApp: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 font-noto overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Night city background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/85" />
        {/* Subtle blue glow from bottom-center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h6 className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-3 font-display">
            Get More Benefits
          </h6>
          <h2 className="text-4xl md:text-6xl font-black font-display text-white uppercase tracking-tight">
            Download the App
          </h2>
        </div>

        {/* Three-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {leftFeatures.map((feature) => (
              <div key={feature.id} className="flex items-start gap-5 group">
                {/* Number Badge */}
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                  <span className="text-sm font-black font-display text-primary group-hover:text-white transition-colors">
                    {feature.id}
                  </span>
                </div>
                <div className="lg:text-left">
                  <h4 className="text-white font-bold font-display uppercase tracking-wide mb-2 text-base md:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center: Phone Mockup */}
          <div className="flex flex-col items-center justify-center order-first lg:order-none">
            <div className="relative w-[240px] md:w-[280px]">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary/30 rounded-[3rem] blur-3xl scale-75 -z-10" />
              <img
                src={phoneImg}
                alt="Keyen App Mockup"
                className="w-full drop-shadow-2xl"
                style={{ mixBlendMode: "lighten" }}
              />
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {/* Google Play */}
              <a
                href="#"
                className="group flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                >
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
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                    Get it on
                  </p>
                  <p className="text-white font-bold font-display text-sm">
                    Google Play
                  </p>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="group flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  className="w-7 h-7 shrink-0 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                    Download on the
                  </p>
                  <p className="text-white font-bold font-display text-sm">
                    App Store
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {rightFeatures.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start gap-5 group lg:flex-row-reverse"
              >
                {/* Number Badge */}
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
                  <span className="text-sm font-black font-display text-primary group-hover:text-white transition-colors">
                    {feature.id}
                  </span>
                </div>
                <div className="lg:text-right">
                  <h4 className="text-white font-bold font-display uppercase tracking-wide mb-2 text-base md:text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
