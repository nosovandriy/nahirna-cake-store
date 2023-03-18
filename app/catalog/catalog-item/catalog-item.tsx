"use client";

import Image from "next/image";
import { useCatalog } from "../hooks/useCatalog";
import Link from "next/link";

type Props = {
  isFullCatalog?: boolean;
};

const CatalogItem: React.FC<Props> = ({ isFullCatalog }) => {
  const { catalog } = useCatalog(isFullCatalog);

  return (
    <section className="mb-[120px] flex flex-col">
      <h2 className="mb-10">Каталог</h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-14">
        {catalog.map((cake) => (
          <Link
            href={`/catalog/${cake.titleEng}`}
            key={cake.id}
            className="cursor-pointer"
          >
            <div className=" flex max-h-[421px] h-[421px] max-w-[440px] w-[440px] flex-col items-center justify-center border border-transparent hover:border-themeBrown-20">
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
