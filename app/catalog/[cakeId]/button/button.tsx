import { useEffect, useState } from "react";
import { FaShoppingCart, FaGift } from "react-icons/fa";

import "./button-style.css";
import { CheckIcon } from "@icons/check";

type Props = {
  handleAddProductToCart: () => void;
};

const AddToCartButton: React.FC<Props> = ({ handleAddProductToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    handleAddProductToCart();
    setIsAdded(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAdded(false);
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [isAdded]);

  return (
    <>
      <div className="fixed bottom-0 z-10 h-[98px] w-full bg-themeCaramel text-white tabletXL:hidden"></div>
      <button
        className={`cart-button fixed bottom-5 z-20 text-white tabletXL:static ${
          isAdded ? "clicked" : ""
        }`}
        onClick={handleClick}
        disabled={isAdded}
        aria-label="Додати товар в кошик"
      >
        <span className="add-to-cart">Додати в кошик</span>
        <span className="added ml-3 flex gap-3">
          Додано
          <div className="fill-themeCaramel">
            <CheckIcon />
          </div>
        </span>
        <i className="fas fa-shopping-cart">
          <FaShoppingCart />
        </i>
        <i className="fas fa-box">
          <FaGift />
        </i>
      </button>
    </>
  );
};

export default AddToCartButton;
