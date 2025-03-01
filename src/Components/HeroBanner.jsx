import { motion } from "framer-motion";
const HeroBanner = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="max-w-[1300px] mx-auto pt-4 pb-10 lg:py-28 px-3 md:px-10 lg:px-0 flex flex-col lg:flex-row gap-10 justify-between items-center font-inter">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-[650px]">
        <h1 className="text-[#2A2A2A] font-bold text-3xl md:text-4xl lg:text-[65px] pb-7 md:!leading-[80px] tracking-wide">
          {title}
        </h1>
        <p className="text-base font-light pb-10">
          {subtitle}
        </p>
        <button className="py-2.5 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-sm md:text-base font-medium">
          Let’s Discuss Your Case
        </button>
      </motion.div>
      <div className="relative">
        {/* Background Image */}
        <motion.img
          src={imageUrl}
          alt="Background"
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
