import React, { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  promoCode: string;
  isApplyingPromo: boolean;
  setPromoCode: (code: string) => void;
  handleApplyPromo: () => void;
  handleCheckout: () => void;
}

const OrderSummary: FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  discount,
  total,
  promoCode,
  isApplyingPromo,
  setPromoCode,
  handleApplyPromo,
  handleCheckout,
}) => {
  return (
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
          <Button
            variant="outline"
            onClick={handleApplyPromo}
            disabled={isApplyingPromo || !promoCode}
          >
            {isApplyingPromo ? "Applying..." : "Apply"}
          </Button>
        </div>
      </div>

      <Button className="w-full" size="lg" onClick={handleCheckout}>
        Checkout
      </Button>

      <div className="text-sm text-muted-foreground text-center">
        Taxes calculated at checkout
      </div>
    </div>
  );
};


export default OrderSummary;
