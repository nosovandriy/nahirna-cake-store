"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonCard from "../skeleton/skeleton";
import { useCatalog } from "../hooks/useCatalog";
import SortCatalog from "@catalog/sort-catalog/sort-catalog";
import ProductCardPreview from "@product-card-preview/product-card-preview";

type Props = {
  isFullCatalog?: boolean;
};

const CatalogItem: React.FC<Props> = ({ isFullCatalog }) => {
  const { catalog } = useCatalog(isFullCatalog);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  return (
    <section className="sectionMarginBottom flex flex-col">
      <div className="flex items-start justify-between">
        <h2 className="mb-6 items-center justify-center tablet:mb-8 laptop:mb-10">
          Каталог
        </h2>
        {isFullCatalog && <SortCatalog />}
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 tablet:gap-x-[34px] tablet:gap-y-8 tabletXL:grid-cols-3 laptop:gap-x-5 laptop:gap-y-10 desktop:gap-y-14 desktopHD:gap-x-10">
        {isLoading && isFullCatalog
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : catalog.map((product) => (
              <ProductCardPreview product={product} key={product.id} />
            ))}
      </div>
      {!isFullCatalog && (
        <Link
          href={"/catalog"}
          className="mx-auto mt-6 tablet:mt-8 desktop:mt-10"
        >
          <button className="secondaryButton h-[42px] text-center">
            Більше
          </button>
        </Link>
      )}
    </section>
  );
};

export default CatalogItem;
