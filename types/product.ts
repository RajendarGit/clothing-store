export interface Product {
  id: number
  name: string
  description?: string
  price: number
  image: string
  category: string
  subcategory?: string
  colors: string[]
  sizes?: string[]
  isNew?: boolean
  discount: number
  rating: number
  reviews: number
  quantity?: number
  selectedColor?: string
  selectedSize?: string
}
