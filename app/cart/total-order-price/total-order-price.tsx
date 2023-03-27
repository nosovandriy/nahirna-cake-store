"use client";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setIsOrderConfirm } from "../../redux/slices/popUpSlice";
import { getClearAllData } from "@redux/slices/cartSlice";
import useTelegramSend from "./hook/useTelegramSend";

const TotalOrderPrice = () => {
  const { sendOrderData } = useTelegramSend();
  const dispatch = useAppDispatch();
  const { items, totalPrice, cakeDelivery } = useAppSelector(
    (state) => state.cart
  );

  console.log(items);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const handleOrderConfirm = () => {
    sendOrderData();
    dispatch(setIsOrderConfirm(true));
    dispatch(getClearAllData());
  };

  return (
    <div className="sticky top-6 col-span-4 col-start-9 h-fit rounded-2xl border border-solid border-themeBrown-50 p-6">
      <h2 className="mb-8 text-themeGray-100">Загалом</h2>
      <div className="mb-6 flex justify-between">
        <p className=" text-lg text-themeGray-40">{totalCount} шт. на сумму</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice} грн`}
        </p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">Вартість доставки</p>
        <p className="text-2xl font-medium text-themeBrown-100">{`${cakeDelivery} грн`}</p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">До оплати</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice + cakeDelivery} грн`}
        </p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="flex flex-col justify-between gap-6">
        <button
          type="submit"
          className="primaryButton"
          onClick={handleOrderConfirm}
        >
          Підтвердити замовлення
        </button>
        <button className="secondaryButton">Продовжити покупку</button>
      </div>
    </div>
  );
};

export default TotalOrderPrice;
