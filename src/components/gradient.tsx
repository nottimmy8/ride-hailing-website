import { motion } from "framer-motion";
import image from "../assets/gradient.jpg";

const Gradient = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[300px] md:h-[800px] overflow-hidden"
    >
      <img src={image} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default Gradient;
