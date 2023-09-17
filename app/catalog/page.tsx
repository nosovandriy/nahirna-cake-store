import Delivery from "@home/delivery/delivery";
import CatalogItem from "./catalog-item/catalog-item";
import BreadCrumbs from "@breadcrumb/breadcrumbs";

const Catalog = () => {
  const isFullCatalog = true;

  return (
    <section>
      <BreadCrumbs />
      <CatalogItem isFullCatalog={isFullCatalog} />
      <Delivery />
    </section>
  );
};

export default Catalog;
