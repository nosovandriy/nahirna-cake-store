import { ContextProvider } from "@provider/context-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  const { isContactsOpen, setIsContactsOpen } = useContext(ContextProvider);
  const router = useRouter();

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
        onClick={() => setIsContactsOpen(!isContactsOpen)}
      >
        Контакти
      </li>
    </>
  );
};
