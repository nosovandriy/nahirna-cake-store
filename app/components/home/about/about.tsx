"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="sectionMarginBottom relative grid grid-cols-about-mob gap-y-6 grid-areas-about-mob tablet:grid-cols-about-tab laptop:grid-cols-about-desk laptop:grid-areas-about-desk"
    >
      <div className="relative -mr-10 translate-y-[60%] grid-in-small-image tablet:mr-0 tablet:translate-y-2/4 tablet:pr-2.5">
        <Image
          src="/assets/about-left.webp"
          alt="cheesecake ternopil Nahirna"
          width={400}
          height={270}
          priority
        />
      </div>
      <div className="justify-self-center grid-in-image laptop:px-5 tablet:pl-2.5">
        <Image
          src="/assets/about-center.webp"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={606}
          priority
        />
      </div>
      <div className="space-y-6 self-center grid-in-text">
        <h2>Я - Нагірна Вікторія, шеф кондитер</h2>
        <div className="space-y-3">
          <p>
            Любов до своєї справи та до людей. Саме це надихає мене робити нові
            десерти та не зупинятися на досягнутому.
          </p>
          <p>
            Для приготування дійсно смачного десерту я відбираю найкращих
            постачальників не тільки з України, а й з усього світу!
          </p>
          <p>
            Тут ви ніколи не знайдете замінників масла, шкідливих консервантів
            чи підсилювачів смаку.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
