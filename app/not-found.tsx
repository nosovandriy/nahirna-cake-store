"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex h-full items-center justify-center">
        <h2 className=" text-[264px] font-[800px] leading-[264px]">4</h2>
        <Image
          src="/assets/404.png"
          alt="cheesecake"
          width={175}
          height={175}
        />
        <h2 className=" text-[264px] font-[800px] leading-[264px]">4</h2>
      </div>
      <h3 className="mb-10">Вибачте, такої сторінки не знайдено...</h3>
      <button
       className="primaryButton px-8"
        onClick={() => router.push("/")}
        >
        Повернутись на головну
      </button>
    </div>
  );
};

export default NotFound;
