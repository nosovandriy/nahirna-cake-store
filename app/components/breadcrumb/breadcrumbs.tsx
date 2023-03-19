"use client";

// import * as React from "react";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Home } from "@icons/home";
import { ArrowRightSmall } from "@icons/arrow-right-small";

import {
  useRouter,
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation";

type Props = {
  cakeTitle?: string;
};

const BreadCrumbs: React.FC<Props> = ({ cakeTitle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnamesArray = pathname.split("/").filter((item) => item);
  const pageRoute: string = pathnamesArray[0];
  const isFirstLevelPathName = pathnamesArray.length === 1;

  const segment = useSelectedLayoutSegments();
  console.log(segment);

  const pagePathName = (): string => {
    const pageTitle: { [key: string]: string } = {
      catalog: "Каталог",
      cart: "Корзина",
      default: "Каталог",
    };

    return pageTitle[pageRoute] || pageTitle.default;
  };

  return (
    <div role="presentation" className="mb-10 no-underline">
      <MuiBreadcrumbs aria-label="breadcrumb" separator={<ArrowRightSmall />}>
        <div onClick={() => router.push("/")}>
          <div className="flex fill-themeBrown-100 duration-300 hover:scale-105">
            <Home />
          </div>
        </div>
        {isFirstLevelPathName ? (
          <div className="cursor-auto text-themeGray-40">{pagePathName()}</div>
        ) : (
          <div onClick={() => router.push(`/${pageRoute}`)}>
            <p className="text-themeBrown-100 duration-300 hover:scale-105">
              {pagePathName()}
            </p>
          </div>
        )}
        {cakeTitle && <div className="cursor-auto font-text">{cakeTitle}</div>}
      </MuiBreadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
