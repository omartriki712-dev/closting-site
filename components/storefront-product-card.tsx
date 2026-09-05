"use client"

import { ShoppingCart, Star } from "lucide-react"
import type { Product } from "@/lib/storefront/catalog"
import { addProductToCart } from "@/lib/storefront/cart"

export function StorefrontProductCard({ product }: { product: Product }) {
  return <article className="group block">
    <a href="/product" className="block"><div className="relative aspect-square overflow-hidden rounded-xl bg-[#f0f0f0]"><img src={product.image} alt={product.name} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" /></div><h2 className="mt-3 text-sm font-bold leading-tight">{product.name}</h2></a>
    <div className="mt-2 flex items-center gap-1 text-xs"><span className="flex text-amber-500">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" />)}</span><span className="text-muted-foreground">{product.rating}/5</span><span className="text-muted-foreground">({product.reviews})</span></div>
    <p className="mt-2 text-base font-bold">${product.price} {product.oldPrice && <><span className="ml-1 text-sm text-muted-foreground line-through">${product.oldPrice}</span><span className="ml-2 rounded-full bg-red-100 px-2 py-1 text-[10px] font-normal text-red-500">{product.badge}</span></>}</p>
    <button type="button" onClick={() => addProductToCart(product)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-2.5 text-xs font-semibold text-white"><ShoppingCart size={15} /> Add to Cart</button>
  </article>
}
