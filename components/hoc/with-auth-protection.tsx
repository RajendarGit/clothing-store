'use client'
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // For App Router
// For Pages Router: use `next/router`

import { RootState } from "@/redux/store"; // adjust path as needed

export function withAuthProtection<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function ProtectedComponent(props: T) {
    const router = useRouter();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
      if (cartItems.length === 0) {
        router.replace("/login"); // redirect to homepage if cart is empty
      }
    }, [cartItems, router]);

    // Optional: don't render component until redirection check finishes
    if (cartItems.length === 0) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
