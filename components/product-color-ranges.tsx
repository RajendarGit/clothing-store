import React, { FC } from "react";

interface ProductColorRangesProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ProductColorRanges: FC<ProductColorRangesProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <>
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full border-2 ${
            selectedColor === color ? "border-primary" : "border-gray-200 dark:border-gray-300"
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
          aria-label={`Select ${color} color`}
        />
      ))}
    </>
  );
};

export default ProductColorRanges;

