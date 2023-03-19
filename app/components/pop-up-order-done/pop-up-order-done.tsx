"use client";

import { useContext } from "react";
import Image from "next/image";
import classNames from "classnames";
import { PopUpOverlay } from "@pop-up-overlay/pop-up-overlay";
import { CloseIcon } from "@icons/close";
import { DeleteIcon } from "@icons/delete";
import { Add, Remove } from "@icons/add-remove";
import { ContextProvider } from "../../context-provider/context-provider";
import { iconContacts } from "../../contacts";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const PopUpOrderDone = () => {
  const { isOrderConfirm, setIsOrderConfirm } = useContext(ContextProvider);
  const router = useRouter();

  const handleConfirmOrder = () => {
    setIsOrderConfirm(false);
    router.push("/");
  };

  return (
    <PopUpOverlay
      isOrderConfirm={isOrderConfirm}
      setIsOrderConfirm={setIsOrderConfirm}
    >
      {isOrderConfirm && (
        <div className="flex h-[331px] w-[544px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-8">
          <h2>Дякуємо за замовленя</h2>
          <p className=" text-lg">З вами зв’яжуться у найближчий час</p>
          <button
            className="primaryButton px-8"
            onClick={handleConfirmOrder}
          >
            Повернутись на головну
          </button>
          <div className="flex gap-5">
            {iconContacts.map((iconContact, index) => (
              <Link
                key={index}
                href={iconContact.link}
                target="_blank"
                rel="noreferrer noopener"
                className="easy-in cursor-pointer duration-300 hover:scale-110"
                title={iconContact.title}
              >
                {iconContact.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </PopUpOverlay>
  );
};