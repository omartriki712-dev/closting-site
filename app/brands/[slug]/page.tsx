'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { StorefrontFrame } from '@/components/storefront-header'
import { StorefrontProductCard } from '@/components/storefront-product-card'

const brands = [
  { slug: 'versace', name: 'Versace', description: 'Luxury Italian fashion brand known for bold colors and patterns.', productCount: 24 },
  { slug: 'zara', name: 'Zara', description: 'Contemporary Spanish brand offering trendy styles and fast fashion.', productCount: 18 },
  { slug: 'gucci', name: 'Gucci', description: 'Iconic Italian luxury brand famous for sophisticated designs.', productCount: 31 },
  { slug: 'prada', name: 'Prada', description: 'Premium Italian fashion house known for minimalist elegance.', productCount: 27 },
  { slug: 'calvin-klein', name: 'Calvin Klein', description: 'American brand renowned for clean lines and timeless aesthetics.', productCount: 22 },
  { slug: 'nike', name: 'Nike', description: 'Leading sportswear brand combining performance and style.', productCount: 35 },
]

const brandProducts = {
  versace: [
    { id: 1, name: 'Versace Classic Polo', price: 220, image: '/products/arrival-tape-shirt.png', rating: '4.8', reviews: 124 },
    { id: 2, name: 'Versace Bold Stripe Shirt', price: 280, image: '/products/arrival-shirt.png', rating: '4.7', reviews: 98 },
    { id: 3, name: 'Versace Premium Jeans', price: 320, image: '/products/arrival-jeans.png', rating: '4.9', reviews: 156 },
    { id: 4, name: 'Versace Graphic Tee', price: 160, image: '/products/top-graphic-shirt.png', rating: '4.6', reviews: 87 },
  ],
  zara: [
    { id: 5, name: 'Zara Modern Blazer', price: 180, image: '/products/arrival-shirt.png', rating: '4.5', reviews: 92 },
    { id: 6, name: 'Zara Striped Shirt', price: 95, image: '/products/arrival-striped.png', rating: '4.4', reviews: 68 },
    { id: 7, name: 'Zara Slim Fit Jeans', price: 120, image: '/products/top-faded-jeans.png', rating: '4.6', reviews: 104 },
    { id: 8, name: 'Zara Casual Tee', price: 45, image: '/products/top-graphic-shirt.png', rating: '4.3', reviews: 71 },
  ],
  gucci: [
    { id: 9, name: 'Gucci Luxury Shirt', price: 450, image: '/products/arrival-shirt.png', rating: '4.9', reviews: 203 },
    { id: 10, name: 'Gucci Heritage Polo', price: 380, image: '/products/arrival-tape-shirt.png', rating: '4.8', reviews: 178 },
    { id: 11, name: 'Gucci Designer Jeans', price: 520, image: '/products/arrival-jeans.png', rating: '4.9', reviews: 167 },
    { id: 12, name: 'Gucci Embroidered Tee', price: 280, image: '/products/top-striped-shirt.png', rating: '4.7', reviews: 145 },
  ],
  prada: [
    { id: 13, name: 'Prada Minimalist Shirt', price: 360, image: '/products/arrival-shirt.png', rating: '4.8', reviews: 156 },
    { id: 14, name: 'Prada Silk Blend Top', price: 420, image: '/products/arrival-tape-shirt.png', rating: '4.9', reviews: 189 },
    { id: 15, name: 'Prada Tailored Jeans', price: 480, image: '/products/arrival-jeans.png', rating: '4.8', reviews: 134 },
    { id: 16, name: 'Prada Classic Tee', price: 220, image: '/products/top-graphic-shirt.png', rating: '4.7', reviews: 112 },
  ],
  'calvin-klein': [
    { id: 17, name: 'CK Essential Tee', price: 65, image: '/products/top-graphic-shirt.png', rating: '4.6', reviews: 298 },
    { id: 18, name: 'CK Minimalist Shirt', price: 135, image: '/products/arrival-shirt.png', rating: '4.5', reviews: 187 },
    { id: 19, name: 'CK Modern Jeans', price: 140, image: '/products/arrival-jeans.png', rating: '4.7', reviews: 245 },
    { id: 20, name: 'CK Striped Polo', price: 95, image: '/products/arrival-striped.png', rating: '4.4', reviews: 156 },
  ],
  nike: [
    { id: 21, name: 'Nike Dri-FIT Shirt', price: 75, image: '/products/arrival-tape-shirt.png', rating: '4.7', reviews: 412 },
    { id: 22, name: 'Nike Performance Shorts', price: 85, image: '/products/top-shorts.png', rating: '4.6', reviews: 334 },
    { id: 23, name: 'Nike Training Tee', price: 55, image: '/products/top-graphic-shirt.png', rating: '4.5', reviews: 289 },
    { id: 24, name: 'Nike Joggers', price: 95, image: '/products/arrival-striped.png', rating: '4.8', reviews: 378 },
  ],
}

export default function BrandDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const brand = brands.find((b) => b.slug === slug)
  if (!brand) notFound()
  const products = brandProducts[slug as keyof typeof brandProducts] || []
  return <StorefrontFrame>
    <div className="mx-auto max-w-[1180px] py-8">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb"><a href="/" className="hover:underline">Home</a><span>›</span><a href="/brands" className="hover:underline">Brands</a><span>›</span><span className="text-foreground">{brand.name}</span></nav>
      <div className="mb-10 border-b border-[#eee] pb-8"><h1 className="text-4xl font-black tracking-tight">{brand.name}</h1><p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{brand.description}</p><div className="mt-6 flex items-center gap-4"><span className="text-sm font-semibold">{products.length} Products Available</span></div></div>
      <section className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">{products.map((product) => <StorefrontProductCard key={product.id} product={{ ...product, color: "#000", brand: brand.name }} />)}</section>
    </div>
  </StorefrontFrame>
}
