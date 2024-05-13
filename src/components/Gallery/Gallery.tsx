import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules";
import "./gallery.scss";

function Gallery() {
  const ImageBox = ({ src }) => {
    return (
      <div className="gallery-box">
        <img src={src} alt="image" height={350} width={600} />
      </div>
    );
  };

  // const galleryImages = [
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery2.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery1.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery3.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery4.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery5.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery6.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery7.JPG",
  //   "https://cdn.jsdelivr.net/gh/kdhanush/zarah-images/assets/gallery-images/gallery8.JPG",
  // ];
  const galleryImages = [
    "/gallery-images/gallery2.JPG",
    "/gallery-images/gallery1.JPG",
    "/gallery-images/gallery3.JPG",
    "/gallery-images/gallery4.JPG",
    "/gallery-images/gallery5.JPG",
    "/gallery-images/gallery6.JPG",
    "/gallery-images/gallery7.JPG",
    "/gallery-images/gallery8.JPG",
  ];

  return (
    <section>
      <div className="gallery-container" id="gallery">
        <div className="overlay"></div>
        <div className="gallery-text-container">
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
          <div>
            <Swiper
              modules={[Navigation, Pagination, EffectCards, Autoplay]}
              effect={"cards"}
              spaceBetween={30}
              slidesPerView={1}
              // autoplay={{
              //   delay: 1500,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              scrollbar={{ draggable: true }}
              navigation={true}
              pagination={true}>
              {galleryImages.map((image, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <ImageBox src={image} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
