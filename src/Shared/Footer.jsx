import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../public/logoWhite.svg";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#0A1411] px-3">
      <div className="md:flex justify-between max-w-[1300px] mx-auto py-12 md:px-10 px-4">
        <div className="pb-5 md:pb-0">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="logo" className="h-14" />
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex md:justify-center items-center gap-3 ">
            <BsBuildings className="text-4xl text-[#E7B51E]" />
            <span className="text-white font-medium text-xs">
              4860/6188, Kazi Complex(4th floor) <br /> Hazipara, Access Road,
              Agrabad, Chattogram{" "}
            </span>
          </div>
          <div className="flex md:justify-center items-center gap-3 ">
            <MdOutlinePhoneInTalk className="text-4xl text-[#E7B51E]" />
            <div>
              <p className="text-white font-medium text-xs">+88 01336-092485</p>
              <p className="text-white font-medium text-xs">+88 01887-944830</p>
            </div>
          </div>
          <div className="flex md:justify-center items-center gap-3 ">
            <MdOutlineMarkEmailRead className="text-4xl text-[#E7B51E]" />
            <span className="text-white font-medium text-xs">
              trustconsultancy096@gmail.com
            </span>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-[1300px] mx-auto pb-24">
        <div className="flex gap-2.5 justify-between">
          {/* Explore Section */}
          <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4">Explore</h5>
            <NavLink
              to="/"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Blogs
            </NavLink>
            <NavLink
              to="/resources"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Resources
            </NavLink>
            <NavLink
              to="/terms"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Terms & Conditions
            </NavLink>
          </div>

          {/* Practice Area Section */}
          <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4">Practice Area</h5>
            <NavLink
              to="/vat-&-tax"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              VAT & Tax
            </NavLink>
            <NavLink
              to="/company-law"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Company Law
            </NavLink>
            <NavLink
              to="/trade-license"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Trade License Assistance
            </NavLink>
            <NavLink
              to="/BIDA"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              BIDA Services
            </NavLink>
            <NavLink
              to="/company-accounts"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Company Accounts
            </NavLink>
          </div>

          {/* Additional Services */}
          <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4">Other Services</h5>
            <NavLink
              to="/fire-&-environmental-certification"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Fire & Environmental Certification
            </NavLink>
            <NavLink
              to="/IRC-&-ERC"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              IRC & ERC Services
            </NavLink>
            <NavLink
              to="/vat-&-tax-case-solutions"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              VAT & Tax Case Solutions
            </NavLink>
            <NavLink
              to="/refund-&-carry-forward"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Refund & Carry Forward
            </NavLink>
            <NavLink
              to="/membership-certificate"
              className="block hover:text-gray-300 transition"
              activeClassName="text-gray-400"
              onClick={() => window.scrollTo(0, 0)} // Scroll to top
            >
              Membership Certificate
            </NavLink>
          </div>
        </div>

        {/* Copyright */}
        <span className="text-white flex justify-center pt-10 text-xs">
          © 2025 Trust Consultancy. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
