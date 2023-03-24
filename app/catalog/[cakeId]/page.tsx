"use client";

import { useEffect, useState } from "react";

import { Add, Remove } from "@icons/add-remove";
import ProductCardCarousel from "@catalog/[cakeId]/carousel/carousel";
import { CheckIcon } from "@icons/check";
import BreadCrumbs from "@breadcrumb/breadcrumbs";
import NotFoundPage from "@404/404";
import { useCatalog } from "@catalog/hooks/useCatalog";
import SkeletonGallery from "@catalog/catalog-item/skeleton-gallery/skeleton-gallery";
import { useAppDispatch } from "@type/ReduxHooks";
import { addItem } from "../../redux/slices/cartSlice";
import { Catalog } from "@type/Catalog";
import { ProductCart } from "@typeProductCart";

const ProductCard = ({ params }: { params: { cakeId: string } }) => {
  const [addToCart, setAddToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productAmount, setProductAmount] = useState(1);
  const dispatch = useAppDispatch();

  const { catalog } = useCatalog();
  const selectedCard = catalog.find((item) => item.id === params.cakeId);
  const [activeWeight, setActiveWeight] = useState(selectedCard?.weights[0]);
  console.log(productAmount);


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAddToCart(false);
    }, 2000);
  }, [addToCart]);

  const handleAddProductToCart = () => {
    if (selectedCard && activeWeight) {
      const item: ProductCart = {
        id: selectedCard.id,
        title: selectedCard.title,
        price: selectedCard.price * activeWeight,
        weight: activeWeight,
        imgURL: selectedCard.imageTitle,
        count: productAmount,
      };
      dispatch(addItem(item));
    }

    setAddToCart(true);
  };

  const handleSetProductWeight = (index: number) => {
    setActiveWeight(index);
  };
  console.log(activeWeight);

  return (
    <>
      {selectedCard ? (
        <section className="relative">
          {addToCart && (
            <div className="absolute top-0 z-50 flex h-14 w-full animate-fadeIn items-center justify-center gap-4 bg-themeBrown-100">
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
                  imagesAlt={selectedCard.id}
                />
              )}
            </div>
            <div className="col-span-6 col-start-7 mb-[120px]">
              <h2 className="mb-6 text-themeGray-100">{selectedCard.title}</h2>
              <p className="mb-8 text-2xl font-medium text-themeBrown-100">
                {activeWeight &&
                  `${(selectedCard.price * activeWeight).toFixed()} грн`}
              </p>
              <div className="mb-8 flex gap-4">
                {selectedCard.weights.map((weight, index) => (
                  <button
                    key={index}
                    className={`${
                      activeWeight === weight
                        ? "activeSizeButton"
                        : "notActiveSizeButton"
                    }`}
                    onClick={() => handleSetProductWeight(weight)}
                  >
                    {`${weight / 1000} кг`}
                  </button>
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
                  <button
                    onClick={() => setProductAmount((prev) => prev -= 1)}
                    disabled={productAmount === 1}
                    className={`${productAmount < 2 && `fill-themeGray-20`}`}
                  >
                    <Remove />
                  </button>
                  <p className="text-themeGray-100">{productAmount}</p>
                  <button onClick={() => setProductAmount(prev => prev += 1)}>
                    <Add />
                  </button>
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
