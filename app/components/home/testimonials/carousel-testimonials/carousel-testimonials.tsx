import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Image from "next/image";
import { useTestimonials } from "../hooks/useTestimonials";

const CarouselTestimonials = () => {
  const { testimonials } = useTestimonials();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="mb-[120px]">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Image
              src={testimonial.imageCake}
              alt="cheesecake"
              width={408}
              height={300}
              className=" max-h-[300px] object-cover"
            />
            <div className="max-w-[408px] bg-white py-6 px-4">
              <p className="mb-4">{testimonial.text}</p>
              <div className="flex gap-2">
                <Image
                  src={testimonial.imageСlient}
                  alt="cheesecake"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-sm">{testimonial.name}</p>
                  <p className="text-xs text-themeGray-30">
                    {testimonial.data}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselTestimonials;
