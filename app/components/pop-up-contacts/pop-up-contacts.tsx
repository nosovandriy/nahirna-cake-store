"use client";

import { useContext } from "react";
import { PopUpOverlay } from "@pop-up-overlay/pop-up-overlay";
import { ContextProvider } from "../../context-provider/context-provider";
import { iconContacts } from "../../contacts";
import Link from "next/link";
import { CloseIcon } from "@icons/close";

const PopUpContacts = () => {
  const { isContactsOpen, setIsContactsOpen } = useContext(ContextProvider);

  return (
    <PopUpOverlay
      isOpenModal={isContactsOpen}
      setIsOpenModal={setIsContactsOpen}
    >
      {isContactsOpen && (
        <div className="relative flex h-[270px] w-[544px] flex-col items-center justify-center gap-8 rounded-[20px] bg-themeCaramel p-8">
          <div
            className="absolute top-7 right-7 cursor-pointer fill-themeGray-60 transition duration-500 hover:rotate-180"
            onClick={() => setIsContactsOpen(false)}
          >
            <CloseIcon />
          </div>
          <h2>Контакти</h2>
          <Link href={`tel:+380961682394`} className=" text-lg hover:underline hover:scale-105 duration-200">
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
