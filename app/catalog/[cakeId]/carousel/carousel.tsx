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
    <div>
      <div className="relative mb-5 tablet:mb-8 laptop:mb-5 desktopHD:mb-10">
        <Image
          src={images[currentImageIndex]}
          alt={`Чізкейк ${imagesAlt}`}
          width={632}
          height={465}
          priority
          sizes="(max-width: 890px) 100vw,
          50vw"
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
      <div className="flex w-full gap-5 tablet:gap-8 laptop:gap-5 desktopHD:gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              index === currentImageIndex ? "opacity-60" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`${imagesAlt} cheesecake`}
              width={250}
              height={135}
              priority
              sizes="(max-width: 890px) 30vw,
              15vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardCarousel;
