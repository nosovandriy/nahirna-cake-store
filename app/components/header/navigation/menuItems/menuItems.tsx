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
        <Link href={"/#about"}>Про мене</Link>
      </li>
      <li className={className}>
        <Link href={"/catalog"}>Каталог</Link>
      </li>
      <li className={className}>
        <Link href={"/#testimonials"}>Відгуки</Link>
      </li>
      <li className={className}>
        <Link href={"/#delivery"}>Доставка</Link>
      </li>
      <li
        className={`${className} font-text text-lg text-themeGray-100`}
        onClick={handleContactsOpen}
      >
        Контакти
      </li>
    </>
  );
};
