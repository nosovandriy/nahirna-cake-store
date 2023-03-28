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
