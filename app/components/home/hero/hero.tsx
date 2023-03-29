"use client";

import { Dot } from "@icons/dot";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative mb-[120px] mt-6 grid grid-cols-12 gap-x-10">
      <div className="absolute top-[122px] z-10 col-span-8 col-start-1 flex flex-col gap-8">
        <h1>
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
          src="/assets/hero-main.webp"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="col-span-3 col-start-10 mb-[92px] self-end">
        <Image
          src="/assets/hero-small.webp"
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
