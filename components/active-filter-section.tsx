import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export interface FilterType {
  key: string;
  render?: (value: any) => React.ReactNode;
}

interface ActiveFilterSectionProps {
  activeFilterCount: number;
  activeFilters: Record<string, any>;
  removeFilter: (key: string, value: any) => void;
  clearAllFilters: () => void;
  filterTypes: FilterType[];
}

const ActiveFilterSection: React.FC<ActiveFilterSectionProps> = ({
  activeFilterCount,
  activeFilters,
  removeFilter,
  clearAllFilters,
  filterTypes,
}) => {
  if (activeFilterCount === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium">Active Filters:</span>

      {filterTypes.map(({ key, render }) =>
        (Array.isArray(activeFilters[key]) ? activeFilters[key] : []).map((value: any) => (
          <Badge
            key={`${key}-${JSON.stringify(value)}`}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {render ? render(value) : String(value)}
            <button onClick={() => removeFilter(key, value)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))
      )}

      {/* Optional: handle priceRange separately */}
      {'priceRange' in activeFilters &&
        (activeFilters.priceRange[0] > 0 || activeFilters.priceRange[1] < 200) && (
          <Badge variant="secondary" className="flex items-center gap-1">
            ${activeFilters.priceRange[0]} - ${activeFilters.priceRange[1]}
          </Badge>
        )}

      <Button
        variant="ghost"
        size="sm"
        onClick={clearAllFilters}
        className="text-muted-foreground"
      >
        Clear All
      </Button>
    </div>
  );
};

export default ActiveFilterSection;