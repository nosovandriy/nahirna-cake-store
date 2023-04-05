"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="sectionMarginBottom relative grid grid-cols-about-mob gap-y-6 grid-areas-about-mob tablet:grid-cols-about-tab laptop:grid-cols-about-desk laptop:grid-areas-about-desk"
    >
      <div className="relative -mr-10 translate-y-[60%] grid-in-small-image tablet:mr-0 tablet:translate-y-2/4 tablet:pr-2.5 laptop:pr-0">
        <Image
          src="/assets/about-left.webp"
          alt="cheesecake ternopil Nahirna"
          width={408}
          height={276}
          priority
        />
      </div>
      <div className="justify-self-center grid-in-image tablet:pl-6 laptop:px-5 desktopHD:laptop:px-10">
        <Image
          src="/assets/about-center.webp"
          alt="cheesecake ternopil Nahirna"
          width={600}
          height={840}
          priority
        />
      </div>
      <div className="space-y-6 self-center grid-in-text">
        <h2>Я - Нагірна Вікторія, шеф кондитер</h2>
        <div className="space-y-3">
          <p>
            Запрошую вас відвідати мій сайт та вибрати свій улюблений чізкейк.
          </p>
          <p>
            Використовую виключно натуральні та якісні інгредієнти. Я дуже
            бережлива щодо якості та свіжості моїх десертів, тож кожен чізкейк
            готується зі справжньою любов&#x27;ю.
          </p>
          <p>
            На сайті ви знайдете різноманітні смаки та розміри, тому кожен
            клієнт знайде свій улюблений варіант. Крім того, я завжди готова
            допомогти вам обрати найкращий варіант.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
