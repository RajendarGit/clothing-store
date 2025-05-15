import Link from "next/link"
import Image from "next/image"

export default function Categories() {
  const categories = [
    {
      name: "Women",
      image: "floral-summer-dress.jpg",
      link: "/women",
    },
    {
      name: "Men",
      image: "casual-tshirt-men.jpg",
      link: "/men",
    },
    {
      name: "Kids",
      image: "kid-denim.jpg",
      link: "/kids",
    },
    {
      name: "Accessories",
      image: "leather.jpg",
      link: "/accessories",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.name}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
