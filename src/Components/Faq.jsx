import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const data = [
  {
    title: "1. How can Trust Consultancy help with VAT and tax compliance?",
    description:
      "We assist businesses in tax planning, filing, dispute resolution, and compliance with Bangladesh’s tax regulations to ensure smooth operations and avoid penalties",
  },
  {
    title: "2. How do I get started with Trust Consultancy?",
    description:
      "You can contact us via phone, email, or visit our office. Our team will assess your needs and provide tailored solutions.",
  },
  {
    title: "3. Is an initial consultation available?",
    description:
      "Yes, we offer an initial consultation to understand your requirements and provide guidance on how we can assist your business.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <section className="max-w-[1300px] mx-auto py-10 lg:py-32 font-inter">
        <div>
          {/* Heading Animation */}
          <motion.h2
            className="text-[#2A2A2A] font-bold text-[33px] md:text-5xl pb-5 max-w-[628px] mx-auto text-center px-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            Some<span className="text-[#E7B51E]"> answers </span>to our
            customers' queries.
          </motion.h2>
        </div>

        {/* FAQ Cards */}
        <motion.div
          className="space-y-4 p-2 md:p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}>
          {data?.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#F4F4F4] rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}>
              {/* Header / Title */}
              <div
                onClick={() => handleToggle(idx)}
                className="px-4 md:px-8 py-6 cursor-pointer flex items-center justify-between">
                <h4 className="text-[#2A2A2A] text-base md:text-xl font-semibold">
                  {item.title}
                </h4>
                <motion.span
                  animate={{ rotate: isOpen === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <svg
                    className="mr-4 shrink-0"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect y="7" width="16" height="2" rx="1" />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(90 8 8)"
                    />
                  </svg>
                </motion.span>
              </div>

              {/* FAQ Content Animation */}
              <AnimatePresence>
                {isOpen === idx && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    <div className="pb-6 pr-4 pl-6 md:pl-16 text-base text-[#64687B] max-w-[700px]">
                      {item.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section className="bg-[#01321F] flex justify-between py-10 md:py-16 px-3 font-inter">
        <div className="max-w-[1300px] mx-auto md:flex w-full justify-between">
          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-white font-bold text-4xl md:text-5xl pb-5">
              Still have any
              <span className="text-[#E7B51E]"> questions</span>?
            </h2>
            <p className="text-white text-2xl font-light leading-6 max-w-[650px] pb-6 md:pb-0">
              Contact our customer support team now.
            </p>
          </motion.div>

          {/* Call Button & Contact Info */}
          <motion.div
            className="flex justify-between md:justify-center items-center gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }, // Faster stagger effect
              },
            }}>
            {/* Call Button */}
            <motion.button
              className="py-2 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-base font-medium"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.1 }} // Faster button animation
              whileHover={{ scale: 1.05 }} // Smooth hover effect
            >
              Call now
            </motion.button>

            {/* Contact Info */}
            <motion.div
              className="text-white font-medium text-base md:text-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.2 }} // Quick animation
            >
              <p>+88 01336-092485</p>
              <p>+88 01887-944830</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Faq;
