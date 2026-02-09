import Banner from "@/lib/components/banner";
import FeaturedProducts from "@/lib/components/featured_products";
import Hero from "@/lib/components/hero";
import QualitySection from "@/lib/components/quality_section";

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
