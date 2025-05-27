"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import ProductColor from "./product-color";
import ProductDiscount from "./product-discount";
import AddToCart from "./add-to-cart";
import ProductDiscountNew from "./product-discount-new";
import { removeFromCart } from "@/redux/features/cart-slice";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import RemoveFromCart from "./remove-from-cart";
import { AddToWishlist } from "./wishlist-button";

interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  onAddToCart,
}) => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const cartItems = useAppSelector((state) => state.cart.items);

  const isInCart = cartItems.some(
    (item) =>
      item.id === product.id &&
      item.selectedColor === product.selectedColor &&
      item.selectedSize === product.selectedSize
  );

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div
      className={`product-card group bg-background rounded-lg border overflow-hidden ${className}`}
    >
      <div className="relative h-80">
        <Link href={`/products/${product.id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${
              product.image ?? "placeholder.svg"
            }`}
            alt={product.name || "Product Image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <ProductDiscountNew
          product={{ isNew: !!product.isNew, discount: product.discount ?? 0 }}
        />

        {isAuthenticated && <AddToWishlist product={product} />}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`} className="hover:underline">
            <h3 className="font-medium">{product.name}</h3>
          </Link>
          <div className="flex items-center">
            <ProductDiscount
              price={product.price}
              discount={product.discount}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-1">
            <ProductColor colors={product.colors} />
          </div>
          {isAuthenticated && isInCart ? (
            <RemoveFromCart handleRemoveFromCart={handleRemoveFromCart} />
          ) : (
            <>
              {isAuthenticated && onAddToCart ? (
                <AddToCart product={product} onAddToCart={onAddToCart} />
              ) : (
                <Link href="/login">
                  <AddToCart product={product} link={true} />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
