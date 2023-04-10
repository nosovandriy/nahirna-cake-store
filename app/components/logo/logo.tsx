import Image from "next/image";
import { useRouter } from "next/navigation";

import { setShowMobileMenu } from "@redux/slices/showUpSlice";
import { useAppDispatch } from "@type/ReduxHooks";

type Props = {
  className: string;
};

export const Logo: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogoClick = () => {
    dispatch(setShowMobileMenu(false));
    router.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className={className}>
      <Image
        src="/assets/logo.svg"
        alt="Nahirna-cake logo"
        fill
        className="cursor-pointer duration-300 hover:scale-110"
        onClick={handleLogoClick}
      />
    </div>
  );
};
