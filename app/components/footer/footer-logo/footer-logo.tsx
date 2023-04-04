import { setShowMobileMenu } from "@redux/slices/navigationSlice";
import { useAppDispatch } from "@type/ReduxHooks";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FooterLogo = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogoClick = () => {
    dispatch(setShowMobileMenu(false));
    router.push("/");
  };

  return (
    <div className="relative h-[55px] w-[184px]">
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

export default FooterLogo;
