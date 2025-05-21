"use client";

import { useState, useEffect } from "react";
import { Filter, Percent, SortDesc, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Accordion } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import ProductGrid from "@/components/product-grid";
import { dummyProducts } from "@/data/products";
import type { Product } from "@/types/product";
import PageHero from "@/components/page-hero";
import Container from "@/components/ui/container";
import InnerPageSubHeading from "@/components/inner-page-sub-heading";
import SaleTabContent from "@/components/sale-tab-content";
import FlashSaleSection from "@/components/flash-sale-section";
import FilterCategories from "@/components/filter-categories";
import FilterPriceRange from "@/components/filter-price-range";
import FilterDiscount from "@/components/filter-discount";
import { generalMessages } from "@/lib/messages";
import FilterProductNotFound from "@/components/filter-product-not-found";
import Newsletter from "@/components/newsletter";
import ActiveFilterSection from "@/components/active-filter-section";
import MobileFilterButton from "@/components/mobile-filter-button";
import DesktopFilterSection from "@/components/desktop-filter-section";

// Get only products with discounts
const saleProducts = dummyProducts.filter((product) => product.discount > 0);

// Create discount ranges for filtering
const discountRanges = [
  { label: "Up to 20% off", min: 1, max: 20 },
  { label: "20% - 40% off", min: 20, max: 40 },
  { label: "40% - 60% off", min: 40, max: 60 },
  { label: "60% or more", min: 60, max: 100 },
];

export default function SalePage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(saleProducts);
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[];
    priceRange: [number, number];
    discountRanges: { min: number; max: number }[];
    sort: string;
  }>({
    categories: [],
    priceRange: [0, 200],
    discountRanges: [],
    sort: "discount-desc",
  });

  // Available filter options
  const categories = ["Women", "Men", "Kids", "Accessories"];
  const sortOptions = [
    { value: "discount-desc", label: "Highest Discount" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
  ];

  // Apply filters
  useEffect(() => {
    let filteredProducts = [...saleProducts];

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

    // Filter by discount range
    if (activeFilters.discountRanges.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        activeFilters.discountRanges.some(
          (range) =>
            product.discount >= range.min && product.discount <= range.max
        )
      );
    }

    // Sort products
    switch (activeFilters.sort) {
      case "discount-desc":
        filteredProducts.sort((a, b) => b.discount - a.discount);
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

  const toggleDiscountRange = (range: { min: number; max: number }) => {
    setActiveFilters((prev) => {
      const isSelected = prev.discountRanges.some(
        (r) => r.min === range.min && r.max === range.max
      );

      if (isSelected) {
        return {
          ...prev,
          discountRanges: prev.discountRanges.filter(
            (r) => !(r.min === range.min && r.max === range.max)
          ),
        };
      } else {
        return {
          ...prev,
          discountRanges: [...prev.discountRanges, range],
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
      discountRanges: [],
      sort: "discount-desc",
    });
  };

  const removeFilter = (
    type: string,
    value: string | { min: number; max: number }
  ) => {
    setActiveFilters((prev) => {
      switch (type) {
        case "category":
          return {
            ...prev,
            categories: prev.categories.filter((c) => c !== value),
          };
        case "discount":
          return {
            ...prev,
            discountRanges: prev.discountRanges.filter(
              (r) =>
                !(
                  r.min === (value as { min: number; max: number }).min &&
                  r.max === (value as { min: number; max: number }).max
                )
            ),
          };
        default:
          return prev;
      }
    });
  };

  // Count active filters (excluding sort)
  const activeFilterCount =
    activeFilters.categories.length +
    activeFilters.discountRanges.length +
    (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 200
      ? 1
      : 0);

  // Group products by discount range for the tabs
  const upTo30 = saleProducts.filter((product) => product.discount <= 30);
  const upTo50 = saleProducts.filter(
    (product) => product.discount > 30 && product.discount <= 50
  );
  const over50 = saleProducts.filter((product) => product.discount > 50);

  const FILTER_ACCORDION_DEFAULT_VALUES = ["categories", "price", "discount"];

  const ActiveFilterAccordion = () => {
    return (
      <Accordion
        type="multiple"
        defaultValue={FILTER_ACCORDION_DEFAULT_VALUES}
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

        <FilterDiscount
          discountRanges={discountRanges}
          activeFilters={activeFilters}
          toggleDiscountRange={toggleDiscountRange}
        />
      </Accordion>
    );
  };

  return (
    <>
      {/* Hero Banner */}
      <PageHero
        title="Seasonal Sale"
        description="Up to 70% off on selected items. Limited time offer."
        saleBanner={true}
        days={7}
      />

      {/* Sale Categories */}
      <section className="py-12 bg-muted/30">
        <Container>
          <InnerPageSubHeading heading="Shop by Discount" />

          <SaleTabContent
            saleProducts={saleProducts}
            upTo30={upTo30}
            upTo50={upTo50}
            over50={over50}
          />
        </Container>
      </section>

      {/* Flash Sale Banner */}
      <FlashSaleSection />

      {/* Sale Products */}
      <section id="sale-products" className="py-12">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">All Sale Items</h2>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {products.length} products
              </span>
            </div>
          </div>

          {/* Active Filters */}
          <ActiveFilterSection
            activeFilterCount={activeFilterCount}
            clearAllFilters={clearAllFilters}
            activeFilters={activeFilters}
            removeFilter={removeFilter}
            filterTypes={[
              { key: "categories" },
              {
                key: "discountRanges",
                render: (range: { min: number; max: number }) => (
                  <>
                    -{range.min}% to -{range.max}%
                  </>
                ),
              },
            ]}
          />

          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Filters */}
            <DesktopFilterSection
              activeFilterCount={activeFilterCount}
              clearAllFilters={clearAllFilters}
            >
              <ActiveFilterAccordion />
            </DesktopFilterSection>

            {/* Mobile Filter Button */}
            <MobileFilterButton
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
              activeFilterCount={activeFilterCount}
              clearAllFilters={clearAllFilters}
              FilterAccordion={<ActiveFilterAccordion />}
            />

            {/* Products Section */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <SortDesc className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Sort by:</span>
                </div>

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

              {products.length === 0 ? (
                <FilterProductNotFound clearAllFilters={clearAllFilters} />
              ) : (
                <ProductGrid products={products} />
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}

      <Newsletter
        primaryBG={false}
        title="Never Miss a Sale"
        description="Subscribe to our newsletter and be the first to know about upcoming
            sales, exclusive offers, and new arrivals."
      />
    </>
  );
}
