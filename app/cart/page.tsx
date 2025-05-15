"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateQuantity, clearCart } from "@/redux/features/cart-slice"
import type { RootState } from "@/redux/store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function CartPage() {
  const { items } = useSelector((state: RootState) => state.cart)
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  // Calculate cart totals
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const discount = 0 // Would be calculated based on promo code
  const total = subtotal + shipping - discount

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id))
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleApplyPromo = () => {
    if (!promoCode) return

    setIsApplyingPromo(true)

    // Simulate API call to validate promo code
    setTimeout(() => {
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired",
        variant: "destructive",
      })
      setIsApplyingPromo(false)
    }, 1000)
  }

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some items to your cart before checking out",
        variant: "destructive",
      })
      return
    }

    router.push("/checkout")
  }

  if (!user) {
    return (
      <>
        <MainNav />
        <div className="container py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-4">Your cart is waiting</h1>
            <p className="text-muted-foreground mb-8">Please sign in to view your cart and complete your purchase</p>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <MainNav />
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet</p>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4">Product</th>
                      <th className="text-center p-4 hidden sm:table-cell">Price</th>
                      <th className="text-center p-4">Quantity</th>
                      <th className="text-right p-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="border-t">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="relative w-16 h-16 rounded overflow-hidden mr-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">
                                <Link href={`/products/${item.id}`} className="hover:underline">
                                  {item.name}
                                </Link>
                              </h3>
                              <div className="text-sm text-muted-foreground mt-1">
                                {item.selectedColor && (
                                  <span className="inline-block mr-2">
                                    Color:
                                    <span
                                      className="inline-block w-3 h-3 rounded-full ml-1 align-middle"
                                      style={{ backgroundColor: item.selectedColor }}
                                    />
                                  </span>
                                )}
                                {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center hidden sm:table-cell">${item.price.toFixed(2)}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end">
                            <span className="mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
                <Button variant="outline" onClick={() => dispatch(clearCart())}>
                  Clear Cart
                </Button>
              </div>
            </div>

            <div>
              <div className="border rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <label htmlFor="promo" className="text-sm font-medium mb-2 block">
                    Promo Code
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="promo"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={handleApplyPromo} disabled={isApplyingPromo || !promoCode}>
                      {isApplyingPromo ? "Applying..." : "Apply"}
                    </Button>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Checkout
                </Button>

                <div className="text-sm text-muted-foreground text-center">Taxes calculated at checkout</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
