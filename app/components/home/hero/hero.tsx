import Image from "next/image";
import Link from "next/link";

import GalleryHeroCarousel from "./carousel/carousel";

const HeroSection = () => {
  return (
    <section className="sectionMarginBottom relative grid grid-cols-hero-mob grid-rows-hero-mob gap-y-5 grid-areas-hero-mob tablet:grid-cols-hero-tab tablet:gap-y-10 laptop:grid-cols-hero-desk laptop:grid-areas-hero-desk">
      <div className="pr-2.5 grid-in-image tablet:pr-6 laptop:pr-2.5 desktopHD:pr-8">
        <Image
          src="/assets/hero-main.webp"
          alt="Чізкейк в Тернополі"
          priority
          width={600}
          height={840}
          sizes="(max-width: 639px) 50vw,
            (max-width: 1023px) 66vw,
            100vw"
        />
      </div>
      <div className="translate-y-1/4 pl-2.5 grid-in-carousel tablet:translate-y-2/4 laptop:translate-y-56 desktop:laptop:translate-y-52 desktopHD:translate-y-60">
        <GalleryHeroCarousel />
      </div>
      <div className="mx-auto max-w-[460px] space-y-5 grid-in-text tablet:max-w-[560px] tablet:space-y-6">
        <h1 className="text-center text-[32px] tablet:text-[56px] laptop:mt-[22%] laptop:w-[180%] laptop:text-start laptop:text-[64px] desktop:text-[74px] desktopHD:text-[86px]">
          Спробуй найсмачніші чізкейки в Тернополі
        </h1>
        <p className=" text-center laptop:max-w-[500px] laptop:text-start">
          Десерти з натуральних продуктів без консервантів та ароматизаторів.
          Тут кожен знайде чізкейк для себе
        </p>
        <div>
          <Link href={"/catalog"}>
            <button className="primaryButton w-full laptop:w-[300px]">
              Перейти в каталог
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
