"use client";

import Link from "next/link";

import PopUpOverlay from "@pop-up-overlay/pop-up-overlay";
import { CloseIcon } from "@icons/close";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setIsContactsOpen as setIsContactsOpenAction } from "../../redux/slices/showUpSlice";
import SocialNetworkIcons from "@social-network-icons/social-network-icons";

const PopUpContacts = () => {
  const dispatch = useAppDispatch();
  const isContactsOpen = useAppSelector((state) => state.showUp.isContactsOpen);

  const handleIsContactsOpen = () => {
    dispatch(setIsContactsOpenAction(false));
  };

  return (
    <PopUpOverlay
      isOpenModal={isContactsOpen}
      setIsOpenModal={(isOpen: boolean) =>
        dispatch(setIsContactsOpenAction(isOpen))
      }
    >
      {isContactsOpen && (
        <div className="relative flex h-[270px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-8 tablet:w-[544px]">
          <div
            className="absolute right-7 top-7 cursor-pointer fill-themeGray-60 duration-500 hover:rotate-180"
            onClick={handleIsContactsOpen}
          >
            <CloseIcon />
          </div>
          <h2>Контакти</h2>
          <Link
            href={`tel:+380961682394`}
            className="text-lg duration-200 hover:scale-105 hover:underline"
          >
            +380961682394
          </Link>

          <div className="flex gap-5">
            <SocialNetworkIcons />
          </div>
        </div>
      )}
    </PopUpOverlay>
  );
};

export default PopUpContacts;
