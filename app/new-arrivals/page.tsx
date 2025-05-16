"use client";

import { useState, useEffect } from "react";
import MainNav from "@/components/main-nav";
import { dummyProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Accordion } from "@/components/ui/accordion";
import { Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import ProductGrid from "@/components/product-grid";
import PageHero from "@/components/page-hero";
import FilterCategories from "@/components/filter-categories";
import FilterPriceRange from "@/components/filter-price-range";
import FilterColors from "@/components/filter-colors";
import FilterSizes from "@/components/filter-sizes";

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

  const FilterAccordion = () => {
    return (
      <Accordion
        type="multiple"
        defaultValue={["categories", "price", "colors", "sizes"]}
        className="space-y-4"
      >
        <FilterCategories
          categories={categories}
          activeFilters={activeFilters}
          toggleCategory={toggleCategory}
        />

        <FilterPriceRange
          activeFilters={activeFilters}
          handlePriceChange={handlePriceChange}
        />

        <FilterColors
          colors={colors}
          activeFilters={activeFilters}
          toggleColor={toggleColor}
        />

        <FilterSizes
          sizes={sizes}
          activeFilters={activeFilters}
          toggleSize={toggleSize}
        />
      </Accordion>
    );
  };

  return (
    <>
      <MainNav />

      {/* Hero Banner */}
      <PageHero
        title="New Arrivals"
        description="Discover our latest collection of premium clothing and accessories. Be the first to shop our newest styles."
      />

      <div className="container py-12">
        {/* Active Filters */}
        {activeFilterCount > 0 && (
          <div className="mb-6 flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium">Active Filters:</span>

            {activeFilters.categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {category}
                <button onClick={() => removeFilter("category", category)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}

            {activeFilters.colors.map((color) => (
              <Badge
                key={color}
                variant="secondary"
                className="flex items-center gap-1"
              >
                <span
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: color }}
                ></span>
                <button onClick={() => removeFilter("color", color)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}

            {activeFilters.sizes.map((size) => (
              <Badge
                key={size}
                variant="secondary"
                className="flex items-center gap-1"
              >
                Size: {size}
                <button onClick={() => removeFilter("size", size)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}

            {(activeFilters.priceRange[0] > 0 ||
              activeFilters.priceRange[1] < 200) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                ${activeFilters.priceRange[0]} - ${activeFilters.priceRange[1]}
              </Badge>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground"
            >
              Clear All
            </Button>
          </div>
        )}

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

              <FilterAccordion />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <span>Filters</span>
                  </div>
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary">{activeFilterCount}</Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-md">
                <h2 className="text-xl font-bold mb-6">Filters</h2>
                <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
                  <FilterAccordion />
                </ScrollArea>

                <div className="flex items-center justify-between mt-6">
                  <Button variant="outline" onClick={clearAllFilters}>
                    Clear All
                  </Button>
                  <Button onClick={() => setMobileFiltersOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-xl font-bold">New Arrivals</h2>
                <p className="text-muted-foreground text-sm">
                  Showing {products.length} products
                </p>
              </div>

              <div className="w-full sm:w-auto mt-4 sm:mt-0">
                <Select
                  value={activeFilters.sort}
                  onValueChange={handleSortChange}
                >
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-16 border rounded-lg">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <ProductGrid products={products} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
