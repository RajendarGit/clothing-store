import { FilterKey } from "@/types/filter-key";

export type ActiveFilters = Record<FilterKey, string[]> & {
  priceRange: [number, number];
};
