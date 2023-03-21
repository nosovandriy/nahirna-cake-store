import { CheckIcon } from "@icons/check";
import { InfoIcon } from "@icons/info";

const Delivery = () => {
  return (
    <div className="flex">
      <div>
        <h2 className="mb-10">Оплата та доставка</h2>
        <div className="mb-8">
          <h4 className="mb-6">Спосіб оплати</h4>
          <div>
            <CheckIcon />
            <p className="mb-4">Карткою онлайн</p>
          </div>
          <div>
            <CheckIcon />
            <p className="mb-4">Готівка при отриманні</p>
            <InfoIcon />
          </div>
        </div>
        <div>
          <h4 className="mb-6">Спосіб доставки</h4>
          <div>
            <CheckIcon />
            <p className="mb-4">Самовивіз (з 9:00 до 20:30)</p>
          </div>
          <div>
            <CheckIcon />
            <p className="mb-4">Кур’єром по Києві (зелена зона)</p>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Delivery;
