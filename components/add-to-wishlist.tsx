import React, { FC } from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

interface AddToWishlistProps {
  productPage?: boolean;
  onAddToWishlist?: (product: any) => void;
  product: any;
}

const AddToWishlist: FC<AddToWishlistProps> = ({
  productPage = false,
  onAddToWishlist,
  product,
}) => {
  const buttonClass = productPage
    ? "btn-ghost w-auto px-3"
    : "absolute top-2 right-2 z-10 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={buttonClass}
      onClick={(e) => {
        e.preventDefault();
        onAddToWishlist?.(product);
      }}
    >
      <Heart className="h-5 w-5" />
      <span className={productPage ? "" : "sr-only"}>Add to wishlist</span>
    </Button>
  );
};

export default AddToWishlist;