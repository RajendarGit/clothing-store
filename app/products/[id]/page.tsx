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
            {productImages.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-md border ${
                  activeImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${
                    product.image ?? "placeholder.svg"
                  }`}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-3xl font-bold text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </span>
                <span className="ml-2 text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-200">
                  {product.discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <div key={size} className="flex items-center">
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`px-3 py-2 rounded-md border cursor-pointer ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
              <Heart className="h-5 w-5 mr-2" />
              Wishlist
            </Button>
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
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-4">
            <div className="prose max-w-none">
              <p>
                {product.description ||
                  "No description available for this product."}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Product Details</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Material:</span> Cotton,
                    Polyester
                  </li>
                  <li>
                    <span className="font-medium">Pattern:</span> Solid
                  </li>
                  <li>
                    <span className="font-medium">Care:</span> Machine wash cold
                  </li>
                  <li>
                    <span className="font-medium">Origin:</span> Imported
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Delivery:</span> 3-5 business
                    days
                  </li>
                  <li>
                    <span className="font-medium">Free Shipping:</span> On
                    orders over $50
                  </li>
                  <li>
                    <span className="font-medium">Returns:</span> 30 days return
                    policy
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-4">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>

              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">John Doe</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${
                                j < 4
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    <p className="mt-2 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
}
