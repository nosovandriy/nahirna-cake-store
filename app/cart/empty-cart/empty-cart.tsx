"use client";

import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 my-auto pb-10">
      <h2>Твоя корзина порожня</h2>

      <Link href={"/catalog"}>
        <button className="primaryButton">Перейти в каталог </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
