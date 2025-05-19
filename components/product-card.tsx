import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
  className?: string
  onAddToCart?: (product: Product) => void
  onAddToWishlist?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  onAddToCart,
  onAddToWishlist,
}) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      className={`product-card group bg-background rounded-lg border overflow-hidden ${className}`}
    >
      <div className="relative h-80">
        <Link href={`/products/${product.id}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image ?? "placeholder.svg"}`}
            alt={product.name || "Product Image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {product.isNew && (
          <Badge className="absolute top-2 left-2 z-10">New</Badge>
        )}
        {product.discount > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2 z-10">
            -{product.discount}%
          </Badge>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.preventDefault()
            onAddToWishlist(product)
          }}
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/products/${product.id}`} className="hover:underline">
            <h3 className="font-medium">{product.name}</h3>
          </Link>
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-muted-foreground line-through mr-2">
                  ${product.price.toFixed(2)}
                </span>
                <span className="font-bold text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-1">
            {product.colors.map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <Button
            size="sm"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault()
              onAddToCart(product)
            }}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
