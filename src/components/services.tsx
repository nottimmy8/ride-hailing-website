import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import ridesImg from "../assets/service_rides.jpg";
import deliveryImg from "../assets/service_delivery.jpg";
import carsharingImg from "../assets/service_carsharing.jpg";
import carrentImg from "../assets/service_carrent.jpg";
import businessImg from "../assets/service_business.jpg";

const Services = () => {
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "rides",
      title: t.service_rides_title,
      description: t.service_rides_desc,
      image: ridesImg,
      accent: "#2563EB",
    },
    {
      id: "delivery",
      title: t.service_delivery_title,
      description: t.service_delivery_desc,
      image: deliveryImg,
      accent: "#EA580C",
    },
    {
      id: "carsharing",
      title: t.service_carsharing_title,
      description: t.service_carsharing_desc,
      image: carsharingImg,
      accent: "#059669",
    },
    {
      id: "carrent",
      title: t.service_carrent_title,
      description: t.service_carrent_desc,
      image: carrentImg,
      accent: "#7C3AED",
    },
    {
      id: "business",
      title: t.service_business_title,
      description: t.service_business_desc,
      image: businessImg,
      accent: "#1E3A5F",
    },
  ];

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

    // Determine active index based on scroll position
    const cardWidth = sliderRef.current.firstElementChild
      ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth
      : 300;
    const gap = 24;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, services.length - 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => slider.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.firstElementChild
      ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth
      : 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.firstElementChild
      ? (sliderRef.current.firstElementChild as HTMLElement).offsetWidth
      : 300;
    const gap = 24;
    sliderRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="w-full py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-gray-900 leading-tight">
              Our{" "}
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-3 max-w-md leading-relaxed">
              {t.service_section_desc}
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollRight
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 md:gap-6 overflow-x-auto pb-6 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[320px] sm:h-[340px] md:h-[360px] bg-[#F5F5F7] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/60"
              style={{
                scrollSnapAlign: "start",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: service.accent }}
              />

              {/* Text Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-gray-900 mb-2 md:mb-3 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[200px] md:max-w-[220px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Image Container - bottom right */}
              <div className="absolute bottom-0 right-0 w-[55%] h-[55%] flex items-end justify-end pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain object-bottom-right transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
