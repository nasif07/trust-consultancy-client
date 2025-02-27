import { useState, useEffect } from "react";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.svg";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        // Only apply on large screens
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: <BsBuildings className="text-2xl md:text-4xl" />,
      text: (
        <>
          4860/6188, Kazi Complex (4th floor)
          <br />
          Hazipara, Access Road, Agrabad, Chattogram
        </>
      ),
    },
    {
      icon: <MdOutlinePhoneInTalk className="text-2xl md:text-4xl" />,
      text: (
        <>
          +88 01336-092485
          <br />
          +88 01887-944830
        </>
      ),
    },
    {
      icon: <MdOutlineMarkEmailRead className="text-2xl md:text-4xl" />,
      text: "trustconsultancy096@gmail.com",
    },
  ];

  return (
    <section className="font-inter">
      {/* Top Banner - Hidden on Scroll for Large Screens */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          height: isScrolled ? 0 : "auto",
        }}
        transition={{ duration: 0.3 }}
        className="bg-[#E7B51E] py-2 md:px-10 px-4 text-center block">
        <h6 className="text-white font-medium text-xs">
          A complete solution for your business!
        </h6>
      </motion.div>

      {/* Contact Info Section - Hidden on Scroll for Large Screens */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          height: isScrolled ? 0 : "auto",
        }}
        transition={{ duration: 0.3 }}
        className="py-2 md:px-10 px-4 hidden lg:block">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          {/* Logo Initially Inside Contact Bar for Desktop */}
          {!isScrolled && (
            <motion.img
              src={logo}
              alt="logo"
              className="h-10 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex gap-6 py-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="flex items-center gap-3">
                {item.icon}
                <span className="text-[#2A2A2A] font-medium text-xs">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Sticky Navbar (Only Sticky for Large Screens) */}
      <nav
        className={`bg-[#E7E7E7] py-3 md:px-10 px-4 w-full z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 lg:block hidden" : "relative"
        }`}>
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          {/* Logo Moves to Navbar on Scroll (Only for Large Screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isScrolled ? 1 : 0,
              scale: isScrolled ? 1 : 0.5,
            }}
            transition={{ duration: 0.5 }}
            className="hidden md:block">
            {isScrolled && <img src={logo} alt="logo" className="h-10" />}
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-4 lg:gap-16">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Services", path: "/services" },
              { name: "FAQ", path: "/faq" },
              { name: "Career", path: "/career" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E7B51E] underline border-b-2 text-sm font-medium"
                    : "text-black text-sm font-medium"
                }>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle Button - Unchanged */}
          <div className="lg:hidden flex justify-between w-full items-center gap-10">
            <div>
              <img src={logo} alt="logo" className="h-10" />
            </div>
            <div>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu (Unchanged) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden bg-[#E7E7E7] overflow-hidden px-4 flex flex-col gap-3 ${
          menuOpen ? "py-3" : "py-0"
        }`}>
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Our Services", path: "/services" },
          { name: "FAQ", path: "/faq" },
          { name: "Career", path: "/career" },
          { name: "Contact Us", path: "/contact" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#E7B51E] underline border-b-2 text-sm font-medium"
                : "text-black text-sm font-medium"
            }>
            {item.name}
          </NavLink>
        ))}

        {/* Mobile Contact Info */}
        <div className="flex flex-col gap-2 mt-4">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="flex items-center gap-3">
              {item.icon}
              <span className="text-[#2A2A2A] font-medium text-xs">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;
