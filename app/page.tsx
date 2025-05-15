import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNav />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </main>
  )
}
