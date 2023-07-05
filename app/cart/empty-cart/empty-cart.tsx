import Link from "next/link";

import MayLikeProducts from "@may-like/may-like";

const EmptyCart = () => {
  return (
    <>
      <div className="my-[120px] flex h-full flex-col items-center justify-center gap-10 pb-10">
        <h2>Твоя корзина порожня</h2>

        <Link href={"/catalog"}>
          <button
            className="primaryButton"
            aria-label="Перейти в каталог товарів"
          >
            Перейти в каталог
          </button>
        </Link>
      </div>
      <MayLikeProducts />
    </>
  );
};

export default EmptyCart;
