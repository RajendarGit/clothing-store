import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { collections } from "@/data/collections"
import Hero from "@/components/hero"
import PageHero from "@/components/page-hero"
import InnerPageSubHeading from "@/components/inner-page-sub-heading"
import Newsletter from "@/components/newsletter"

export default function CollectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Explore Our Collections"
        description="Discover curated collections of premium clothing and accessories for
            every style, season, and occasion."
      />

      {/* Featured Collections */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {collections.featured.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-lg aspect-[16/9] bg-muted"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${
                    collection.image || "placeholder.svg"
                  }`}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {collection.title}
                  </h2>
                  <p className="text-white/80 mb-4 max-w-md">
                    {collection.description}
                  </p>
                  <Button asChild className="w-fit">
                    <Link href={collection.link}>
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Seasonal Collections */}
          <InnerPageSubHeading heading="Seasonal Collections" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {collections.seasonal.map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative overflow-hidden rounded-lg h-80 block"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${
                    collection.image || "placeholder.svg"
                  }`}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {collection.title}
                  </h3>
                  <span className="text-white/80 group-hover:text-white transition-colors flex items-center">
                    Shop Now
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Thematic Collections */}
          <InnerPageSubHeading heading="Thematic Collections" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {collections.thematic.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-lg aspect-square bg-muted"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${
                    collection.image || "placeholder.svg"
                  }`}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit bg-white/10 text-white border-white/20"
                  >
                    <Link href={collection.link}>Explore Collection</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Collections */}
          <InnerPageSubHeading heading="Special Collections" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.special.map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative overflow-hidden rounded-lg h-64 block border"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${
                    collection.image || "placeholder.svg"
                  }`}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 mb-4 line-clamp-2">
                    {collection.description}
                  </p>
                  <span className="text-white group-hover:underline flex items-center">
                    Shop Collection
                    <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <Newsletter
        title="Be the First to Know"
        description="Subscribe to our newsletter and be the first to know about new
            collections, exclusive offers, and style inspiration."
      />
    </>
  );
}
