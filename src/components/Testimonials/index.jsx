import React from "react";
import "./index.scss";
import Quote from "../../assets/svg/Quote";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const TestimonialBox = () => {
  return (
    <div className="testimonial-box">
      <Quote />
      <p className="client-testimonial">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium
        ad odio laboriosam adipisci soluta repellendus sapiente quas enim sunt
        vero, voluptatem nemo earum! Sequi et dolore distinctio magni incidunt?
      </p>
      <p className="client-name">Lorem, ipsum.</p>
      <p>20-Aug-2023</p>
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
        <p data-aos="fade-right" data-aos-duration="1900">
          Our salon cherishes each customer, aiming to offer a personalized,
          confidence-boosting experience. Explore the testimonials from our
          delighted clients.
        </p>
        <div className="testiomonial-box-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            pagination={true}>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
