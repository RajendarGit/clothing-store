import { Skeleton } from "@/components/ui/skeleton"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import Container from "@/components/ui/container"

export default function Loading() {
  return (
    <Container>
      <Skeleton className="h-12 w-3/4 max-w-lg mb-4" />
      <Skeleton className="h-6 w-1/2 max-w-md mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Skeleton className="aspect-[16/9] rounded-lg" />
        <Skeleton className="aspect-[16/9] rounded-lg" />
      </div>

      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-80 rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
      </div>

      <Skeleton className="h-8 w-48 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-64 rounded-lg" />
          ))}
      </div>
    </Container>
  );
}
