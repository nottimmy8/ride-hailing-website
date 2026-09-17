import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import driverImg from "../assets/keyen1.png";
import courierImg from "../assets/keyen2.png";
import rideImg from "../assets/kride.png";

interface SectionCard {
  title: string;
  description?: string;
  items?: string[];
  forText?: string;
  tagline: string;
}

interface EarningSection {
  id: string;
  subTitle: string;
  title: string;
  headline: string;
  description?: string;
  cardsTitle?: string;
  cards: SectionCard[];
  punchline?: string;
  cta: string;
  image: string;
  reverse: boolean;
}

const earnData: EarningSection[] = [
  {
    id: "driver",
    subTitle: "FOR DRIVERS",
    title: "EARN MORE WITH KEYEN",
    headline: "Your car. Your time. Your income.",
    description:
      "Drive with a platform designed to make your work more transparent, predictable and rewarding.",
    cardsTitle: "Why drive with Keyen?",
    cards: [
      {
        title: "Earnings & Transparency",
        items: [
          "Get paid the same day/weekly, not on someone else's schedule.",
          "See every deduction clearly. No hidden cuts, no guessing.",
        ],
        tagline: "Same-day payouts & fair deductions",
      },
      {
        title: "Support & Growth",
        items: [
          "No account gets switched off without a real, human review.",
          "Access potential maintenance, financing and vehicle partnerships as the Keyen driver ecosystem grows.",
          "Earn additional benefits through referrals, milestones and participation.",
        ],
        tagline: "Human review & milestone rewards",
      },
    ],
    punchline: "More transparency. More support. More control over your work.",
    cta: "Drive with Keyen",
    image: driverImg,
    reverse: false,
  },
  {
    id: "courier",
    subTitle: "FOR COURIERS",
    title: "BECOME A KEYEN DELIVERY PARTNER",
    headline: "More than deliveries. A partner in moving your city.",
    description:
      "Whether you’re an independent courier, fleet operator or delivery business, Keyen is building opportunities for trusted partners to move packages and goods efficiently across the city.",
    cardsTitle: "Why partner with Keyen?",
    cards: [
      {
        title: "Scale & Technology",
        items: [
          "Access delivery opportunities through the Keyen platform.",
          "Work with a technology-driven mobility network.",
          "Build your delivery business and reach more customers.",
        ],
        tagline: "Smart dispatch & growing customer reach",
      },
      {
        title: "Trust & Expansion",
        items: [
          "Benefit from transparent trip and payment information.",
          "Access support when you need it.",
          "Grow alongside a mobility ecosystem expanding across Africa.",
        ],
        tagline: "Transparent earnings & continent-wide scale",
      },
    ],
    punchline: "Reliable dispatch. Transparent earnings. Pan-African growth.",
    cta: "Register as a partner",
    image: courierImg,
    reverse: true,
  },
  {
    id: "rides",
    subTitle: "FOR RIDERS",
    title: "CHOOSE YOUR RIDE",
    headline: "The right ride for where you’re going.",
    cardsTitle: "Our Ride Options",
    cards: [
      {
        title: "Standard",
        description: "Reliable, comfortable and made for everyday movement.",
        forText:
          "Everyday trips, work, errands, appointments and getting around the city.",
        tagline: "Simple. Reliable. Ready when you are.",
      },
      {
        title: "Comfort",
        description: "A more refined ride when you want a little more.",
        forText:
          "Longer journeys, business trips, special occasions or when comfort matters more.",
        tagline: "More space. More comfort. Same Keyen accountability.",
      },
    ],
    punchline:
      "Everyday rides or elevated comfort — always with Keyen verification.",
    cta: "Book your ride",
    image: rideImg,
    reverse: false,
  },
];

const EarnWithKeyen: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      id="earn"
      className="bg-white font-noto overflow-hidden py-12 sm:py-16 md:py-20 relative mb-8 sm:mb-12 md:mb-16 z-10"
    >
      {/* Overall Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight uppercase">
          {t.earn_heading_1} <span className="text-primary">{t.earn_heading_2}</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
        {earnData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-0 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: item.reverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-1 w-full px-0 sm:px-2 md:px-8 lg:px-16 z-10 ${
                item.reverse ? "md:text-left" : ""
              }`}
            >
              <h6 className="text-primary font-bold text-xs tracking-widest uppercase mb-2.5 sm:mb-3 font-display inline-block bg-primary/10 px-3 py-1 rounded-full">
                {item.subTitle}
              </h6>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display text-gray-900 mb-2 uppercase leading-[1.15]">
                {item.title}
              </h3>
              {/* Added dynamic headline field */}
              <p className="text-gray-900 text-base sm:text-lg md:text-xl font-bold mb-2.5 sm:mb-3 max-w-lg">
                {item.headline}
              </p>
              {item.description && (
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 max-w-lg">
                  {item.description}
                </p>
              )}

              {/* Cards Section */}
              {item.cardsTitle && (
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-display">
                  {item.cardsTitle}
                </h5>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6 max-w-xl">
                {item.cards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="p-4 sm:p-5 rounded-2xl border border-gray-200/80 bg-gray-50/60 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-display text-gray-900 uppercase mb-2 sm:mb-3">
                        {card.title}
                      </h4>

                      {/* Description if present (Riders) */}
                      {card.description && (
                        <p className="text-xs sm:text-sm text-gray-600 mb-2.5 sm:mb-3 leading-relaxed">
                          {card.description}
                        </p>
                      )}

                      {/* For text if present (Riders) */}
                      {card.forText && (
                        <p className="text-xs text-gray-500 mb-3 sm:mb-4 leading-relaxed">
                          <span className="font-bold text-gray-700">For: </span>
                          {card.forText}
                        </p>
                      )}

                      {/* Checklist items if present (Drivers / Couriers) */}
                      {card.items && (
                        <ul className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4">
                          {card.items.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="flex items-start gap-2"
                            >
                              <Check className="w-4 h-4 text-primary shrink-0 stroke-[2.5] mt-0.5" />
                              <span className="text-xs sm:text-sm text-gray-700 leading-snug">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="pt-2.5 sm:pt-3 border-t border-gray-200/60 mt-1">
                      <p className="text-[11px] sm:text-xs font-semibold text-primary">
                        {card.tagline}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Punchline Banner */}
              {item.punchline && (
                <div className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-700 bg-primary/5 border border-primary/15 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl mb-6 sm:mb-8 max-w-xl">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1 sm:mt-0" />
                  <span>{item.punchline}</span>
                </div>
              )}

              {/* CTA */}
              <button
                onClick={() =>
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-opacity opacity-0 group-hover:opacity-100" />
                <span className="relative z-10 font-display uppercase tracking-wide text-xs sm:text-sm">
                  {item.cta}
                </span>
              </button>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{
                opacity: 0,
                x: item.reverse ? -40 : 40,
                scale: 0.95,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 relative w-full h-[220px] sm:h-[280px] md:h-[450px] flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`max-h-full max-w-[90%] sm:max-w-[80%] md:max-w-none md:w-[140%] object-contain mix-blend-multiply transition-all duration-500
                  md:absolute md:top-1/2 md:-translate-y-1/2
                  ${
                    item.reverse
                      ? "md:right-auto md:-left-[15%]"
                      : "md:left-auto md:-right-[15%]"
                  }
                `}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarnWithKeyen;
