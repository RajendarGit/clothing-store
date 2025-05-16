import React, { FC } from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Slider } from "./ui/slider";

interface FilterPriceRangeProps {
  activeFilters: {
    priceRange: [number, number];
  };
  handlePriceChange: (values: [number, number]) => void;
}

const FilterPriceRange: FC<FilterPriceRangeProps> = ({ activeFilters, handlePriceChange }) => {
  return (
    <AccordionItem value="price" className="border rounded-md p-2">
      <AccordionTrigger className="py-2 px-2 hover:no-underline">
        <span className="text-sm font-medium">Price Range</span>
      </AccordionTrigger>
      <AccordionContent className="pt-4 px-2">
        <Slider
          defaultValue={[0, 200]}
          value={[activeFilters.priceRange[0], activeFilters.priceRange[1]]}
          max={200}
          step={5}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${activeFilters.priceRange[0]}</span>
          <span className="text-sm">${activeFilters.priceRange[1]}</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterPriceRange;

