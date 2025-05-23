import React from "react";
import { Button } from "./ui/button";

interface RemoveFromCartProps {
  handleRemoveFromCart: () => void;
}

const RemoveFromCart: React.FC<RemoveFromCartProps> = ({ handleRemoveFromCart }) => {
  return (
    <Button
      onClick={handleRemoveFromCart}
      className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Remove from Cart
    </Button>
  );
};

export default RemoveFromCart;

