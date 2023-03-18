import Image from "next/image";

type Props = {
  handleShowMobileMenu?: () => void;
};

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  return (
    <a href="/" className="cursor-pointer hover:scale-110 duration-300" onClick={handleShowMobileMenu}>
      <Image
        src="/assets/logo.svg"
        alt="Nahirna-cake logo"
        width={145}
        height={45}
        priority
        style={{ width: 'auto', height: 'auto' }}
      />
    </a>
  );
};
