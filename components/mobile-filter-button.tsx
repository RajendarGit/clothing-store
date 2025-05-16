import React, { FC } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Filter } from "lucide-react";

interface MobileFilterButtonProps {
  mobileFiltersOpen: boolean
  setMobileFiltersOpen: (open: boolean) => void
  activeFilterCount: number
  clearAllFilters: () => void
  FilterAccordion: React.ReactNode
}

const MobileFilterButton: FC<MobileFilterButtonProps> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  activeFilterCount,
  clearAllFilters,
  FilterAccordion,
}) => {
  return (
    <div className="md:hidden mb-4">
      <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              <span>Filters</span>
            </div>
            {activeFilterCount > 0 && (
              <Badge variant="secondary">{activeFilterCount}</Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:max-w-md">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
            {FilterAccordion}
          </ScrollArea>

          <div className="flex items-center justify-between mt-6">
            <Button variant="outline" onClick={clearAllFilters}>
              Clear All
            </Button>
            <Button onClick={() => setMobileFiltersOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileFilterButton

