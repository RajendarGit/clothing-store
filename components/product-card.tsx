import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import ProductColor from "./product-color";
import ProductDiscount from "./product-discount";
import AddToWishlist from "./add-to-wishlist";
import AddToCart from "./add-to-cart";
import ProductDiscountNew from "./product-discount-new";

interface ProductCardProps {
  product: Product;
  className?: string;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  onAddToCart,
  onAddToWishlist,
}) => {
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

        <AddToWishlist product={product} onAddToWishlist={onAddToWishlist} />
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

          <AddToCart product={product} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};
