import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface FilterDiscountProps {
  discountRanges: {
    min: number;
    max: number;
    label: string;
  }[];
  activeFilters: {
    discountRanges: {
      min: number;
      max: number;
    }[];
  };
  toggleDiscountRange: (range: {
    min: number;
    max: number;
  }) => void;
}


const FilterDiscount: React.FC<FilterDiscountProps> = ({
  discountRanges,
  activeFilters,
  toggleDiscountRange,
}) => {
  return (
    <AccordionItem value="discount" className="border rounded-md p-2">
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
                  (r) => r.min === range.min && r.max === range.max
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
  );
};

export default FilterDiscount;

