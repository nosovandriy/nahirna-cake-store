"use client";

import Image from "next/image";
import Link from "next/link";

import { Add, Remove } from "@icons/add-remove";
import { CloseIcon } from "@icons/close";
import { ProductCart } from "@type/ProductCart";
import { useAppDispatch } from "@type/ReduxHooks";
import {
  addItemInTheCart,
  decreaseItem,
  removeItem,
} from "@redux/slices/cartSlice";

type Props = {
  item: ProductCart;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { id, uniqId, title, price, weight, imgURL, count } = item;
  const dispatch = useAppDispatch();

  const handleIncreaseItem = () => {
    dispatch(addItemInTheCart({ id, weight }));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItem({ uniqId }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ id, weight }));
  };

  return (
    <>
      <div className="mb-10 flex flex-col tablet:grid tablet:grid-cols-[35%_65%]">
        <Link
          href={`/catalog/${id}`}
          className="mb-4 cursor-pointer tablet:mb-0"
        >
          <Image
            src={imgURL}
            alt="cheesecake ternopil Nahirna"
            width={600}
            height={450}
          />
        </Link>

        <div className="w-full tablet:pl-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center">
              <Link href={`/catalog/${id}`} className="cursor-pointer">
                <h3 className="mr-4 text-xl">{title}</h3>
              </Link>
            </div>
            <div
              className="cursor-pointer fill-themeGray-40 transition duration-500 hover:rotate-180"
              onClick={handleRemoveItem}
            >
              <CloseIcon />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-lg">Вага</p>
              <button className="activeSizeButton cursor-default">
                {`${weight / 1000} кг`}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-lg">Ціна</p>
              <p className="text-xl font-medium text-themeBrown-100">
                {`${price} грн`}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <p className="text-lg">Кількість</p>
              <div className="flex justify-between gap-2 rounded-full border border-themeBrown-20 px-2 py-1 text-base font-normal text-themeGray-100">
                <button
                  onClick={handleDecreaseItem}
                  disabled={count === 1}
                  className={`${
                    count === 1 && `cursor-default fill-themeGray-20`
                  }`}
                >
                  <Remove />
                </button>
                <p className="text-themeGray-100">{count}</p>
                <button onClick={handleIncreaseItem}>
                  <Add />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg">Сума</p>
            <p className="text-xl font-medium text-themeBrown-100">
              {`${price * count} грн`}
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-auto mb-10 h-px w-full bg-themeBrown-20 tablet:mb-14"></hr>
    </>
  );
};

export default CartItem;
