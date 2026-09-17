import { motion } from "framer-motion";
import image from "../assets/kabout.jpg";
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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start max-w-2xl"
          >
            <h6 className="inline-flex items-center gap-2 mb-2 text-xs font-medium text-white backdrop-blur-md font-display uppercase">
              {t.about_heading_small}
            </h6>

            <h2 className="text-4xl md:text-5xl font-bold font-display leading-[1.15] tracking-tight mb-6">
              {t.about_heading_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {t.about_heading_2}
              </span>
            </h2>

            <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-10">
              {t.about_desc}
            </p>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[400px] rounded-3xl overflow-hidden group shadow-2xl"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img
                src={image}
                alt="Modern city mobility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
