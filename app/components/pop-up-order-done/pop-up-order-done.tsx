"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import PopUpOverlay from "@pop-up-overlay/pop-up-overlay";
import { iconContacts } from "../../contacts";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setIsOrderConfirm as setIsOrderConfirmAction } from "../../redux/slices/popUpSlice";

const PopUpOrderDone = () => {
  const dispatch = useAppDispatch();
  const isOrderConfirm = useAppSelector(
    (state) => state.popUp.isOrderConfirm
  );

  const router = useRouter();

  const handleConfirmOrder = () => {
    dispatch(setIsOrderConfirmAction(false));
    router.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <PopUpOverlay
      isOpenModal={isOrderConfirm}
      setIsOpenModal={(isOpen: boolean) =>
        dispatch(setIsOrderConfirmAction(isOpen))
      }
    >
      {isOrderConfirm && (
        <div className="flex h-[331px] w-[544px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-8">
          <h2>Дякуємо за замовленя</h2>
          <p className=" text-lg">З вами зв’яжуться у найближчий час</p>
          <button className="primaryButton px-8" onClick={handleConfirmOrder}>
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

export default PopUpOrderDone;
