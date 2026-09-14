import React from "react";
import { Check } from "lucide-react";

import driverImg from "../assets/keyen1.png";
import courierImg from "../assets/keyen2.png";

const earnData = [
  {
    id: "driver",
    subTitle: "FOR DRIVERS",
    title: "Earn money as a Keyen driver",
    description:
      "Drive and earn money. Join the Keyen platform to connect with passengers and turn your free time into earnings with complete flexibility.",
    features: [
      "Luxury cars",
      "Fixed price",
      "No fee",
      "Good application",
      "Weekly payment",
      "Stable orders",
    ],
    cta: "Register to drive",
    image: driverImg,
    reverse: false,
  },
  {
    id: "courier",
    subTitle: "FOR COURIERS",
    title: "Become a Keyen courier partner",
    description:
      "Earn with every delivery. Join our network of couriers and start earning by delivering packages and food around your city with full flexibility.",
    features: [
      "Flexible hours",
      "Instant payouts",
      "No boss",
      "Easy onboarding",
      "Earn on your terms",
      "Local deliveries",
    ],
    cta: "Register as a courier",
    image: courierImg,
    reverse: true,
  },
];

const EarnWithKeyen: React.FC = () => {
  return (
    <section className="bg-white font-noto overflow-hidden py-16 md:py-20 relative mb-12 md:mb-16 z-10">
      {/* Overall Header */}
      <div className="text-center mb-16 md:mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-black font-display text-gray-900 tracking-tight uppercase">
          Earn money with <span className="text-primary">Keyen</span>
        </h2>
      </div>

      <div className="flex flex-col gap-20 md:gap-32 max-w-7xl mx-auto px-4 justify-between">
        {earnData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-0 ${item.reverse ? "md:flex-row-reverse" : ""}`}
          >
            {/* Text Content */}
            <div
              className={`flex-1 w-full px-4 sm:px-6 md:px-12 lg:px-20 z-10 ${item.reverse ? "md:text-left" : ""}`}
            >
              <h6 className="text-primary font-bold text-sm tracking-widest uppercase mb-4 font-display">
                {item.subTitle}
              </h6>
              <h3 className="text-3xl md:text-5xl font-black font-display text-gray-900 mb-6 uppercase leading-[1.1]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                {item.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 max-w-lg">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 stroke-[3]" />
                    <span className="text-sm font-bold text-gray-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-opacity opacity-0 group-hover:opacity-100" />
                <span className="relative z-10 font-display uppercase tracking-wide">
                  {item.cta}
                </span>
              </button>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative w-full h-[260px] md:h-[450px]">
              <img
                src={item.image}
                alt={item.title}
                className={`absolute top-1/2 -translate-y-1/2 w-[140%] max-w-none object-contain mix-blend-multiply 
                  ${item.reverse ? "right-0 md:right-auto md:-left-[15%]" : "left-0 md:left-auto md:-right-[15%]"}
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarnWithKeyen;
