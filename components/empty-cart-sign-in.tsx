import React from 'react'
import Container from './ui/container';
import { ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const EmptyCartSignIn = () => {
  return (
    <Container className="text-center">
      <div className="max-w-md mx-auto">
        <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-4">Your cart is waiting</h1>
        <p className="text-muted-foreground mb-8">
          Please sign in to view your cart and complete your purchase
        </p>
        <Button asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>
    </Container>
  );
}

export default EmptyCartSignIn