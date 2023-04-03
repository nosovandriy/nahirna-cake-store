import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Image from "next/image";

const testimonials = [
  "/assets/hero-carousel/1.webp",
  "/assets/hero-carousel/2.webp",
  "/assets/hero-carousel/3.webp",
  "/assets/hero-carousel/4.webp",
];

const HeroCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
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
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial}
              alt="cheesecake"
              width={400}
              height={270}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
