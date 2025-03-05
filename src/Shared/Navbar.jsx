import { useState, useEffect } from "react";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/logo.svg";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

import icon1 from "../assets/icons/vatIcon.png";
import icon2 from "../assets/icons/companyIcon.png";
import icon3 from "../assets/icons/licenseIcon.svg";
import icon4 from "../assets/icons/bidaIcon.svg";
import icon5 from "../assets/icons/companyAccountsIcon.svg";
import icon6 from "../assets/icons/fireIcon.svg";
import icon7 from "../assets/icons/ircIcon.svg";
import icon8 from "../assets/icons/caseSolutionIcon.svg";
import icon9 from "../assets/icons/refundIcon.svg";
import icon10 from "../assets/icons/membershipIcon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false); // New state for dropdown
  console.log(servicesDropdownOpen);

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

  const [timeoutId, setTimeoutId] = useState(null); // Store the timeout ID

  const handleMouseEnter = () => {
    // Clear any existing timeout when mouse enters
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setServicesDropdownOpen(true); // Open the dropdown immediately
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 2 seconds
    const id = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 1000);
    setTimeoutId(id); // Store the timeout ID
  };

  const serviceLinks = [
    {
      to: "/vat-&-tax",
      label: "VAT & Tax",
      icon: icon1,
    },
    {
      to: "/company-law",
      label: "Company Law",
      icon: icon2,
    },
    {
      to: "/trade-license",
      label: "Trade License Assistance",
      icon: icon3,
    },
    {
      to: "/BIDA",
      label: "BIDA Services",
      icon: icon4,
    },
    {
      to: "/company-accounts",
      label: "Company Accounts",
      icon: icon5,
    },
    {
      to: "/fire-&-environmental-certification",
      label: "Fire & Environmental Certification",
      icon: icon6,
    },
    {
      to: "/IRC-&-ERC",
      label: "IRC & ERC Services",
      icon: icon7,
    },
    {
      to: "/vat-&-tax-case-solutions",
      label: "VAT & Tax Case Solutions",
      icon: icon8,
    },
    {
      to: "/refund-&-carry-forward",
      label: "Refund & Carry Forward",
      icon: icon9,
    },
    {
      to: "/membership-certificate",
      label: "Membership Certificate",
      icon: icon10,
    },
  ];

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
            <NavLink to={"/"}>
              <motion.img
                src={logo}
                alt="logo"
                className="h-14 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
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
        className={`bg-[#E7E7E7] py-3 md:px-10 px-4 w-full z-40 transition-all duration-300 ${
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
            {isScrolled && (
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="h-14" />
              </NavLink>
            )}
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-4 lg:gap-16">
            {/* Dropdown for Services */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="text-black text-sm font-semibold">
                <span className={`${servicesDropdownOpen && "text-[#E7B51E] underline"}`}>
                  Our Services
                </span>
              </button>
              {servicesDropdownOpen && (
                <motion.div
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-12 -left-40 whitespace-nowrap justify-between bg-white shadow-xl rounded-3xl z-10 flex gap-8 p-5">
                  <div className="w-full">
                    {serviceLinks.slice(0, 5).map((link, index) => (
                      <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                        key={index}
                        to={link.to}
                        className=" px-4 py-3 text-black text-base font-medium hover:text-[#E7B51E] transition flex items-center">
                        <img
                          src={link.icon}
                          alt={link.label}
                          className="mr-5 w-6 h-6" // Adjust size of the icons
                        />
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                  <div className="w-full pl-5">
                    {serviceLinks.slice(5).map((link, index) => (
                      <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                        key={index}
                        to={link.to}
                        className=" px-4 py-3 text-black text-base font-medium hover:text-[#E7B51E] transition flex items-center">
                        <img
                          src={link.icon}
                          alt={link.label}
                          className="mr-5 w-6 h-6" // Adjust size of the icons
                        />
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            {[
              { name: "Home", path: "/" },
              { name: "Contact Us", path: "/contact-us" },
              {
                name: "NBR",
                path: "https://nbr.gov.bd/",
                target: true,
              },
              {
                name: "VAT Online",
                path: "https://vat.gov.bd/",
                target: true,
              },
            ].map((item) => (
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                target={item.target ? "_blank" : ""}
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E7B51E] underline border-b-2 text-sm font-semibold"
                    : "text-black text-sm font-semibold"
                }>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex justify-between w-full items-center gap-10">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" className="h-10" />
            </NavLink>
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

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden bg-[#E7E7E7] overflow-hidden px-4 flex flex-col gap-3 ${
          menuOpen ? "py-3" : "py-0"
        }`}>
        <div className="whitespace-nowrap">
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={` text-sm font-semibold ${
              servicesDropdownOpen && "underline text-[#E7B51E]"
            }`}>
            Our Services
          </button>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-36 left-3 p-2 bg-white shadow-xl rounded-lg z-[999]"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
              <div onClick={() => setMenuOpen(false)} className="w-full">
                {serviceLinks.map((link, index) => (
                  <NavLink
                    onClick={() => window.scrollTo(0, 0)}
                    key={index}
                    to={link.to}
                    className=" px-4 py-3 text-black text-sm font-medium hover:text-[#E7B51E]  flex items-center">
                    <img
                      src={link.icon}
                      alt={link.label}
                      className="mr-4 w-6 h-6" // Adjust size of the icons
                    />
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        {[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us" },
          { name: "NBR", path: "https://nbr.gov.bd/", target: true },
          { name: "VAT Online", path: "https://vat.gov.bd/", target: true },
        ].map((item) => (
          <NavLink
            key={item.name}
            target={item.target ? "_blank" : ""}
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
