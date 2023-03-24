"use client";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setIsOrderConfirm } from "../../redux/slices/popUpSlice";

const TotalOrderPrice = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, items } = useAppSelector((state) => state.cart);

  const handleOrderConfirm = () => {
    dispatch(setIsOrderConfirm(true));
  };

  return (
    <div className="sticky top-6 col-span-4 col-start-9 h-fit rounded-2xl border border-solid border-themeBrown-50 p-6">
      <h2 className="mb-8 text-themeGray-100">Загалом</h2>
      <div className="mb-6 flex justify-between">
        <p className=" text-lg text-themeGray-40">{totalPrice} шт. на сумму</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice} грн`}
        </p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">Вартість доставки</p>
        <p className="text-2xl font-medium text-themeBrown-100">0 грн</p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">До оплати</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice} грн`}
        </p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="flex flex-col justify-between gap-6">
        <button className="primaryButton" onClick={handleOrderConfirm}>
          Підтверджую замовлення
        </button>
        <button className="secondaryButton">Продовжити покупку</button>
      </div>
    </div>
  );
};

export default TotalOrderPrice;
