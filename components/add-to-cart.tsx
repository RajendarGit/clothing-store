import React, { FC } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

interface AddToCartProps {
  product: any;
  onAddToCart?: (product: any) => void;
  link?: boolean;
}

const AddToCart: FC<AddToCartProps> = ({ product, onAddToCart, link = false }) => {
  return (
    <Button
      size="sm"
      className="flex items-center"
      onClick={link ? undefined : (e) => {
        e.preventDefault();
        onAddToCart?.(product);
      }}
    >
      <ShoppingBag className="h-4 w-4 mr-2" />
      Add to Cart
    </Button>
  );
};

export default AddToCart;

