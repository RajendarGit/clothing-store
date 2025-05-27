"use client"

import type React from "react"

import { addToWishlist, removeFromWishlist } from "@/redux/features/wishlist-slice"
import type { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"
import { cn } from "@/utils/utils"
import { useAppDispatch } from "@/hooks/use-app-dispatch"
import { useAppSelector } from "@/hooks/use-app-selector"

interface AddToWishlistProps {
  product: Product
  className?: string
  size?: "sm" | "default" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function AddToWishlist({ product, className, size = "icon", variant = "ghost" }: AddToWishlistProps) {
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const { items } = useAppSelector((state: RootState) => state.wishlist)

  const isInWishlist = items.some((item) => item.id === product.id)

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id))
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist`,
      })
    } else {
      dispatch(addToWishlist(product))
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist`,
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute top-2 right-2 z-10 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
        isInWishlist && "text-red-500 hover:text-red-600",
        className
      )}
      onClick={handleToggleWishlist}
    >
      <Heart className={cn("h-5 w-5", isInWishlist && "fill-current")} />
      <span className="sr-only">{isInWishlist ? "Remove from wishlist" : "Add to wishlist"}</span>
    </Button>
  )
}
