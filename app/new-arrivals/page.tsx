"use client";

import { useState, useEffect } from "react";
import { dummyProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/product";
import ProductGrid from "@/components/product-grid";
import PageHero from "@/components/page-hero";
import Container from "@/components/ui/container";
import ActiveFilterSection from "@/components/active-filter-section";
import MobileFilterButton from "@/components/mobile-filter-button";
import FilterAccordion from "@/components/filter-accordion";
import FilterTitleBelowSection from "@/components/filter-title-below-section";
import FilterNoProductsFoundSection from "@/components/filter-no-products-found-section";

// Get only new products (for demo, we'll use isNew flag or just take the first 12 products)
const newArrivals = dummyProducts
  .filter((product) => product.isNew || Math.random() > 0.5) // For demo purposes
  .map((product) => ({ ...product, isNew: true })); // Ensure all are marked as new

export default function NewArrivalsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(newArrivals);
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[];
    priceRange: [number, number];
    colors: string[];
    sizes: string[];
    sort: string;
  }>({
    categories: [],
    priceRange: [0, 200],
    colors: [],
    sizes: [],
    sort: "newest",
  });

  // Available filter options
  const categories = ["Women", "Men", "Kids", "Accessories"];
  const colors = [
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#0000FF",
    "#FFFF00",
    "#00FF00",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
  ];

  // Apply filters
  useEffect(() => {
    let filteredProducts = [...newArrivals];

    // Filter by category
    if (activeFilters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        activeFilters.categories.some(
          (cat) => product.category.toLowerCase() === cat.toLowerCase()
        )
      );
    }

    // Filter by price
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= activeFilters.priceRange[0] &&
        product.price <= activeFilters.priceRange[1]
    );

    // Filter by color
    if (activeFilters.colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((color) => activeFilters.colors.includes(color))
      );
    }

    // Filter by size
    if (activeFilters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes?.some((size) => activeFilters.sizes.includes(size))
      );
    }

    // Sort products
    switch (activeFilters.sort) {
      case "newest":
        // Already sorted by newest
        break;
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    setProducts(filteredProducts);
  }, [activeFilters]);

  const toggleCategory = (category: string) => {
    setActiveFilters((prev) => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        };
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category],
        };
      }
    });
  };

  const toggleColor = (color: string) => {
    setActiveFilters((prev) => {
      if (prev.colors.includes(color)) {
        return {
          ...prev,
          colors: prev.colors.filter((c) => c !== color),
        };
      } else {
        return {
          ...prev,
          colors: [...prev.colors, color],
        };
      }
    });
  };

  const toggleSize = (size: string) => {
    setActiveFilters((prev) => {
      if (prev.sizes.includes(size)) {
        return {
          ...prev,
          sizes: prev.sizes.filter((s) => s !== size),
        };
      } else {
        return {
          ...prev,
          sizes: [...prev.sizes, size],
        };
      }
    });
  };

  const handlePriceChange = (value: number[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]],
    }));
  };

  const handleSortChange = (value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      sort: value,
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      categories: [],
      priceRange: [0, 200],
      colors: [],
      sizes: [],
      sort: "newest",
    });
  };

  const removeFilter = (type: string, value: string) => {
    setActiveFilters((prev) => {
      switch (type) {
        case "category":
          return {
            ...prev,
            categories: prev.categories.filter((c) => c !== value),
          };
        case "color":
          return {
            ...prev,
            colors: prev.colors.filter((c) => c !== value),
          };
        case "size":
          return {
            ...prev,
            sizes: prev.sizes.filter((s) => s !== value),
          };
        default:
          return prev;
      }
    });
  };

  // Count active filters (excluding sort)
  const activeFilterCount =
    activeFilters.categories.length +
    activeFilters.colors.length +
    activeFilters.sizes.length +
    (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 200
      ? 1
      : 0);

  return (
    <>
      {/* Hero Banner */}
      <PageHero
        title="New Arrivals"
        description="Discover our latest collection of premium clothing and accessories. Be the first to shop our newest styles."
      />

      <Container>
        {/* Active Filters */}
        <ActiveFilterSection
          activeFilterCount={activeFilterCount}
          clearAllFilters={clearAllFilters}
          activeFilters={activeFilters}
          removeFilter={removeFilter}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                {activeFilterCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="text-muted-foreground text-sm"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              <FilterAccordion
                activeFilters={activeFilters}
                categories={categories}
                toggleCategory={toggleCategory}
                handlePriceChange={handlePriceChange}
                colors={colors}
                toggleColor={toggleColor}
                sizes={sizes}
                toggleSize={toggleSize}
              />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <MobileFilterButton
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            activeFilterCount={activeFilterCount}
            clearAllFilters={clearAllFilters}
            FilterAccordion={
              <FilterAccordion
                activeFilters={activeFilters}
                categories={categories}
                toggleCategory={toggleCategory}
                handlePriceChange={handlePriceChange}
                colors={colors}
                toggleColor={toggleColor}
                sizes={sizes}
                toggleSize={toggleSize}
              />
            }
          />

          {/* Products Section */}
          <div className="flex-1">
            <FilterTitleBelowSection
              products={products}
              activeFilters={activeFilters}
              sortOptions={sortOptions}
              handleSortChange={handleSortChange}
            />

            {products.length === 0 ? (
              <FilterNoProductsFoundSection clearAllFilters={clearAllFilters} />
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
