"use client";

import Image from "next/image";
import Link from "next/link";
// import HeroCarousel from "./carousel/carousel";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative mb-[120px] mt-6 grid grid-cols-12 gap-x-10"
    >
      <div className="absolute top-[122px] z-10 col-span-8 col-start-1 flex flex-col gap-8">
        <h1>
          Спробуй найсмачніші
          <br />
          чізкейки в Тернополі
        </h1>
        <p className="col-span-5 col-start-1">
          Десерти з натуральних продуктів без консервантів та
          <br />
          ароматизаторів. Тут кожен знайде чізкейк для себе.
        </p>
        <Link href={"/catalog"}>
          <button className="primaryButton">Перейти в каталог</button>
        </Link>
      </div>
      <div className="col-span-4 col-start-6 items-center justify-center">
        <Image
          src="/assets/hero-main.png"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="col-span-3 col-start-10 self-end mb-[92px]">
        {/* <HeroCarousel /> */}
        <Image
          src="/assets/hero-small.png"
          alt="cheesecake ternopil Nahirna"
          width={296}
          height={200}
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
