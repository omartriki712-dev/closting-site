"use client"

import { useMemo, useState } from "react"
import { Check, ChevronDown, ChevronRight, SlidersHorizontal, Star, X } from "lucide-react"
import { StorefrontFrame } from "@/components/storefront-header"

type Product = { name: string; price: number; oldPrice?: number; image: string; rating: string; reviews: number; badge?: string }

const mockProducts: Product[] = [
  { name: "Gradient Graphic T-shirt", price: 145, oldPrice: 180, image: "/products/one-life-front.png", rating: "4.5", reviews: 112, badge: "-20%" },
  { name: "Polo with Tipping Details", price: 180, image: "/products/one-life-back.png", rating: "4.5", reviews: 88 },
  { name: "Black Striped T-shirt", price: 120, oldPrice: 160, image: "/products/one-life-model.png", rating: "5.0", reviews: 74, badge: "-30%" },
  { name: "Skinny Fit Jeans", price: 240, oldPrice: 260, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85", rating: "4.5", reviews: 95 },
  { name: "Checkered Shirt", price: 180, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=700&q=85", rating: "4.5", reviews: 61 },
  { name: "Sleeve Striped T-shirt", price: 130, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85", rating: "4.0", reviews: 46 },
  { name: "Vertical Striped Shirt", price: 212, oldPrice: 242, image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=85", rating: "4.8", reviews: 105, badge: "-20%" },
  { name: "Courage Graphic T-shirt", price: 145, image: "/products/one-life-front.png", rating: "4.5", reviews: 52 },
  { name: "Loose Fit Bermuda Shorts", price: 80, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85", rating: "4.2", reviews: 39 },
]

const colors = ["#16a34a", "#ef1b22", "#f3d313", "#f97316", "#20bfdb", "#243fe7", "#7917e8", "#ef169a", "#fff", "#000"]
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"]

function ProductCard({ product }: { product: Product }) {
  return <a href="/product" className="group block">
    <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0f0f0]"><img src={product.image} alt={product.name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" /></div>
    <h2 className="mt-3 text-sm font-bold leading-tight">{product.name}</h2>
    <div className="mt-2 flex items-center gap-1 text-xs"><span className="flex text-amber-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" />)}</span><span className="text-muted-foreground">{product.rating}/5</span><span className="text-muted-foreground">({product.reviews})</span></div>
    <p className="mt-2 text-base font-bold">${product.price} {product.oldPrice && <><span className="ml-1 text-sm text-muted-foreground line-through">${product.oldPrice}</span><span className="ml-2 rounded-full bg-red-100 px-2 py-1 text-[10px] font-normal text-red-500">{product.badge}</span></>}</p>
  </a>
}

function FilterPanel({ onClose }: { onClose?: () => void }) {
  const [selectedSize, setSelectedSize] = useState("Large")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const categoryTree = [{ name: "T-shirts", children: ["Graphic T-shirts", "Plain T-shirts"] }, { name: "Shirts", children: ["Casual Shirts", "Formal Shirts"] }, { name: "Jeans", children: [] }, { name: "Hoodies", children: [] }, { name: "Shorts", children: ["Bermuda Shorts", "Active Shorts"] }]
  const toggleCategory = (category: string) => setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category])
  const toggleExpanded = (category: string) => setExpandedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category])
  const categoryButton = (item: string, nested = false) => <button type="button" key={item} onClick={() => toggleCategory(item)} className={`flex w-full items-center gap-2 border-b border-[#eee] py-2 text-left text-xs ${nested ? "pl-5 text-muted-foreground" : "text-foreground"}`}><span className={`flex size-4 items-center justify-center rounded border ${selectedCategories.includes(item) ? "border-black bg-black text-white" : "border-[#bbb]"}`}>{selectedCategories.includes(item) && <Check size={11} />}</span>{item}</button>
  return <div className="flex flex-col gap-5 text-sm">
    <div><div className="mb-2 flex items-center justify-between font-bold">Categories <ChevronDown size={15} /></div>{categoryTree.map((category) => <div key={category.name}><div className="flex items-center"><div className="min-w-0 flex-1">{categoryButton(category.name)}</div>{category.children.length > 0 && <button type="button" onClick={() => toggleExpanded(category.name)} aria-label={`Show ${category.name} subcategories`} className="p-2 text-muted-foreground"><ChevronRight size={15} className={`transition-transform ${expandedCategories.includes(category.name) ? "rotate-90" : ""}`} /></button>}</div>{expandedCategories.includes(category.name) && <div>{category.children.map((child) => categoryButton(child, true))}</div>}</div>)}</div>
    <div className="border-t border-[#eee] pt-4"><div className="mb-3 flex items-center justify-between font-bold">Price <ChevronDown size={15} /></div><input aria-label="Price range" type="range" min="50" max="300" defaultValue="240" className="w-full accent-black" /><div className="flex justify-between text-xs text-muted-foreground"><span>$50</span><span>$300</span></div></div>
    <div className="border-t border-[#eee] pt-4"><div className="mb-3 flex items-center justify-between font-bold">Colors <ChevronDown size={15} /></div><div className="flex flex-wrap gap-3">{colors.map((color) => <button key={color} aria-label={`Color ${color}`} className="size-6 rounded-full border border-[#ddd]" style={{ backgroundColor: color }} />)}</div></div>
    <div className="border-t border-[#eee] pt-4"><div className="mb-3 flex items-center justify-between font-bold">Size <ChevronDown size={15} /></div><div className="flex flex-wrap gap-2">{sizes.map((size) => <button key={size} onClick={() => setSelectedSize(size)} className={`rounded-full px-3 py-2 text-[11px] ${selectedSize === size ? "bg-black text-white" : "bg-[#f1f1f1] text-muted-foreground"}`}>{size}</button>)}</div></div>
    <div className="border-t border-[#eee] pt-4"><div className="mb-2 flex items-center justify-between font-bold">Dress Style <ChevronDown size={15} /></div>{["Casual", "Formal", "Party", "Gym"].map((item) => <button key={item} className="flex w-full justify-between py-2 text-left text-xs text-muted-foreground">{item}<ChevronRight size={14} /></button>)}</div>
    {onClose && <button onClick={onClose} className="mt-auto rounded-full bg-black py-3 text-xs text-white">Apply Filter</button>}
  </div>
}

export default function CategoryPage() {
  const [sort, setSort] = useState("Most Popular")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const sortedProducts = useMemo(() => sort === "Price: Low to High" ? [...mockProducts].sort((a, b) => a.price - b.price) : mockProducts, [sort])
  return <StorefrontFrame>
    <div className="mx-auto max-w-[1180px]">
      <nav className="flex items-center gap-2 py-5 text-xs text-muted-foreground" aria-label="Breadcrumb"><span>Home</span><span>›</span><span className="text-foreground">Casual</span></nav>
      <div className="mb-6 flex items-center justify-between gap-4"><div><h1 className="text-3xl font-black tracking-tight">Casual</h1><p className="mt-2 text-sm text-muted-foreground">Explore our collection of casual styles made for everyday comfort.</p></div><div className="flex items-center gap-4 text-xs text-muted-foreground"><span className="hidden sm:inline">Showing 1-9 of {mockProducts.length} Products</span><label className="flex items-center gap-1 text-foreground">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent font-bold outline-none"><option>Most Popular</option><option>Price: Low to High</option></select></label></div></div>
      <button type="button" onClick={() => setFiltersOpen(true)} className="mb-5 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-semibold text-white lg:hidden"><SlidersHorizontal size={16} /> Filters</button>
      <div className="grid gap-8 lg:grid-cols-[210px_1fr]"><aside className="hidden rounded-xl border border-[#eee] p-5 lg:block"><div className="mb-5 flex items-center justify-between text-sm font-bold">Filters <SlidersHorizontal size={16} /></div><FilterPanel /></aside><section className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:gap-x-6">{sortedProducts.map((product) => <ProductCard key={product.name} product={product} />)}</section></div>
      {filtersOpen && <div className="fixed inset-0 z-50 bg-white p-4 lg:hidden"><div className="mb-5 flex items-center justify-between border-b border-[#eee] pb-4"><h2 className="text-base font-bold">Filters</h2><button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close filters"><X size={20} /></button></div><FilterPanel onClose={() => setFiltersOpen(false)} /></div>}
    </div>
  </StorefrontFrame>
}
