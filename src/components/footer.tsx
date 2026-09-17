import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative min-h-[620px] overflow-hidden rounded-t-[34px] bg-[#080808] px-6 sm:px-10 pt-32 md:pt-40 pb-12 text-white z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl w-full mx-auto"
      >
        {/* Top row */}
        <div className="relative flex items-center justify-between border-b border-white/15 pb-5">
          <div className="text-[20px] font-medium tracking-[-0.04em] text-white/80">
            Keyen
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-1.5">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              X
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              ◎
            </div>

            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-white/80 text-[10px] font-bold text-black">
              in
            </div>
          </div>
        </div>

        {/* Footer information */}
        <div className="relative flex items-center justify-between gap-8 pt-7 text-xs leading-[1.6]">
          {/* Description */}
          <div className="max-w-[235px] text-white/50">
            <p className="text-xs">{t.footer_tagline}</p>
          </div>

          {/* Questions */}
          <div>
            <h3 className="mb-2 font-medium text-white/80">info@keyen.com</h3>
          </div>
        </div>

        {/* Large Keyen wordmark background */}
        <div className="pointer-events-none absolute bottom-[-35px] left-[5%] w-[90%] overflow-hidden">
          <div
            className="
              select-none
              text-center
             text-[160px] md:text-[300px]
              font-bold
              leading-[0.72]
              tracking-[-0.085em]
              text-transparent
              bg-clip-text
              bg-gradient-to-b
              from-[#e8e8e8]
              via-[#929292]
              to-[#090909]
            "
          >
            Keyen
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 {t.footer_rights}</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer_terms}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer_privacy}
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
