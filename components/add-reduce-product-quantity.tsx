import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "@/redux/features/cart-slice";

interface AddReduceProductQuantityProps {
  item: {
    id: string;
    quantity?: number;
  };
}

const AddReduceProductQuantity: React.FC<AddReduceProductQuantityProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleUpdateQuantity = (quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id: Number(item.id), quantity }));
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => handleUpdateQuantity((item.quantity ?? 1) - 1)}
        disabled={(item.quantity ?? 1) <= 1}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-10 text-center">{item.quantity ?? 1}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => handleUpdateQuantity((item.quantity ?? 1) + 1)}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </>
  );
};

export default AddReduceProductQuantity;
