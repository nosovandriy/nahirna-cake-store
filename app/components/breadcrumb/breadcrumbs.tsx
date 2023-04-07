"use client";

import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { Home } from "@icons/home";
import { ArrowRightSmall } from "@icons/arrow-right-small";

import { useRouter, usePathname } from "next/navigation";

type Props = {
  cakeTitle?: string;
};

const BreadCrumbs: React.FC<Props> = ({ cakeTitle }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnamesArray = pathname.split("/").filter((item) => item);
  const pageRoute: string = pathnamesArray[0];
  const isFirstLevelPathName = pathnamesArray.length === 1;

  const pagePathName = (): string => {
    const pageTitle: { [key: string]: string } = {
      catalog: "Каталог",
      cart: "Корзина",
      default: "Каталог",
    };

    return pageTitle[pageRoute] || pageTitle.default;
  };

  return (
    <div
      role="presentation"
      className="mb-6 no-underline tablet:mb-8 laptop:mb-8 desktop:mb-10"
    >
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
            <p className="text-sm text-themeBrown-100 duration-300 hover:scale-105 tablet:text-base">
              {pagePathName()}
            </p>
          </div>
        )}
        {cakeTitle && (
          <div className="cursor-auto font-text text-sm tablet:text-base">
            {cakeTitle}
          </div>
        )}
      </MuiBreadcrumbs>
    </div>
  );
};

export default BreadCrumbs;
