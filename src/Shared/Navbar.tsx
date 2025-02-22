import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../public/logo.svg"

const Navbar = () => {
  return (
    <section>
      <div className="bg-yellow-400 p-2">
        <h6 className="text-white font-medium text-xs text-center">
          A complete solution of your business!
        </h6>
      </div>
      <div className="flex justify-between">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div>
          <BsBuildings />
          <span>
            4860/6188, Kazi Complex(4th floor) Hazipara, Access Road, Agrabad,
            Chattogram{" "}
          </span>
        </div>
        <div>
          <MdOutlinePhoneInTalk />
          <span>+88 01336-092485</span>
          <span>+88 01887-944830</span>
        </div>
        <div>
          <MdOutlineMarkEmailRead />
          <span>trustconsultancy096@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
