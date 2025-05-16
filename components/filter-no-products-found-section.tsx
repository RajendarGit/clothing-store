import React, { FC } from "react";
import { Button } from "./ui/button";

interface FilterNoProductsFoundSectionProps {
  clearAllFilters: () => void;
}

const FilterNoProductsFoundSection: FC<FilterNoProductsFoundSectionProps> = ({
  clearAllFilters,
}) => {
  return (
    <div className="text-center py-16 border rounded-lg">
      <h3 className="text-lg font-medium mb-2">No products found</h3>
      <p className="text-muted-foreground mb-6">
        Try adjusting your filters to find what you're looking for.
      </p>
      <Button onClick={clearAllFilters}>Clear All Filters</Button>
    </div>
  );
};

export default FilterNoProductsFoundSection;

