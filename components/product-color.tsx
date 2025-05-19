import React from 'react'

interface ProductColorProps {
  colors: string[]
}

const ProductColor: React.FC<ProductColorProps> = ({ colors }) => {
  return (
    <>
      {colors.map((color) => (
        <div
          key={color}
          className="w-4 h-4 rounded-full border"
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  );
}

export default ProductColor
