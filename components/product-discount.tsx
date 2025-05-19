import React, { FC } from "react";

interface ProductDiscountProps {
  price: number;
  discount: number;
}

const ProductDiscount: FC<ProductDiscountProps> = ({ price, discount }) => {
  return (
    <>
      {discount > 0 ? (
        <>
          <span className="text-muted-foreground line-through mr-2">
            ${price.toFixed(2)}
          </span>
          <span className="font-bold text-primary">
            ${(price * (1 - discount / 100)).toFixed(2)}
          </span>
        </>
      ) : (
        <span className="font-bold">${price.toFixed(2)}</span>
      )}
    </>
  );
};

export default ProductDiscount;

