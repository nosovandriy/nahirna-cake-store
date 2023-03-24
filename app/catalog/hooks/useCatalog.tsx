import { SortBy } from "@typeSortType";
import { Catalog } from "@typeCatalog";

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../redux/store";

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
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      price: 0.7,
      weights: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/1/title.jpg",
      images: [
        "/assets/catalog/1/1.jpg",
        "/assets/catalog/1/2.jpg",
        "/assets/catalog/1/3.jpg",
      ],
    },
    {
      id: "frozen-blueberry",
      popularity: "8",
      title: "Заморожений чорничний",
      description:
        "Мигдально - фініковий корж. Основа приготована з свіжих ягід чорниці, горіхів кеш‘ю, кокосового молока. Зовсім не схожий на класичний чізкейк, але це непристойно смачно.",
      price: 0.85,
      weights: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/2/1.jpg",
      images: ["/assets/catalog/2/1.jpg", "/assets/catalog/2/2.jpg"],
    },
    {
      id: "lavender",
      popularity: "7",
      title: "Лавандовий",
      description:
        "Лавандовий чізкейк - це десерт, який поєднує в собі кремовий смак вершкового сиру з ніжним ненав’язливим  ароматом та смаком лаванди. Основа - це ніжне горіхове сабле з квітами лаванди. Зверху чізкейк прикрашений смородиновим соусом ідеально підходить для особливих заходів та романтичних вечорів. Цей десерт точно сподобається любителям нестандартних та незвичайних смаків.",
      price: 0.95,
      weights: [1000],
      imageTitle: "/assets/catalog/3/1.jpg",
      images: ["/assets/catalog/3/1.jpg", "/assets/catalog/3/2.jpg"],
    },
    {
      id: "lime-coconut",
      popularity: "9",
      title: "Лайм - кокос",
      description:
        "Верхній шар чізкейка  містить натуральний сік та цедру лайма, який надає десерту освіжаючого кисло- соленого смаку. Основа приготовлена з крем сиру та кисломолочного сиру з додаванням кокосового молока.. Кокосове молоко надає чізкейку легкості та ненав'язливого екзотичного аромату. Смак цього чізкейка є свіжим, яскравим та екзотичним. Цей десерт точно сподобається любителям цитрусових та незвичних смаків.",
      price: 0.9,
      weights: [1300, 1400],
      imageTitle: "/assets/catalog/4/1.jpg",
      images: [
        "/assets/catalog/4/1.jpg",
        "/assets/catalog/4/2.jpg",
        "/assets/catalog/4/3.jpg",
      ],
    },
    {
      id: "lemon-blueberry",
      popularity: "6",
      title: "Лимонно - чорничний",
      description:
        "Верхній шар чізкейка містить натуральний сік та цедру  лимона, що надає десерту кислу свіжість з приємним ароматом цитрусів. Натомість, додавання чорниці доповнює смак вершкового сиру м'якою солодкістю, яка доповнюється ягідним присмаком чорниці. Відчуття лимона і чорниці у поєднанні між кислим та солодким створюють неповторний смак. Цей десерт точно сподобається любителям кислих цитрусових смаків та солодких ягідних присмаків. Чізкейк з лимоном та чорницею - ідеальний десерт для будь-якої пори року.",
      price: 0.8,
      weights: [1600, 1800, 2000],
      imageTitle: "/assets/catalog/5/1.jpg",
      images: ["/assets/catalog/5/1.jpg"],
    },
    {
      id: "raspberries-parmesan",
      popularity: "5",
      title: "Малина - пармезан",
      description:
        "Основа чізкейка малина пармезан  складається з крем сиру та пармезана, що надає йому солонуватий присмак, та малинового соусу. В складі малинового соусу є легка нотка болгарського перцю. Верхнійшар десерту покритий малиновим кремом. Основа зроблена з реструктуризованого хрумкого сабле з кунжутом власного приготування. Cмак чізкейка з малиною та пармезаном є незвичайним та насиченим. Цей десерт точно сподобається любителям кисло-солодких смаків та сирної солодкості. Чізкейк з малиною та пармезаном - чудовий варіант для експериментаторів та гурманів, які люблять нові та неочікувані смакові поєднання.",
      price: 0.9,
      weights: [1400],
      imageTitle: "/assets/catalog/6/1.jpg",
      images: [
        "/assets/catalog/6/1.jpg",
        "/assets/catalog/6/2.jpg",
        "/assets/catalog/6/3.jpg",
      ],
    },
    {
      id: "mango-passion-fruit",
      popularity: "10",
      title: "Манго - маракуя",
      description:
        "Чізкейк Манго - маракуя має свіжий та фруктовий смак. Основа чізкейка приготовлена з крем-сиру та додаванням пюре  манго та маракуї. Ці фрукти надають чізкейку легку кислинку та свіжість. Зверху чізкейк покритий конфі з манго та маракуї. Основа чізкейка пісочне сабле власного приготування. Смак чізкейка можна описати як свіжий та фруктовий, з легкою кислинкою та насиченим смаком манго та маракуї.",
      price: 0.75,
      weights: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/7/1.jpg",
      images: [
        "/assets/catalog/7/1.jpg",
        "/assets/catalog/7/2.jpg",
        "/assets/catalog/7/3.jpg",
      ],
    },
    {
      id: "classic-New-York",
      popularity: "1",
      title: "Класичний Нью - Йорк",
      description:
        "Чізкейк Нью - Йорк має багатогранний та насичений смак. Основа чізкейка, приготовлена з крем-сиру, має легку кислинку та насичений молочний смак, який поєднується зі смаком карамелі та арахісу. Солодкий смак карамелі надає чізкейку насиченості та багатогранності, а арахіс додає хрусткість.",
      price: 0.65,
      weights: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/8/1.jpg",
      images: [
        "/assets/catalog/8/1.jpg",
        "/assets/catalog/8/2.jpg",
        "/assets/catalog/8/3.jpg",
      ],
    },
    {
      id: "drunk-cherry",
      popularity: "13",
      title: "П’яна вишня",
      description:
        "Чізкейк П’яна вишня має насичений смак з нотками вишні та алкоголю. Основа чізкейка, приготована з крем-сиру. Вишні, які додаються до складу - свіжі, замочені в алкогольному напої, наприклад, бренді або амаретто. Хрумке пісочне сабле власного приготування. Зверху чізкейк покритий вишневим конфі.",
      price: 0.7,
      weights: [1300, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/9/1.jpg",
      images: [
        "/assets/catalog/9/1.jpg",
        "/assets/catalog/9/2.jpg",
        "/assets/catalog/9/3.jpg",
      ],
    },
    {
      id: "snickers",
      popularity: "2",
      title: "Снікерс",
      description:
        "Чізкейк снікерс має насичений та солодкий смак з характерними нотками арахісу та карамелі. Основа чізкейка, приготована з крем-сиру та арахісовоі пасти.  Покритий  карамеллю та подрібненим арахісом, що додає до смаку легкої хрусткості та аромату арахісу. Крім того ще чізкейк покритий шоколадний ганашем. Всі ці інгредієнти разом створюють багатий та насичений смак, що нагадує смак улюбленого снікерса.",
      price: 0.85,
      weights: [1600, 1700, 2000],
      imageTitle: "/assets/catalog/10/1.jpg",
      images: [
        "/assets/catalog/10/1.jpg",
        "/assets/catalog/10/2.jpg",
        "/assets/catalog/10/3.jpg",
      ],
    },
    {
      id: "tropical-chocolate",
      popularity: "3",
      title: "Тропічний шоколад",
      description:
        "Хрумке шоколадне сабле власного приготування. Чізкейк тропічний шоколад з конфі маракуї має насичений смак з прекрасним поєднанням солодкого та кислого. Основа з крем-сиру та молочного шоколаду додає солодкуватий смак. Конфі з маракуї додає кислинку та свіжість, що доповнює смак основи.",
      price: 0.8,
      weights: [1300, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/11/1.jpg",
      images: [
        "/assets/catalog/11/1.jpg",
        "/assets/catalog/11/2.jpg",
        "/assets/catalog/11/3.jpg",
      ],
    },
    {
      id: "chocolate-with-bananas",
      popularity: "12",
      title: "Шоколадний з бананами",
      description:
        "Ніжне шоколадне сабле власного приготування . Основа чізкейка приготовлена з крем сиру та додавання молочного шоколаду. Всередині банани підсмажені з цукром та вершковим маслом щоб додати більше смаку та текстури. Покритий чізкейк  подрібненим смаженим арахісом , шоколадною глазур’ю та шоколадним ганашем.",
      price: 0.85,
      weights: [1500, 1800, 2000],
      imageTitle: "/assets/catalog/12/1.jpg",
      images: [
        "/assets/catalog/12/1.jpg",
        "/assets/catalog/12/2.jpg",
        "/assets/catalog/12/3.jpg",
      ],
    },
    {
      id: "chocolate-ferrero",
      popularity: "11",
      title: "Шоколадний ферреро",
      description:
        "Реструктуризоване шоколадне сабле власного приготування. Основа чізкейка приготовлена з крем сиру та молочного шоколаду . Покритий чізкейк  шоколадним кремом. Також на верхній шар крему можуть бути нанесені подрібнені горіхи/ арахіс / печиво.",
      price: 0.75,
      weights: [1200, 1500, 1800, 2000],
      imageTitle: "/assets/catalog/13/1.jpg",
      images: [
        "/assets/catalog/13/1.jpg",
        "/assets/catalog/13/2.jpg",
        "/assets/catalog/13/3.jpg",
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
