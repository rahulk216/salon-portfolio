import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "./gallery.scss"

function Gallery() {

  const ImageBox = ({src}) => {
    return (
      <div className="gallery-box">
        <img src={src} 
        alt="image" 
        height={350}
        width={600}
        />
      </div>
    );
  };
  
  
  return (
    <section>
    <div className="gallery-container">
    <div className='gallery-text-container-mobile'>
      <h1>
      Gallery
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, laborum.
      </p>
      </div>
      <div className="gallery-box-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
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
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageBox 
            src = {"/footerbg.jpg"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='gallery-text-container-web'>
      <h1>
      Gallery
      </h1>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, laborum.
      </p>
      </div>
    </div>
  </section>
  )
}

export default Gallery