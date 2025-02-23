import { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.svg";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="font-inter">
      {/* Top Banner */}
      <div className="bg-yellow-400 py-2 md:px-10 px-4 text-center">
        <h6 className="text-white font-medium text-xs">
          A complete solution for your business!
        </h6>
      </div>
      
      {/* Main Navbar Section */}
      <div className="flex justify-between items-center max-w-[1300px] mx-auto py-5 md:px-10 px-4">
        <div>
          <img src={logo} alt="logo" className="h-10" />
        </div>
        
        {/* Contact Info - Visible on Desktop & Mobile */}
        <div className="hidden md:flex flex-col gap-2 md:gap-6">
          <div className="flex items-center gap-3">
            <BsBuildings className="text-2xl md:text-4xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">
              4860/6188, Kazi Complex(4th floor) <br /> Hazipara, Access Road, Agrabad, Chattogram
            </span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlinePhoneInTalk className="text-2xl md:text-4xl" />
            <div>
              <p className="text-[#2A2A2A] font-medium text-xs">+88 01336-092485</p>
              <p className="text-[#2A2A2A] font-medium text-xs">+88 01887-944830</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMarkEmailRead className="text-2xl md:text-4xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">trustconsultancy096@gmail.com</span>
          </div>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav className="bg-[#E7E7E7] py-3 md:px-10 px-4">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <div className="hidden md:flex gap-4 lg:gap-16">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Services", path: "/services" },
              { name: "FAQ", path: "/faq" },
              { name: "Career", path: "/career" },
              { name: "Contact Us", path: "/contact" }
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-red-500 border-b-2 text-sm font-medium" : "text-black text-sm font-medium"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Animated Mobile Menu with Contact Info */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-[#E7E7E7] overflow-hidden px-4 flex flex-col items-center gap-3 ${menuOpen ? "py-3" : "py-0"}`}
      >
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Our Services", path: "/services" },
          { name: "FAQ", path: "/faq" },
          { name: "Career", path: "/career" },
          { name: "Contact Us", path: "/contact" }
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-red-500 border-b-2 text-sm font-medium" : "text-black text-sm font-medium"
            }
          >
            {item.name}
          </NavLink>
        ))}
        
        {/* Mobile Contact Info */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center gap-2">
            <BsBuildings className="text-xl" />
            <span className="text-[#2A2A2A] font-medium text-xs text-center">
              4860/6188, Kazi Complex(4th floor), Hazipara, Access Road, Agrabad, Chattogram
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhoneInTalk className="text-xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">+88 01336-092485</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMarkEmailRead className="text-xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">trustconsultancy096@gmail.com</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;
