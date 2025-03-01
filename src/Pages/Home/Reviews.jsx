import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import avatar1 from "../../assets/avator1.png";
import avatar2 from "../../assets/avator2.png";
import avatar3 from "../../assets/avator3.png";

const peopleData = [
  {
    name: "Mr Akbar",
    companyName: "ABC group ltd",
    image: avatar1,
  },
  {
    name: "Mrs Julia",
    companyName: "ABC group ltd",
    image: avatar2,
  },
  {
    name: "Mrs Hanaina",
    companyName: "ABC group ltd",
    image: avatar3,
  },
];

const testimonials = [
  {
    title: "Overcoming Adversity in Family Law",
    text: "Going through a divorce was the toughest time of my life. I felt lost and overwhelmed, but Wright Law Firm stood by me every step of the way. Their team was compassionate, understanding, and incredibly knowledgeable. Thanks to their expertise and dedication, I achieved a fair settlement that protected my financial future and allowed me to focus on healing and rebuilding my life.",
    author: "Elevate The Community",
  },
  {
    title: "Overcoming Adversity in Family Law",
    text: "North Summit Payments was able to decrease the rate we were paying our credit card processor by 1.5% (a decrease of 43%) resulting in enormous savings!",
    author: "Grove Medical",
  },
  {
    title: "Overcoming Adversity in Family Law",
    text: "Awesome Experience. North Summit Payments makes the whole credit card payments experience so easy and simple. I never have any doubt as to where I should go for any information I may need and the customer service with NSP is awesome. The savings were much more than we expected, as well as we are saving thousands annually, not hundreds.",
    author: "Pandora",
  },
  {
    title: "Overcoming Adversity in Family Law",
    text: "We have been with North Summit Payments for over 10 years. We were one of the first businesses to use Clover Flex and we love it. I would strongly recommend NSP to any business that accepts credit card payments.",
    author: "Smiles in Motion – Dr. Allyson Bourke",
    subtitle: "Orthodontist",
  },
];
const Reviews = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-10 lg:py-32 px-3">
      <div>
        {/* Heading Animation */}
        <motion.p
          className="text-[#2A2A2A] text-xl font-light leading-6 pb-5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          Testimonials
        </motion.p>
        <motion.h2
          className="text-[#2A2A2A] font-bold text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          What Our
          <span className="text-[#E7B51E]"> Clients </span>Say
        </motion.h2>

        {/* Client List & Testimonials */}
        <motion.div
          className="pt-10 md:grid grid-cols-5 items-center"
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
          {/* Client List */}
          <motion.div className="space-y-8 col-span-2 pb-5">
            {peopleData.map((data, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}>
                <img src={data.image} alt={data.name} />
                <div>
                  <h3 className="text-[#616161] font-bold text-base pb-1">
                    {data.name}
                  </h3>
                  <h4 className="text-[#616161] text-sm">{data.companyName}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Swiper */}
          <motion.div
            className="col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Swiper
              rewind={true}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="flex-1">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="rounded-2xl">
                  <motion.div
                    className="md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative min-h-[405px] md:min-h-[400px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <h3 className="text-[#2A2A2A] text-xl md:text-2xl font-semibold px-12 md:px-5 lg:px-0 mx-auto">
                      {testimonial.title}
                    </h3>
                    <p className="text-[#272932] py-3 md:py-10 px-12 md:px-5 lg:px-0 mx-auto text-center text-[14px] md:text-base md:leading-[24px]">
                      “{testimonial.text}”
                    </p>
                    <h4 className="font-medium text-center">
                      - {testimonial.author}
                    </h4>
                    {testimonial.subtitle && (
                      <p className="font-light text-center">
                        – {testimonial.subtitle}
                      </p>
                    )}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
