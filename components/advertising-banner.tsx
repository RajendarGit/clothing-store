import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AdvertisingBanner() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=2000"
              alt="Advertisement background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Collection 2024</h2>
              <p className="text-white/80 mb-6 text-lg max-w-md">
                Discover our new summer styles with exclusive designs and premium fabrics. Get ready for the season with
                20% off your first purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/collections/summer">Shop Collection</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                <div className="absolute inset-4 bg-primary/30 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[250px] w-[250px] md:h-[350px] md:w-[350px]">
                    <Image
                      src="/placeholder.svg?height=700&width=700"
                      alt="Summer collection featured product"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10">
            <div className="flex gap-2 items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-bold">20% OFF</span>
              <span className="text-white/80 text-sm">Use code: SUMMER24</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
