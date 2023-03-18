import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs, Swiper as SwiperType } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./carousel.scss";

const ProductCardCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        spaceBetween={40}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract04.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={40}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract01.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/assets/carousel/abstract04.jpg"
          alt="cheesecake ternopil Nahirna"
          width={1500}
          height={1500}
           />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductCardCarousel;