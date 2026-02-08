import Banner from "./components/banner";
import FeaturedProducts from "./components/featured_products";
import Hero from "./components/hero";
import QualitySection from "./components/quality_section";

export default function Home() {
  return (
    <div>
      <Hero />
      <QualitySection />
      <FeaturedProducts />
      <Banner />
    </div>
  );
}
