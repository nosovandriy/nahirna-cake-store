import Link from "next/link";

import {
  setIsContactsOpen,
  setShowMobileMenu,
} from "@redux/slices/showUpSlice";
import { useAppDispatch } from "@type/ReduxHooks";

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleContactsOpen = () => {
    dispatch(setIsContactsOpen(true));
    dispatch(setShowMobileMenu(false));
  };

  const handleHideMobileMenu = () => {
    dispatch(setShowMobileMenu(false));
  };

  return (
    <>
      <li className={className} onClick={handleHideMobileMenu}>
        <Link href={"/#about"} className="py-3">
          Про мене
        </Link>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <Link href={"/catalog"} className="py-3">
          Каталог
        </Link>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <Link href={"/#testimonials"} className="py-3">
          Відгуки
        </Link>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <Link href={"/#delivery"} className="scroll-smooth py-3">
          Доставка
        </Link>
      </li>
      <li className={`${className}`} onClick={handleContactsOpen}>
        <p className="text-lg text-themeGray-100">Контакти</p>
      </li>
    </>
  );
};
