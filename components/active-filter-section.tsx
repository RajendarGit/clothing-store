import React from 'react'
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { FilterKey } from '@/types/filter-key';
import { ActiveFilters } from './active-filters';

const ActiveFilterSection: React.FC<{
  activeFilterCount: number;
  activeFilters: ActiveFilters;
  removeFilter: (key: FilterKey, value: string) => void;
  clearAllFilters: () => void;
}> = ({
  activeFilterCount,
  activeFilters,
  removeFilter,
  clearAllFilters,
}) => {
  if (activeFilterCount === 0) return null;

  const filterTypes: {
    key: FilterKey;
    render?: (value: string) => React.ReactNode;
  }[] = [
    {
      key: 'categories',
    },
    {
      key: 'colors',
      render: (color) => (
        <span
          className="w-3 h-3 rounded-full mr-1"
          style={{ backgroundColor: color }}
        />
      ),
    },
    {
      key: 'sizes',
      render: (size) => <>Size: {size}</>,
    },
  ];

  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium">Active Filters:</span>

      {filterTypes.map(({ key, render }) =>
        activeFilters[key].map((value) => (
          <Badge
            key={`${key}-${value}`}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {render ? render(value) : value}
            <button onClick={() => removeFilter(key, value)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))
      )}

      {(Number(activeFilters.priceRange[0]) > 0 ||
        Number(activeFilters.priceRange[1]) < 200) && (
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
