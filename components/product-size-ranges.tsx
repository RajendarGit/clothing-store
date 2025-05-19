import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

type ProductSizeRangesProps = {
  value: string;
  onValueChange: (value: string) => void;
};

const ProductSizeRanges: React.FC<ProductSizeRangesProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <RadioGroup value={value} onValueChange={onValueChange} className="flex flex-wrap gap-2">
      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
        <div key={size} className="flex items-center">
          <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
          <Label
            htmlFor={`size-${size}`}
            className={`px-3 py-2 rounded-md border cursor-pointer ${
              value === size ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            {size}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default ProductSizeRanges;

