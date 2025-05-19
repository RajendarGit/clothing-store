import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

interface ProductDescriptionDetailsReviewProps {
  product: {
    description?: string;
  };
}

const ProductDescriptionDetailsReview: React.FC<
  ProductDescriptionDetailsReviewProps
> = ({ product }) => {
  return (
    <Tabs defaultValue="description">
      <TabsList className="w-full justify-start border-b rounded-none">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="py-4">
        <div className="prose max-w-none">
          <p>
            {product.description ||
              "No description available for this product."}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="details" className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Material:</span> Cotton, Polyester
              </li>
              <li>
                <span className="font-medium">Pattern:</span> Solid
              </li>
              <li>
                <span className="font-medium">Care:</span> Machine wash cold
              </li>
              <li>
                <span className="font-medium">Origin:</span> Imported
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Shipping Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Delivery:</span> 3-5 business days
              </li>
              <li>
                <span className="font-medium">Free Shipping:</span> On orders
                over $50
              </li>
              <li>
                <span className="font-medium">Returns:</span> 30 days return
                policy
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="reviews" className="py-4">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Customer Reviews</h3>
            <Button>Write a Review</Button>
          </div>

          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductDescriptionDetailsReview;

