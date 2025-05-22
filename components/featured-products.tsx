"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/features/cart-slice"
import { addToWishlist } from "@/redux/features/wishlist-slice"
import type { RootState } from "@/redux/store"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/product"
// import { dummyProducts } from "@/data/products"
import { ProductCard } from "./product-card"
import FeaturedProductsFilter from "./featured-products-filter"
import { Button } from "@/components/ui/button"
import { dummyProducts } from "@/data/products"
import Container from "./ui/container"

export default function FeaturedProducts() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { user } = useSelector((state: RootState) => state.auth)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = useMemo(() => {
  return selectedCategory === "all"
    ? dummyProducts.slice(0, 8)
    : dummyProducts.filter((product) => product.category === selectedCategory).slice(0, 8)
}, [selectedCategory])

  const handleAddToCart = (product: Product) => {
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

  const handleAddToWishlist = (product: Product) => {
    dispatch(addToWishlist(product))
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    })
  }

  return (
    <section>
      <Container>
        <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our handpicked selection of premium clothing and accessories
        </p>

        <FeaturedProductsFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
