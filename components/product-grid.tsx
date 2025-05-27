"use client"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/features/cart-slice"
import { addToWishlist } from "@/redux/features/wishlist-slice"
import type { RootState } from "@/redux/store"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"
import { ProductCard } from "./product-card"
import { addToCartMessages } from "@/lib/messages"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast({
        title: addToCartMessages.loginRequiredTitle,
        description: addToCartMessages.loginRequiredDescription,
        variant: "destructive",
      })
      return
    }

    dispatch(addToCart(product))
    toast({
      title: addToCartMessages.addedToCartTitle,
      description: addToCartMessages.addedToCartDescription(product.name),
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}
