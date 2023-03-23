import Image from "next/image";

import { CheckIcon } from "@icons/check";
import { InfoIcon } from "@icons/info";
import Hint from "@hint/hint";

const Delivery = () => {
  return (
    <div
      id="delivery"
      className="mb-[120px] flex scroll-mt-24 items-center justify-between gap-10"
    >
      <div>
        <h2 className="mb-10">Оплата та доставка</h2>
        <div className="mb-8">
          <h4 className="mb-6">Спосіб оплати</h4>
          <div className="flex gap-2">
            <CheckIcon />
            <p className="mb-4">Карткою онлайн</p>
          </div>
          <div className="flex gap-2">
            <CheckIcon />
            <p className="mb-4">Готівка при отриманні</p>
            <Hint />
          </div>
        </div>
        <div>
          <h4 className="mb-6">Спосіб доставки</h4>
          <div className="flex gap-2">
            <CheckIcon />
            <p className="mb-4">Самовивіз (з 9:00 до 20:30)</p>
          </div>
          <div className="flex gap-2">
            <CheckIcon />
            <p className="mb-4">Кур’єром по Тернополю</p>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/map.jpg"
          alt="cheesecake-Nahirna map location"
          width={856}
          height={566}
          priority
        />
      </div>
    </div>
  );
};

export default Delivery;
