"use client";

import { SortIcon } from "@icons/sort";
import { setSortType } from "../../redux/slices/sortSlice";
import { useAppDispatch, useAppSelector } from "@type/ReduxHooks";
import { SortBy } from "@type/SortType";

const SortCatalog = () => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortCake.sortType);

  const handleChangeSortTitle = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value as SortBy;
    dispatch(setSortType(value));
  };

  return (
    <div className="flex items-center justify-start">
      <p className="hidden tablet:block">Сортувати за:</p>
      <div className="block tablet:hidden">
        <SortIcon />
      </div>
      <div className="relative">
        <select
          className="text-center tablet:text-left text-sm tablet:text-base cursor-pointer border border-transparent bg-themeCaramel px-1 tablet:px-4 py-2 pr-8 text-themeBrown-100 underline-offset-0 hover:border-transparent focus:border-transparent focus:outline-0 focus:ring-0"
          onChange={handleChangeSortTitle}
          value={sortType}
        >
          <option>{SortBy.popularity}</option>
          <option>{SortBy.title}</option>
          <option>{SortBy.priceAsc}</option>
          <option>{SortBy.priceDesc}</option>
        </select>
      </div>
    </div>
  );
};

export default SortCatalog;
