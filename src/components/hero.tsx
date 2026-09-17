import { motion } from "framer-motion";
import image from "../assets/Kbanner.jpg";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-[820px] flex items-center justify-center flex-col overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#05000A] via-[#05000A]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-b from-[#05000A]/40 via-transparent to-transparent pointer-events-none" />

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* background img with smooth scale-in */}
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* content */}
      <div className="relative text-white max-w-7xl w-full mx-auto px-4 py-1 h-full flex flex-col justify-center z-10">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] font-medium font-display mb-4 text-primary px-4 py-1 tracking-widest uppercase"
        >
          {t.hero_launching}
        </motion.h6>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-[64px] lg:text-[84px] font-bold leading-[1.1] font-display mb-4"
        >
          {t.hero_headline_1} <br /> {t.hero_headline_2}{" "}
          <span className="text-primary">{t.hero_headline_accent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs md:text-sm font-medium mb-8 max-w-[550px] leading-relaxed"
        >
          {t.hero_subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row items-center gap-4"
        >
          <button
            onClick={() => {
              const waitlistElem = document.getElementById("waitlist");
              if (waitlistElem) {
                waitlistElem.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#waitlist";
              }
            }}
            className="bg-[#2563EB] text-white px-5 py-3.5 rounded-md cursor-pointer text-sm font-medium transition-transform hover:scale-105 active:scale-95 duration-200 shadow-lg shadow-blue-600/30"
          >
            {t.hero_drive_btn}
          </button>
          <button
            onClick={() => {
              const earnElem = document.getElementById("earn");
              if (earnElem) {
                earnElem.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#earn";
              }
            }}
            className="border border-[#2563EB] text-white px-5 py-3.5 rounded-md cursor-pointer text-sm font-medium transition-all hover:bg-blue-600/20 active:scale-95 duration-200"
          >
            {t.hero_ride_btn}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
