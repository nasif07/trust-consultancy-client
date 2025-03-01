import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "8801336092485"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}>
      <motion.div
        animate={{
          y: [0, -10, 0], // Moves up and down
        }}
        transition={{
          repeat: Infinity, // Keeps looping
          duration: 2, // 2-second floating effect
          ease: "easeInOut",
        }}>
        <FaWhatsapp size={40} />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
