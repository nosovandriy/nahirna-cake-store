import HeroSection from "@hero/hero";
import AboutSection from "@about/about";
import CatalogPreview from "@/catalog-preview/catalog-preview";
import Delivery from "@delivery/delivery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CatalogPreview />
      <Delivery />
    </>
  );
}
