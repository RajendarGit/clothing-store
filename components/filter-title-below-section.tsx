import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FilterTitleBelowSectionProps {
  products: Array<any>;
  activeFilters: { sort: string };
  sortOptions: Array<{ value: string; label: string }>;
  handleSortChange: (value: string) => void;
}

const FilterTitleBelowSection: FC<FilterTitleBelowSectionProps> = ({
  products,
  activeFilters,
  sortOptions,
  handleSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h2 className="text-xl font-bold">New Arrivals</h2>
        <p className="text-muted-foreground text-sm">
          Showing {products.length} products
        </p>
      </div>

      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <Select value={activeFilters.sort} onValueChange={handleSortChange}>
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
  );
};

export default FilterTitleBelowSection;

