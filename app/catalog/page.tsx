import CatalogItem from "./catalog-item/catalog-item";
import BreadCrumbs from "@breadcrumb/breadcrumbs";

const Catalog = () => {
  const isFullCatalog = true;

  return (
    <section>
      <BreadCrumbs />
      <CatalogItem isFullCatalog={isFullCatalog} />
    </section>
  );
};

export default Catalog;
