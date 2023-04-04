"use client";

import { MenuItems } from "@header/navigation/menuItems";

import Link from "next/link";
import { iconContacts } from "../../contacts/default-contacts";
import FooterLogo from "./footer-logo/footer-logo";

const Header = () => {
  return (
    <footer>
      <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
      <div className="flex flex-col py-[30px] laptop:flex-row laptop:justify-between">
        <div className="mb-12 self-center">
          <FooterLogo />
        </div>
        <div className="tablet:flex tablet:justify-between">
          <ul className="mb-12 grid h-[135px] grid-cols-2 gap-y-3 tablet:mb-0 tablet:gap-x-12 laptop:gap-x-16 desktop:gap-x-32">
            <MenuItems
              className={
                "justify-self-center hover:underline tablet:justify-self-start"
              }
            />
          </ul>
          <div className="flex flex-col items-center tablet:items-start tablet:justify-between laptop:ml-[120px] desktop:ml-[200px] desktopHD:ml-[320px]">
            <p className="mb-4 hidden text-lg text-themeGray-100 tablet:block">
              Соціальні мережі
            </p>
            <div className="mb-6 flex gap-5">
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

            <div className="flex gap-1 self-center text-center text-sm">
              <p className="text-xs text-themeGray-30">
                © NahirnaCake 2023 Всі права захищені.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
