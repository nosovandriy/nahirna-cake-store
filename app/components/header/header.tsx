"use client";

import Link from "next/link";
import Image from "next/image";

import { Logo } from "@logo";
import { MenuItems } from "./navigation/menuItems";
import { MobileMenu } from "@icons/mobile-menu";
import HeaderCartIcon from "./header-cart/header-cart";
import { CloseIcon } from "@icons/close";
import { iconContacts } from "../../contacts/default-contacts";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setShowMobileMenu } from "@redux/slices/navigationSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const showMobileMenu = useAppSelector(
    (state) => state.navigation.showMobileMenu
  );
  const handleShowMobileMenu = () => {
    dispatch(setShowMobileMenu(!showMobileMenu));
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      showMobileMenu
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  }, [showMobileMenu]);

  return (
    <header className="sticky top-0 z-[40] mb-6 bg-themeCaramel tablet:mb-10 laptop:static desktopHD:mb-14">
      <nav className="flex items-center justify-between py-3 laptop:py-[33px]">
        <div className="flex items-center">
          <div
            className="fill-themeGray-60 pr-5 laptop:hidden"
            onClick={handleShowMobileMenu}
          >
            <MobileMenu />
          </div>
          <div>
            <Logo />
          </div>
        </div>

        <ul className="hidden gap-8 laptop:flex desktopHD:gap-10">
          <MenuItems
            className={
              "border-b border-transparent hover:border-themeBrown-100"
            }
          />
        </ul>
        <HeaderCartIcon />
      </nav>
      <div
        className={
          showMobileMenu
            ? "fixed left-0 top-0 z-50 h-screen w-full laptop:hidden"
            : ""
        }
      >
        <nav
          className={
            showMobileMenu
              ? "fixed left-0 top-0 flex h-full w-full flex-col bg-themeCaramel px-5 duration-500 ease-in"
              : "fixed left-[-100%] top-0 duration-500 ease-in"
          }
        >
          <div className="mb-5">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div
                  className="fill-themeGray-60 pr-5 laptop:hidden"
                  onClick={handleShowMobileMenu}
                >
                  <CloseIcon />
                </div>
                <div className=" ">
                  <Logo />
                </div>
              </div>
              <div onClick={handleShowMobileMenu}>
                <HeaderCartIcon />
              </div>
            </div>
            <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
          </div>

          <div className="flex flex-grow flex-col items-center">
            <ul className="flex flex-col items-center">
              <MenuItems
                className={
                  "py-5 [&>*]:font-title [&>*]:text-[28px] [&>*]:text-themeGray-40"
                }
                onClick={handleShowMobileMenu}
              />
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Зв&apos;яжіться з нами</p>
            <div className="flex gap-5 pb-10">
              {iconContacts.map((iconContact, index) => (
                <Link
                  key={index}
                  href={iconContact.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="easy-in cursor-pointer duration-300 hover:scale-110"
                  title={iconContact.title}
                >
                  <Image
                    src={iconContact.icon}
                    alt="messanger icon"
                    width={32}
                    height={32}
                  />
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
    </header>
  );
};

export default Header;
