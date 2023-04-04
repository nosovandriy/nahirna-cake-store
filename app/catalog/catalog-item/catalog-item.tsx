"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SkeletonCard from "../skeleton/skeleton";
import { useCatalog } from "../hooks/useCatalog";
import SortCatalog from "@catalogsort-catalog/sort-catalog";

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
      <div className="flex justify-between">
        <h2 className="mb-6 items-center justify-center tablet:mb-8 laptop:mb-10">
          Каталог
        </h2>
        {isFullCatalog && <SortCatalog />}
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 tablet:gap-y-8 laptop:grid-cols-3 laptop:gap-y-10 desktop:gap-y-14">
        {isLoading && isFullCatalog
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : catalog.map((cake) => (
              <Link
                href={`/catalog/${cake.id}`}
                key={cake.id}
                className="cursor-pointer"
              >
                <div className="relative flex flex-col items-center justify-center hover:animate-pulse">
                  {/* <div className="absolute inset-[-4%] border border-transparent hover:border-themeBrown-20"></div> */}
                  <Image
                    src={cake.imageTitle}
                    alt={`${cake.id} cheesecake`}
                    width={500}
                    height={400}
                    className=" tablet:mb-4"
                  />
                  <h3 className="mb-2 self-start">{cake.title}</h3>
                  <h4 className="self-start text-themeBrown-100">
                    {`${(cake.price * cake.weights[0]).toFixed()} грн`}
                  </h4>
                </div>
              </Link>
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
