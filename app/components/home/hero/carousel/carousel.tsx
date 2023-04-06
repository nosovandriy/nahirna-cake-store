import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Image from "next/image";

const heroImagesCarousel = [
  "/assets/hero-carousel/1.webp",
  "/assets/hero-carousel/2.webp",
  "/assets/hero-carousel/3.webp",
  "/assets/hero-carousel/4.webp",
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {heroImagesCarousel.map((item, index) => (
          <div key={index}>
            <Image
              src={item}
              alt="cheesecake"
              width={367}
              height={270}
              loading={item.length === index + 1 ? 'eager' : 'lazy'}
              sizes="(max-width: 639px) 50vw,
              (max-width: 1023px) 33vw,
              40vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
