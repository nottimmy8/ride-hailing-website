import image from "../assets/Kbanner.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[820px] flex items-center justify-center flex-col  ">
      {/* Overlay */}
      {/* <div className="absolute inset-0  bg-gradient-to-b from-black/20 to-black/60"></div> */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#05000A] via-[#05000A]/80 to-transparent pointer-events-none  " />

      <div className="absolute inset-0 z-[2] bg-gradient-b from-[#05000A]/40 via-transparent to-transparent pointer-events-none " />
      <div className="  absolute inset-0 w-full h-full   ">
        {/* background img */}
        <img
          src={image}
          alt=""
          className=" w-full h-full object-cover object-top"
        />
      </div>
      {/* content */}
      <div className="relative text-white  max-w-7xl w-full mx-auto px-4 py-1 h-full flex  flex-col justify-center  z-10  ">
        <h6 className="text-[10px] font-medium font-display mb-4 text-primary    px-4 py-1 tracking-widest uppercase">
          Launching in Lagos
        </h6>
        <h1 className="text-4xl md:text-[64px] font-bold leading-[1.1] font-display   mb-6">
          Know Who You're <br /> Riding{" "}
          <span className="text-primary">With.</span>
        </h1>
        <p className="text-xs md:text-sm font-medium  mb-8 max-w-[450px] leading-relaxed">
          Every Keyen driver is identity-checked, licensed, and
          guarantor-backed. Every rider is verified too. Not a slogan — a
          process you can actually ask us about.
        </p>

        <div className=" flex flex-col md:flex-row items-center gap-4  ">
          <button className="bg-[#2563EB] text-white px-5 py-3.5 rounded-md cursor-pointer text-sm font-medium ">
            Drive With Keyen
          </button>
          <button className="border border-[#2563EB] text-white px-5 py-3.5 rounded-md cursor-pointer text-sm font-medium ">
            Ride With Keyen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
