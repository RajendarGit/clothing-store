import React, { FC } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface FilterCategoriesProps {
  categories: string[];
  activeFilters: { categories: string[] };
  toggleCategory: (category: string) => void;
}

const FilterCategories: FC<FilterCategoriesProps> = ({
  categories,
  activeFilters,
  toggleCategory,
}) => {
  return (
    <AccordionItem value="categories" className="border rounded-md p-2">
      <AccordionTrigger className="py-2 px-2 hover:no-underline">
        <span className="text-sm font-medium">Categories</span>
      </AccordionTrigger>
      <AccordionContent className="pt-2">
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={activeFilters.categories.includes(category)}
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
  );
};

export default FilterCategories;

