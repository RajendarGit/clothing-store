import { Collection } from "@/types/collections";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Container from "./ui/container";

interface RelatedCollectionsProps {
  collections: Collection[];
  slug: string;
}

const RelatedCollections: React.FC<RelatedCollectionsProps> = ({
  collections,
  slug,
}) => {
  return (
    <section className="bg-muted/30">
      <Container className="px-0">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections
            .filter((c) => c.id !== slug)
            .slice(0, 3)
            .map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative overflow-hidden rounded-lg h-64 block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/${collection.image})` }}
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
      </Container>
    </section>
  );
};

export default RelatedCollections;
