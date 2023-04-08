import Link from "next/link";

import { setIsContactsOpen } from "../../../../redux/slices/popUpSlice";
import { useAppDispatch } from "@type/ReduxHooks";
import { setShowMobileMenu } from "@redux/slices/navigationSlice";

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
        <a href={"/#about"} className="py-3">Про мене</a>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <Link href={"/catalog"} className="py-3">Каталог</Link>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <a href={"/#testimonials"} className="py-3">Відгуки</a>
      </li>
      <li className={className} onClick={handleHideMobileMenu}>
        <a href={"/#delivery"} className="py-3">Доставка</a>
      </li>
      <li className={`${className}`} onClick={handleContactsOpen}>
        <p className="text-lg text-themeGray-100">Контакти</p>
      </li>
    </>
  );
};
