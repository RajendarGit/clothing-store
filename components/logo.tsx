import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <span className="text-2xl font-bold text-primary">ELEGANCE</span>
    </Link>
  );
}

export default Logo