"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { removeFromCart, updateQuantity, clearCart } from "@/redux/features/cart-slice"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Container from "@/components/ui/container"
import EmptyCartSignIn from "@/components/empty-cart-sign-in"
import EmptyCart from "@/components/empty-cart"
import CartBody from "@/components/cart-body"
import OrderSummary from "@/components/order-summary"
import { addToCartMessages } from "@/lib/messages"
import { useAppSelector } from "@/hooks/use-app-selector"
import { withAuthProtection } from "@/components/hoc/with-auth-protection"

function CartPage() {
  const { items } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch()
  const router = useRouter()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  // Calculate cart totals
  const subtotal = items.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const discount = 0 // Would be calculated based on promo code
  const total = subtotal + shipping - discount

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(Number(id)))
    toast({
      title: addToCartMessages.itemRemovedTitle,
      description: addToCartMessages.itemRemovedDescription,
    })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    dispatch(updateQuantity({ id: Number(id), quantity }))
  }

  const handleApplyPromo = () => {
    if (!promoCode) return

    setIsApplyingPromo(true)

    // Simulate API call to validate promo code
    setTimeout(() => {
      toast({
        title: addToCartMessages.inValidPromoCodeTitle,
        description: addToCartMessages.invalidPromoCodeDescription,
        variant: "destructive",
      })
      setIsApplyingPromo(false)
    }, 1000)
  }

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: addToCartMessages.emptyCartTitle,
        description: addToCartMessages.emptyCartDescription,
        variant: "destructive",
      })
      return
    }

    router.push("/checkout")
  }

  if (!user) {
    return (
      <EmptyCartSignIn />
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4">Product</th>
                    <th className="text-center p-4 hidden sm:table-cell">
                      Price
                    </th>
                    <th className="text-center p-4">Quantity</th>
                    <th className="text-right p-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <CartBody
                    items={items.map(item => ({
                      ...item,
                      id: String(item.id),
                    }))}
                    handleRemoveItem={handleRemoveItem}
                  />
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
            <OrderSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
              promoCode={promoCode}
              isApplyingPromo={isApplyingPromo}
              setPromoCode={setPromoCode}
              handleApplyPromo={handleApplyPromo}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default withAuthProtection(CartPage);
