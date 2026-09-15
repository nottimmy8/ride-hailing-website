import image from "../assets/gradient.jpg";

const Gradient = () => {
  return (
    <div className="w-full h-[300px] md:h-[800px] ">
      <img src={image} alt="" className="w-full h-full bg-cover" />
    </div>
  );
};

export default Gradient;
