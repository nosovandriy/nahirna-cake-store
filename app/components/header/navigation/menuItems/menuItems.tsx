import Link from "next/link";

interface NavItem {
  label: string;
  page: string;
}

const navItems: Array<NavItem> = [
  {
    label: "Про мене",
    page: "/#about",
  },
  {
    label: "Каталог",
    page: "catalog",
  },
  {
    label: "Відгуки",
    page: "/#testimonials",
  },
  {
    label: "Доставка",
    page: "/#delivery",
  },
  {
    label: "Контакти",
    page: "/#contacts",
  },
];

type Props = {
  className: string;
  onClick?: () => void;
};

export const MenuItems: React.FC<Props> = ({ className, onClick }) => {
  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={className}>
          <a href={item.page} onClick={onClick}>
            {item.label}
          </a>
        </li>
      ))}
    </>
  );
};
