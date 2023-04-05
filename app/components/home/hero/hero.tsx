"use client";

import { Dot } from "@icons/dot";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./carousel/carousel";

const HeroSection = () => {
  return (
    <section>
      <div className="sectionMarginBottom relative grid grid-cols-hero-mob grid-rows-hero-mob gap-y-5 grid-areas-hero-mob tablet:grid-cols-hero-tab tablet:gap-y-10 laptop:grid-cols-hero-desk laptop:grid-areas-hero-desk">
        <div className="pr-2.5 tablet:pr-6 laptop:pr-2.5 desktopHD:pr-8 grid-in-image">
          <Image
            src="/assets/hero-main.webp"
            alt="cheesecake ternopil Nahirna"
            priority
            width={600}
            height={840}
          />
        </div>
        <div className="self-center pl-2.5 grid-in-carousel tablet:translate-y-2/4">
          <HeroCarousel />
        </div>
        <div className="mx-auto max-w-[460px] space-y-5 grid-in-text tablet:max-w-[560px] tablet:space-y-6">
          <h1 className="text-center text-[32px] tablet:text-[56px] laptop:mt-[26%] laptop:w-[180%] laptop:text-start laptop:text-[64px] desktop:text-[74px] desktopHD:text-[86px]">
            Спробуй найсмачніші
            <br />ч
            <span className="relative">
              і
              <div className="absolute left-2/4 top-[10%] -translate-x-2/4">
                <Dot />
              </div>
            </span>
            зкейки в Тернополі
          </h1>
          <p className=" text-center laptop:max-w-[500px] laptop:text-start">
            Десерти з натуральних продуктів без консервантів та ароматизаторів.
            Тут кожен знайде чізкейк для себе
          </p>
          <button className="primaryButton w-full laptop:w-[300px]">
            <Link href={"/catalog"}>Перейти в каталог</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
