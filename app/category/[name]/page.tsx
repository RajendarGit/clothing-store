"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { dummyProducts } from "@/data/products";
import ProductGrid from "@/components/product-grid";
import PageHero from "@/components/page-hero";
import { Product } from "@/types/product";
import Container from "@/components/ui/container";

interface CategoryPageProps {
  params: {
    name: string;
  };
}

const CategoryPage = () => {
  const router = useRouter();
  const params = useParams();
  const name = typeof params.name === "string" ? params.name : "";
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
      <PageHero
        title={name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        description={`${
          name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        } clothing and accessories collections`}
      />
      <Container>
        <ProductGrid products={categoryProducts} />
      </Container>
    </>
  );
};

export default CategoryPage;
