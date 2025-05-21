import { Filter } from "lucide-react";
import React, { FC } from "react";
import { Button } from "./ui/button";

interface DesktopFilterSectionProps {
  activeFilterCount: number;
  children: React.ReactNode;
  clearAllFilters: () => void;
}

const DesktopFilterSection: FC<DesktopFilterSectionProps> = ({
  activeFilterCount,
  children,
  clearAllFilters,
}) => {
  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </h3>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground text-sm"
            >
              Clear All
            </Button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default DesktopFilterSection;
