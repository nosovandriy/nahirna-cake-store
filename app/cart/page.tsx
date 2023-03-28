"use client";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";

import BreadCrumbs from "@breadcrumb/breadcrumbs";
import PopUpOrderDone from "@pop-up-order-done/pop-up-order-done";
import CartItem from "./cart-item/cart-item";
import OrderForm from "./order-form/order-form";
import TotalOrderPrice from "./total-order-price/total-order-price";
import EmptyCart from "./empty-cart/empty-cart";
import { DeleteIcon } from "@icons/delete";
import { clearItems } from "../redux/slices/cartSlice";

const Cart = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  return (
    <>
      <BreadCrumbs />
      {items.length > 0 ? (
        <div className="mt-10 grid grid-cols-12 gap-x-10">
          <div className="col-span-7 col-start-1">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="col-span-4 col-start-1">Корзина</h2>
              <div className="relative fill-themeGray-30">
                <div
                  className="peer cursor-pointer fill-themeGray-60 duration-500 hover:scale-110"
                  onClick={handleClearItems}
                >
                  <DeleteIcon />
                </div>
                <div className="absolute -top-8 left-1/2 hidden max-w-fit -translate-y-1/2 -translate-x-1/2 animate-fadeIn whitespace-nowrap rounded-lg bg-white p-[10px] peer-hover:block">
                  <p>Очистити корзину</p>
                </div>
              </div>
            </div>
            {items.map((item) => {
              return <CartItem key={item.uniqId} item={item} />;
            })}
            <OrderForm />
          </div>

          <TotalOrderPrice />
        </div>
      ) : (
        <EmptyCart />
      )}
      <PopUpOrderDone />
    </>
  );
};

export default Cart;
