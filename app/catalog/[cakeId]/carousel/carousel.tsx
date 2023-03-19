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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GallerySliderProps {
  images: string[];
}

const ProductCardCarousel: React.FC<GallerySliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
      <div className="mb-8 relative">
        <Image
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          width={632}
          height={465}
          className="object-cover max-w-[632px] max-h-[465px]"
        />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 rounded-full p-2"
          onClick={handlePrevClick}
        >
          <FiChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 rounded-full p-2"
          onClick={handleNextClick}
        >
          <FiChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <div className="flex gap-10 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-gray-200 hover:bg-gray-400 h-[135px] cursor-pointer ${
              index === currentImageIndex ? "opacity-60" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`image-${index}`}
              width={184}
              height={135}
              className="object-cover max-w-[184px] max-h-[140px]"
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardCarousel;
