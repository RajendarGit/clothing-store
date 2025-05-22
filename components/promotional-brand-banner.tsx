import Image from 'next/image';
import React from 'react'

const brands = [
    {
      name: 'Gucci',
      src: 'gucci.jpg',
      alt: 'Gucci',
    },
    {
      name: 'Nike',
      src: 'nike.jpg',
      alt: 'Nike',
    },
    {
      name: 'Adidas',
      src: 'adidas.jpg',
      alt: 'Adidas',
    },
    {
      name: 'Levis',
      src: 'levis.jpg',
      alt: 'Levis',
    },
    {
      name: 'Zara',
      src: 'zara.jpg',
      alt: 'Zara',
    },
    {
      name: 'H&M',
      src: 'hm.jpg',
      alt: 'H&M',
    },
]

const PromotionalBrandBanner = () => {
  return (
    <div className="mt-12 p-8 bg-muted/50 rounded-xl">
      <div className="text-center mb-8">
        <h3 className="text-xl font-medium mb-2">Featured Brands</h3>
        <p className="text-muted-foreground">
          Discover premium quality from our trusted partners
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/brands/${brand.src}`}
              alt={brand.name}
              width={120}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromotionalBrandBanner