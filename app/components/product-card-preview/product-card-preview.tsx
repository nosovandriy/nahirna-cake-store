import Link from "next/link";
import Image from "next/image";
import { Catalog } from "@type/Catalog";

type Props = {
  product: Catalog;
};

const ProductCardPreview: React.FC<Props> = ({ product }) => {
  return (
    <Link
      href={`/catalog/${product.id}`}
      key={product.id}
      className="cursor-pointer"
    >
      <div className="relative flex max-w-[408px] flex-col items-center justify-center hover:animate-pulse">
        <div>
          <Image
            src={product.imageTitle}
            alt={`${product.id} cheesecake`}
            width={408}
            height={300}
            className="mb-4"
          />
          <h3 className="mb-2 self-start">{product.title}</h3>
          <h4 className="self-start text-themeBrown-100">
            {`${(product.price * product.weights[0]).toFixed()} грн`}
          </h4>
          <div className="absolute inset-[-4%] border border-transparent hover:border-themeBrown-20"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardPreview;
