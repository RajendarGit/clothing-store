// filter-key.ts

export type FilterKey = "categories" | "colors" | "sizes";
export type AllFilterKey = FilterKey | "priceRange" | "discountRanges";

export type DiscountRange = {
  min: number;
  max: number;
};

export type ActiveFilters = Record<FilterKey, string[]> & {
  priceRange: [number, number];
  discountRanges: DiscountRange[];
};
