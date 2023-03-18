"use client";

import CatalogItem from "./catalog-item/catalog-item";

// import BreadCrumbs from "@breadcrumb/breadcrumbs";
// import { Check } from "@icons/check";
// import { Sort } from "./sort/sort";

const Catalog = () => {
  const isFullCatalog = true;

  return (
    <section>
      {/* <BreadCrumbs /> */}
      {/* <Sort /> */}
      <CatalogItem isFullCatalog={isFullCatalog} />
    </section>
  );
};

export default Catalog;
