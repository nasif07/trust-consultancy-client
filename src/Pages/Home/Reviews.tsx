import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import avatar from "../assets/image 3.png"
// import icon from "../assets/”.svg"

const testimonials = [
  {
    text: "We have been able to save both time and money using North Summit Payments to manage our merchant processing at our facility. Their expertise and recommendations to credit card processing, payment solutions, and point of sale have added value to our business operations. As well, they have become a valued partner to our organization.",
    author: "Elevate The Community",
  },
  {
    text: "North Summit Payments was able to decrease the rate we were paying our credit card processor by 1.5% (a decrease of 43%) resulting in enormous savings!",
    author: "Grove Medical",
  },
  {
    text: "Awesome Experience. North Summit Payments makes the whole credit card payments experience so easy and simple. I never have any doubt as to where I should go for any information I may need and the customer service with NSP is awesome. The savings were much more than we expected, as well as we are saving thousands annually, not hundreds.",
    author: "Pandora",
  },
  {
    text: "We have been with North Summit Payments for over 10 years. We were one of the first businesses to use Clover Flex and we love it. I would strongly recommend NSP to any business that accepts credit card payments.",
    author: "Smiles in Motion – Dr. Allyson Bourke",
    subtitle: "Orthodontist",
  },
];
const Reviews = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-10 lg:py-32 px-3">
      <div className="">
        <p className="text-[#2A2A2A] text-xl font-light leading-6 pb-5">
          Testimonials
        </p>
        <h2 className="text-[#2A2A2A] font-bold text-4xl md:text-5xl">
          What Our
          <span className="text-[#E7B51E]"> Clients </span>Say
        </h2>

        <Swiper
      data-aos="fade-up"
      data-aos-duration="1000"
      rewind={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      pagination={{ clickable: true }}
      modules={[Navigation]}
      className="flex-1"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="rounded-2xl">
          <div className="md:mx-[65px] lg:px-[50px] py-6 md:py-[50px] bg-[#F4F2F2] rounded-2xl relative min-h-[405px] md:min-h-[500px]">
            <div className="absolute top-6 right-6">
              <img className="w-[80px]" src="" alt="" />
            </div>
            <div className="flex justify-center">
              <img className="rounded-full" src="" alt="" />
            </div>
            <p className="text-[#272932] py-6 md:py-10 px-12 md:px-5 lg:px-0 max-w-[380px] mx-auto text-center text-[14px] md:text-base md:leading-[24px]">
              “{testimonial.text}”
            </p>
            <h4 className="font-medium text-center">- {testimonial.author}</h4>
            {testimonial.subtitle && <p className="font-light text-center">– {testimonial.subtitle}</p>}
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-next custom-swiper-button"></div>
      <div className="swiper-button-prev custom-swiper-button"></div>
    </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
