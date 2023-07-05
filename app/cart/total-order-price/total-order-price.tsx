import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import useTelegramSend from "./hook/useTelegramSend";
import { setIsOrderConfirm } from "@redux/slices/showUpSlice";
import { clearAllData } from "@redux/slices/cartSlice";

const TotalOrderPrice = () => {
  const { sendOrderData } = useTelegramSend();
  const dispatch = useAppDispatch();
  const { items, totalPrice, deliveryPrice, clientName, clientPhone } =
    useAppSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const handleOrderConfirm = () => {
    dispatch(setIsOrderConfirm(true));
    dispatch(clearAllData());
    sendOrderData();
  };

  const isAccessOrderButton =
    clientName.length >= 2 && clientPhone.length >= 10;

  return (
    <div className="Tablet:border-solid sticky top-6 mt-10 h-fit border-themeBrown-50 tablet:mb-20 tablet:rounded-2xl tablet:border tablet:p-6 laptop:ml-5 laptop:mt-0 desktop:ml-14 desktopHD:ml-28">
      <h2 className="mb-8 text-themeGray-100">Загалом</h2>
      <div className="mb-6 flex justify-between">
        <p className=" text-lg text-themeGray-40">{totalCount} шт. на суму</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice} грн`}
        </p>
      </div>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">Вартість доставки</p>
        <p className="text-2xl font-medium text-themeBrown-100">{`${deliveryPrice} грн`}</p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="mb-4 flex justify-between">
        <p className=" text-lg text-themeGray-40">До оплати</p>
        <p className="text-2xl font-medium text-themeBrown-100">
          {`${totalPrice + deliveryPrice} грн`}
        </p>
      </div>
      <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
      <div className="flex flex-col justify-between gap-6">
        <button
          type="submit"
          className={`primaryButton ${
            !isAccessOrderButton &&
            "bg-themeBrown-20 px-5 hover:bg-themeBrown-20 active:transform-none"
          }`}
          onClick={handleOrderConfirm}
          disabled={!isAccessOrderButton}
          aria-label="Підтвердити замовлення"
        >
          Підтвердити замовлення
        </button>
        <Link href={"/catalog"}>
          <button
            className="secondaryButton mb-20 w-full tablet:mb-0"
            aria-label="Продовжити покупку"
          >
            Продовжити покупку
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TotalOrderPrice;
