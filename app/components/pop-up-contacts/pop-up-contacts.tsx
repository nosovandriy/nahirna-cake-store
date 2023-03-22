"use client";

import Link from "next/link";

import PopUpOverlay from "@pop-up-overlay/pop-up-overlay";
import { iconContacts } from "../../contacts";
import { CloseIcon } from "@icons/close";
import { useAppDispatch, useAppSelector } from "@typeReduxHooks";
import {  setIsContactsOpen as setIsContactsOpenAction } from "../../redux/slices/popUpSlice";

const PopUpContacts = () => {
  const dispatch = useAppDispatch();
  const isContactsOpen = useAppSelector((state) => state.popUp.isContactsOpen);

  const handleIsContactsOpen = () => {
    dispatch(setIsContactsOpenAction(false));
  };

  return (
    <PopUpOverlay
      isOpenModalAction={isContactsOpen}
      setIsOpenModalAction={(isOpen: boolean) => dispatch(setIsContactsOpenAction(isOpen))}

    >
      {isContactsOpen && (
        <div className="relative flex h-[270px] w-[544px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-8">
          <div
            className="absolute top-7 right-7 cursor-pointer fill-themeGray-60 transition duration-500 hover:rotate-180"
            onClick={handleIsContactsOpen}
          >
            <CloseIcon />
          </div>
          <h2>Контакти</h2>
          <Link
            href={`tel:+380961682394`}
            className=" text-lg duration-200 hover:scale-105 hover:underline"
          >
            +380961682394
          </Link>

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

export default PopUpContacts;
