import Image from "next/image";
import { useState, useEffect } from "react";

const GalleryCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImagesCarousel = [
    "/assets/hero-carousel/1.webp",
    "/assets/hero-carousel/2.webp",
    "/assets/hero-carousel/3.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (currentImage) => (currentImage + 1) % heroImagesCarousel.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {heroImagesCarousel.map((imageUrl, index) => (
            <div key={index} className="h-full w-full flex-shrink-0">
              <Image
                src={imageUrl}
                alt="Чізкейк в Тернополі"
                width={367}
                height={270}
                loading={imageUrl.length === index + 1 ? "eager" : "lazy"}
                sizes="(max-width: 639px) 50vw,
                  (max-width: 1023px) 33vw,
                  40vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-x-4">
        {heroImagesCarousel.map((_, index) => (
          <div
            key={index}
            className="flex cursor-pointer p-2"
            onClick={() => handleImageClick(index)}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${
                currentImage === index
                  ? "bg-themeBrown-100"
                  : "bg-themeBrown-20"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
