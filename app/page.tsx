import CatalogPreview from "@catalog-preview/catalog-preview";
import ProductCard from "./catalog/[cakeId]/page";
import HeroSection from "@hero/hero";

export default function Home() {
  return (
    <>
    <HeroSection />
      <CatalogPreview />
    </>
  );
}
