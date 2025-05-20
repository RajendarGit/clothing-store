import { Skeleton } from "@/components/ui/skeleton";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <>
      <Skeleton className="w-full h-[300px] md:h-[400px]" />

      <Container>
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-6 w-32" />
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
      </Container>

      <div className="py-12 bg-muted/30">
        <Container className="p-0">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-lg" />
              ))}
          </div>
        </Container>
      </div>
    </>
  );
}
