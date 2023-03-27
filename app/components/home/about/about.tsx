"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 grid grid-cols-12 gap-x-10 mb-[120px]">
      <div className="col-span-3 col-start-1  mb-[92px] self-end">
        <Image
          src="/assets/about-left.webp"
          alt="cheesecake ternopil Nahirna"
          width={296}
          height={360}
          priority
        />
      </div>
      <div className="col-span-4 col-start-4 h-[600px] items-center justify-center">
        <Image
          src="/assets/about-center.webp"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="col-span-5 col-start-8 my-auto">
        <h2 className="mb-10">Я - Нагірна Вікторія, шеф кондитер</h2>
        <p className="">
          Любов до своєї справи та до людей. Саме це надихає мене робити нові
          десерти та не зупинятися на досягнутому.
          <br /> <br />
          Для приготування дійсно смачного десерту я відбираю найкращих
          постачальників не тільки з України, а й з усього світу!
          <br /> <br />
          Тут ви ніколи не знайдете замінників масла, шкідливих консерватів чи
          підсилювачів смаку.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
