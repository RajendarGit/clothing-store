import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"
import AdvertisingSection from "@/components/advertising-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <AdvertisingSection />
      <FeaturedProducts />
      <Newsletter
        title="Subscribe to Our Newsletter"
        description="Stay updated with the latest trends, new arrivals, and exclusive offers."
      />
    </main>
  );
}
