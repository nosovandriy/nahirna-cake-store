"use client";

import { useEffect } from "react";

import { MenuItems } from "./navigation/menuItems";
import { MobileMenu } from "@icons/mobile-menu";
import HeaderCartIcon from "./header-cart/header-cart";
import { CloseIcon } from "@icons/close";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { setShowMobileMenu } from "@redux/slices/showUpSlice";
import SocialNetworkIcons from "@social-network-icons/social-network-icons";
import { Logo } from "@logo/logo";

const Header = () => {
  const dispatch = useAppDispatch();
  const showMobileMenu = useAppSelector((state) => state.showUp.showMobileMenu);
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
            <Logo
              className={
                "relative h-[32px] w-[105px] tablet:h-[36px] tablet:w-[120px] laptop:h-[43px] laptop:w-[135px] desktopHD:w-[143px]"
              }
            />
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
              : "fixed left-[-100%] top-0 flex h-full flex-col duration-500 ease-in"
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
                  <Logo
                    className={
                      "relative h-[32px] w-[105px] tablet:h-[36px] tablet:w-[120px] laptop:h-[43px] laptop:w-[135px] desktopHD:w-[143px]"
                    }
                  />
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
              <SocialNetworkIcons />
            </div>
          </div>
        </nav>
      </div>
      <hr className="mx-auto h-px w-full bg-themeBrown-20"></hr>
    </header>
  );
};

export default Header;
