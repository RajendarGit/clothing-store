import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
      <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
      <p className="text-muted-foreground mb-8">
        Looks like you haven't added anything to your cart yet
      </p>
      <Button asChild>
        <Link href="/products">Continue Shopping</Link>
      </Button>
    </div>
  );
}

export default EmptyCart