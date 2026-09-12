import image from "../assets/Kbanner.jpg";

const New = () => {
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center flex-col  ">
      {/* Overlay */}
      <div className="absolute inset-0  bg-gradient-to-b from-black/20 to-black/60"></div>
      <div className="  w-full h-full   ">
        {/* background img */}
        <img
          src={image}
          alt=""
          className=" w-full h-full object-cover object-top"
        />
      </div>
      {/* content */}
      <div className="absolute text-white  max-w-7xl w-full mx-auto px-4 py-1 h-full flex items-center  justify-center flex-col  ">
        <h1 className="text-5xl md:text-[64px] font-bold leading-[1.1]   mb-6">
          Know Who You're <br /> Riding{" "}
          <span className="text-primary">With.</span>
        </h1>
        <p className="text-xs md:text-sm font-medium  mb-8 max-w-[450px] leading-relaxed">
          Every Keyen driver is identity-checked, licensed, and
          guarantor-backed. Every rider is verified too. Not a slogan — a
          process you can actually ask us about.
        </p>
      </div>
    </div>
  );
};

export default New;
