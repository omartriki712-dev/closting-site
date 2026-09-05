"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight, Minus, Plus, SlidersHorizontal, Star } from "lucide-react"
import { StorefrontFrame } from "@/components/storefront-header"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OyWkfA1YktuulZ1EWwjK3ojv78YQql.png",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
]

const reviews = [
  ["Samantha D.", "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail."],
  ["Alex M.", "The fit exceeded my expectations! The colors are vibrant and the print quality is top-notch."],
  ["Ethan R.", "This t-shirt is a must-have for anyone who appreciates good design. The material feels soft and high quality."],
]

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
    <StorefrontFrame current="Product Details">
      <main className="mx-auto w-full max-w-[1180px] px-3 pb-8 sm:px-0">
        <nav className="flex items-center gap-2 py-4 text-[10px] text-muted-foreground" aria-label="Breadcrumb">
          <span>Home</span><span>›</span><span>Shop</span><span>›</span><span>Men</span><span>›</span><span className="text-foreground">T-shirts</span>
        </nav>

        <section aria-label="Product gallery">
          <div className="relative overflow-hidden rounded-xl bg-[#f1eeee]">
            <Image src={images[activeImage]} alt="One Life Graphic T-shirt" width={900} height={700} priority unoptimized className="h-[250px] w-full object-cover object-center sm:h-[520px] lg:h-[620px]" />
            <button aria-label="Previous product image" onClick={() => stepImage(-1)} className="absolute left-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90"><ArrowLeft size={15} /></button>
            <button aria-label="Next product image" onClick={() => stepImage(1)} className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90"><ArrowRight size={15} /></button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {images.map((image, index) => <button key={image} aria-label={`Show image ${index + 1}`} onClick={() => setActiveImage(index)} className={`overflow-hidden rounded-xl border-2 bg-[#f1eeee] ${activeImage === index ? "border-foreground" : "border-transparent"}`}><Image src={image} alt="" width={300} height={200} unoptimized className="h-20 w-full object-cover" /></button>)}
          </div>
        </section>

        <section className="border-b border-border py-4">
          <h1 className="max-w-[280px] text-[23px] font-black leading-[.95] tracking-[-.6px]">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="mt-2 flex items-center gap-2 text-[11px]"><span className="text-[#f5ac24]">★★★★★</span><span>4.5/5</span></div>
          <div className="mt-1 flex items-center gap-2"><span className="text-xl font-bold">$260</span><span className="text-lg text-muted-foreground line-through">$300</span><span className="rounded-full bg-[#ffe3e3] px-2 py-1 text-[10px] text-[#f04b4b]">-40%</span></div>
          <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        </section>

        <section className="border-b border-border py-4">
          <p className="mb-2 text-[10px] text-muted-foreground">Select Colors</p>
          <div className="flex gap-2">{[["olive", "#514d35"], ["green", "#31504c"], ["navy", "#2f334e"]].map(([name, value]) => <button key={name} aria-label={`Select ${name} color`} onClick={() => setColor(name)} className={`grid size-6 place-items-center rounded-full ${color === name ? "ring-2 ring-offset-2 ring-foreground" : ""}`} style={{ backgroundColor: value }}>{color === name && <span className="text-xs text-white">✓</span>}</button>)}</div>
        </section>

        <section className="border-b border-border py-4"><p className="mb-2 text-[10px] text-muted-foreground">Choose Size</p><div className="flex gap-2">{["Small", "Medium", "Large", "X-Large"].map((item) => <button key={item} onClick={() => setSize(item)} className={`flex-1 rounded-full px-2 py-2 text-[10px] ${size === item ? "bg-black text-white" : "bg-muted text-muted-foreground"}`}>{item}</button>)}</div></section>

        <section className="flex gap-2 py-4"><div className="flex items-center justify-between rounded-full bg-muted px-4 text-sm"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={13} /></button><span className="px-4">{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={13} /></button></div><button className="flex-1 rounded-full bg-black text-xs text-white">Add to Cart</button></section>

        <section>
          <div className="flex border-b border-border text-[10px]"><button onClick={() => setTab("details")} className={`flex-1 border-b-2 py-3 ${tab === "details" ? "border-black font-semibold" : "border-transparent text-muted-foreground"}`}>Product Details</button><button onClick={() => setTab("reviews")} className={`flex-1 border-b-2 py-3 ${tab === "reviews" ? "border-black font-semibold" : "border-transparent text-muted-foreground"}`}>Rating & Reviews</button><button className="flex-1 py-3 text-muted-foreground">FAQs</button></div>
          {tab === "details" ? <p className="py-4 text-xs leading-relaxed text-muted-foreground">A relaxed graphic tee made from soft cotton with a breathable finish and everyday fit.</p> : <div className="py-3"><div className="flex items-center justify-between"><h2 className="text-sm font-semibold">All Reviews <span className="text-[10px] font-normal text-muted-foreground">(451)</span></h2><div className="flex gap-2"><button aria-label="Filter reviews" className="grid size-8 place-items-center rounded-full bg-muted"><SlidersHorizontal size={13} /></button><button className="rounded-full bg-black px-3 py-2 text-[9px] text-white">Write a Review</button></div></div><div className="mt-3 flex flex-col gap-3">{reviews.map(([name, text]) => <article key={name} className="rounded-xl border border-border p-3"><div className="flex items-center justify-between"><span className="text-[#f5ac24]">★★★★★</span><span className="text-xs text-muted-foreground">⋯</span></div><p className="mt-1 text-[10px] font-semibold">{name} <span className="text-green-600">●</span></p><p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">&quot;{text}&quot;</p><p className="mt-2 text-[9px] text-muted-foreground">Posted on August 14, 2023</p></article>)}</div><button className="mx-auto mt-4 block rounded-full border border-border px-4 py-2 text-[9px]">Load More Reviews</button></div>}
        </section>

        <section className="pt-5"><h2 className="text-center text-xl font-black leading-none">YOU MIGHT<br />ALSO LIKE</h2><div className="mt-4 grid grid-cols-2 gap-3">{[["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=85", "Vertical Striped Shirt", "$212"], ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M5OMbD6V0PxrmIwmqNx1BLlsBxY7sX.png", "Gradient Graphic T-shirt", "$145"]].map(([image, name, price]) => <article key={name}><div className="overflow-hidden rounded-lg bg-muted"><Image src={image} alt={name} width={500} height={360} unoptimized className="h-36 w-full object-cover" /></div><h3 className="mt-2 text-[10px] font-semibold">{name}</h3><span className="text-sm font-bold">{price}</span></article>)}</div></section>
      </main>
    </StorefrontFrame>
  )
}
