'use client';

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { GlobalSearch } from '@/components/global-search';
import PageHero from '@/components/page-hero';
import Container from '@/components/ui/container';
import { dummyProducts } from '@/data/products';
import { ProductCard } from '@/components/product-card';

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <>
      <PageHero title="Search" description="Find what you're looking for." />
      <Container>
        <GlobalSearch />
        {query ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mt-6">
              No results found for &quot;{query}&quot;.
            </p>
          )
        ) : (
          <p className="text-gray-500 mt-6">Start typing to search products.</p>
        )}
      </Container>
    </>
  );
};

export default Search;