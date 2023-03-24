"use client";

import { useState } from "react";

const OrderForm = () => {
  const [cakeDelivery, setCakeDelivery] = useState(false);

  return (
    <form action="#" method="post">
      <fieldset className="mb-10">
        <div className="mb-10 flex gap-4 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">1</span>
          </div>
          <h3>Дані замовника</h3>
        </div>
        <div className="relative mb-10">
          <input
            id="name"
            type="text"
            className="formInput peer placeholder-transparent"
            placeholder="Ім’я та прізвище"
          />
          <label htmlFor="name" className="formLabel cursor-text">
            Ім’я та прізвище
          </label>
        </div>
        <div className="relative">
          <input
            id="phone"
            type="tel"
            className="formInput peer"
            placeholder="+38(099)999-99-99"
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
        <div className="mb-10 flex gap-4 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">2</span>
          </div>
          <h3 className="">Спосіб оплати</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <input
              id="radioButton-cash"
              name="push-notifications-pay"
              type="radio"
              className="radioButton cursor-pointer"
              defaultChecked
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
              name="push-notifications-pay"
              type="radio"
              className="radioButton cursor-pointer"
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
        <div className="mb-10 flex gap-4 items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-50">
            <span className="text-xl font-medium text-white">3</span>
          </div>
          <h3 className="">Спосіб доставки</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-max items-center">
            <input
              id="radioButton-pickup"
              name="push-notifications-pickup"
              type="radio"
              className="radioButton cursor-pointer"
              defaultChecked
              onClick={() => setCakeDelivery(false)}
            />
            <label
              htmlFor="radioButton-pickup"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
              onClick={() => setCakeDelivery(false)}
            >
              Самовивіз - Тарнавського, 11 (з 9:00 до 20:00)
            </label>
          </div>
          <div className="flex w-max items-center">
            <input
              id="radioButton-taxi"
              name="push-notifications-pickup"
              type="radio"
              className="radioButton cursor-pointer"
              onClick={() => setCakeDelivery(true)}
            />
            <label
              htmlFor="radioButton-taxi"
              className="ml-2 cursor-pointer font-text text-themeGray-60"
              onClick={() => setCakeDelivery(true)}
            >
              Кур’єром по Тернополю
            </label>
          </div>
        </div>
      </fieldset>
      {cakeDelivery && (
        <fieldset className="mb-10">
          <div className="mb-10 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-20">
              <span className="text-xl font-medium text-white">4</span>
            </div>
            <h3 className="">Адреса доставки</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative mb-10">
              <input
                id="delivery"
                type="text"
                className="formInput peer placeholder-transparent"
                placeholder="Вулиця та номер квартири"
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
