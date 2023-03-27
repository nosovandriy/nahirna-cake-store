"use client";

import { useAppSelector } from "@type/ReduxHooks";
import axios from "axios";

const useTelegramSend = () => {
  const {
    items,
    totalPrice,
    cakeDelivery,
    clientName,
    clientPhone,
    payMethod,
    deliveryAddress,
  } = useAppSelector((state) => state.cart);

  async function sendOrderData() {
    const TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let newOrder = `<i><b>Нове замовлення</b></i>\n\n`;
    newOrder += items.map((item) => {
      let cakeData = "";
      cakeData += `<b>Чізкейк:</b> ${item.title}\n`;
      cakeData += `<b>Кількість:</b> ${item.count} шт\n`;
      cakeData += `<b>Вага:</b> ${item.weight / 1000} кг\n`;
      cakeData += `<b>Ціна:</b> ${item.price} грн\n\n`;
      return cakeData;
    });
    newOrder += `<b>Загальна сума:</b> ${totalPrice} грн\n\n`;
    newOrder += `<b>Клієнт:</b> ${clientName}\n`;
    newOrder += `<b>Телефон:</b> ${clientPhone}\n`;
    newOrder += `<b>Вид оплати:</b> ${
      payMethod === "card-pay" ? "Оплата картою" : "Оплата готівкою"
    }\n`;
    newOrder += `<b>Доставка:</b> ${
      cakeDelivery === 100 ? "Так" : "Самовивіз"
    }\n`;
    newOrder += `${
      deliveryAddress ? `<b>Адреса доставки:</b> ${deliveryAddress}` : ""
    }`;

    try {
      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: newOrder,
      });
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return { sendOrderData };
};

export default useTelegramSend;
