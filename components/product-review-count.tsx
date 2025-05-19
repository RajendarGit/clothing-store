import React from "react";

interface ProductReviewCountProps {
  product: {
    reviews: number;
  };
}

const ProductReviewCount: React.FC<ProductReviewCountProps> = ({ product }) => {
  return <>({product.reviews} reviews)</>;
};

export default ProductReviewCount;

