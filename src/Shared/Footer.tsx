import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "../../public/logoWhite.svg";

const Footer = () => {
  return (
    <div className="bg-[#0A1411] px-3">
      {/* <div className="flex justify-between max-w-[1300px] mx-auto py-12 md:px-10 px-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-12">
          <div className="flex justify-center items-center gap-3 ">
            <BsBuildings className="text-4xl text-[#E7B51E]" />
            <span className="text-white font-medium text-xs">
              4860/6188, Kazi Complex(4th floor) <br /> Hazipara, Access Road,
              Agrabad, Chattogram{" "}
            </span>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <MdOutlinePhoneInTalk className="text-4xl text-[#E7B51E]" />
            <div>
              <p className="text-white font-medium text-xs">
                +88 01336-092485
              </p>
              <p className="text-white font-medium text-xs">
                +88 01887-944830
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 ">
            <MdOutlineMarkEmailRead className="text-4xl text-[#E7B51E]" />
            <span className="text-white font-medium text-xs">
              trustconsultancy096@gmail.com
            </span>
          </div>
        </div>
      </div> */}

      <footer className="flex gap-2.5 justify-between w-full max-w-[1300px] mx-auto pb-24">
        <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4">Explore</h5>
            <h6>Home</h6>
            <h6>Blogs</h6>
            <h6>Resources</h6>
            <h6>Terms & Conditions</h6>
        </div>
        <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4">Practice Area</h5>
            <h6>VAT & Tax</h6>
            <h6>Company Law</h6>
            <h6>Trade License Assistance</h6>
            <h6>BIDA Services</h6>
            <h6>Company Accounts</h6>
        </div>
        <div className="space-y-3 text-white text-xs md:text-base">
            <h5 className="font-bold pb-4"></h5>
            <h6>Fire & Environmental Certification</h6>
            <h6>IRC & ERC Services</h6>
            <h6>VAT & Tax Case Solutions</h6>
            <h6>Refund & Carry Forward</h6>
            <h6>Membership Certificate</h6>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Footer;
