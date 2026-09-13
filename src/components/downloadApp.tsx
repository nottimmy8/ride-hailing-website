import React from "react";
import phoneImg from "../assets/keyen_phone_mockup.jpg";
import { useLanguage } from "../context/LanguageContext";

const DownloadApp: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-48 font-noto bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="relative bg-primary rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-0 min-h-[420px] shadow-2xl">
          
          {/* Subtle background pattern/overlay for the banner */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
             <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute right-1/3 -top-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute left-10 bottom-10 grid grid-cols-5 gap-3 opacity-20 pointer-events-none">
                {/* Dots pattern like in inspiration */}
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-4 rounded-full bg-white rotate-12"></div>
                ))}
             </div>
             {/* Diagonal Tire Track Pattern */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none transform -skew-x-12 scale-150 flex flex-col justify-center gap-8">
               {[...Array(5)].map((_, i) => (
                  <div key={`track-${i}`} className="w-full h-12 border-y-4 border-white border-dashed"></div>
               ))}
             </div>
          </div>

          {/* Left Content */}
          <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:py-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight mb-4 leading-[1.1]">
              {t.download_heading}
            </h2>
            <p className="text-white/90 text-sm md:text-base font-medium mb-10 max-w-md">
              {t.download_subtext}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <svg
                  className="w-8 h-8 shrink-0 text-black"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                    {t.download_on}
                  </p>
                  <p className="text-black font-black font-display text-lg leading-none -mt-0.5">
                    {t.app_store}
                  </p>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-gray-50 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <svg
                  className="w-8 h-8 shrink-0"
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
                <div className="text-left">
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                    {t.get_it_on}
                  </p>
                  <p className="text-black font-black font-display text-lg leading-none -mt-0.5">
                    {t.google_play}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative md:absolute md:-right-8 lg:right-12 bottom-0 w-full md:w-auto flex justify-center mt-12 md:mt-0 z-20 h-full items-end md:items-center">
            <img
              src={phoneImg}
              alt="Keyen App Mockup"
              className="w-[280px] md:w-[320px] lg:w-[360px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)] md:scale-110 lg:scale-125 md:origin-bottom lg:origin-center md:translate-y-8"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
