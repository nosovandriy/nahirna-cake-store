import { Add, Remove } from "@icons/add-remove";
import React from "react";

const ProductQuantity = () => {
  return (
    <div className="flex justify-between gap-2 rounded-full border border-themeBrown-20 py-1 px-2 text-base font-normal text-themeGray-100">
      <Remove />
      <p className="text-themeGray-100">{"111"}</p>
      <div>
        <Add />
      </div>
    </div>
  );
};

export default ProductQuantity;
