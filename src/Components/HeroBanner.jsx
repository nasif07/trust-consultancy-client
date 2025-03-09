import { motion } from "framer-motion";
import { NavLink } from "react-router";

const HeroBanner = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="max-w-[1300px] mx-auto pt-4 pb-10 lg:py-28 px-3 md:px-10 lg:px-0 flex flex-col lg:flex-row gap-10 justify-between items-center font-inter">
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="max-w-[650px]">
        <h1 className="text-[#2A2A2A] font-bold text-3xl md:text-4xl lg:text-[48px] pb-7 md:!leading-[55px] tracking-wide text-center md:text-start">
          {title}
        </h1>
        <p className="text-base font-light pb-10 text-center md:text-start">{subtitle}</p>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/contact-us"} className="
        flex justify-center md:justify-start">
          <button className="py-2.5 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-sm md:text-base font-medium ">
            Let’s Discuss Your Case
          </button>
        </NavLink>
      </motion.div>

      <div className="relative">
        {/* Background Image with Parallax Effect */}
        <motion.img
          src={imageUrl}
          alt="Background"
          className="w-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
