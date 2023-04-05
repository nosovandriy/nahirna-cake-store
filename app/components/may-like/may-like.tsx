import { useCatalog } from "@cataloghooks/useCatalog";
import React, { useEffect, useState } from "react";
import { Catalog } from "@type/Catalog";
import ProductCardPreview from "@product-card-preview/product-card-preview";

type Props = {
  selectedId?: string;
};

const MayLikeProducts: React.FC<Props> = ({ selectedId }) => {
  const { catalog } = useCatalog();
  const filterSelectedId = catalog.filter((cake) => cake.id !== selectedId);

  const [randomArray, setRandomArray] = useState<Catalog[]>([]);
  const [quantity, setQuantity] = useState(3);

  const handleChangeCardQuantity = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 1024) {
      setQuantity(2);
    } else {
      setQuantity(3);
    }
  };

  useEffect(() => {
    handleChangeCardQuantity();
    window.addEventListener("resize", handleChangeCardQuantity);

    return () => {
      window.removeEventListener("resize", handleChangeCardQuantity);
    };
  }, []);

  const getRandomProducts = () => {
    const tempArray: Catalog[] = [];
    while (tempArray.length < quantity) {
      const randomIndex = Math.floor(Math.random() * filterSelectedId.length);
      if (!tempArray.includes(filterSelectedId[randomIndex])) {
        tempArray.push(filterSelectedId[randomIndex]);
      }
    }
    setRandomArray(tempArray);
  };

  useEffect(() => {
    getRandomProducts();
  }, [quantity]);

  return (
    <div className="sectionMarginBottom">
      <h2 className="mb-10">Вам може сподобатись</h2>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 tablet:gap-y-8 laptop:grid-cols-3 laptop:gap-y-10 desktop:gap-y-14 desktopHD:gap-x-10">
        {randomArray.map((product) => (
          <ProductCardPreview product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MayLikeProducts;
