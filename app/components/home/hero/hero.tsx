"use client";

import { Dot } from "@icons/dot";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "./carousel/carousel";

const HeroSection = () => {
  return (
    // <section className="relative mb-[120px] grid grid-cols-12 laptop:gap-x-5 desktopHD:gap-x-10">
    //   <div className="absolute top-[122px] z-10 col-span-8 col-start-1 flex flex-col gap-8">
    //     <h1 className="">
    //       Спробуй найсмачніші
    //       <br />ч
    //       <span className="relative">
    //         і
    //         <div className="absolute left-2/4 top-[10%] -translate-x-2/4">
    //           <Dot />
    //         </div>
    //       </span>
    //       зкейки в Тернополі
    //     </h1>
    //     <p className="col-span-5 col-start-1">
    //       Десерти з натуральних продуктів без консервантів та
    //       <br />
    //       ароматизаторів. Тут кожен знайде чізкейк для себе.
    //     </p>
    // <Link href={"/catalog"}>
    //   <button className="primaryButton">Перейти в каталог</button>
    // </Link>
    //   </div>
    //   <div className="relative items-center justify-center fill-current laptop:col-span-4 laptop:col-start-5 desktopHD:col-span-4 desktopHD:col-start-6 h-[600px] laptop:max-w-[398px] desktopHD:max-w-[408px]">
    //     <Image
    //       src="/assets/hero-main.webp"
    //       alt="cheesecake ternopil Nahirna"
    //       width={408}
    //       height={606}
    //       priority
    //     />
    //   </div>
    //   <div className="col-span-3 col-start-10 mb-[92px] self-end">
    //     <HeroCarousel />
    //   </div>
    // </section>
    // <section className="space-y-6 tablet:space-y-10 laptop:flex">
    //   <div className="flex">
    // <div className="w-1/2 pr-2.5 tablet:w-7/12 tablet:pr-4 laptop:w-[42.16%]">
    //   <Image
    //     src="/assets/hero-main.webp"
    //     alt="cheesecake ternopil Nahirna"
    //     priority
    //     width={408}
    //     height={600}
    //     className="mx-auto"
    //   />
    // </div>
    // <div className="mx-auto w-1/2 max-w-[312px] self-center pl-2.5 tablet:w-5/12 tablet:translate-y-2/4 tablet:pl-4">
    //   <HeroCarousel />
    // </div>
    //   </div>
    // <div className="relative mx-auto flex flex-col items-center gap-y-6 max-w-[460px] tablet:max-w-[770px] tablet:gap-y-10 laptop:order-first laptop:w-[33.37%]">
    //   <h1 className="text-center text-[32px] tablet:text-[56px] laptop:text-[64px] z-10">
    //     Спробуй найсмачніші чізкейки в Тернополі
    //   </h1>
    //   <p className=" text-center">
    //     Десерти з натуральних продуктів без консервантів та ароматизаторів.
    //     Тут кожен знайде чізкейк для себе
    //   </p>
    //   <button className="primaryButton w-full">
    //     <Link href={"/catalog"}>Перейти в каталог</Link>
    //   </button>
    // </div>
    // </section>

    <section>
      <div className="relative grid grid-cols-layout-mob grid-rows-layout-mob gap-y-5 grid-areas-layout-mob tablet:gap-y-10 laptop:grid-cols-layout-desk laptop:grid-areas-layout-desk">
        <div className=" pr-2.5 grid-in-image">
          <Image
            src="/assets/hero-main.webp"
            alt="cheesecake ternopil Nahirna"
            priority
            width={408}
            height={600}
            className=" mx-auto"
          />
        </div>
        <div className="laptop:translate-y-2/4 self-center pl-2.5 grid-in-carousel">
          <HeroCarousel />
        </div>
        <div className="mx-auto max-w-[460px] space-y-5 grid-in-text tablet:max-w-[620px] tablet:space-y-6">
          <h1 className="text-center text-[32px] tablet:text-[56px] laptop:mt-[26%] laptop:w-[180%] laptop:text-start laptop:text-[64px] desktop:text-[74px] desktopHD:text-[86px]">
            Спробуй найсмачніші чізкейки в Тернополі
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
