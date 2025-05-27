"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { addToCart, removeFromCart } from "@/redux/features/cart-slice";
import { addToWishlist } from "@/redux/features/wishlist-slice";
import type { RootState } from "@/redux/store";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { dummyProducts } from "@/data/products";
import Container from "@/components/ui/container";
import ProductActiveImageList from "@/components/product-active-image-list";
import ProductRating from "@/components/product-rating";
import ProductReviewCount from "@/components/product-review-count";
import ProductDiscountWithPrice from "@/components/product-discount-with-price";
import ProductColorRanges from "@/components/product-color-ranges";
import ProductSizeRanges from "@/components/product-size-ranges";
import ProductQuantityOptions from "@/components/product-quantity-options";
import AddToCart from "@/components/add-to-cart";
import ProductDescriptionDetailsReview from "@/components/product-description-details-review";
import { useAppSelector } from "@/hooks/use-app-selector";
import RemoveFromCart from "@/components/remove-from-cart";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import AddReduceProductQuantity from "@/components/add-reduce-product-quantity";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { AddToWishlist } from "@/components/wishlist-button";
import { Share2, Truck } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const { user } = useAppSelector((state: RootState) => state.auth);

  const product =
    dummyProducts.find((p) => p.id === Number(id)) || dummyProducts[0];

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const currentQuantity = cartItem ? cartItem.quantity : 1;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  // Find the product by ID

  const isInCart = cartItems.some((item) => item.id === product.id);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeImage, setActiveImage] = useState(0);

  // Generate additional images for the product
  const productImages = [
    product.image,
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
    "/placeholder.svg?height=800&width=600",
  ];

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Please login",
        description: "You need to login to add items to your cart",
        variant: "destructive",
      });
      return;
    }

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
        selectedColor,
        selectedSize,
      })
    );

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

 
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
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
            <ProductDiscountWithPrice
              price={product.price}
              discount={product.discount}
            />
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
                <AddReduceProductQuantity
                  item={{ ...product, quantity: currentQuantity }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {isAuthenticated && isInCart ? (
              <RemoveFromCart handleRemoveFromCart={handleRemoveFromCart} />
            ) : (
              <>
                {isAuthenticated && handleAddToCart ? (
                  <>
                    <AddToCart
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                    <AddToWishlist product={product} />
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <AddToCart product={product} link={true} />
                    </Link>
                    <Link href="/login">
                      <AddToWishlist product={product} variant="link" />
                    </Link>
                  </>
                )}
              </>
            )}
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
