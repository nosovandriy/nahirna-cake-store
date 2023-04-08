"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center my-auto">
      <div className="flex items-center justify-center gap-5 tablet:gap-8">
        <h2 className="text-[140px] tablet:text-[264px] font-[800px] leading-[100%] desktop:text-[264px]">
          4
        </h2>
        <div className="w-[100px] h-[100px] tablet:h-[175px] tablet:w-[175px]">
          <Image
            src="/assets/404.webp"
            alt="cheesecake"
            width={175}
            height={175}
            className=" animate-spinSlow"
          />
        </div>

        <h2 className="text-[140px] tablet:text-[264px] font-[800px] leading-[100%] desktop:text-[264px]">
          4
        </h2>
      </div>
      <h3 className="mb-8 tablet:mb-10 text-base tablet:text-lg">Вибачте, такої сторінки не знайдено...</h3>
      <button className="primaryButton px-8" onClick={() => router.push("/")}>
        Повернутись на головну
      </button>
    </div>
  );
};

export default NotFoundPage;
