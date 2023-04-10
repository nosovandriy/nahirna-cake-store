"use client"

import { useEffect, useState } from "react";

import ProductCardCarousel from "@catalog/[cakeId]/carousel/carousel";
import BreadCrumbs from "@breadcrumb/breadcrumbs";
import SkeletonGallery from "@catalog/catalog-item/skeleton-gallery/skeleton-gallery";
import { useCatalog } from "@catalog/hooks/useCatalog";
import { useAppDispatch } from "@type/ReduxHooks";
import { Add, Remove } from "@icons/add-remove";
import { addItem } from "@redux/slices/cartSlice";
import { ProductCart } from "@type/ProductCart";
import NotFoundPage from "../../not-found";
import MayLikeProducts from "@may-like/may-like";
import AddToCartButton from "./button/button";

const ProductCard = ({ params }: { params: { cakeId: string } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productCount, setProductCount] = useState(1);
  const dispatch = useAppDispatch();

  const { catalog } = useCatalog();
  const selectedCard = catalog.find((item) => item.id === params.cakeId);
  const [activeWeight, setActiveWeight] = useState(selectedCard?.weights[0]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleAddProductToCart = () => {
    if (selectedCard && activeWeight) {
      const item: ProductCart = {
        id: selectedCard.id,
        uniqId: crypto.randomUUID(),
        title: selectedCard.title,
        price: Number((selectedCard.price * activeWeight).toFixed()),
        weight: activeWeight,
        imgURL: selectedCard.imageTitle,
        count: productCount,
      };
      dispatch(addItem(item));
    }

    setProductCount(1);
  };

  const handleSetProductWeight = (index: number) => {
    setActiveWeight(index);
  };

  return (
    <>
      {selectedCard ? (
        <>
          <section className="sectionMarginBottom">
            <BreadCrumbs cakeTitle={selectedCard.title} />
            <div className="gap-x-8 tabletXL:grid tabletXL:grid-cols-2 laptop:gap-x-5 desktopHD:gap-x-10">
              <div className="mb-4 tablet:mb-8">
                <h2 className="mb-4 text-themeGray-100 tabletXL:hidden">
                  {selectedCard.title}
                </h2>
                {isLoading ? (
                  <SkeletonGallery />
                ) : (
                  <ProductCardCarousel
                    images={selectedCard.images}
                    imagesAlt={selectedCard.id}
                  />
                )}
              </div>
              <div className="">
                <h2 className="mb-4 hidden text-themeGray-100 tabletXL:block">
                  {selectedCard.title}
                </h2>
                <p className="mb-6 text-2xl font-medium text-themeBrown-100 tablet:mb-8">
                  {activeWeight &&
                    `${(selectedCard.price * activeWeight).toFixed()} грн`}
                </p>
                <div className="mb-8 flex gap-x-4">
                  {selectedCard.weights.map((weight: number, index: number) => (
                    <button
                      key={index}
                      className={`${
                        activeWeight === weight
                          ? "activeSizeButton text-sm"
                          : "notActiveSizeButton text-sm"
                      }`}
                      onClick={() => handleSetProductWeight(weight)}
                    >
                      {`${weight / 1000} кг`}
                    </button>
                  ))}
                </div>
                <div>
                  <p className="mb-8">{selectedCard.description}</p>
                </div>
                <div className="mb-8 flex items-center gap-6">
                  <p className="text-sm">Кількість</p>
                  <div className="flex justify-between gap-2 rounded-full border border-themeBrown-20 px-2 py-1 text-base font-normal text-themeGray-100">
                    <button
                      onClick={() => setProductCount((prev) => (prev -= 1))}
                      disabled={productCount === 1}
                      className={`${productCount < 2 && `fill-themeGray-20`}`}
                    >
                      <Remove />
                    </button>
                    <p className="text-themeGray-100">{productCount}</p>
                    <button
                      onClick={() => setProductCount((prev) => (prev += 1))}
                    >
                      <Add />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center tabletXL:mb-10 tabletXL:justify-start">
                  <AddToCartButton
                    handleAddProductToCart={handleAddProductToCart}
                  />
                </div>

                <p className="pb-4 text-xl font-medium text-themeGray-100">
                  Склад
                </p>
                <p className="pb-6">{selectedCard.ingredients}</p>
                <p className="pb-4 text-xl font-medium text-themeGray-100">
                  Умови зберігання
                </p>
                <p className="pb-6">
                  СТРОК ПРИДАТНОСТІ: 3 доби
                  <br />
                  УМОВИ ЗБЕРІГАННЯ: при температурі від +2 до +6˚С
                </p>
                <p className="pb-4 text-xl font-medium text-themeGray-100">
                  Термін виконання замовлення
                </p>
                <p className="pb-6">
                  Замовлення виконується 1-3 дні. Після оформлення замовлення з
                  вами зв&apos;яжеться менеджер для уточнення дати.
                </p>
              </div>
            </div>
          </section>
          <MayLikeProducts selectedId={params.cakeId} />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default ProductCard;
