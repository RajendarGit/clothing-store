import FilterCategories from "./filter-categories";
import { Accordion } from "./ui/accordion";
import FilterPriceRange from "./filter-price-range";
import FilterColors from "./filter-colors";
import FilterSizes from "./filter-sizes";
import { ActiveFilters } from "./active-filters";

interface FilterAccordionProps {
  categories: string[];
  activeFilters: ActiveFilters;
  toggleCategory: (category: string) => void;
  handlePriceChange: ([min, max]: [number, number]) => void;
  colors: string[];
  toggleColor: (color: string) => void;
  sizes: string[];
  toggleSize: (size: string) => void;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  categories,
  activeFilters,
  toggleCategory,
  handlePriceChange,
  colors,
  toggleColor,
  sizes,
  toggleSize,
}) => {
  return (
    <Accordion
      type="multiple"
      defaultValue={["categories", "price", "colors", "sizes"]}
      className="space-y-4"
    >
      <FilterCategories
        categories={categories}
        activeFilters={activeFilters}
        toggleCategory={toggleCategory}
      />

      <FilterPriceRange
        activeFilters={activeFilters}
        handlePriceChange={handlePriceChange}
      />

      <FilterColors
        colors={colors}
        activeFilters={activeFilters}
        toggleColor={toggleColor}
      />

      <FilterSizes
        sizes={sizes}
        activeFilters={activeFilters}
        toggleSize={toggleSize}
      />
    </Accordion>
  );
};

export default FilterAccordion;
