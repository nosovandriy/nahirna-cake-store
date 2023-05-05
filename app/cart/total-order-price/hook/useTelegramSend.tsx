import axios from "axios";

import { useAppSelector } from "@type/ReduxHooks";

const useTelegramSend = () => {
  const {
    items,
    totalPrice,
    deliveryPrice,
    clientName,
    clientPhone,
    payMethod,
    deliveryAddress,
    wishesInfo,
  } = useAppSelector((state) => state.cart);

  async function sendOrderData() {
    const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_ID;

    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const clientOrderData = () => {
      let newOrder = `<i><b>Нове замовлення</b></i>\n\n`;
      newOrder += `<b>Клієнт:</b> ${clientName}\n`;
      newOrder += `<b>Телефон:</b> ${clientPhone}\n`;
      newOrder += `<b>Вид оплати:</b> ${
        payMethod === "card-pay" ? "Оплата картою" : "Оплата готівкою"
      }\n`;
      newOrder += `<b>Доставка:</b> ${
        deliveryPrice === 100 ? "Так" : "Самовивіз"
      }\n`;
      {
        deliveryAddress &&
        (newOrder += `<b>Адреса доставки:</b> ${deliveryAddress}\n`);
      }
      newOrder += `<b>Додаткові побажання:</b> ${wishesInfo}\n`;
      newOrder += items.map((item) => {
        let cakeData = "";
        cakeData += `\n<b>Чізкейк:</b> ${item.title}\n`;
        cakeData += `<b>Кількість:</b> ${item.count} шт\n`;
        cakeData += `<b>Вага:</b> ${item.weight / 1000} кг\n`;
        cakeData += `<b>Ціна:</b> ${item.price} грн\n`;
        cakeData += `<b>Сума:</b> ${item.price * item.count} грн\n`;
        return cakeData;
      });
      newOrder += `\n<b>Загальна сума:</b> ${totalPrice + deliveryPrice} грн\n\n`;

      return newOrder;
    };

    try {
      await axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: clientOrderData(),
      });
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return { sendOrderData };
};

export default useTelegramSend;
