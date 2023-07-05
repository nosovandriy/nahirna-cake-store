"use client";

import { useRouter } from "next/navigation";

import PopUpOverlay from "@pop-up-overlay/pop-up-overlay";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setIsOrderConfirm as setIsOrderConfirmAction } from "@redux/slices/showUpSlice";
import { clearAllData } from "@redux/slices/cartSlice";
import SocialNetworkIcons from "@social-network-icons/social-network-icons";

const PopUpOrderDone = () => {
  const dispatch = useAppDispatch();
  const isOrderConfirm = useAppSelector((state) => state.showUp.isOrderConfirm);

  const router = useRouter();

  const handleConfirmOrder = () => {
    router.push("/");
    window.scrollTo(0, 0);
    dispatch(clearAllData());
    dispatch(setIsOrderConfirmAction(false));
  };

  return (
    <PopUpOverlay
      isOpenModal={isOrderConfirm}
      setIsOpenModal={(isOpen: boolean) =>
        dispatch(setIsOrderConfirmAction(isOpen))
      }
    >
      {isOrderConfirm && (
        <div className="flex h-[331px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-6 tablet:w-[544px]">
          <h2>Дякуємо за замовлення</h2>
          <p className="text-base tablet:text-lg">
            З вами зв&apos;яжуться у найближчий час
          </p>
          <button
            className="primaryButton px-8"
            onClick={handleConfirmOrder}
            aria-label="Повернутись на головну сторінку"
          >
            Повернутись на головну
          </button>
          <div className="flex gap-5">
            <SocialNetworkIcons />
          </div>
        </div>
      )}
    </PopUpOverlay>
  );
};

export default PopUpOrderDone;
