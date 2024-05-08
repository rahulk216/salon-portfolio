import React from "react";
import "./index.scss";
import Quote from "../../assets/svg/Quote";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const testimonials = [
  {
    text: "My experience at [ ZARAH ELITE PROFESSIONAL UNISEX SALON ] was absolutely wonderful! The salon owner and her team have created such a warm and inviting atmosphere. Not only did I leave feeling beautiful, but I also felt like I was truly taken care of. Thank you for your exceptional service!",
    name: "SANDHYA SHENOY",
    date: "30-04-2024",
  },
  {
    text: "As someone who is quite particular about their hair, finding the right salon and stylist was crucial. I'm so grateful to have found [ ZARAH ELITE PROFESSIONAL UNISEX SALON ] and its amazing owner. She listened to exactly what I wanted and delivered beyond my expectations. I wouldn't trust anyone else with my hair!",
    name: "CHRISTY",
    date: "02-05-2024",
  },
  {
    text: "The level of professionalism and skill at [ ZARAH ELITE PROFESSIONAL UNISEX SALON ] is unmatched. The owner's passion for her craft is evident in the quality of service she provides. From the moment you walk in, you're treated like family. I highly recommend this salon to anyone looking for a top-notch experience.",
    name: "NIRSHAD",
    date: "04-05-2024",
  },
  {
    text: "I recently had my wedding hair and makeup done at [ ZARAH ELITE PROFESSIONAL UNISEX SALON ], and I couldn't have asked for a better experience. The owner and her team went above and beyond to make sure everything was perfect for my special day. Their attention to detail and expertise made me feel like the most beautiful bride. Thank you!",
    name: "MARIAM",
    date: "05-05-2024",
  },
  {
    text: "Choosing [ ZARAH ELITE PROFESIONAL UINSEX SALON ] to entrust my hair care needs was the best decision I've made. Their passion for their craft shines through in every appointment. Not only do I leave feeling pampered and confident, but I also trust [Salon Owner] implicitly with my hair. Thank you for your exceptional talent and dedication!",
    name: "SHAHID",
    date: "05-05-2024",
  },
  {
    text: "[ ZARAH ELITE PROFESSIONAL UNISEX SALON is not just a hairstylist, but a true artist. Their attention to detail and commitment to perfection make every visit to the salon a delightful experience. From trendy cuts to flawless color, [Salon Owner] always exceeds my expectations. I wouldn't trust anyone else with my hair!",
    name: "SAMAN",
    date: "07-05-2024",
  },
];

const TestimonialBox = ({ testimonial }) => {
  console.log(testimonial);

  return (
    <div className="testimonial-box">
      <Quote />
      <p className="client-testimonial">{testimonial?.text}</p>
      <p className="client-name">{testimonial?.name}</p>
      <p>{testimonial?.date}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section>
      <div className="testiomonial-container">
        <h1 data-aos="fade-right" data-aos-duration="1600">
          What our clients say?
        </h1>
        <p data-aos="fade-right" data-aos-duration="1900" className="test-desc">
          Our salon cherishes each customer, aiming to offer a personalized,
          confidence-boosting experience. Explore the testimonials from our
          delighted clients.
        </p>
        <div className="testiomonial-box-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            pagination={true}>
            {testimonials.map((value) => (
              <SwiperSlide>
                <TestimonialBox testimonial={value} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
