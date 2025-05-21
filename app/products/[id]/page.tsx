"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/features/cart-slice"
import { addToWishlist } from "@/redux/features/wishlist-slice"
import type { RootState } from "@/redux/store"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Minus, Plus, Share2, Star, Truck } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { dummyProducts } from "@/data/products"
import Container from "@/components/ui/container"
import ProductActiveImageList from "@/components/product-active-image-list"
import ProductRating from "@/components/product-rating"
import ProductReviewCount from "@/components/product-review-count"
import ProductDiscountWithPrice from "@/components/product-discount-with-price"
import ProductColorRanges from "@/components/product-color-ranges"
import ProductSizeRanges from "@/components/product-size-ranges"
import ProductQuantityOptions from "@/components/product-quantity-options"
import AddToCart from "@/components/add-to-cart"
import AddToWishlist from "@/components/add-to-wishlist"
import ProductDescriptionDetailsReview from "@/components/product-description-details-review"

export default function ProductPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { toast } = useToast()
  const { user } = useSelector((state: RootState) => state.auth)

  // Find the product by ID
  const product = dummyProducts.find((p) => p.id === Number(id)) || dummyProducts[0]

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  // Generate additional images for the product
  const productImages = [
    product.image,
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
  ]

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Please login",
        description: "You need to login to add items to your cart",
        variant: "destructive",
      })
      return
    }

    dispatch(
      addToCart({
        ...product,
        quantity,
        selectedColor,
        selectedSize,
      }),
    )

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product))
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    })
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              // src={productImages[activeImage] || "/placeholder.svg"}
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${
                product.image ?? "placeholder.svg"
              }`}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <ProductActiveImageList
              productImages={productImages}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <ProductRating rating={product.rating} />
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                <ProductReviewCount product={product} />
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <ProductDiscountWithPrice price={product.price} discount={product.discount} />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                <ProductColorRanges
                  colors={product.colors}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <ProductSizeRanges
                value={selectedSize}
                onValueChange={setSelectedSize}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <ProductQuantityOptions
                  quantity={quantity}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <AddToCart product={product} onAddToCart={handleAddToCart} />
            <AddToWishlist product={product} onAddToWishlist={handleAddToWishlist} productPage={true} />
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Truck className="h-4 w-4 mr-2" />
              Free shipping on orders over $50
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ProductDescriptionDetailsReview product={product} />
      </div>
    </Container>
  );
}
