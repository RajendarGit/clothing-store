import Link from "next/link";
import CategoriesCard from "./categories-card";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoriesCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
