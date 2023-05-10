import CarouselTestimonials from "./carousel-testimonials/carousel-testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 sectionMarginBottom">
      <h2 className="mb-6 tablet:mb-8 desktop:mb-10">Відгуки</h2>
      <CarouselTestimonials />
    </section>
  );
};

export default Testimonials;
