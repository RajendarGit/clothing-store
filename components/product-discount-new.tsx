import React from "react";
import { Badge } from "./ui/badge";

interface ProductDiscountNewProps {
  product: {
    isNew: boolean;
    discount: number;
  };
}

const ProductDiscountNew: React.FC<ProductDiscountNewProps> = ({ product }) => {
  return (
    <>
      {product.isNew && (
        <Badge className="absolute top-2 left-2 z-10">New</Badge>
      )}
      {product.discount > 0 && (
        <Badge variant="destructive" className="absolute top-2 right-2 z-10">
          -{product.discount}%
        </Badge>
      )}
    </>
  );
};

export default ProductDiscountNew;

