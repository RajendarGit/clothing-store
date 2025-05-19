import React, { FC } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

interface ProductQuantityOptionsProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const ProductQuantityOptions: FC<ProductQuantityOptionsProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-12 text-center">{quantity}</span>
      <Button variant="outline" size="icon" onClick={increaseQuantity}>
        <Plus className="h-4 w-4" />
      </Button>
    </>
  );
};

export default ProductQuantityOptions;

