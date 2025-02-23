import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../public/logo.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <section>
      <div className="bg-yellow-400 py-2 md:px-10 px-4">
        <h6 className="text-white font-medium text-xs text-center">
          A complete solution of your business!
        </h6>
      </div>
      <div className="flex justify-between max-w-[1300px] mx-auto py-5 md:px-10 px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-12">
          <div className="flex justify-center items-center gap-3 ">
            <BsBuildings className="text-4xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">
              4860/6188, Kazi Complex(4th floor) <br /> Hazipara, Access Road,
              Agrabad, Chattogram{" "}
            </span>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <MdOutlinePhoneInTalk className="text-4xl" />
            <div>
              <p className="text-[#2A2A2A] font-medium text-xs">
                +88 01336-092485
              </p>
              <p className="text-[#2A2A2A] font-medium text-xs">
                +88 01887-944830
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <MdOutlineMarkEmailRead className="text-4xl" />
            <span className="text-[#2A2A2A] font-medium text-xs">
              trustconsultancy096@gmail.com
            </span>
          </div>
        </div>
      </div>
      <nav className="bg-[#E7E7E7] py-3 md:px-10 px-4">
        <div></div>
        <div className=" max-w-[1300px] mx-auto flex justify-end lg:gap-16">
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            Home
          </NavLink>
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            About Us
          </NavLink>
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            Our services
          </NavLink>
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            FAQ
          </NavLink>
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            Career
          </NavLink>
          <NavLink
            style={{ fontSize: "12px", color: "#000", fontWeight: "500" }}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "border-b-2 text-red-500" : ""
            }>
            Contact us
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
