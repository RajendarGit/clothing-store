"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Filter, Percent, SortDesc, Tag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import ProductGrid from "@/components/product-grid"
import { dummyProducts } from "@/data/products"
import type { Product } from "@/types/product"
import PageHero from "@/components/page-hero"
import Container from "@/components/ui/container"
import InnerPageSubHeading from "@/components/inner-page-sub-heading"
import SaleTabContent from "@/components/sale-tab-content"
import FlashSaleSection from "@/components/flash-sale-section"
import FilterAccordion from "@/components/filter-accordion"

// Get only products with discounts
const saleProducts = dummyProducts.filter((product) => product.discount > 0)

// Create discount ranges for filtering
const discountRanges = [
  { label: "Up to 20% off", min: 1, max: 20 },
  { label: "20% - 40% off", min: 20, max: 40 },
  { label: "40% - 60% off", min: 40, max: 60 },
  { label: "60% or more", min: 60, max: 100 },
]

export default function SalePage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>(saleProducts)
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[]
    priceRange: [number, number]
    discountRanges: { min: number; max: number }[]
    sort: string
  }>({
    categories: [],
    priceRange: [0, 200],
    discountRanges: [],
    sort: "discount-desc",
  })

  // Available filter options
  const categories = ["Women", "Men", "Kids", "Accessories"]
  const sortOptions = [
    { value: "discount-desc", label: "Highest Discount" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
  ]

  // Apply filters
  useEffect(() => {
    let filteredProducts = [...saleProducts]

    // Filter by category
    if (activeFilters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        activeFilters.categories.some((cat) => product.category.toLowerCase() === cat.toLowerCase()),
      )
    }

    // Filter by price
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= activeFilters.priceRange[0] && product.price <= activeFilters.priceRange[1],
    )

    // Filter by discount range
    if (activeFilters.discountRanges.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        activeFilters.discountRanges.some((range) => product.discount >= range.min && product.discount <= range.max),
      )
    }

    // Sort products
    switch (activeFilters.sort) {
      case "discount-desc":
        filteredProducts.sort((a, b) => b.discount - a.discount)
        break
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    setProducts(filteredProducts)
  }, [activeFilters])

  const toggleCategory = (category: string) => {
    setActiveFilters((prev) => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        }
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category],
        }
      }
    })
  }

  const toggleDiscountRange = (range: { min: number; max: number }) => {
    setActiveFilters((prev) => {
      const isSelected = prev.discountRanges.some((r) => r.min === range.min && r.max === range.max)

      if (isSelected) {
        return {
          ...prev,
          discountRanges: prev.discountRanges.filter((r) => !(r.min === range.min && r.max === range.max)),
        }
      } else {
        return {
          ...prev,
          discountRanges: [...prev.discountRanges, range],
        }
      }
    })
  }

  const handlePriceChange = (value: number[]) => {
    setActiveFilters((prev) => ({
      ...prev,
      priceRange: [value[0], value[1]],
    }))
  }

  const handleSortChange = (value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      sort: value,
    }))
  }

  const clearAllFilters = () => {
    setActiveFilters({
      categories: [],
      priceRange: [0, 200],
      discountRanges: [],
      sort: "discount-desc",
    })
  }

  const removeFilter = (type: string, value: string | { min: number; max: number }) => {
    setActiveFilters((prev) => {
      switch (type) {
        case "category":
          return {
            ...prev,
            categories: prev.categories.filter((c) => c !== value),
          }
        case "discount":
          return {
            ...prev,
            discountRanges: prev.discountRanges.filter(
              (r) =>
                !(
                  r.min === (value as { min: number; max: number }).min &&
                  r.max === (value as { min: number; max: number }).max
                ),
            ),
          }
        default:
          return prev
      }
    })
  }

  // Count active filters (excluding sort)
  const activeFilterCount =
    activeFilters.categories.length +
    activeFilters.discountRanges.length +
    (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 200 ? 1 : 0)

  // Group products by discount range for the tabs
  const upTo30 = saleProducts.filter((product) => product.discount <= 30)
  const upTo50 = saleProducts.filter((product) => product.discount > 30 && product.discount <= 50)
  const over50 = saleProducts.filter((product) => product.discount > 50)

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
          
          <SaleTabContent saleProducts={saleProducts} upTo30={upTo30} upTo50={upTo50} over50={over50} />
        </Container>
      </section>

      {/* Flash Sale Banner */}
      <FlashSaleSection />

      {/* Sale Products */}
      <section id="sale-products" className="py-12">
        <div className="container">
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

              {activeFilters.discountRanges.map((range) => (
                <Badge
                  key={`${range.min}-${range.max}`}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {range.min}% - {range.max}% off
                  <button onClick={() => removeFilter("discount", range)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}

              {(activeFilters.priceRange[0] > 0 ||
                activeFilters.priceRange[1] < 200) && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  ${activeFilters.priceRange[0]} - $
                  {activeFilters.priceRange[1]}
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
                  <h3 className="text-lg font-bold flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </h3>
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

                <Accordion
                  type="multiple"
                  defaultValue={["categories", "price", "discount"]}
                  className="space-y-4"
                >
                  <AccordionItem
                    value="categories"
                    className="border rounded-md p-2"
                  >
                    <AccordionTrigger className="py-2 px-2 hover:no-underline">
                      <span className="text-sm font-medium">Categories</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`category-${category}`}
                              checked={activeFilters.categories.includes(
                                category
                              )}
                              onCheckedChange={() => toggleCategory(category)}
                            />
                            <Label
                              htmlFor={`category-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="price"
                    className="border rounded-md p-2"
                  >
                    <AccordionTrigger className="py-2 px-2 hover:no-underline">
                      <span className="text-sm font-medium">Price Range</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 px-2">
                      <Slider
                        defaultValue={[0, 200]}
                        value={[
                          activeFilters.priceRange[0],
                          activeFilters.priceRange[1],
                        ]}
                        max={200}
                        step={5}
                        onValueChange={handlePriceChange}
                        className="mb-6"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">
                          ${activeFilters.priceRange[0]}
                        </span>
                        <span className="text-sm">
                          ${activeFilters.priceRange[1]}
                        </span>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="discount"
                    className="border rounded-md p-2"
                  >
                    <AccordionTrigger className="py-2 px-2 hover:no-underline">
                      <span className="text-sm font-medium">Discount</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="space-y-2">
                        {discountRanges.map((range) => (
                          <div
                            key={`${range.min}-${range.max}`}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`discount-${range.min}-${range.max}`}
                              checked={activeFilters.discountRanges.some(
                                (r) =>
                                  r.min === range.min && r.max === range.max
                              )}
                              onCheckedChange={() => toggleDiscountRange(range)}
                            />
                            <Label
                              htmlFor={`discount-${range.min}-${range.max}`}
                              className="text-sm cursor-pointer"
                            >
                              {range.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <Sheet
                open={mobileFiltersOpen}
                onOpenChange={setMobileFiltersOpen}
              >
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
                    <Accordion
                      type="multiple"
                      defaultValue={["categories", "price", "discount"]}
                      className="space-y-4"
                    >
                      <AccordionItem
                        value="categories"
                        className="border rounded-md p-2"
                      >
                        <AccordionTrigger className="py-2 px-2 hover:no-underline">
                          <span className="text-sm font-medium">
                            Categories
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className="space-y-2">
                            {categories.map((category) => (
                              <div
                                key={category}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`mobile-category-${category}`}
                                  checked={activeFilters.categories.includes(
                                    category
                                  )}
                                  onCheckedChange={() =>
                                    toggleCategory(category)
                                  }
                                />
                                <Label
                                  htmlFor={`mobile-category-${category}`}
                                  className="text-sm cursor-pointer"
                                >
                                  {category}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="price"
                        className="border rounded-md p-2"
                      >
                        <AccordionTrigger className="py-2 px-2 hover:no-underline">
                          <span className="text-sm font-medium">
                            Price Range
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4 px-2">
                          <Slider
                            defaultValue={[0, 200]}
                            value={[
                              activeFilters.priceRange[0],
                              activeFilters.priceRange[1],
                            ]}
                            max={200}
                            step={5}
                            onValueChange={handlePriceChange}
                            className="mb-6"
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">
                              ${activeFilters.priceRange[0]}
                            </span>
                            <span className="text-sm">
                              ${activeFilters.priceRange[1]}
                            </span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem
                        value="discount"
                        className="border rounded-md p-2"
                      >
                        <AccordionTrigger className="py-2 px-2 hover:no-underline">
                          <span className="text-sm font-medium">Discount</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <div className="space-y-2">
                            {discountRanges.map((range) => (
                              <div
                                key={`mobile-${range.min}-${range.max}`}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`mobile-discount-${range.min}-${range.max}`}
                                  checked={activeFilters.discountRanges.some(
                                    (r) =>
                                      r.min === range.min && r.max === range.max
                                  )}
                                  onCheckedChange={() =>
                                    toggleDiscountRange(range)
                                  }
                                />
                                <Label
                                  htmlFor={`mobile-discount-${range.min}-${range.max}`}
                                  className="text-sm cursor-pointer"
                                >
                                  {range.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
                <div className="text-center py-16 border rounded-lg">
                  <Percent className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    No products found
                  </h3>
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
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Sale
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to know about upcoming
            sales, exclusive offers, and new arrivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-1 border"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
}
