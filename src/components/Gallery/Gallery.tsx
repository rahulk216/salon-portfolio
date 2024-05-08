import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "./gallery.scss";

function Gallery() {
  const ImageBox = ({ src }) => {
    return (
      <div className="gallery-box">
        <img src={src} alt="image" height={350} width={600} />
      </div>
    );
  };

  return (
    <section>
      <div className="gallery-container">
        <div className="overlay"></div>
        <div className="gallery-text-container-mobile">
          <h1>Gallery</h1>
          <p>
            Our gallery showcases the artistry and skill of our stylists,
            offering a glimpse into the world of beauty and elegance that awaits
            you at Zarah Elite Professional Unisex Salon. From chic hairstyles
            to vibrant hair colors, our gallery captures the essence of our
            salon and the transformative experiences we create for our clients.
            Explore our collection of before and after transformations, witness
            the expertise of our makeup artists, and discover the luxury of our
            spa services. Step into our gallery and be inspired to elevate your
            look with us.
          </p>
        </div>
        <div className="gallery-box-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView="auto"
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            pagination={true}>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageBox src={"/footerbg.jpg"} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="gallery-text-container-web">
          <h1>Gallery</h1>
          <p style={{ textAlign: "left" }}>
            Our gallery showcases the artistry and skill of our stylists,
            offering a glimpse into the world of beauty and elegance that awaits
            you at Zarah Elite Professional Unisex Salon. From chic hairstyles
            to vibrant hair colors, our gallery captures the essence of our
            salon and the transformative experiences we create for our clients.
            Explore our collection of before and after transformations, witness
            the expertise of our makeup artists, and discover the luxury of our
            spa services. Step into our gallery and be inspired to elevate your
            look with us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
