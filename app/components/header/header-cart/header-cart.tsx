"use client";

import { ShoppingCart } from "@icons/shopping-cart";
import { setLocalStorageData } from "@redux/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import getDataFromLocalStorage from "@utils/getDataFromLocalStorage";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeaderCartIcon = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  useEffect(() => {
    const data = getDataFromLocalStorage();
    dispatch(setLocalStorageData(data));
  }, [dispatch]);

  return (
    <div className="ml-[120px] flex cursor-pointer fill-themeGray-60 duration-300 hover:scale-110 hover:fill-themeBrown-100">
      <Link href={"/cart"}>
        <div className="flex items-center rounded-full bg-themeBrown-100 py-2 px-4">
          <p className="text-xs text-themeCaramel">{`${totalPrice} грн`}</p>
          <hr className="mx-[10px] h-6 w-px bg-themeBrown-20" />
          <div
            className={`mr-2 fill-themeCaramel ${
              items.length > 0 && "animate-pulse"
            }`}
          >
            <ShoppingCart />
          </div>
          <p className="text-xs text-themeCaramel">{totalCount}</p>
        </div>
      </Link>
    </div>
  );
};

export default HeaderCartIcon;
// function dispatch(arg0: { payload: undefined; type: "cart/loadDataFromLS"; }) {
//   throw new Error("Function not implemented.");
// }

