import { InfoIcon } from "@icons/info";

const Hint = () => {
  return (
    <div className="relative fill-themeGray-30">
      <div className="peer">
        <InfoIcon />
      </div>

      <div className="absolute bottom-[16px] left-8 hidden h-[152px] w-[328px] animate-fadeIn bg-white p-4 peer-hover:block">
        <p>
          При оплаті готівкою, сума передплати становить 100 грн. Після
          замовлення з вами зв&apos;яжеться менеджер для уточнення даних по
          замовленню.
        </p>
      </div>
    </div>
  );
};

export default Hint;
