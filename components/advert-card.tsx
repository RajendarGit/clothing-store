import Image from 'next/image';
import React from 'react'
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

const AdvertCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl h-[500px] group">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/advertisement/saree-advert.jpg`}
        alt="Saree collection"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <Badge variant="secondary" className="mb-2 w-fit">
          New Arrival
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-2">Saree Collection</h2>
        <p className="text-white/80 mb-6 max-w-md">
          Discover our new saree collection with exclusive designs and premium
          fabrics.
        </p>

        <Button asChild>
          <Link href="/special/sarees">Shop Now</Link>
        </Button>
      </div>
    </div>
  );
}

export default AdvertCard