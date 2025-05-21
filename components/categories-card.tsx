import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoriesCardProps {
  category: {
    name: string;
    image: string;
    link: string;
  };
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ category }) => {
  return (
    <Link
      key={category.name}
        href={`/category/${category.name.toLowerCase()}`}
      className="group relative overflow-hidden rounded-lg h-80 block"
    >
      <Image
        src={`/assets/images/${category.image || "placeholder.svg"}`}
        alt={category.name || "Category Image"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
        <span className="text-white/80 group-hover:text-white transition-colors flex items-center">
          Shop Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoriesCard;
