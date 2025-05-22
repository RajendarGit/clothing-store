"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/product-grid";
import { dummyProducts } from "@/data/products";
import type { Product } from "@/types/product";
import Container from "@/components/ui/container";
import { collections } from "@/data/collections";
import { Collection } from "@/types/collections";
import CollectionNotFound from "@/components/collection-not-found";
import InnerHero from "@/components/inner-hero";
import NoProducts from "@/components/no-products";
import RelatedCollections from "@/components/related-collections";

export default function SpecialPage() {
  const { slug } = useParams();
  const [collection, setCollection] = useState<Collection | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Find the collection by slug
    const allCollections = [
      ...collections.sarees,
    ];

    const foundCollection = allCollections.find((c) => c.id === slug);
    setCollection(foundCollection || null);

    const filterProducts = dummyProducts.filter((product) => product.subcategory === "sarees");

    setProducts(filterProducts);
  }, [slug]);

  if (!collection) {
    return <CollectionNotFound />;
  }

  return (
    <>
      {/* Hero Section */}
      <InnerHero collection={collection} />

      {/* Products Section */}
      <section className="py-12">
        <Container className="p-0">
          <div className="flex justify-between items-center mb-8">
            <Button variant="ghost" asChild className="flex items-center">
              <Link href="/collections">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collections
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Showing {products.length}{" "}
              {products.length === 1 ? "product" : "products"}
            </div>
          </div>

          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <NoProducts />
          )}
        </Container>
      </section>

      {/* Related Collections */}
      <RelatedCollections
        collections={collections.special}
        slug={String(slug)}
      />
    </>
  );
}
