// filter-key.ts
export type FilterKey = "categories" | "colors" | "sizes";
export type AllFilterKey = FilterKey | "priceRange";
export type ActiveFilters = Record<Extract<FilterKey, "categories" | "colors" | "sizes">, string[]> & {
  priceRange: [number, number];
};
