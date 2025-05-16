"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { dummyProducts } from "@/data/products";
import ProductGrid from "@/components/product-grid";
import PageHero from "@/components/page-hero";
import { Product } from "@/types/product";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = ({ params: { name } }: CategoryPageProps) => {
  const router = useRouter();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]); // ✅ use correct type

  useEffect(() => {
    if (!name) {
      router.push("/");
      return;
    }

    const filteredProducts = dummyProducts.filter(
      (product) => product.category.toLowerCase() === name.toLowerCase()
    );

    setCategoryProducts(filteredProducts);
  }, [name, router]);

  return (
      <>
      <PageHero title={name} description="sfgfdgdgdg" />
    <div className="container py-12">
      <ProductGrid products={categoryProducts} />
    </div>
    </>
  );
};

export default CategoryPage;
