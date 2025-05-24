import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import AddReduceProductQuantity from "./add-reduce-product-quantity";

interface CartBodyProps {
  items: {
    id: string;
    image: string;
    name: string;
    selectedColor?: string;
    selectedSize?: string;
    price: number;
    quantity: number;
  }[];
  handleRemoveItem: (id: string) => void;
}

const CartBody: FC<CartBodyProps> = ({
  items,
  handleRemoveItem,
}) => {
  return (
    <>
      {items.map((item) => (
        <tr key={item.id} className="border-t">
          <td className="p-4">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded overflow-hidden mr-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">
                  <Link
                    href={`/products/${item.id}`}
                    className="hover:underline"
                  >
                    {item.name}
                  </Link>
                </h3>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.selectedColor && (
                    <span className="inline-block mr-2">
                      Color:
                      <span
                        className="inline-block w-3 h-3 rounded-full ml-1 align-middle"
                        style={{
                          backgroundColor: item.selectedColor,
                        }}
                      />
                    </span>
                  )}
                  {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                </div>
              </div>
            </div>
          </td>
          <td className="p-4 text-center hidden sm:table-cell">
            ${item.price.toFixed(2)}
          </td>
          <td className="p-4">
            <div className="flex items-center justify-center">
                <AddReduceProductQuantity item={{ ...item, quantity: item.quantity ?? 1 }} />
            </div>
          </td>
          <td className="p-4 text-right">
            <div className="flex items-center justify-end">
              <span className="mr-4">
                ${(item.price * (item.quantity ?? 1)).toFixed(2)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground"
                onClick={() => handleRemoveItem(item.id)}
              >
                <Trash2 className="h-4 w-4 text-primary" />
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartBody;

