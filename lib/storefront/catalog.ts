export type Product = {
  name: string
  price: number
  oldPrice?: number
  image: string
  rating: string
  reviews: number
  badge?: string
  color: string
  brand: string
}

export const mockProducts: Product[] = [
  { name: "Gradient Graphic T-shirt", price: 145, oldPrice: 180, image: "/products/one-life-front.png", rating: "4.5", reviews: 112, badge: "-20%", color: "#fff", brand: "Nike" },
  { name: "Polo with Tipping Details", price: 180, image: "/products/one-life-back.png", rating: "4.5", reviews: 88, color: "#000", brand: "Zara" },
  { name: "Black Striped T-shirt", price: 120, oldPrice: 160, image: "/products/one-life-model.png", rating: "5.0", reviews: 74, badge: "-30%", color: "#ef169a", brand: "Gucci" },
  { name: "Skinny Fit Jeans", price: 240, oldPrice: 260, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85", rating: "4.5", reviews: 95, color: "#243fe7", brand: "Prada" },
  { name: "Checkered Shirt", price: 180, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=85", rating: "4.5", reviews: 61, color: "#16a34a", brand: "Calvin Klein" },
  { name: "Sleeve Striped T-shirt", price: 130, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85", rating: "4.0", reviews: 46, color: "#20bfdb", brand: "Nike" },
  { name: "Vertical Striped Shirt", price: 212, oldPrice: 242, image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=85", rating: "4.8", reviews: 105, badge: "-20%", color: "#f97316", brand: "Zara" },
  { name: "Courage Graphic T-shirt", price: 145, image: "/products/one-life-front.png", rating: "4.5", reviews: 52, color: "#7917e8", brand: "Gucci" },
  { name: "Loose Fit Bermuda Shorts", price: 80, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85", rating: "4.2", reviews: 39, color: "#f3d313", brand: "Prada" },
]

export const colors = ["#16a34a", "#ef1b22", "#f3d313", "#f97316", "#20bfdb", "#243fe7", "#7917e8", "#ef169a", "#fff", "#000"]
export const brands = ["Nike", "Zara", "Gucci", "Prada", "Calvin Klein"]
export const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]
export const categoryTree = [{ name: "T-shirts", children: ["Graphic T-shirts", "Plain T-shirts"] }, { name: "Shirts", children: ["Casual Shirts", "Formal Shirts"] }, { name: "Jeans", children: [] }, { name: "Hoodies", children: [] }, { name: "Shorts", children: ["Bermuda Shorts", "Active Shorts"] }]
