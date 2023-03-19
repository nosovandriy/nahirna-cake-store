import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  handleShowMobileMenu?: () => void;
};

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="cursor-pointer duration-300 hover:scale-110"
      // onClick={handleShowMobileMenu}
    >
      <Image
        src="/assets/logo.svg"
        alt="Nahirna-cake logo"
        width={145}
        height={45}
        priority
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};
