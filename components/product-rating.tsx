import { Star } from "lucide-react";
import React from "react";

interface ProductRatingProps {
  rating: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </>
  );
};

export default ProductRating;

