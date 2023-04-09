"use client";

import Image from "next/image";

import { CheckIcon } from "@icons/check";
import Hint from "@home/delivery/hint/hint";

const Delivery = () => {
  return (
    <div
      id="delivery"
      className="sectionMarginBottom flex scroll-mt-24 flex-col laptop:items-center justify-between gap-10 tablet:gap-0 laptop:gap-5 desktopHD:gap-x-10 laptop:flex-row"
    >
      <div className="laptop:shrink-0">
        <h2 className="mb-6 tablet:mb-8 laptop:mb-10">Оплата та доставка</h2>
        <div className="tablet:grid tablet:grid-cols-2 laptop:flex laptop:flex-col">
          <div className="mb-4">
            <div>
              <h4 className="mb-6">Спосіб оплати</h4>
              <div className="flex gap-2">
                <CheckIcon />
                <p className="mb-4">Карткою онлайн</p>
              </div>
              <div className="flex gap-2">
                <CheckIcon />
                <p className="mb-4">Готівка при отриманні</p>
                <div className="hidden tablet:block">
                  <Hint />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-6">Спосіб доставки</h4>
            <div className="flex gap-2">
              <CheckIcon />
              <p className="mb-4">Самовивіз (вул. Тарнавського 11)</p>
            </div>
            <div className="flex gap-2">
              <CheckIcon />
              <p className="mb-4">Кур’єром по Тернополю</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:self-center">
        <Image
          src="/assets/map.webp"
          alt="cheesecake-Nahirna map location"
          width={943}
          height={600}
        />
      </div>
    </div>
  );
};

export default Delivery;
