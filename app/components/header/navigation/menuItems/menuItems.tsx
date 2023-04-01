import Link from "next/link";

import { setIsContactsOpen } from "../../../../redux/slices/popUpSlice";
import { useAppDispatch } from "@type/ReduxHooks";

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleContactsOpen = () => {
    dispatch(setIsContactsOpen(true));
  };

  return (
    <>
      <li className={className}>
        <a href={"/#about"}>Про мене</a>
      </li>
      <li className={className}>
        <Link href={"/catalog"}>Каталог</Link>
      </li>
      <li className={className}>
        <a href={"/#testimonials"}>Відгуки</a>
      </li>
      <li className={className}>
        <a href={"/#delivery"}>Доставка</a>
      </li>
      <li
        className={`${className}`}
        onClick={handleContactsOpen}
      >
        <p className="text-lg text-themeGray-100">Контакти</p>
      </li>
    </>
  );
};
