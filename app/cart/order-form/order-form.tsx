"use client";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { deliveryPrice, getClientAddress, getClientName, getClientPhone, getPayMethod } from "../../redux/slices/cartSlice";

const OrderForm = () => {
  const dispatch = useAppDispatch();
  const {
    clientName,
    clientPhone,
    payMethod,
    cakeDelivery,
    deliveryAddress,
  } = useAppSelector((state) => state.cart);

  const handleCakeDelivery = (isDelivery: boolean) => {
    dispatch(deliveryPrice(isDelivery));
  };

  const handleGetClientName = (name: string) => {
    dispatch(getClientName(name));
  };

  const handleGetClientPhone = (phone: string) => {
    dispatch(getClientPhone(phone));
  };

  const handleGetPayMethod = (pay: string) => {
    dispatch(getPayMethod(pay));
  };

  const handleGetClientAddress = (address: string) => {
    dispatch(getClientAddress(address));
  };

  return (
    <form action="#" method="post">
      <fieldset className="mb-10">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">1</span>
          </div>
          <h3>Дані замовника</h3>
        </div>
        <div className="relative mb-10">
          <input
            id="name"
            type="text"
            name="name"
            className="formInput peer placeholder-transparent"
            placeholder="Ім’я та прізвище"
            value={clientName}
            onChange={(event) => handleGetClientName(event.target.value)}
          />
          <label htmlFor="name" className="formLabel cursor-text">
            Ім’я та прізвище
          </label>
        </div>
        <div className="relative">
          <input
            id="phone"
            type="tel"
            name="phone"
            className="formInput peer"
            placeholder="+38(099)999-99-99"
            value={clientPhone}
            onChange={(event) => handleGetClientPhone(event.target.value)}
          />
          <label
            htmlFor="phone"
            className="formLabel cursor-text peer-placeholder-shown:text-opacity-0 peer-focus:text-themeBrown-100"
          >
            Мобільний номер
          </label>
        </div>
      </fieldset>
      <fieldset className="mb-10">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">2</span>
          </div>
          <h3 className="">Спосіб оплати</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <input
              id="radioButton-cash"
              name="variant-pay"
              type="radio"
              className="radioButton cursor-pointer"
              value="card-pay"
              defaultChecked={payMethod === "card-pay"}
              onChange={(event) => handleGetPayMethod(event.target.value)}
            />
            <label
              htmlFor="radioButton-cash"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
            >
              Карткою онлайн
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="radioButton-card"
              name="variant-pay"
              type="radio"
              className="radioButton cursor-pointer"
              value="cash-pay"
              defaultChecked={payMethod === "cash-pay"}
              onChange={(event) => handleGetPayMethod(event.target.value)}
            />
            <label
              htmlFor="radioButton-card"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
            >
              Готівка при отриманні (передплата 100 грн)
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="mb-10">
        <div className="mb-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">3</span>
          </div>
          <h3 className="">Спосіб доставки</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-max items-center">
            <input
              id="radioButton-pickup"
              name="delivery"
              type="radio"
              className="radioButton cursor-pointer"
              defaultChecked
              onClick={() => handleCakeDelivery(false)}
            />
            <label
              htmlFor="radioButton-pickup"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
              onClick={() => handleCakeDelivery(false)}
            >
              Самовивіз - Тарнавського, 11 (з 9:00 до 20:00)
            </label>
          </div>
          <div className="flex w-max items-center">
            <input
              id="radioButton-taxi"
              name="delivery"
              type="radio"
              className="radioButton cursor-pointer"
              onClick={() => handleCakeDelivery(true)}
            />
            <label
              htmlFor="radioButton-taxi"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
              onClick={() => handleCakeDelivery(true)}
            >
              Кур’єром по Тернополю
            </label>
          </div>
        </div>
      </fieldset>
      {cakeDelivery > 0 && (
        <fieldset className="mb-10">
          <div className="mb-10 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-20">
              <span className="text-xl font-medium text-white">4</span>
            </div>
            <h3>Адреса доставки</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative mb-10">
              <input
                id="delivery"
                type="text"
                name="address-delivery"
                className="formInput peer placeholder-transparent"
                placeholder="Вулиця та номер квартири"
                value={deliveryAddress}
                onChange={(event) => handleGetClientAddress(event.target.value)}
              />
              <label htmlFor="delivery" className="formLabel cursor-text">
                Вулиця та номер квартири
              </label>
            </div>
          </div>
        </fieldset>
      )}
    </form>
  );
};

export default OrderForm;
