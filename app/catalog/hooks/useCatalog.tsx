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
      id: "new-york",
      popularity: 1,
      title: "Нью - Йорк",
      price: 0.68,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Нью - Йорк має багатогранний та насичений смак. Основа чізкейка, приготовлена з крем-сиру, має легку кислинку та насичений молочний смак, який поєднується зі смаком карамелі та арахісу. Солодкий смак карамелі надає чізкейку насиченості та багатогранності, а арахіс додає хрусткість.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, арахіс.",
      imageTitle: "/assets/catalog/new-york-cheesecake/1.webp",
      imageBlur: "/assets/catalog/new-york-cheesecake/blur.webp",
      images: [
        "/assets/catalog/new-york-cheesecake/1.webp",
        "/assets/catalog/new-york-cheesecake/2.webp",
        "/assets/catalog/new-york-cheesecake/3.webp",
      ],
    },
    {
      id: "snickers",
      popularity: 2,
      title: "Снікерс",
      price: 0.7,
      weights: [1700, 2000],
      description:
        "Чізкейк снікерс має насичений та солодкий смак з характерними нотками арахісу та карамелі. Основа чізкейка, приготована з крем-сиру та арахісової пасти.  Покритий  карамеллю та подрібненим арахісом, що додає до смаку легкої хрусткості та аромату арахісу. Крім того ще чізкейк покритий шоколадний ганашем. Всі ці інгредієнти разом створюють багатий та насичений смак, що нагадує смак улюбленого снікерса.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, арахіс, цукрова пудра, арахісова паста, карамель, молочний шоколад.",
      imageTitle: "/assets/catalog/snickers-cheesecake/1.webp",
      imageBlur: "/assets/catalog/snickers-cheesecake/blur.webp",
      images: [
        "/assets/catalog/snickers-cheesecake/1.webp",
        "/assets/catalog/snickers-cheesecake/2.webp",
        "/assets/catalog/snickers-cheesecake/3.webp",
      ],
    },
    {
      id: "lemon-blueberry",
      popularity: 3,
      title: "Лимонно - чорничний",
      price: 0.7,
      weights: [1600, 1800, 2000],
      description:
        "Верхній шар чізкейка містить натуральний сік та цедру лимона, що надає десерту кислу свіжість з приємним ароматом цитрусів. Натомість, додавання чорниці доповнює смак вершкового сиру м'якою солодкістю, яка доповнюється ягідним присмаком чорниці. Відчуття лимона і чорниці у поєднанні між кислим та солодким створюють неповторний смак. Цей десерт точно сподобається любителям кислих цитрусових смаків та солодких ягідних присмаків. Чізкейк з лимоном та чорницею - ідеальний десерт для будь-якої пори року.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, чорниця, лимонний сік, молоко, цедра лимона.",
      imageTitle: "/assets/catalog/lemon-blueberry-cheesecake/1.webp",
      imageBlur: "/assets/catalog/lemon-blueberry-cheesecake/blur.webp",
      images: [
        "/assets/catalog/lemon-blueberry-cheesecake/1.webp",
        "/assets/catalog/lemon-blueberry-cheesecake/2.webp",
        "/assets/catalog/lemon-blueberry-cheesecake/3.webp",
      ],
    },
    {
      id: "three-chocolates",
      popularity: 4,
      title: "Три шоколади",
      price: 0.75,
      weights: [1400, 1600, 1800, 2000],
      description:
        "Чізкейк Три шоколади має насичений смак, що задовольняє всіх шанувальників шоколаду. Сирний крем складається з трьох видів шоколаду: молочного, чорного і білого. Основа - ніжний шоколадний бісквіт. Цей десерт просто тане у роті, є ідеальним вибором для шоколадних гурманів.",
      ingredients:
        "борошно, какао, цукор, молоко, вершкове масло екстра, яйця, ванільний екстракт, вершковий крем сир, чорний, молочний, білий шоколад, вершки.",
      imageTitle: "/assets/catalog/three-chocolates-cheesecake/1.webp",
      imageBlur: "/assets/catalog/three-chocolates-cheesecake/blur.webp",
      images: [
        "/assets/catalog/three-chocolates-cheesecake/1.webp",
        "/assets/catalog/three-chocolates-cheesecake/2.webp",
        "/assets/catalog/three-chocolates-cheesecake/3.webp",
      ],
    },
    {
      id: "illinois",
      popularity: 5,
      title: "Іллінойс",
      price: 0.81,
      weights: [1500, 2000],
      description:
        "Шоколадний чізкейк Іллінойс на основі з брауні - це десерт, який поєднує в собі ну дуже шоколадний смак, з ніжною та легкою текстурою. Зверху десерт покритий шоколадним ганашем та шоколадними крихтами. Цей чізкейк - це задоволення для шоколадних гурманів і любителів чізкейків.",
      ingredients:
        "цукор коричневий, яйця, масло вершкове екстра, борошно, какао, шоколад, крем сир, вершки.",
      imageTitle: "/assets/catalog/illinois-cheesecake/1.webp",
      imageBlur: "/assets/catalog/illinois-cheesecake/blur.webp",
      images: [
        "/assets/catalog/illinois-cheesecake/1.webp",
        "/assets/catalog/illinois-cheesecake/2.webp",
        "/assets/catalog/illinois-cheesecake/3.webp",
      ],
    },
    {
      id: "peanut-latte",
      popularity: 6,
      title: "Арахісове латте",
      price: 0.72,
      weights: [1500, 1800, 2000],
      description:
        "Хрустке, ледь солонувате пісочне сабле власного приготування, вологий просочений бісквіт, ніжний сирний шар зі смаком кави та арахісової  пасти. Зверху чізкейк покритий кремом шантильї.",
      ingredients:
        "борошно, цукор, яйця, арахіс, мигдальне борошно, вершки, кава, крем сир, арахісова паста, молоко, маскарпоне, ванільний екстракт.",
      imageTitle: "/assets/catalog/peanut-latte-cheesecake/1.webp",
      imageBlur: "/assets/catalog/peanut-latte-cheesecake/blur.webp",
      images: [
        "/assets/catalog/peanut-latte-cheesecake/1.webp",
        "/assets/catalog/peanut-latte-cheesecake/2.webp",
        "/assets/catalog/peanut-latte-cheesecake/3.webp",
      ],
    },
    {
      id: "missouri",
      popularity: 7,
      title: "Міссурі",
      price: 0.85,
      weights: [2000],
      description:
        "Чізкейк Міссурі зроблений з декількох шарів. Ванільний шар з шоколадним краплями, шоколадний шар, шоколадний ганаш, кокосово - пекановий топінг. Кокосовий топінг доповнює шоколадний смак, надаючи легку екзотичну нотку. Запечені горіхи пекан також прекрасно поєднуються з шоколадом і створюють цікаву комбінацію смаків.",
      ingredients:
        "борошно, какао, цукор, яйця, вершкове масло екстра, крем сир, ванільний екстракт, вершки, шоколадні краплі, шоколад, цукор коричневий, натуральний кокос ( не кокосова стружка ), горіхи пекан.",
      imageTitle: "/assets/catalog/missouri-cheesecake/1.webp",
      imageBlur: "/assets/catalog/missouri-cheesecake/blur.webp",
      images: [
        "/assets/catalog/missouri-cheesecake/1.webp",
        "/assets/catalog/missouri-cheesecake/2.webp",
        "/assets/catalog/missouri-cheesecake/3.webp",
      ],
    },
    {
      id: "raspberry",
      popularity: 8,
      title: "Малиновий",
      price: 0.69,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Малиновий чізкейк - це поєднання хрумкого сабле, ніжного крем сиру, малинового пюре створює гармонійний баланс солодкого та кислого.",
      ingredients:
        "борошно, цукор, яйця, вершкове масло екстра,крохмаль, вершки, малина, крем сир.",
      imageTitle: "/assets/catalog/raspberry-cheesecake/1.webp",
      imageBlur: "/assets/catalog/raspberry-cheesecake/blur.webp",
      images: [
        "/assets/catalog/raspberry-cheesecake/1.webp",
        "/assets/catalog/raspberry-cheesecake/2.webp",
        "/assets/catalog/raspberry-cheesecake/3.webp",
      ],
    },
    {
      id: "basque",
      popularity: 9,
      title: "Баскський",
      price: 0.59,
      weights: [800],
      description:
        "Баскський чізкейк - це витончена солодка насолода, яка вразить будь-якого шанувальника випічки та десертів. Цей різновид чізкейка не має пісочної основи, всередині надзвичайно ніжний та м'який, а зовні має підгорілу скоринку.",
      ingredients:
        "вершковий крем сир, яйця, ванільний екстракт, цукор, вершки.",
      imageTitle: "/assets/catalog/basque-cheesecake/1.webp",
      imageBlur: "/assets/catalog/basque-cheesecake/blur.webp",
      images: [
        "/assets/catalog/basque-cheesecake/1.webp",
        "/assets/catalog/basque-cheesecake/2.webp",
        "/assets/catalog/basque-cheesecake/3.webp",
      ],
    },
    {
      id: "basque-matcha",
      popularity: 11,
      title: "Баскський матча",
      price: 0.59,
      weights: [800],
      description:
        "Чізкейк баскський з додаванням зеленого чаю матча - це варіація класичного баскського чізкейка, в якій використовується зелений чай матча як один з інгредієнтів. Матча додає десерту освіжаючий смак зеленого чаю, з легкою гіркуватістю і ніжними трав'яними нотками.",
      ingredients:
        "вершковий крем сир, цукор, матча, екстракт ванілі, яйця, вершки.",
      imageTitle: "/assets/catalog/basque-matcha-cheesecake/1.webp",
      imageBlur: "/assets/catalog/basque-matcha-cheesecake/blur.webp",
      images: [
        "/assets/catalog/basque-matcha-cheesecake/1.webp",
        "/assets/catalog/basque-matcha-cheesecake/2.webp",
        "/assets/catalog/basque-matcha-cheesecake/3.webp",
      ],
    },
    {
      id: "hawaii",
      popularity: 12,
      title: "Гаваї",
      price: 0.7,
      weights: [1400, 1600, 1800, 2000],
      description:
        "Чізкейк Гаваї - це екзотичне поєднання пюре манго та матчі ( японський зелений чай ), який має неперевершений аромат та легкий гіркуватий смак. Ви будете насолоджуватись кремовою та ніжною сирною основою, яка відмінно поєднується з солодким мангровим пюре.",
      ingredients:
        "борошно, цукор, вершкове масло екстра, яйця, крем сир, вершки, пюре манго, матча, вершки, цедра лимона.",
      imageTitle: "/assets/catalog/hawaii-cheesecake/1.webp",
      imageBlur: "/assets/catalog/hawaii-cheesecake/blur.webp",
      images: [
        "/assets/catalog/hawaii-cheesecake/1.webp",
        "/assets/catalog/hawaii-cheesecake/2.webp",
        "/assets/catalog/hawaii-cheesecake/3.webp",
      ],
    },
    {
      id: "lviv-cheesecake",
      popularity: 13,
      title: "Львівський сирник",
      price: 0.7,
      weights: [1000],
      description:
        "Львівський сирник має ніжну, кремову текстуру з легким ароматом ванілі та цедри лимона. У нього додані соковиті темні родзинки вимочені в коньяку, які надають десерту текстурного контрасту. Ідеальним доповненням є покриття сирника шоколадом.",
      ingredients:
        "кисломолочний сир, яйця, цукор, крохмаль, ванільний екстракт, цедра лимона, темні родзинки, шоколад.",
      imageTitle: "/assets/catalog/lviv-cheesecake/1.webp",
      imageBlur: "/assets/catalog/lviv-cheesecake/blur.webp",
      images: [
        "/assets/catalog/lviv-cheesecake/1.webp",
        "/assets/catalog/lviv-cheesecake/2.webp",
        "/assets/catalog/lviv-cheesecake/3.webp",
      ],
    },
    {
      id: "chocolate-with-bananas",
      popularity: 14,
      title: "Шоколадний з бананами",
      price: 0.7,
      weights: [1500, 1800, 2000],
      description:
        "Ніжне шоколадне сабле власного приготування . Основа чізкейка приготовлена з крем сиру та додавання молочного шоколаду. Всередині банани підсмажені з цукром та вершковим маслом щоб додати більше смаку та текстури. Покритий чізкейк  подрібненим смаженим арахісом , шоколадною глазур’ю та шоколадним ганашем.",
      ingredients:
        "борошно пшеничне, какао алкалізоване, цукрова пудра, вершкове масло екстра, яйця, крем сир, банани, цукор, вершки, молочний шоколад, кукурудзяний крохмаль.",
      imageTitle: "/assets/catalog/chocolate-with-bananas-cheesecake/1.webp",
      imageBlur: "/assets/catalog/chocolate-with-bananas-cheesecake/blur.webp",
      images: [
        "/assets/catalog/chocolate-with-bananas-cheesecake/1.webp",
        "/assets/catalog/chocolate-with-bananas-cheesecake/2.webp",
        "/assets/catalog/chocolate-with-bananas-cheesecake/3.webp",
      ],
    },
    {
      id: "mango-passion-fruit",
      popularity: 15,
      title: "Манго - маракуя",
      price: 0.75,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Манго - маракуя має свіжий та фруктовий смак. Основа чізкейка приготовлена з крем-сиру та додаванням пюре манго та маракуї. Ці фрукти надають чізкейку легку кислинку та свіжість. Зверху чізкейк покритий конфі з манго та маракуї. Основа чізкейка пісочне сабле власного приготування. Смак чізкейка можна описати як свіжий та фруктовий, з легкою кислинкою та насиченим смаком манго та маракуї.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, манго, маракуя.",
      imageTitle: "/assets/catalog/mango-passion-fruit-cheesecake/1.webp",
      imageBlur: "/assets/catalog/mango-passion-fruit-cheesecake/blur.webp",
      images: [
        "/assets/catalog/mango-passion-fruit-cheesecake/1.webp",
        "/assets/catalog/mango-passion-fruit-cheesecake/2.webp",
        "/assets/catalog/mango-passion-fruit-cheesecake/3.webp",
      ],
    },
    {
      id: "lime-coconut",
      popularity: 16,
      title: "Лайм - кокос",
      price: 0.75,
      weights: [1400, 1600, 1800, 2000],
      description:
        "Верхній шар чізкейка містить натуральний сік та цедру лайма, який надає десерту освіжаючого кисло- соленого смаку. Основа приготовлена з крем сиру та кисломолочного сиру з додаванням кокосового молока.. Кокосове молоко надає чізкейку легкості та ненав'язливого екзотичного аромату. Смак цього чізкейка є свіжим, яскравим та екзотичним. Цей десерт точно сподобається любителям цитрусових та незвичних смаків.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, кокосова олія, сік і цедра Лайма, кокосова стружка, кисломолочний сир, кокосове молоко.",
      imageTitle: "/assets/catalog/lime-coconut-cheesecake/1.webp",
      imageBlur: "/assets/catalog/lime-coconut-cheesecake/blur.webp",
      images: [
        "/assets/catalog/lime-coconut-cheesecake/1.webp",
        "/assets/catalog/lime-coconut-cheesecake/2.webp",
        "/assets/catalog/lime-coconut-cheesecake/3.webp",
      ],
    },
    {
      id: "tropical-chocolate",
      popularity: 17,
      title: "Тропічний шоколад",
      price: 0.74,
      weights: [1300, 1500, 1800, 2000],
      description:
        "Хрумке шоколадне сабле власного приготування. Чізкейк тропічний шоколад з конфі маракуї має насичений смак з прекрасним поєднанням солодкого та кислого. Основа з крем-сиру та молочного шоколаду додає солодкуватий смак. Конфі з маракуї додає кислинку та свіжість, що доповнює смак основи.",
      ingredients:
        "вершкове масло екстра, алкалізоване какао, цукрова пудра, борошно пшеничне, яйця, крем сир, молочний шоколад, молоко,пюре маракуї, манго.",
      imageTitle: "/assets/catalog/tropical-chocolate-cheesecake/1.webp",
      imageBlur: "/assets/catalog/tropical-chocolate-cheesecake/blur.webp",
      images: [
        "/assets/catalog/tropical-chocolate-cheesecake/1.webp",
        "/assets/catalog/tropical-chocolate-cheesecake/2.webp",
        "/assets/catalog/tropical-chocolate-cheesecake/3.webp",
      ],
    },
    {
      id: "chocolate-ferrero",
      popularity: 18,
      title: "Шоколадний ферреро",
      price: 0.7,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Реструктуризоване шоколадне сабле власного приготування. Основа чізкейка приготовлена з крем сиру та молочного шоколаду. Покритий чізкейк шоколадним кремом. Також на верхній шар крему можуть бути нанесені подрібнені горіхи/ арахіс / печиво.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, фундук, пудра, алкалізоване какао, молочний шоколад.",
      imageTitle: "/assets/catalog/chocolate-ferrero-cheesecake/1.webp",
      imageBlur: "/assets/catalog/chocolate-ferrero-cheesecake/blur.webp",
      images: [
        "/assets/catalog/chocolate-ferrero-cheesecake/1.webp",
        "/assets/catalog/chocolate-ferrero-cheesecake/2.webp",
        "/assets/catalog/chocolate-ferrero-cheesecake/3.webp",
      ],
    },
    {
      id: "bounty",
      popularity: 19,
      title: "Баунті",
      price: 0.75,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Чізкейк Баунті - це десерт, який поєднує в собі смаки крем сиру та кокоса, що нагадує смак традиційного шоколадного батончика Баунті. Основа приготовлена з шоколадного пісочного сабле власного приготування. Зверху чізкейк покритий шоколадним кремом ганаш.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, алкалізоване какао, цукрова пудра, кокосова стружка, згущене молоко, молочний шоколад.",
      imageTitle: "/assets/catalog/bounty-cheesecake/1.webp",
      imageBlur: "/assets/catalog/bounty-cheesecake/blur.webp",
      images: [
        "/assets/catalog/bounty-cheesecake/1.webp",
        "/assets/catalog/bounty-cheesecake/2.webp",
        "/assets/catalog/bounty-cheesecake/3.webp",
      ],
    },
    {
      id: "drunk-cherry",
      popularity: 20,
      title: "П'яна вишня",
      price: 0.69,
      weights: [1300, 1500, 1800, 2000],
      description:
        "Чізкейк П'яна вишня має насичений смак з нотками вишні та алкоголю. Основа чізкейка, приготована з крем-сиру. Вишні, які додаються до складу - свіжі, замочені в алкогольному напої, наприклад, бренді або амаретто. Хрумке пісочне сабле власного приготування. Зверху чізкейк покритий вишневим конфі.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, вишня, ром.",
      imageTitle: "/assets/catalog/drunk-cherry-cheesecake/1.webp",
      imageBlur: "/assets/catalog/drunk-cherry-cheesecake/blur.webp",
      images: [
        "/assets/catalog/drunk-cherry-cheesecake/1.webp",
        "/assets/catalog/drunk-cherry-cheesecake/2.webp",
        "/assets/catalog/drunk-cherry-cheesecake/3.webp",
      ],
    },
    {
      id: "frozen-blueberry",
      popularity: 21,
      title: "Заморожений чорничний",
      price: 0.85,
      weights: [1200, 1500, 1800, 2000],
      description:
        "Мигдально - фініковий корж. Основа чізкейка приготована зі свіжих ягід чорниці, горіхів кеш'ю, кокосового молока. Зовсім не схожий на класичний чізкейк, але це непристойно смачно.",
      ingredients:
        "мигдаль, фініки, кориця, чорниця, крохмаль, цукор, кеш'ю, кокосове молоко, кокосова олія, лимонний сік, лимонна цедра.",
      imageTitle: "/assets/catalog/frozen-blueberry-cheesecake/1.webp",
      imageBlur: "/assets/catalog/frozen-blueberry-cheesecake/blur.webp",
      images: [
        "/assets/catalog/frozen-blueberry-cheesecake/1.webp",
        "/assets/catalog/frozen-blueberry-cheesecake/2.webp",
        "/assets/catalog/frozen-blueberry-cheesecake/3.webp",
      ],
    },
    {
      id: "lavender",
      popularity: 22,
      title: "Лавандовий",
      price: 0.73,
      weights: [1400, 1600, 1800, 2000],
      description:
        "Лавандовий чізкейк - це десерт, який поєднує в собі кремовий смак вершкового сиру з ніжним ненав'язливим ароматом та смаком лаванди. Основа - це ніжне горіхове сабле з квітами лаванди. Зверху чізкейк прикрашений смородиновим соусом ідеально підходить для особливих заходів та романтичних вечорів. Цей десерт точно сподобається любителям нестандартних та незвичайних смаків.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, суміш горіхів, лаванда, смородина.",
      imageTitle: "/assets/catalog/lavender-cheesecake/1.webp",
      imageBlur: "/assets/catalog/lavender-cheesecake/blur.webp",
      images: [
        "/assets/catalog/lavender-cheesecake/1.webp",
        "/assets/catalog/lavender-cheesecake/2.webp",
        "/assets/catalog/lavender-cheesecake/3.webp",
      ],
    },
    {
      id: "raspberries-parmesan",
      popularity: 23,
      title: "Малина - пармезан",
      price: 0.75,
      weights: [1400, 1600, 1800, 2000],
      description:
        "Основа чізкейка малина пармезан складається з крем сиру та пармезану, що надає йому солонуватий присмак, та малинового соусу. В складі малинового соусу є легка нотка болгарського перцю. Верхній шар десерту покритий малиновим кремом. Основа зроблена з реструктуризованого хрумкого сабле з кунжутом власного приготування. Смак чізкейка з малиною та пармезаном є незвичайним та насиченим. Цей десерт точно сподобається любителям кисло-солодких смаків та сирної солодкості. Чізкейк з малиною та пармезаном - чудовий варіант для експериментаторів та гурманів, які люблять нові та неочікувані смакові поєднання.",
      ingredients:
        "борошно пшеничне, цукор, яйця, вершкове масло екстра, крем сир, вершки, крохмаль кукурудзяний, цукрова пудра, кунжут, малина, червоний болгарський перець, молоко, пармезан.",
      imageTitle: "/assets/catalog/raspberries-parmesan-cheesecake/1.webp",
      imageBlur: "/assets/catalog/raspberries-parmesan-cheesecake/blur.webp",
      images: [
        "/assets/catalog/raspberries-parmesan-cheesecake/1.webp",
        "/assets/catalog/raspberries-parmesan-cheesecake/2.webp",
        "/assets/catalog/raspberries-parmesan-cheesecake/3.webp",
      ],
    },
  ];

  const sortedData = [...fullCatalog].sort((a, b) => {
    switch (sortType) {
      case SortBy.popularity:
        return a.popularity - b.popularity;

      case SortBy.title:
        return a.title.localeCompare(b.title);

      case SortBy.priceAsc:
        return a.price - b.price;

      case SortBy.priceDesc:
        return b.price - a.price;

      default:
        return 0;
    }
  });

  const smallCatalog = sortedData.slice(0, 6);

  const catalog = isFullCatalog ? sortedData : smallCatalog;

  return { catalog };
}
