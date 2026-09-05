"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Minus, Plus, SlidersHorizontal, Star } from "lucide-react"
import { StorefrontFrame } from "@/components/storefront-header"

const images = [
  "/products/one-life-front.png",
  "/products/one-life-back.png",
  "/products/one-life-model.png",
]

const reviews = [
  ["Samantha D.", "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail."],
  ["Alex M.", "The fit exceeded my expectations! The colors are vibrant and the print quality is top-notch."],
  ["Ethan R.", "This t-shirt is a must-have for anyone who appreciates good design. The material feels soft and high quality."],
  ["Olivia P.", "As a UI/UX enthusiast, I value simplicity and functionality. This shirt balances both beautifully."],
  ["Liam K.", "This is a fusion of comfort and creativity. The fabric is soft and the design speaks volumes."],
  ["Ava H.", "I am not just wearing a t-shirt; I am wearing a piece of design philosophy."],
]

function ReviewCarousel() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((value) => (value + 1) % reviews.length), 4500); return () => window.clearInterval(timer) }, [])
  const review = reviews[active]
  return <div className="mt-3"><article className="rounded-xl border border-border p-4 transition-all duration-500"><div className="flex items-center justify-between"><span className="text-[#f5ac24]">★★★★★</span><span className="text-xs text-muted-foreground">⋯</span></div><p className="mt-2 text-sm font-semibold">{review[0]} <span className="text-green-600">●</span></p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">&quot;{review[1]}&quot;</p><p className="mt-3 text-xs text-muted-foreground">Posted on August {14 + active}, 2023</p></article><div className="mt-4 flex items-center justify-center gap-3"><button aria-label="Previous client comment" onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}><ArrowLeft size={16} /></button><div className="flex gap-2">{reviews.map((item, index) => <button key={item[0]} aria-label={`Show comment ${index + 1}`} onClick={() => setActive(index)} className={`size-2 rounded-full ${active === index ? 'bg-black' : 'bg-[#ddd]'}`} />)}</div><button aria-label="Next client comment" onClick={() => setActive((active + 1) % reviews.length)}><ArrowRight size={16} /></button></div></div>
}

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("olive")
  const [size, setSize] = useState("Large")
  const [tab, setTab] = useState("reviews")

  const stepImage = (direction: number) => {
    setActiveImage((current) => (current + direction + images.length) % images.length)
  }

  return (
    <StorefrontFrame>
      <main className="mx-auto w-full max-w-[1180px] px-3 pb-8 sm:px-0 lg:px-4">
        <nav className="flex items-center gap-2 py-4 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <span>Home</span><span>›</span><span>Shop</span><span>›</span><span>Men</span><span>›</span><span className="text-foreground">T-shirts</span>
        </nav>

        <div className="lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,.95fr)] lg:gap-x-8 lg:gap-y-0"><section aria-label="Product gallery" className="grid gap-2 lg:col-start-1 lg:row-span-4 lg:grid-cols-[94px_minmax(0,1fr)] lg:items-start">
          <div className="relative overflow-hidden rounded-xl bg-[#f1eeee] lg:col-start-2 lg:row-start-1">
            <Image src={images[activeImage]} alt="One Life Graphic T-shirt" width={900} height={700} priority unoptimized className="h-[230px] w-full object-contain object-center sm:h-[300px] lg:h-[300px]" />
            <button aria-label="Previous product image" onClick={() => stepImage(-1)} className="absolute left-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90"><ArrowLeft size={15} /></button>
            <button aria-label="Next product image" onClick={() => stepImage(1)} className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90"><ArrowRight size={15} /></button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:grid-cols-1 lg:gap-2">
            {images.map((image, index) => <button key={image} aria-label={`Show image ${index + 1}`} onClick={() => setActiveImage(index)} className={`overflow-hidden rounded-xl border-2 bg-[#f1eeee] ${activeImage === index ? "border-foreground" : "border-transparent"}`}><Image src={image} alt="" width={300} height={200} unoptimized className="h-20 w-full object-contain lg:h-[96px]" /></button>)}
          </div>
        </section>

        <section className="border-b border-border py-4 lg:col-start-2 lg:row-start-1 lg:pt-2">
          <h1 className="max-w-[320px] text-[27px] sm:text-3xl font-black leading-[.95] tracking-[-.6px]">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="mt-2 flex items-center gap-2 text-[11px]"><span className="text-[#f5ac24]">★★★★★</span><span>4.5/5</span></div>
          <div className="mt-1 flex items-center gap-2"><span className="text-xl font-bold">$260</span><span className="text-lg text-muted-foreground line-through">$300</span><span className="rounded-full bg-[#ffe3e3] px-2 py-1 text-[10px] text-[#f04b4b]">-40%</span></div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </section>

        <section className="border-b border-border py-4 lg:col-start-2 lg:row-start-2">
          <p className="mb-2 text-[10px] text-muted-foreground">Select Colors</p>
          <div className="flex gap-2">{[["olive", "#514d35"], ["green", "#31504c"], ["navy", "#2f334e"]].map(([name, value]) => <button key={name} aria-label={`Select ${name} color`} onClick={() => setColor(name)} className={`grid size-6 place-items-center rounded-full ${color === name ? "ring-2 ring-offset-2 ring-foreground" : ""}`} style={{ backgroundColor: value }}>{color === name && <span className="text-xs text-white">✓</span>}</button>)}</div>
        </section>

        <section className="border-b border-border py-4 lg:col-start-2 lg:row-start-3"><p className="mb-2 text-[10px] text-muted-foreground">Choose Size</p><div className="flex gap-2">{["Small", "Medium", "Large", "X-Large"].map((item) => <button key={item} onClick={() => setSize(item)} className={`flex-1 rounded-full px-2 py-2 text-[10px] ${size === item ? "bg-black text-white" : "bg-muted text-muted-foreground"}`}>{item}</button>)}</div></section>

        <section className="flex gap-2 py-4 lg:col-start-2 lg:row-start-4"><div className="flex items-center justify-between rounded-full bg-muted px-4 text-sm"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={13} /></button><span className="px-4">{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={13} /></button></div><button className="flex-1 rounded-full bg-black text-xs text-white">Add to Cart</button></section></div>

        <section>
          <div className="flex border-b border-border text-xs"><button onClick={() => setTab("details")} className={`flex-1 border-b-2 py-3 ${tab === "details" ? "border-black font-semibold" : "border-transparent text-muted-foreground"}`}>Product Details</button><button onClick={() => setTab("reviews")} className={`flex-1 border-b-2 py-3 ${tab === "reviews" ? "border-black font-semibold" : "border-transparent text-muted-foreground"}`}>Rating & Reviews</button><button className="flex-1 py-3 text-muted-foreground">FAQs</button></div>
          {tab === "details" ? <p className="py-4 text-xs leading-relaxed text-muted-foreground">A relaxed graphic tee made from soft cotton with a breathable finish and everyday fit.</p> : <div className="py-3"><div className="flex items-center justify-between"><h2 className="text-sm font-semibold">All Reviews <span className="text-[10px] font-normal text-muted-foreground">(451)</span></h2><div className="flex gap-2"><button aria-label="Filter reviews" className="grid size-8 place-items-center rounded-full bg-muted"><SlidersHorizontal size={13} /></button><button className="rounded-full bg-black px-3 py-2 text-[9px] text-white">Write a Review</button></div></div><ReviewCarousel /><button className="mx-auto mt-4 block rounded-full border border-border px-4 py-2 text-[9px]">Load More Reviews</button></div>}
        </section>

        <section className="pt-12"><h2 className="text-center text-xl font-black leading-none md:text-3xl">YOU MIGHT<br />ALSO LIKE</h2><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">{[["/products/one-life-front.png", "Polo with Contrast Trims", "$212"], ["/products/one-life-back.png", "Gradient Graphic T-shirt", "$145"], ["/products/one-life-model.png", "Polo with Tipping Details", "$180"], ["/products/one-life-front.png", "Black Striped T-shirt", "$120"]].map(([image, name, price]) => <article key={name}><div className="overflow-hidden rounded-lg bg-muted"><Image src={image} alt={name} width={500} height={360} unoptimized className="h-36 w-full object-contain md:h-44" /></div><h3 className="mt-2 text-[10px] font-semibold">{name}</h3><span className="text-sm font-bold">{price}</span></article>)}</div></section>
      </main>
    </StorefrontFrame>
  )
}
