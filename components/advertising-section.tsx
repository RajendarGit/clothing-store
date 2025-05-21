import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PromotionalCountdown from "@/components/promotional-countdown"

export default function AdvertisingSection() {
  // Set the countdown target date to 7 days from now
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 7)

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Promotional Banner */}
          <div className="relative overflow-hidden rounded-xl h-[500px] group">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src={process.env.NEXT_PUBLIC_IMAGE_BASE_URL + "/advertisement/advert.mp4"} type="video/mp4" />
            </video>
            
            {/* <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Summer collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <Badge variant="secondary" className="mb-2 w-fit">
                New Arrival
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-2">Saree Collection</h2>
              <p className="text-white/80 mb-6 max-w-md">
                Discover our new summer styles with exclusive designs and premium fabrics.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/collections/summer">Shop Now</Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  View Lookbook
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Promotional Content */}
          <div className="grid grid-rows-2 gap-8 h-[500px]">
            {/* Flash Sale Banner */}
            <div className="relative overflow-hidden rounded-xl bg-primary text-primary-foreground">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-10 -mr-10" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -mb-8 -ml-8" />

              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Limited Time
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Up to 40% off on selected items. Hurry while stocks last!
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <PromotionalCountdown targetDate={targetDate} />

                  <Button variant="secondary" asChild className="w-fit">
                    <Link href="/sale">Shop Sale</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Membership Banner */}
            <div className="relative overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Membership background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Join Our Membership</h3>
                  <p className="text-muted-foreground mb-4">
                    Get exclusive access to new arrivals, special offers, and events.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Early access to sales</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">Free shipping on all orders</span>
                  </div>
                </div>

                <Button variant="outline" asChild className="w-fit">
                  <Link href="/membership">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Brands Banner */}
        <div className="mt-12 p-8 bg-muted/50 rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium mb-2">Featured Brands</h3>
            <p className="text-muted-foreground">Discover premium quality from our trusted partners</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((brand) => (
              <div key={brand} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=BRAND${brand}`}
                  alt={`Brand ${brand}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
