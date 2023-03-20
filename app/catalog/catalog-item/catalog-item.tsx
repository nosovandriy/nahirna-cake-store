"use client";

import Image from "next/image";
import { useCatalog } from "../hooks/useCatalog";
import Link from "next/link";
import SkeletonCard from "../skeleton/skeleton";
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "@provider/context-provider";
import { SortBy } from "@typeSortType";

type Props = {
  isFullCatalog?: boolean;
};

const CatalogItem: React.FC<Props> = ({ isFullCatalog }) => {
  const { catalog } = useCatalog(isFullCatalog);
  console.log(isFullCatalog);

  const [isLoading, setIsLoading] = useState(true);
  const { sortTitle, setSortTitle } = useContext(ContextProvider);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleChangeSortTitle = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value as SortBy;
    setSortTitle(value);
  };

  return (
    <section className="mb-[120px] flex flex-col">
      <div className="flex justify-between">
        <h2 className="items-center justify-center">Каталог</h2>
        {isFullCatalog && (
          <div className="flex items-center justify-start">
            <p>Сортувати за:</p>
            <div className="relative">
              <select
                className="border border-transparent bg-themeCaramel px-4 py-2 pr-8 underline-offset-0 hover:border-transparent  focus:border-transparent focus:outline-0 focus:ring-0"
                onChange={handleChangeSortTitle}
                value={sortTitle}
              >
                <option>{SortBy.popularity}</option>
                <option>{SortBy.title}</option>
                <option>{SortBy.priceAsc}</option>
                <option>{SortBy.priceDesc}</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className=" mt-8 -ml-4 mr-4 grid grid-cols-3 gap-x-10 gap-y-14">
        {isLoading && isFullCatalog
          ? [...new Array(6)].map((_, index) => <SkeletonCard key={index} />)
          : catalog.map((cake) => (
              <Link
                href={`/catalog/${cake.titleEng}`}
                key={cake.id}
                className="cursor-pointer"
              >
                <div className="flex h-[421px] max-h-[421px] w-[440px] max-w-[440px] flex-col items-center justify-center border border-transparent hover:border-themeBrown-20">
                  <div>
                    <Image
                      src={cake.imageTitle}
                      alt={cake.description}
                      width={408}
                      height={300}
                      style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                      className="mb-4 h-[300px]"
                    />
                    <h3 className="mb-2">{cake.title}</h3>
                    <p className="text-2xl font-medium text-themeBrown-100">
                      {`від ${(cake.price * cake.weight[0]).toFixed()} грн`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      {!isFullCatalog && (
        <Link href={"/catalog"} className="mx-auto mt-10">
          <button className="secondaryButton h-[42px] text-center">
            Більше
          </button>
        </Link>
      )}
    </section>
  );
};

export default CatalogItem;
