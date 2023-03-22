import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@typeReduxHooks";
import { setIsContactsOpen } from "../../../../redux/slices/popUpSlice";

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

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
        className={`${className} font-text text-lg text-themeGray-100`}
        onClick={handleContactsOpen}
      >
        Контакти
      </li>
    </>
  );
};
