import { Suspense } from "react";

import { GlobalSearch } from "@/components/global-search";
import PageHero from "@/components/page-hero";
import Container from "@/components/ui/container";
import SearchResults from "@/components/search-results";

const SearchPage = () => {
  return (
    <>
      <PageHero title="Search" description="Find what you're looking for." />
      <Container>
        <GlobalSearch />
        <Suspense
          fallback={<p className="mt-6 text-gray-500">Loading results...</p>}
        >
          <SearchResults />
        </Suspense>
      </Container>
    </>
  );
};

export default SearchPage;
