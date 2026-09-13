import image from "../assets/kabout.jpg";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white font-noto overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start max-w-2xl">
            <h6 className="inline-flex items-center gap-2 mb-2  text-xs font-medium text-white backdrop-blur-md  font-display uppercase ">
              {t.about_heading_small}
            </h6>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.15] tracking-tight mb-6">
              {t.about_heading_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {t.about_heading_2}
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10">
              {t.about_desc}
            </p>

            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-opacity opacity-0 group-hover:opacity-100" />
              <span className="relative z-10">{t.about_btn}</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Quick Stats below CTA */}
            {/* <div className="flex items-center gap-8 mt-12 pt-12 border-t border-white/10 w-full">
              <div>
                <h4 className="text-3xl font-bold font-display text-white mb-1">
                  1M+
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Successful Rides
                </p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <h4 className="text-3xl font-bold font-display text-white mb-1">
                  50+
                </h4>
                <p className="text-sm text-gray-500 font-medium">
                  Cities Covered
                </p>
              </div>
            </div> */}
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
            {/* Main Image */}
            <div className="absolute inset-0   rounded-3xl overflow-hidden ">
              <img
                src={image}
                alt="Modern city mobility"
                className="w-full h-full object-cover "
              />
              {/* Overlay Gradient for readability of floating elements */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" /> */}
            </div>

            {/* Floating Glassmorphic Card 1 */}
            {/* <div className="absolute bottom-8 left-8 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium mb-0.5">
                    Reliability
                  </p>
                  <p className="text-xl font-bold font-display text-white">
                    99.9%
                  </p>
                </div>
              </div>
            </div> */}

            {/* Floating Glassmorphic Card 2 */}
            {/* <div className="absolute top-12 right-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl transform transition-transform duration-700 delay-100 hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">
                    Response Time
                  </p>
                  <p className="text-lg font-bold font-display text-white">
                    &lt; 3 mins
                  </p>
                </div>
              </div>
            </div> */}

            {/* Keyen Logo Watermark */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mix-blend-overlay">
              <h3 className="text-8xl md:text-9xl font-black tracking-tighter text-white font-display rotate-[-10deg] scale-150">
                KEYEN
              </h3>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
