import React from "react";
import { Button } from "./ui/button";

interface FeaturedProductsFilterProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

const FeaturedProductsFilter: React.FC<FeaturedProductsFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
      {["all", "women", "men", "kids", "accessories"].map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "default" : "outline"}
          onClick={() => setSelectedCategory(cat)}
          className="min-w-[100px] capitalize"
        >
          {cat}
        </Button>
      ))}
    </div>
  );
};

export default FeaturedProductsFilter;