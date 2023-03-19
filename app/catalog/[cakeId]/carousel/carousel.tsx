// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode, Navigation, Thumbs, Swiper as SwiperType } from "swiper";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "./carousel.scss";

// const ProductCardCarousel = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

//   return (
//     <>
//       <Swiper
//         autoplay={{
//           delay: 4000,
//         }}
//         loop={true}
//         spaceBetween={40}
//         navigation={true}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         modules={[FreeMode, Navigation, Thumbs, Autoplay]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract04.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={40}
//         slidesPerView={3}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract01.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//           src="/assets/carousel/abstract04.jpg"
//           alt="cheesecake ternopil Nahirna"
//           width={1500}
//           height={1500}
//            />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default ProductCardCarousel;

import { useState } from "react";
import Image from "next/image";
import { ArrowGallery } from "@icons/arrows-gallery";

interface GallerySliderProps {
  images: string[];
  imagesAlt: string;
}

const ProductCardCarousel: React.FC<GallerySliderProps> = ({
  images,
  imagesAlt,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-10">
        <Image
          src={images[currentImageIndex]}
          alt={`${imagesAlt} cheesecake`}
          width={632}
          height={465}
          className="max-h-[465px] max-w-[632px] object-cover"
        />
        <button
          className="galleryButton left-2 rotate-180"
          onClick={handlePrevClick}
        >
          <ArrowGallery />
        </button>
        <button className="galleryButton right-2" onClick={handleNextClick}>
          <ArrowGallery />
        </button>
      </div>
      <div className="flex w-full gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-[135px] flex-shrink-0 cursor-pointer ${
              index === currentImageIndex ? "opacity-60" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`${imagesAlt} cheesecake`}
              width={184}
              height={135}
              className="max-h-[135px] max-w-[184px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardCarousel;
