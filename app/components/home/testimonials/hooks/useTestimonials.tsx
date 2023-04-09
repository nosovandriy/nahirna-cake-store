import { Testimonials } from "@type/Testimonials";

export function useTestimonials(): {
  testimonials: Testimonials[];
} {
  const testimonials = [
    {
      name: "Тетяна Крицька",
      data: "22.10.2022",
      text: "Добрий день. Чізкейк просто бомба, ну дуже-дуже смачний. Дякуємо, що робите людей щасливими.",
      imageCake: "/assets/testimonials/1/cake.webp",
      imageСlient: "/assets/testimonials/1/client.webp",
    },
    {
      name: "Khrystyna Navaliana",
      data: "10.09.2022",
      text: "Привіт, дуже смачний чізкейк, всім сподобався🥰. Дякую тобі💗💗💗",
      imageCake: "/assets/testimonials/2/cake.webp",
      imageСlient: "/assets/testimonials/2/client.webp",
    },
    {
      name: "Іра Носова",
      data: "06.08.2022",
      text: "Найсмачніші чізкейки, які я коли небудь пробувала. Завжди якісні інгредієнти і чудовий смак. Якщо по чізкейки - то тільки до Віки.",
      imageCake: "/assets/testimonials/3/cake.webp",
      imageСlient: "/assets/testimonials/3/client.webp",
    },
    {
      name: "Олена Шкілька",
      data: "09.01.2023",
      text: "Добрий день. Чізкейк дуже смачний. Будемо обов'язково замовляти ще!) Дякую дуже!",
      imageCake: "/assets/testimonials/4/cake.webp",
      imageСlient: "/assets/testimonials/4/client.webp",
    },
    {
      name: "Натаія Сагайдак",
      data: "02.02.2023",
      text: "Чізкейк ваш неймовірний, сподобався абсолютно усім. Приїхали гості з Канади, сказали, що нічого подібного не смакували...",
      imageCake: "/assets/testimonials/5/cake.webp",
      imageСlient: "/assets/testimonials/5/client.webp",
    },
    {
      name: "Таня Голодюк",
      data: "02.11.2022",
      text: "Що ж ти робиш, Віка? Це божественно. До речі лайм - мій улюблений смак.",
      imageCake: "/assets/testimonials/6/cake.webp",
      imageСlient: "/assets/testimonials/6/client.webp",
    },
    {
      name: "Катерина Білецька",
      data: "02.11.2022",
      text: "Бомба🤤, Вікаа, це дуже смачно, на другу порцію всім не вистачило🤭, дякуємо дужее💗",
      imageCake: "/assets/testimonials/7/cake.webp",
      imageСlient: "/assets/testimonials/7/client.webp",
    },
  ];

  return { testimonials };
}
