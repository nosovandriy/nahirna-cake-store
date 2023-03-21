"use client";

import { useEffect, useState } from "react";

import { Add, Remove } from "@icons/add-remove";
import ProductCardCarousel from "@catalog/[cakeId]/carousel/carousel";
import { CheckIcon } from "@icons/check";
import BreadCrumbs from "@breadcrumb/breadcrumbs";
import NotFoundPage from "@404/404";
import { useCatalog } from "@catalog/hooks/useCatalog";
import SkeletonGallery from "@catalog/catalog-item/skeleton-gallery/skeleton-gallery";

const ProductCard = ({ params }: { params: { cakeId: string } }) => {
  const [addToCart, setAddToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { catalog } = useCatalog();
  const selectedCard = catalog.find((item) => item.titleEng === params.cakeId);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAddToCart(false);
    }, 3000);
  }, [addToCart]);

  const handleAddProductToCart = () => {
    setAddToCart(true);
  };

  return (
    <>
      {selectedCard ? (
        <section className="relative">
          {addToCart && (
            <div className="absolute top-0 z-50 flex gap-4 h-14 w-full items-center justify-center bg-themeBrown-100">
              <p className="text-themeCaramel">Товар додано у кошик</p>
              <div className=" fill-themeCaramel">
                <CheckIcon />
              </div>
            </div>
          )}

          <BreadCrumbs cakeTitle={selectedCard.title} />
          <div className="grid grid-cols-12 gap-x-10">
            <div className="col-span-6 col-start-1 max-h-[645px]">
              {isLoading ? (
                <SkeletonGallery />
              ) : (
                <ProductCardCarousel
                  images={selectedCard.images}
                  imagesAlt={selectedCard.titleEng}
                />
              )}
            </div>
            <div className="col-span-6 col-start-7 mb-[120px]">
              <h2 className="mb-6 text-themeGray-100">{selectedCard.title}</h2>
              <p className="mb-8 text-2xl font-medium text-themeBrown-100">
                {`${(
                  selectedCard.price * selectedCard.weight[0]
                ).toFixed()} грн`}
              </p>
              <div className="mb-8 flex gap-4">
                {selectedCard.weight.map((item, index) => (
                  <button key={index} className="activeSizeButton">{`${
                    item / 1000
                  } кг`}</button>
                ))}
              </div>
              <div>
                <p className="mb-8">
                  Мигдально - фініковий корж. Основа приготована з свіжих ягід
                  чорниці , горіхів кеш‘ю , кокосового молока. Зовсім не схожий
                  на класичний чізкейк , але це не пристойно смачно.
                </p>
              </div>
              <div className="mb-8 flex items-center gap-6">
                <p className="text-sm">Кількість</p>
                <div className="flex justify-between gap-2 rounded-full border border-themeBrown-20 py-1 px-2 text-base font-normal text-themeGray-100">
                  <Remove /> <p className="text-themeGray-100">1</p>
                  <div>
                    <Add />
                  </div>
                </div>
              </div>
              <button
                className="primaryButton mb-10"
                onClick={handleAddProductToCart}
              >
                Додати в кошик
              </button>
              <p className="pb-4 text-xl font-medium text-themeGray-100">
                Склад та алергени
              </p>
              <p className="pb-6">
                шифоновий ванільний бісквіт, грушево-лимонний курд,
                карамелізовані яблука з ноткою кориці, покриття - вершковий
                кремчіз.
              </p>
              <p className="pb-4 text-xl font-medium text-themeGray-100">
                Умови зберігання
              </p>
              <p className="pb-6">
                СТРОК ПРИДАТНОСТІ: 3 доби
                <br />
                УМОВИ ЗБЕРІГАННЯ: при температурі від +2 до +6˚С
              </p>
              <p className="pb-4 text-xl font-medium text-themeGray-100">
                Строк виконання замовлення
              </p>
              <p className="pb-6">
                Замовлення виконується мінімум 2 дні, після замовлення з вами
                зв’яжеться менеджер для уточнення дати
              </p>
            </div>
          </div>
        </section>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default ProductCard;
