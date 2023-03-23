"use client";

import React, { useState } from "react";
import Image from "next/image";

import BreadCrumbs from "@breadcrumb/breadcrumbs";
import EmptyCart from "./empty-cart/empty-cart";
import PopUpOrderDone from "@pop-up-order-done/pop-up-order-done";
import { setIsOrderConfirm } from "../redux/slices/popUpSlice";
import { useAppDispatch } from "@type/ReduxHooks";
import { Add, Remove } from "@icons/add-remove";
import { DeleteIcon } from "@icons/delete";
// import { EditIcon } from "@icons/edit";

const Cart = () => {
  const [cakeDelivery, setCakeDelivery] = useState(false);

  const dispatch = useAppDispatch();

  const handleOrderConfirm = () => {
    dispatch(setIsOrderConfirm(true));
  };

  return (
    <>
      <BreadCrumbs />
      <EmptyCart />
      <div className="mt-10 grid grid-cols-12 gap-x-10">
        <div className="col-span-7 col-start-1">
          <h2 className="col-span-4 col-start-1 mb-10">Корзина</h2>
          <div>
            <div className="col-span-7 col-start-1 mb-10 flex gap-6">
              <Image
                className="col-span-2 col-start-1 max-h-[135px]"
                src="/assets/catalogTest.png"
                alt="cheesecake ternopil Nahirna"
                width={184}
                height={135}
              />
              <div className="w-full">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center">
                    <h3 className="mr-4 leading-6">Шоколадний фереро</h3>
                    <button className="activeSizeButton mr-3 py-1 px-4">
                      1,2 кг
                    </button>
                    {/* <EditIcon /> */}
                  </div>
                  <div className="cursor-pointer fill-themeGray-60">
                    <DeleteIcon />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Ціна</p>
                    <p className="text-2xl font-medium text-themeBrown-100">
                      780 грн
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg">Кількість</p>
                    <div className="flex justify-between gap-3 rounded-[4px] border border-themeBrown-20 py-1 px-3 text-base font-normal text-themeGray-100">
                      <Remove />
                      <p className="text-themeGray-100">1</p>
                      <div>
                        <Add />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg">Сума</p>
                  <p className="text-2xl font-medium text-themeBrown-100">
                    1560 грн
                  </p>
                </div>
              </div>
            </div>
            <hr className="mx-auto mb-10 h-px w-full bg-themeBrown-20"></hr>
          </div>
          <form action="#" method="post">
            <fieldset className="mb-10">
              <div className="mb-10 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-20">
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
                  className="formLabel cursor-text peer-placeholder-shown:text-opacity-0 peer-focus:text-themeGray-30"
                >
                  Мобільний номер
                </label>
              </div>
            </fieldset>
            <fieldset className="mb-10">
              <div className="mb-10 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-20">
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
              <div className="mb-10 flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-themeBrown-20">
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
        </div>

        <div className="sticky top-6 col-span-4 col-start-9 h-fit rounded-2xl border border-solid border-themeBrown-50 p-6">
          <h2 className="mb-8 text-themeGray-100">Загалом</h2>
          <div className="mb-6 flex justify-between">
            <p className=" text-lg text-themeGray-40">4 товари на сумму</p>
            <p className="text-2xl font-medium text-themeBrown-100">2800 грн</p>
          </div>
          <div className="mb-4 flex justify-between">
            <p className=" text-lg text-themeGray-40">Вартість доставки</p>
            <p className="text-2xl font-medium text-themeBrown-100">0 грн</p>
          </div>
          <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
          <div className="mb-4 flex justify-between">
            <p className=" text-lg text-themeGray-40">До оплати</p>
            <p className="text-2xl font-medium text-themeBrown-100">2800 грн</p>
          </div>
          <hr className="mx-auto mb-8 h-px w-full bg-themeBrown-20"></hr>
          <div className="flex flex-col justify-between gap-6">
            <button className="primaryButton" onClick={handleOrderConfirm}>
              Підтверджую замовлення
            </button>
            <button className="secondaryButton">Продовжити покупку</button>
          </div>
        </div>
      </div>
      <PopUpOrderDone />
    </>
  );
};

export default Cart;
