'use client';

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { dummyProducts } from '@/data/products';
import { ProductCard } from '@/components/product-card';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return dummyProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [query]);

  if (!query) {
    return <p className="text-gray-500 mt-6">Start typing to search products.</p>;
  }

  if (filteredProducts.length === 0) {
    return (
      <p className="text-gray-500 mt-6">
        No results found for &quot;{query}&quot;.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
