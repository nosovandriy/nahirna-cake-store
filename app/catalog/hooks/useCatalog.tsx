import { useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@redux/store";
import { SortBy } from "@type/SortType";
import { Catalog } from "@type/Catalog";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useCatalog(isFullCatalog: boolean = true): {
  catalog: Catalog[];
} {
  const sortType = useAppSelector((state) => state.sortCake.sortType);

  const fullCatalog = [
    {
      id: "bounty",
      popularity: "4",
      title: "Баунті",
      price: 0.7,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, алкалізоване какао, цукрова пудра, кокосова стружка, згущене молоко, молочний шоколад.",
      imageTitle: "/assets/catalog/1/1.webp",
      images: [
        "/assets/catalog/1/1.webp",
        "/assets/catalog/1/2.webp",
        "/assets/catalog/1/3.webp",
      ],
    },
    {
      id: "frozen-blueberry",
      popularity: "11",
      title: "Заморожений чорничний",
      price: 0.85,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Мигдально - фініковий корж. Основа приготована з свіжих ягід чорниці, горіхів кеш‘ю, кокосового молока. Зовсім не схожий на класичний чізкейк, але це непристойно смачно.",
      ingredients:
        "мигдаль, фініки, кориця, чорниця, крохмаль, цукор, кешю, кокосове молоко, кокосова олія, лимонний сік, лимонна цедра.",
      imageTitle: "/assets/catalog/2/1.webp",
      images: [
        "/assets/catalog/2/1.webp",
        "/assets/catalog/2/2.webp",
        "/assets/catalog/2/3.webp",
      ],
    },
    {
      id: "lavender",
      popularity: "12",
      title: "Лавандовий",
      price: 0.95,
      weights: [1400],
      description:
        "Лавандовий чізкейк - це десерт, який поєднує в собі кремовий смак вершкового сиру з ніжним ненав’язливим  ароматом та смаком лаванди. Основа - це ніжне горіхове сабле з квітами лаванди. Зверху чізкейк прикрашений смородиновим соусом ідеально підходить для особливих заходів та романтичних вечорів. Цей десерт точно сподобається любителям нестандартних та незвичайних смаків.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, суміш горіхів, лаванда, смородина.",
      imageTitle: "/assets/catalog/3/1.webp",
      images: [
        "/assets/catalog/3/1.webp",
        "/assets/catalog/3/2.webp",
        "/assets/catalog/3/3.webp",
      ],
    },
    {
      id: "lime-coconut",
      popularity: "10",
      title: "Лайм - кокос",
      price: 0.9,
      weights: [1400],
      description:
        "Верхній шар чізкейка  містить натуральний сік та цедру лайма, який надає десерту освіжаючого кисло- соленого смаку. Основа приготовлена з крем сиру та кисломолочного сиру з додаванням кокосового молока.. Кокосове молоко надає чізкейку легкості та ненав'язливого екзотичного аромату. Смак цього чізкейка є свіжим, яскравим та екзотичним. Цей десерт точно сподобається любителям цитрусових та незвичних смаків.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, кокосова олія, сік і цедра Лайма, кокосова стружка, кисломолочний сир, кокосове молоко.",
      imageTitle: "/assets/catalog/4/1.webp",
      images: [
        "/assets/catalog/4/1.webp",
        "/assets/catalog/4/2.webp",
        "/assets/catalog/4/3.webp",
      ],
    },
    {
      id: "lemon-blueberry",
      popularity: "3",
      title: "Лимонно - чорничний",
      price: 0.8,
      weights: [1600, 1800, 2000],
      description:
        "Верхній шар чізкейка містить натуральний сік та цедру  лимона, що надає десерту кислу свіжість з приємним ароматом цитрусів. Натомість, додавання чорниці доповнює смак вершкового сиру м'якою солодкістю, яка доповнюється ягідним присмаком чорниці. Відчуття лимона і чорниці у поєднанні між кислим та солодким створюють неповторний смак. Цей десерт точно сподобається любителям кислих цитрусових смаків та солодких ягідних присмаків. Чізкейк з лимоном та чорницею - ідеальний десерт для будь-якої пори року.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, чорниця, лимонний сік, молоко, цедра лимона.",
      imageTitle: "/assets/catalog/5/1.webp",
      images: [
        "/assets/catalog/5/1.webp",
        "/assets/catalog/5/2.webp",
        "/assets/catalog/5/3.webp",
      ],    },
    {
      id: "raspberries-parmesan",
      popularity: "13",
      title: "Малина - пармезан",
      price: 0.95,
      weights: [1400],
      description:
        "Основа чізкейка малина пармезан  складається з крем сиру та пармезана, що надає йому солонуватий присмак, та малинового соусу. В складі малинового соусу є легка нотка болгарського перцю. Верхнійшар десерту покритий малиновим кремом. Основа зроблена з реструктуризованого хрумкого сабле з кунжутом власного приготування. Cмак чізкейка з малиною та пармезаном є незвичайним та насиченим. Цей десерт точно сподобається любителям кисло-солодких смаків та сирної солодкості. Чізкейк з малиною та пармезаном - чудовий варіант для експериментаторів та гурманів, які люблять нові та неочікувані смакові поєднання.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, кунжут, малина, червоний болгарський перець, молоко, пармезан.",
      imageTitle: "/assets/catalog/6/1.webp",
      images: [
        "/assets/catalog/6/1.webp",
        "/assets/catalog/6/2.webp",
        "/assets/catalog/6/3.webp",
      ],
    },
    {
      id: "mango-passion-fruit",
      popularity: "9",
      title: "Манго - маракуя",
      price: 0.98,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Манго - маракуя має свіжий та фруктовий смак. Основа чізкейка приготовлена з крем-сиру та додаванням пюре  манго та маракуї. Ці фрукти надають чізкейку легку кислинку та свіжість. Зверху чізкейк покритий конфі з манго та маракуї. Основа чізкейка пісочне сабле власного приготування. Смак чізкейка можна описати як свіжий та фруктовий, з легкою кислинкою та насиченим смаком манго та маракуї.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, манго, маракуя.",
      imageTitle: "/assets/catalog/7/1.webp",
      images: [
        "/assets/catalog/7/1.webp",
        "/assets/catalog/7/2.webp",
        "/assets/catalog/7/3.webp",
      ],
    },
    {
      id: "new-york",
      popularity: "1",
      title: "Нью - Йорк",
      price: 0.7,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Нью - Йорк має багатогранний та насичений смак. Основа чізкейка, приготовлена з крем-сиру, має легку кислинку та насичений молочний смак, який поєднується зі смаком карамелі та арахісу. Солодкий смак карамелі надає чізкейку насиченості та багатогранності, а арахіс додає хрусткість.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, арахіс.",
      imageTitle: "/assets/catalog/8/1.webp",
      images: [
        "/assets/catalog/8/1.webp",
        "/assets/catalog/8/2.webp",
        "/assets/catalog/8/3.webp",
      ],
    },
    {
      id: "drunk-cherry",
      popularity: "8",
      title: "П’яна вишня",
      price: 0.7,
      weights: [1300, 1500, 1800, 2000],
      description:
        "Чізкейк П’яна вишня має насичений смак з нотками вишні та алкоголю. Основа чізкейка, приготована з крем-сиру. Вишні, які додаються до складу - свіжі, замочені в алкогольному напої, наприклад, бренді або амаретто. Хрумке пісочне сабле власного приготування. Зверху чізкейк покритий вишневим конфі.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, вишня, ром.",
      imageTitle: "/assets/catalog/9/1.webp",
      images: [
        "/assets/catalog/9/1.webp",
        "/assets/catalog/9/2.webp",
        "/assets/catalog/9/3.webp",
      ],
    },
    {
      id: "snickers",
      popularity: "2",
      title: "Снікерс",
      price: 0.95,
      weights: [1700, 2000],
      description:
        "Чізкейк снікерс має насичений та солодкий смак з характерними нотками арахісу та карамелі. Основа чізкейка, приготована з крем-сиру та арахісової пасти.  Покритий  карамеллю та подрібненим арахісом, що додає до смаку легкої хрусткості та аромату арахісу. Крім того ще чізкейк покритий шоколадний ганашем. Всі ці інгредієнти разом створюють багатий та насичений смак, що нагадує смак улюбленого снікерса.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, арахіс, цукрова пудра, арахісова паста, карамель, молочний шоколад.",
      imageTitle: "/assets/catalog/10/1.webp",
      images: [
        "/assets/catalog/10/1.webp",
        "/assets/catalog/10/2.webp",
        "/assets/catalog/10/3.webp",
      ],
    },
    {
      id: "tropical-chocolate",
      popularity: "7",
      title: "Тропічний шоколад",
      price: 0.8,
      weights: [1300, 1500, 1800, 2000],
      description:
        "Хрумке шоколадне сабле власного приготування. Чізкейк тропічний шоколад з конфі маракуї має насичений смак з прекрасним поєднанням солодкого та кислого. Основа з крем-сиру та молочного шоколаду додає солодкуватий смак. Конфі з маракуї додає кислинку та свіжість, що доповнює смак основи.",
      ingredients:
        "вершкове масло екстра, алкалізоване какао, цукрова пудра, борошно пшеничне, яйця, крем сир, молочний шоколад, молоко,пюре маракуї, манго.",
      imageTitle: "/assets/catalog/11/1.webp",
      images: [
        "/assets/catalog/11/1.webp",
        "/assets/catalog/11/2.webp",
        "/assets/catalog/11/3.webp",
      ],
    },
    {
      id: "chocolate-with-bananas",
      popularity: "5",
      title: "Шоколадний з бананами",
      price: 0.85,
      weights: [1500, 1800, 2000],
      description:
        "Ніжне шоколадне сабле власного приготування . Основа чізкейка приготовлена з крем сиру та додавання молочного шоколаду. Всередині банани підсмажені з цукром та вершковим маслом щоб додати більше смаку та текстури. Покритий чізкейк  подрібненим смаженим арахісом , шоколадною глазур’ю та шоколадним ганашем.",
      ingredients:
        "борошно пшеничне, какао алкалізоване, цукрова пудра, вершкове масло екстра, яйця, крем сир, банани, цукор, вершки, молочний шоколад, кукурудзяний крохмаль.",
      imageTitle: "/assets/catalog/12/1.webp",
      images: [
        "/assets/catalog/12/1.webp",
        "/assets/catalog/12/2.webp",
        "/assets/catalog/12/3.webp",
      ],
    },
    {
      id: "chocolate-ferrero",
      popularity: "6",
      title: "Шоколадний ферреро",
      price: 0.75,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Реструктуризоване шоколадне сабле власного приготування. Основа чізкейка приготовлена з крем сиру та молочного шоколаду . Покритий чізкейк  шоколадним кремом. Також на верхній шар крему можуть бути нанесені подрібнені горіхи/ арахіс / печиво.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, фундук, пудра, алкалізоване какао, молочний шоколад.",
      imageTitle: "/assets/catalog/13/1.webp",
      images: [
        "/assets/catalog/13/1.webp",
        "/assets/catalog/13/2.webp",
        "/assets/catalog/13/3.webp",
      ],
    },
  ];

  const sortedData = [...fullCatalog].sort((a, b) => {
    switch (sortType) {
      case SortBy.popularity:
        return Number(a.popularity) - Number(b.popularity);

      case SortBy.title:
        return a.title.localeCompare(b.title);

      case SortBy.priceAsc:
        return a.price * a.weights[0] - b.price * b.weights[0];

      case SortBy.priceDesc:
        return b.price * b.weights[0] - a.price * a.weights[0];

      default:
        return 0;
    }
  });

  const smallCatalog = sortedData.slice(0, 6);

  const catalog = isFullCatalog ? sortedData : smallCatalog;

  return { catalog };
}
