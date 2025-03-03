import bannerBg from "../../assets/bannerBg.svg";
import laptopBanner from "../../assets/laptopBanner.png";
import coinIcon from "../../assets/coinIcon.svg";
import bannerRight from "../../assets/bannerRightImage.png";
import achivement from "../../assets/achivementIcon.svg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <section className="max-w-[1300px] mx-auto pt-4 pb-10 lg:py-28 px-3 md:px-10 lg:px-0 flex flex-col lg:flex-row gap-14 md:gap-40 items-center font-inter">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-[650px]">
        <h1 className="text-[#2A2A2A] font-bold text-[38px] leading-[46px] lg:text-[65px] pb-7 md:!leading-[80px] tracking-wide">
          Your Partner in Business{" "}
          <TypeAnimation
            className="text-[]"
            sequence={[
              "Growth", // Types 'One'
              1000, // Waits 1s
              "VAT", // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              "TAX",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: "#E7B51E" }}
          />
          & Compliance
        </h1>
        <p className="text-base font-light pb-10">
          Welcome to Trust Consultancy, your reliable partner in VAT, Tax, and
          financial compliance solutions. With years of expertise in
          Bangladesh's regulatory landscape, we assist businesses in navigating
          complex tax requirements with efficiency and accuracy.
        </p>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={"/contact-us"}>
          <button className="py-2.5 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-sm md:text-base font-medium">
            Let’s Discuss Your Case
          </button>
        </NavLink>
      </motion.div>
      <div className="relative">
        {/* Background Image */}
        <motion.img
          src={bannerBg}
          alt="Background"
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Laptop Banner */}
        <motion.img
          className="absolute sm:-left-40 sm:-bottom-20 left-0 bottom-0 w-56 sm:w-auto"
          src={laptopBanner}
          alt="Laptop"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Right Banner */}
        <motion.img
          className="absolute sm:-right-32 sm:top-20 right-0 top-5 md:top-10 w-40 sm:w-auto"
          src={bannerRight}
          alt="Right Banner"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Coin Icon */}
        <motion.img
          className="absolute sm:-bottom-32 sm:-right-16 bottom-10 right-4 w-28 sm:w-auto"
          src={coinIcon}
          alt="Coin Icon"
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Achievement Badge */}
        <motion.img
          className="absolute sm:-top-2 sm:left-8 top-0 left-0 md:left-4 w-48 sm:w-auto"
          src={achivement}
          alt="Achievement"
          initial={{ y: -50, opacity: 0, rotate: -10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Banner;
