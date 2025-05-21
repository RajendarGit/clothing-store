import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import ProductGrid from "./product-grid";
import { Product } from "@/types/product";

interface SaleTabContentProps {
  saleProducts: Product[];
  upTo30: Product[];
  upTo50: Product[];
  over50: Product[];
}

const SaleTabContent: React.FC<SaleTabContentProps> = ({
  saleProducts,
  upTo30,
  upTo50,
  over50,
}) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="w-full justify-start mb-8 overflow-auto">
        <TabsTrigger value="all">
          All Sale Items ({saleProducts.length})
        </TabsTrigger>
        <TabsTrigger value="upto30">
          Up to 30% Off ({upTo30.length})
        </TabsTrigger>
        <TabsTrigger value="upto50">
          Up to 50% Off ({upTo50.length})
        </TabsTrigger>
        <TabsTrigger value="over50">Over 50% Off ({over50.length})</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="#sale-products"
            className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/women-sale.jpg`}
              alt="Women's Sale"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <Badge variant="destructive" className="mb-2">
                Up to 70% Off
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Women's Sale
              </h3>
              <span className="text-white/80 group-hover:text-white transition-colors flex items-center">
                Shop Now
                <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          <Link
            href="#sale-products"
            className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/men-sale.jpg`}
              alt="Men's Sale"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <Badge variant="destructive" className="mb-2">
                Up to 60% Off
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Men's Sale</h3>
              <span className="text-white/80 group-hover:text-white transition-colors flex items-center">
                Shop Now
                <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          <Link
            href="#sale-products"
            className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner/assessories-sale.jpg`}
              alt="Accessories Sale"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <Badge variant="destructive" className="mb-2">
                Up to 50% Off
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Accessories Sale
              </h3>
              <span className="text-white/80 group-hover:text-white transition-colors flex items-center">
                Shop Now
                <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </TabsContent>
      <TabsContent value="upto30">
        <ProductGrid products={upTo30} />
      </TabsContent>
      <TabsContent value="upto50">
        <ProductGrid products={upTo50} />
      </TabsContent>
      <TabsContent value="over50">
        <ProductGrid products={over50} />
      </TabsContent>
    </Tabs>
  );
};

export default SaleTabContent;

