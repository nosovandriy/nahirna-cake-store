"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="my-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5 tablet:gap-8">
        <h2 className="text-[140px] font-[800px] leading-[100%] tablet:text-[264px] desktop:text-[264px]">
          4
        </h2>
        <div className="h-[100px] w-[100px] tablet:h-[175px] tablet:w-[175px]">
          <Image
            src="/assets/404.webp"
            alt="cheesecake"
            width={175}
            height={175}
            priority
            className=" animate-spinSlow"
          />
        </div>

        <h2 className="text-[140px] font-[800px] leading-[100%] tablet:text-[264px] desktop:text-[264px]">
          4
        </h2>
      </div>
      <h3 className="mb-8 text-base tablet:mb-10 tablet:text-lg">
        Вибачте, такої сторінки не знайдено...
      </h3>
      <a href={"/"} className="py-3">
        <button className="primaryButton px-8">
          Повернутись на головну
        </button>
      </a>
    </div>
  );
};

export default NotFoundPage;
