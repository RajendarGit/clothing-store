import { Skeleton } from "@/components/ui/skeleton"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <>
      <div>
        <Skeleton className="w-full h-[300px]" />

        <div className="container py-12">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
              ))}
          </div>

          <Skeleton className="w-full h-[150px] rounded-lg mb-12" />

          <div className="flex justify-between items-center mb-8">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-32" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="hidden md:block w-64">
              <Skeleton className="h-[600px] rounded-lg" />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-10 w-[200px]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border rounded-lg overflow-hidden">
                      <Skeleton className="h-80 w-full" />
                      <div className="p-4">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/4 mb-4" />
                        <div className="flex justify-between items-center">
                          <Skeleton className="h-4 w-16" />
                          <Skeleton className="h-9 w-32" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <Skeleton className="w-full h-[200px] mt-12" />
      </div>
    </>
  )
}
