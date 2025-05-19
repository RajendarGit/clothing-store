import React, { FC } from "react";

interface ProductDiscountWithPriceProps {
  price: number;
  discount: number;
}

const ProductDiscountWithPrice: FC<ProductDiscountWithPriceProps> = ({ price, discount }) => {
  return (
    <>
      {discount > 0 ? (
        <>
          <span className="text-3xl font-bold text-primary">
            ${(price * (1 - discount / 100)).toFixed(2)}
          </span>
          <span className="ml-2 text-lg text-muted-foreground line-through">
            ${price.toFixed(2)}
          </span>
          <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-200">
            {discount}% OFF
          </span>
        </>
      ) : (
        <span className="text-3xl font-bold">${price.toFixed(2)}</span>
      )}
    </>
  );
};

export default ProductDiscountWithPrice;

