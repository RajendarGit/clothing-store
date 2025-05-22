import { CategorizedCollections } from "@/types/collections";

export const collections: CategorizedCollections = {
  featured: [
    {
      id: "summer-essentials",
      title: "Summer Essentials",
      description: "Discover our curated selection of lightweight fabrics and vibrant colors perfect for warm days.",
      image: "summer.jpg",
      link: "/collections/summer-essentials",
      featured: true,
    },
    {
      id: "business-casual",
      title: "Business Casual",
      description: "Elevate your office style with our collection of sophisticated yet comfortable workwear.",
      image: "business.jpg",
      link: "/collections/business-casual",
      featured: true,
    },
  ],
  seasonal: [
    {
      id: "spring",
      title: "Spring Collection",
      description: "Fresh styles for the new season.",
      image: "spring-collection.jpg",
      link: "/collections/spring",
      category: "seasonal",
    },
    {
      id: "summer",
      title: "Summer Collection",
      description: "Light and breezy styles for hot days.",
      image: "summer-collection.jpg",
      link: "/collections/summer",
      category: "seasonal",
    },
    {
      id: "fall",
      title: "Fall Collection",
      description: "Warm and cozy styles for cooler days.",
      image: "fall-collection.jpg",
      link: "/collections/fall",
      category: "seasonal",
    },
    {
      id: "winter",
      title: "Winter Collection",
      description: "Stay stylish and warm this winter.",
      image: "winter-collection.jpg",
      link: "/collections/winter",
      category: "seasonal",
    },
  ],
  thematic: [
    {
      id: "athleisure",
      title: "Athleisure",
      description: "Comfortable, stylish activewear for your workout and beyond.",
      image: "athleisure.jpg",
      link: "/collections/athleisure",
      category: "thematic",
    },
    {
      id: "evening-wear",
      title: "Evening Wear",
      description: "Elegant dresses and suits for special occasions.",
      image: "evening-wear.jpg",
      link: "/collections/evening-wear",
      category: "thematic",
    },
    {
      id: "minimalist",
      title: "Minimalist",
      description: "Clean lines and neutral colors for a timeless wardrobe.",
      image: "minimalist.jpg",
      link: "/collections/minimalist",
      category: "thematic",
    },
  ],
  special: [
    {
      id: "new-arrivals",
      title: "New Arrivals",
      description: "The latest additions to our collection.",
      image: "new-arrival.jpg",
      link: "/new-arrivals",
      category: "special",
    },
    {
      id: "bestsellers",
      title: "Bestsellers",
      description: "Our most popular styles loved by customers.",
      image: "bestsellers.jpg",
      link: "/collections/bestsellers",
      category: "special",
    },
    {
      id: "sale",
      title: "Sale",
      description: "Special discounts on selected items.",
      image: "sale.jpg",
      link: "/sale",
      category: "special",
    },
  ],
  sarees: [
    {
      id: "sarees",
      title: "Sarees",
      description: "Exquisite sarees for special occasions.",
      image: "sarees.jpg",
      link: "/sarees",
      category: "special",
    },
  ]
};
