'use client'

import { StorefrontFrame } from '@/components/storefront-header'

const brands = [
  { slug: 'versace', name: 'Versace', description: 'Luxury Italian fashion brand known for bold colors and patterns.', productCount: 4, image: '/products/category-tshirts.png' },
  { slug: 'zara', name: 'Zara', description: 'Contemporary Spanish brand offering trendy styles and fast fashion.', productCount: 4, image: '/products/category-shirts.png' },
  { slug: 'gucci', name: 'Gucci', description: 'Iconic Italian luxury brand famous for sophisticated designs.', productCount: 4, image: '/products/category-jeans.png' },
  { slug: 'prada', name: 'Prada', description: 'Premium Italian fashion house known for minimalist elegance.', productCount: 4, image: '/products/category-hoodies.png' },
  { slug: 'calvin-klein', name: 'Calvin Klein', description: 'American brand renowned for clean lines and timeless aesthetics.', productCount: 4, image: '/products/category-shorts.png' },
  { slug: 'nike', name: 'Nike', description: 'Leading sportswear brand combining performance and style.', productCount: 4, image: '/products/category-dress-style.png' },
]

export default function BrandsPage() {
  return <StorefrontFrame>
    <div className="mx-auto max-w-[1180px] py-8">
      <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground" aria-label="Breadcrumb"><a href="/" className="hover:underline">Home</a><span>›</span><span className="text-foreground">Brands</span></nav>
      <div className="mb-8"><h1 className="text-4xl font-black tracking-tight">Our Brands</h1><p className="mt-2 text-base text-muted-foreground">Discover fashion from the world&apos;s most renowned brands.</p></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => <a key={brand.slug} href={`/brands/${brand.slug}`} className="group block overflow-hidden rounded-2xl border border-[#eee] transition-shadow duration-300 hover:shadow-lg">
          <div className="relative aspect-video overflow-hidden bg-[#f0f0f0]"><img src={brand.image} alt={brand.name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" /></div>
          <div className="p-6"><h2 className="text-2xl font-bold">{brand.name}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brand.description}</p><div className="mt-4 inline-block rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">{brand.productCount} Products</div></div>
        </a>)}
      </div>
    </div>
  </StorefrontFrame>
}
