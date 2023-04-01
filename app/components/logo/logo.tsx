import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  handleShowMobileMenu?: () => void;
};

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  const router = useRouter();

  return (
    <div className="relative h-[32px] w-[105px] tablet:h-[36px] tablet:w-[120px] laptop:h-[43px] laptop:w-[135px] desktop:w-[143px]">
    <Image
      src="/assets/logo.svg"
      alt="Nahirna-cake logo"
      fill
      className="cursor-pointer duration-300 hover:scale-110"
      onClick={() => router.push("/")}
    />
    </div>
  );
};
