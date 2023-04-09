"use client";

import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import {
  setClientName,
  setClientPhone,
  setPayMethod,
  setDeliveryPrice,
  setClientAddress,
} from "../../redux/slices/cartSlice";

const OrderForm = () => {
  const dispatch = useAppDispatch();
  const { clientName, clientPhone, payMethod, deliveryPrice, deliveryAddress } =
    useAppSelector((state) => state.cart);

  const handleClientName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setClientName(event.target.value));
  };

  const handleClientPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setClientPhone(event.target.value));
  };

  const handlePayMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPayMethod(event.target.value));
  };

  const handleCakeDelivery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeliveryPrice(Number(event.target.value)));
  };

  const handleClientAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setClientAddress(event.target.value));
  };

  return (
    <>
      <h2 className="mb-4 tablet:mb-10">Оформлення замовлення</h2>
      <form>
        <fieldset className="mb-10">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
              <span className="text-xl font-medium text-white">1</span>
            </div>
            <h3 className="text-2xl">Дані замовника</h3>
          </div>
          <div className="relative mb-10">
            <input
              id="name"
              type="text"
              name="name"
              className="formInput peer placeholder-transparent"
              placeholder="Ім’я та прізвище"
              value={clientName}
              onChange={handleClientName}
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
              onChange={handleClientPhone}
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
            <h3 className="text-2xl">Спосіб оплати</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center">
              <input
                id="radioButton-cash"
                name="variant-pay"
                type="radio"
                className="radioButton cursor-pointer"
                value="card-pay"
                defaultChecked={payMethod === "card-pay"}
                onChange={handlePayMethod}
              />
              <label
                htmlFor="radioButton-cash"
                className="ml-2 cursor-pointer font-text text-themeGray-60"
              >
                Карткою онлайн
              </label>
            </div>
            <div className="flex w-fit items-center">
              <input
                id="radioButton-card"
                name="variant-pay"
                type="radio"
                className="radioButton cursor-pointer"
                value="cash-pay"
                defaultChecked={payMethod === "cash-pay"}
                onChange={handlePayMethod}
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
            <h3 className="text-2xl">Спосіб доставки</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center">
              <input
                id="radioButton-pickup"
                name="delivery"
                type="radio"
                className="radioButton cursor-pointer"
                value={0}
                defaultChecked={deliveryPrice === 0}
                onChange={handleCakeDelivery}
              />
              <label
                htmlFor="radioButton-pickup"
                className="ml-2 cursor-pointer font-text text-themeGray-60"
              >
                Самовивіз - вул. Тарнавського, 11
              </label>
            </div>
            <div className="flex w-fit items-center">
              <input
                id="radioButton-delivery"
                name="delivery"
                type="radio"
                className="radioButton cursor-pointer"
                value={100}
                defaultChecked={deliveryPrice === 100}
                onChange={handleCakeDelivery}
              />
              <label
                htmlFor="radioButton-delivery"
                className="ml-2 cursor-pointer font-text text-themeGray-60"
              >
                Кур’єром по Тернополю
              </label>
            </div>
          </div>
        </fieldset>
        {deliveryPrice > 0 && (
          <fieldset className="mb-10">
          <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
                <span className="text-xl font-medium text-white">4</span>
              </div>
              <h3 className="text-2xl">Адреса доставки</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  id="delivery"
                  type="text"
                  name="address-delivery"
                  className="formInput peer placeholder-transparent"
                  placeholder="Вулиця та номер квартири"
                  value={deliveryAddress}
                  onChange={handleClientAddress}
                />
                <label htmlFor="delivery" className="formLabel cursor-text">
                  Вулиця та номер квартири
                </label>
              </div>
            </div>
          </fieldset>
        )}
      </form>
    </>
  );
};

export default OrderForm;
