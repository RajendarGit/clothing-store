import { Percent } from "lucide-react";
import React, { FC } from "react";
import { Button } from "./ui/button";
import { generalMessages } from "@/lib/messages";

interface FilterProductNotFoundProps {
  clearAllFilters: () => void;
}

const FilterProductNotFound: FC<FilterProductNotFoundProps> = ({
  clearAllFilters,
}) => {
  return (
    <div className="text-center py-16 border rounded-lg">
      <Percent className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-lg font-medium mb-2">
        {generalMessages.noProductsTitle}
      </h3>
      <p className="text-muted-foreground mb-6">
        {generalMessages.noProductFilterDescription}
      </p>
      <Button onClick={clearAllFilters}>Clear All Filters</Button>
    </div>
  );
};

export default FilterProductNotFound;
