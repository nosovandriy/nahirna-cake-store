import { useCatalog } from "@cataloghooks/useCatalog";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Catalog } from "@type/Catalog";

type Props = {
  selectedId?: string;
};

const MayLikeProducts: React.FC<Props> = ({ selectedId }) => {
  const { catalog } = useCatalog();
  const filterSelectedId = catalog.filter((cake) => cake.id !== selectedId);

  const [randomArray, setRandomArray] = useState<Catalog[]>([]);

  useEffect(() => {
    const tempArray: Catalog[] = [];
    while (tempArray.length < 3) {
      const randomIndex = Math.floor(Math.random() * filterSelectedId.length);
      if (!tempArray.includes(filterSelectedId[randomIndex])) {
        tempArray.push(filterSelectedId[randomIndex]);
      }
    }
    setRandomArray(tempArray);
  }, []);

  console.log(randomArray);

  return (
    <div>
      <h2 className="mb-10">Вам може сподобатись</h2>
      <div className=" mt-8 -ml-4 mr-4 grid grid-cols-3 gap-x-10 gap-y-14 mb-[120px]">
        {randomArray.map((cake) => (
          <Link
            href={`/catalog/${cake.id}`}
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
                  {`${(cake.price * cake.weights[0]).toFixed()} грн`}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MayLikeProducts;
