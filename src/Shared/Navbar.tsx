import { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.svg";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <section className="font-inter">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-yellow-400 py-2 md:px-10 px-4 text-center">
        <h6 className="text-white font-medium text-xs">
          A complete solution for your business!
        </h6>
      </motion.div>

      {/* Main Navbar Section */}
      <div className="flex justify-between items-center max-w-[1316px] mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <img src={logo} alt="logo" className="h-10" />
        </motion.div>

        {/* Contact Info - Visible on Desktop */}
        <div className="hidden md:flex gap-2 md:gap-6">
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

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-[#E7E7E7] py-3 md:px-10 px-4 hidden md:flex md:sticky top-0">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <div className="hidden md:flex gap-4 lg:gap-16">
            {navLinks.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1, color: "#E7B51E" }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E7B51E] underline border-b-2 text-sm font-medium"
                      : "text-black text-sm font-medium"
                  }>
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#E7E7E7] overflow-hidden px-4 flex flex-col gap-3 py-3">
            {navLinks.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileTap={{ scale: 0.95 }}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#E7B51E] underline border-b-2 text-sm font-medium"
                      : "text-black text-sm font-medium"
                  }>
                  {item.name}
                </NavLink>
              </motion.div>
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
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
