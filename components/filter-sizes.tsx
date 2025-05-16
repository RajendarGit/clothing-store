import React, { FC } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FilterSizesProps {
  sizes: string[];
  activeFilters: { sizes: string[] };
  toggleSize: (size: string) => void;
}

const FilterSizes: FC<FilterSizesProps> = ({
  sizes,
  activeFilters,
  toggleSize,
}) => {
  return (
    <AccordionItem value="sizes" className="border rounded-md p-2">
      <AccordionTrigger className="py-2 px-2 hover:no-underline">
        <span className="text-sm font-medium">Sizes</span>
      </AccordionTrigger>
      <AccordionContent className="pt-2">
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`min-w-[40px] h-10 px-2 rounded-md border ${
                activeFilters.sizes.includes(size)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-input hover:bg-muted"
              }`}
              onClick={() => toggleSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterSizes;
