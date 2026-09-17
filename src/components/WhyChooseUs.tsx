import { motion } from "framer-motion";
import data from "../mock/data";
import { useLanguage } from "../context/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 py-1 flex flex-col items-center justify-center gap-10">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-[30px] md:text-[45px] font-bold leading-[1.1] mb-6 max-w-[600px] font-display">
            {t.services_heading_1}{" "}
            <span className="text-primary">{t.services_heading_accent}</span>{" "}
            <br /> {t.services_heading_2}
          </h1>
          <p className="max-w-lg text-sm text-center text-gray-600 leading-relaxed">
            Keyen connects riders and drivers through a mobility platform built
            around verification, transparent fares, reliable service and real
            human support. Because getting from one place to another should feel
            simple, predictable and secure.
          </p>
        </motion.div>

        {/* card grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-14 h-14 object-cover mb-4 rounded-xl"
                  />
                  <h3 className="text-xl font-bold mb-2 font-display text-gray-900">
                    {item.label}
                  </h3>
                  <p className="max-w-xs text-xs md:text-sm text-gray-500 leading-relaxed">
                    {item.subText}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => {
            const waitlistElem = document.getElementById("waitlist");
            if (waitlistElem) {
              waitlistElem.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/#waitlist";
            }
          }}
          className="bg-[#2563EB] text-white px-6 py-3.5 rounded-xl cursor-pointer text-sm font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 active:scale-95"
        >
          {t.services_book_btn}
        </motion.button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
