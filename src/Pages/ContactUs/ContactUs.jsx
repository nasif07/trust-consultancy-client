import { motion } from "framer-motion";
import { BsBuildings } from "react-icons/bs";
import { MdOutlinePhoneInTalk, MdOutlineMarkEmailRead } from "react-icons/md";
import logo from "./../../../public/logo.svg";
import buildingImage from "../../assets/contactUsBuilding.png";

const ContactUs = () => {
  return (
    <motion.div
      className="max-w-[1300px] mx-auto py-10 lg:py-32 px-3 font-inter"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-20 bg-[#F1F1F1] rounded-[30px] overflow-hidden">
        <motion.img
          className="rounded-[30px] md:rounded-none"
          src={buildingImage}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="w-full pl-5 md:pl-10">
          <motion.div
            className="flex flex-col justify-center h-full gap-6 md:gap-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Contact Items */}
            {[
              {
                icon: <MdOutlinePhoneInTalk className="text-4xl text-white" />,
                text: ["+88 01336-092485", "+88 01887-944830"],
              },
              {
                icon: <MdOutlineMarkEmailRead className="text-4xl text-white" />,
                text: ["trustconsultancy096@gmail.com"],
              },
              {
                icon: <BsBuildings className="text-4xl text-white" />,
                text: [
                  "4860/6188, Kazi Complex (4th floor)",
                  "Hazipara, Access Road, Agrabad, Chattogram",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <motion.div
                  className="p-3 rounded-full bg-[#E7B51E]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                <div className="text-[#2A2A2A] font-medium text-xs">
                  {item.text.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Logo */}
            <motion.img
              className="w-32 pb-10 md:pb-0 pt-5 md:pt-0"
              src={logo}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
