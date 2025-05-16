import React, { FC } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FilterColorsProps {
  colors: string[];
  activeFilters: { colors: string[] };
  toggleColor: (color: string) => void;
}

const FilterColors: FC<FilterColorsProps> = ({
  colors,
  activeFilters,
  toggleColor,
}) => {
  return (
    <AccordionItem value="colors" className="border rounded-md p-2">
      <AccordionTrigger className="py-2 px-2 hover:no-underline">
        <span className="text-sm font-medium">Colors</span>
      </AccordionTrigger>
      <AccordionContent className="pt-2">
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 ${
                activeFilters.colors.includes(color)
                  ? "border-primary"
                  : "border-transparent hover:border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => toggleColor(color)}
              aria-label={`Filter by color ${color}`}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterColors;
