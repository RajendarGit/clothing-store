"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { removeFromWishlist, clearWishlist } from "@/redux/features/wishlist-slice"
import { addToCart } from "@/redux/features/cart-slice"
import type { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Trash2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useAppSelector } from "@/hooks/use-app-selector"
import { useAppDispatch } from "@/hooks/use-app-dispatch"
import Container from "@/components/ui/container"
import { ProductCard } from "@/components/product-card"

export default function WishlistPage() {
  const { items } = useAppSelector((state) => state.wishlist)
  const { user } = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const [isClearing, setIsClearing] = useState(false)

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId))
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist",
    })
  }

  const handleAddToCart = (product: any) => {
    if (!user) {
      toast({
        title: "Please login",
        description: "You need to login to add items to your cart",
        variant: "destructive",
      })
      return
    }

    dispatch(addToCart(product))
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  const handleClearWishlist = () => {
    setIsClearing(true)
    dispatch(clearWishlist())
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist",
    })
    setIsClearing(false)
  }

  if (!user) {
    return (
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Your wishlist is waiting</h1>
          <p className="text-muted-foreground mb-8">
            Please sign in to view your wishlist and save your favorite items
          </p>
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} saved for
            later
          </p>
        </div>
        {items.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear wishlist?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove all items from your wishlist. This action
                  cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearWishlist}
                  disabled={isClearing}
                >
                  {isClearing ? "Clearing..." : "Clear All"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start adding items to your wishlist by clicking the heart icon on
            products you love
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
            // <div
            //   key={product.id}
            //   className="group bg-background rounded-lg border overflow-hidden relative"
            // >
            //   <button
            //     onClick={() => handleRemoveFromWishlist(String(product.id))}
            //     className="absolute top-2 right-2 z-10 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            //   >
            //     <X className="h-4 w-4" />
            //     <span className="sr-only">Remove from wishlist</span>
            //   </button>

            //   <div className="relative h-80">
            //     <Link href={`/products/${product.id}`}>
            //       <Image
            //         src={product.image || "/placeholder.svg"}
            //         alt={product.name}
            //         fill
            //         className="object-cover transition-transform duration-300 group-hover:scale-105"
            //       />
            //     </Link>
            //     {product.isNew && (
            //       <Badge className="absolute top-2 left-2 z-10">New</Badge>
            //     )}
            //     {product.discount > 0 && (
            //       <Badge
            //         variant="destructive"
            //         className="absolute top-2 left-2 z-10 mt-8"
            //       >
            //         -{product.discount}%
            //       </Badge>
            //     )}
            //   </div>

            //   <div className="p-4">
            //     <div className="mb-4">
            //       <Link
            //         href={`/products/${product.id}`}
            //         className="hover:underline"
            //       >
            //         <h3 className="font-medium mb-2">{product.name}</h3>
            //       </Link>
            //       <div className="flex items-center justify-between">
            //         {product.discount > 0 ? (
            //           <div className="flex items-center gap-2">
            //             <span className="font-bold text-primary">
            //               $
            //               {(
            //                 product.price *
            //                 (1 - product.discount / 100)
            //               ).toFixed(2)}
            //             </span>
            //             <span className="text-muted-foreground line-through text-sm">
            //               ${product.price.toFixed(2)}
            //             </span>
            //           </div>
            //         ) : (
            //           <span className="font-bold">
            //             ${product.price.toFixed(2)}
            //           </span>
            //         )}
            //       </div>
            //     </div>

            //     <div className="flex items-center justify-between">
            //       <div className="flex space-x-1">
            //         {product.colors.slice(0, 3).map((color, index) => (
            //           <div
            //             key={index}
            //             className="w-4 h-4 rounded-full border"
            //             style={{ backgroundColor: color }}
            //           />
            //         ))}
            //         {product.colors.length > 3 && (
            //           <div className="w-4 h-4 rounded-full border bg-muted flex items-center justify-center">
            //             <span className="text-xs">
            //               +{product.colors.length - 3}
            //             </span>
            //           </div>
            //         )}
            //       </div>

            //       <Button
            //         size="sm"
            //         className="flex items-center"
            //         onClick={() => handleAddToCart(product)}
            //       >
            //         <ShoppingBag className="h-4 w-4 mr-2" />
            //         Add to Cart
            //       </Button>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-medium mb-2">Ready to shop?</h3>
            <p className="text-muted-foreground mb-6">
              Add all your wishlist items to cart and complete your purchase
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  items.forEach((product) => handleAddToCart(product));
                }}
                disabled={!user}
              >
                Add All to Cart
              </Button>
              <Button variant="outline" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
