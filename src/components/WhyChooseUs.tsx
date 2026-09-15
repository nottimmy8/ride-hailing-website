import data from "../mock/data";
import { useLanguage } from "../context/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <div className="py-20 ">
      <div className="max-w-7xl w-full mx-auto px-4 py-1 flex flex-col items-center  justify-center gap-10  ">
        {/* text */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[30px] md:text-[45px] font-bold leading-[1.1]   mb-6 max-w-[600px] font-display ">
            {t.services_heading_1}{" "}
            <span className="text-primary">{t.services_heading_accent}</span>{" "}
            <br /> {t.services_heading_2}
          </h1>
          <p className="max-w-lg text-sm text-center">
            Keyen connects riders and drivers through a mobility platform built
            around verification, transparent fares, reliable service and real
            human support. Because getting from one place to another should feel
            simple, predictable and secure.
          </p>
        </div>
        {/* card */}
        <div className=" flex-1 grid grid-cols-1 md:grid-cols-4   gap-4  ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="p-5 rounded-lg shadow-md bg-white hover:bg-primary/10 hover:-translate-y-1  duration-300 cursor-pointer "
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-15 h-15 object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-3 font-display">
                  {item.label}
                </h3>
                <p className="max-w-xs text-xs md:text-sm">{item.subText}</p>
              </div>
            );
          })}
        </div>

        <button className="bg-[#2563EB]  text-white px-5 py-3.5 rounded-md cursor-pointer text-sm font-medium ">
          {t.services_book_btn}
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
