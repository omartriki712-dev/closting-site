'use client'

import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { StorefrontFrame } from '@/components/storefront-header'
import { toast } from 'sonner'

const catalogImage = '/products/home-catalog.png'
const heroImage = '/products/home-hero.png'
const styleImage = '/products/home-style.png'
const brandLogos = [
  ['versace', 'Versace'],
  ['zara', 'Zara'],
  ['gucci', 'Gucci'],
  ['prada', 'Prada'],
  ['calvinklein', 'Calvin Klein'],
]
const products = [
  ['T-shirt with Tape Details', '$120', '50% 50%', '/products/arrival-tape-shirt.png'], ['Skinny Fit Jeans', '$240', '50% 50%', '/products/arrival-jeans.png'], ['Checkered Shirt', '$180', '50% 50%', '/products/arrival-shirt.png'], ['Sleeve Striped T-shirt', '$130', '50% 50%', '/products/arrival-striped.png'],
]
const topSelling = [['Vertical Striped Shirt', '$212', '50% 50%', '/products/top-striped-shirt.png'], ['Courage Graphic T-shirt', '$145', '50% 50%', '/products/top-graphic-shirt.png'], ['Loose Fit Bermuda Shorts', '$80', '50% 50%', '/products/top-shorts.png'], ['Faded Skinny Jeans', '$210', '50% 50%', '/products/top-faded-jeans.png']]

const customerReviews = [['Sarah M.', 'The quality and fit are incredible. I found pieces that feel made for me.'], ['Alex K.', 'Fast delivery, beautiful details, and an easy shopping experience.'], ['James L.', 'SHOP.CO is now my first stop for everyday essentials.']]

function ReviewCarousel() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % customerReviews.length), 4200); return () => window.clearInterval(timer) }, [])
  return <section className="py-10"><div className="flex items-center justify-between"><h2 className="text-2xl font-black tracking-[-1px]">OUR HAPPY CUSTOMERS</h2><div className="flex gap-2"><button aria-label="Previous customer review" onClick={() => setActive((active - 1 + customerReviews.length) % customerReviews.length)}><ChevronLeft size={18} /></button><button aria-label="Next customer review" onClick={() => setActive((active + 1) % customerReviews.length)}><ChevronRight size={18} /></button></div></div><div className="mt-5 overflow-hidden"><blockquote className="rounded-lg border border-[#ddd] p-5 text-xs leading-5 transition-all duration-500"><div className="text-amber-500">★★★★★</div><b className="mt-2 block">{customerReviews[active][0]}</b><p className="mt-2 text-[#666]">{customerReviews[active][1]}</p></blockquote></div><div className="mt-4 flex justify-center gap-2">{customerReviews.map((review, index) => <button key={review[0]} aria-label={`Show review ${index + 1}`} onClick={() => setActive(index)} className={`size-2 rounded-full ${active === index ? 'bg-black' : 'bg-[#ddd]'}`} />)}</div></section>
}

function ProductCard({ item }: { item: string[] }) { const addToCart = () => { const match = document.cookie.match(/(?:^|; )shop_cart=([^;]*)/); const cart = match ? JSON.parse(decodeURIComponent(match[1])) : []; const next = [...cart, { id: Date.now(), name: item[0], price: Number(item[1].replace('$', '')), image: item[3] || catalogImage, quantity: 1 }]; document.cookie = `shop_cart=${encodeURIComponent(JSON.stringify(next))}; path=/; max-age=2592000`; window.dispatchEvent(new Event('cart-updated')); toast.success(`${item[0]} added to your cart`, { description: 'You can review your items from the cart.', action: { label: 'View cart', onClick: () => { window.location.href = '/cart' } } }); }; return <article className="min-w-0"><a href="/product" className="block"><div className="aspect-square overflow-hidden rounded-lg bg-[#f1f1f1]"><img src={item[3] || catalogImage} alt={item[0]} className="h-full w-full object-contain p-3" style={{ objectPosition: item[2] }} /></div><h3 className="mt-2 truncate text-sm font-bold sm:text-base">{item[0]}</h3></a><div className="mt-2 flex items-center gap-1 text-xs text-amber-500 sm:text-sm"><Star size={14} fill="currentColor" /> <span className="text-[#777]">4.5/5</span></div><p className="mt-1 text-sm font-bold sm:text-base">{item[1]}</p><button type="button" onClick={addToCart} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-2.5 text-xs font-semibold text-white sm:text-sm"><ShoppingCart size={15} /> Add to Cart</button></article> }

export default function HomePage() { return <StorefrontFrame>
  <section className="relative -mx-0 overflow-hidden bg-[#f2f0ed] px-4 py-8 sm:-mx-12 sm:px-12 md:min-h-[520px] md:py-16"><div className="relative z-10 max-w-[430px]"><p className="mb-3 text-xs font-semibold uppercase tracking-[2px] sm:text-sm">New season / 2024</p><h1 className="text-balance text-[36px] font-black leading-[.95] tracking-[-1.5px] sm:text-[58px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1><p className="mt-4 max-w-[370px] text-sm leading-6 text-[#666] sm:text-base">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.</p><a href="/shop" className="mt-6 inline-flex items-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white">Shop Now <ArrowRight className="ml-2" size={14} /></a><div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-center text-xs leading-5 text-[#555] sm:flex sm:gap-5 sm:text-left sm:text-sm"><span><b className="block text-lg text-black">200+</b>International Brands</span><span><b className="block text-lg text-black">2,000+</b>High-Quality Products</span><span className="col-span-2 sm:col-span-1"><b className="block text-lg text-black">30,000+</b>Happy Customers</span></div></div><img loading="eager" src={heroImage} alt="SHOP.CO style collection" className="relative mt-6 block h-[320px] w-full object-contain object-[58%_38%] sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 sm:h-full sm:w-[50%] sm:max-w-[50%] sm:object-right md:block" /></section>
  <div className="-mx-0 grid grid-cols-2 items-center justify-items-center gap-5 bg-black px-6 py-5 sm:-mx-12 sm:grid-cols-5 sm:gap-3">{brandLogos.map(([slug, name]) => <div key={slug} aria-label={`${name} logo`} className="font-sans text-sm font-bold tracking-tight text-white sm:text-base">{name}</div>)}</div>
  <section className="py-10"><h2 className="text-center text-2xl font-black tracking-[-1px]">NEW ARRIVALS</h2><div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">{products.map(item => <ProductCard item={item} key={item[0]} />)}</div><a href="/shop" className="mx-auto mt-7 block w-fit rounded-full border border-[#ddd] px-8 py-2 text-xs">View All</a></section>
  <section className="border-t border-[#eee] py-10"><h2 className="text-center text-2xl font-black tracking-[-1px]">TOP SELLING</h2><div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">{topSelling.map(item => <ProductCard item={item} key={item[0]} />)}</div><a href="/shop" className="mx-auto mt-7 block w-fit rounded-full border border-[#ddd] px-8 py-2 text-xs">View All</a></section>
  <section className="rounded-2xl bg-[#f1f1f1] p-6 sm:p-10"><h2 className="text-center text-2xl font-black tracking-[-1px] sm:text-3xl">BROWSE BY CATEGORY</h2><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[['T-shirts','t-shirts','/products/category-tshirts.png'],['Shirts','shirts','/products/category-shirts.png'],['Jeans','jeans','/products/category-jeans.png'],['Hoodies','hoodies','/products/category-hoodies.png'],['Shorts','shorts','/products/category-shorts.png'],['Dress Style','dress-style','/products/category-dress-style.png']].map(([name, slug, image]) => <a key={slug} href={`/category/${slug}`} className="relative h-36 overflow-hidden rounded-lg bg-white p-5 text-base font-bold sm:h-44 sm:text-lg"><span className="relative z-10">{name}</span><img src={image} alt={`${name} category`} className="absolute inset-0 h-full w-full object-contain opacity-75 transition-transform duration-300 hover:scale-105" /></a>)}</div></section>
  <ReviewCarousel />
  </StorefrontFrame> }
