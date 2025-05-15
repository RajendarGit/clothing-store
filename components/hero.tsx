import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1200&width=2000"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-start text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">Discover Your Style This Season</h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Explore our new collection of premium clothing and accessories for men, women, and kids.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="/new-arrivals">Shop New Arrivals</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
            <Link href="/collections">Explore Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
