'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, ChevronDown, CircleUserRound, Mail, Menu, Minus, Plus, Search, ShoppingCart, Tag, Trash2, X } from 'lucide-react'

const productImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M5OMbD6V0PxrmIwmqNx1BLlsBxY7sX.png'

const initialItems = [
  { id: 1, name: 'Gradient Graphic T-shirt', size: 'Large', color: 'White', price: 145, quantity: 1, position: '18% 35%' },
  { id: 2, name: 'Checkered Shirt', size: 'Medium', color: 'Red', price: 180, quantity: 1, position: '18% 57%' },
  { id: 3, name: 'Skinny Fit Jeans', size: 'Large', color: 'Blue', price: 240, quantity: 1, position: '20% 78%' },
]

export default function Page() {
  const [items, setItems] = useState(initialItems)
  const [promo, setPromo] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])
  const discount = Math.round(subtotal * 0.2)
  const total = subtotal - discount + 15

  function changeQuantity(id: number, amount: number) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item))
  }

  return (
    <div className="min-h-screen bg-[#a8a8a8] px-0 text-[#111] sm:px-7">
      <div className="mx-auto min-h-screen max-w-[1080px] bg-white shadow-sm">
        <div className="px-4 pt-3 sm:px-12">
          <div className="mb-2 text-xs text-white sm:text-[#666]">Cart</div>
          <div className="flex h-7 items-center justify-center bg-black text-[9px] text-white ring-2 ring-sky-500">
            Sign up and get 20% off to your first order. <u className="ml-1">Sign Up Now</u>
            <button aria-label="Close promotion" className="absolute ml-[620px] hidden sm:block"><X size={12} /></button>
          </div>
          <header className="relative flex h-16 items-center justify-between border-b border-[#eee]">
            <div className="flex items-center gap-5">
              <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={21} /></button>
              <a href="#" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a>
              <nav className={`${menuOpen ? 'absolute left-0 top-16 z-10 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-xs shadow-md sm:static sm:flex sm:flex-row sm:bg-transparent sm:p-0 sm:shadow-none`}>
                <a href="#">Shop <ChevronDown className="ml-1 inline" size={11} /></a><a href="#">On Sale</a><a href="#">New Arrivals</a><a href="#">Brands</a>
              </nav>
            </div>
            <div className="hidden h-8 w-[390px] items-center gap-2 rounded-full bg-[#f1f1f1] px-3 text-xs text-[#999] md:flex"><Search size={15} /> Search for products...</div>
            <div className="flex items-center gap-4"><Search className="md:hidden" size={18} /><ShoppingCart size={18} /><CircleUserRound size={18} /></div>
          </header>

          <div className="flex items-center gap-2 py-4 text-[10px] text-[#777]"><span>Home</span><span>/</span><span className="text-[#222]">Cart</span></div>
          <main>
            <h1 className="mb-4 text-[27px] font-black tracking-[-1px]">YOUR CART</h1>
            <div className="grid gap-3 lg:grid-cols-[1.35fr_.9fr]">
              <section className="rounded-xl border border-[#e5e5e5] px-4 py-2">
                {items.length === 0 ? <p className="py-12 text-center text-sm text-[#777]">Your cart is empty.</p> : items.map((item, index) => (
                  <article key={item.id} className={`flex gap-3 py-3 ${index < items.length - 1 ? 'border-b border-[#eee]' : ''}`}>
                    <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-md bg-[#f1f1f1]"><img src={productImage} alt="" className="h-full w-full scale-[2.5] object-cover" style={{ objectPosition: item.position }} /></div>
                    <div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><h2 className="truncate text-xs font-bold">{item.name}</h2><button aria-label={`Remove ${item.name}`} onClick={() => setItems(items.filter((value) => value.id !== item.id))} className="text-red-500"><Trash2 size={14} /></button></div><p className="text-[9px]">Size: <span className="text-[#777]">{item.size}</span></p><p className="text-[9px]">Color: <span className="text-[#777]">{item.color}</span></p><div className="mt-1 flex items-center justify-between"><strong className="text-sm">${item.price}</strong><div className="flex items-center gap-3 rounded-full bg-[#f1f1f1] px-3 py-1 text-xs"><button aria-label="Decrease quantity" onClick={() => changeQuantity(item.id, -1)}><Minus size={12} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => changeQuantity(item.id, 1)}><Plus size={12} /></button></div></div></div>
                  </article>
                ))}
              </section>

              <aside className="h-fit rounded-xl border border-[#e5e5e5] p-4"><h2 className="mb-5 text-sm font-bold">Order Summary</h2><div className="space-y-3 text-xs"><div className="flex justify-between"><span className="text-[#777]">Subtotal</span><b>${subtotal}</b></div><div className="flex justify-between"><span className="text-[#777]">Discount (-20%)</span><b className="text-red-500">-${discount}</b></div><div className="flex justify-between"><span className="text-[#777]">Delivery Fee</span><b>$15</b></div><div className="my-3 border-t border-[#eee]" /><div className="flex justify-between text-sm"><span>Total</span><b>${total}</b></div></div><div className="mt-4 flex gap-2"><div className="flex flex-1 items-center gap-2 rounded-full bg-[#f1f1f1] px-3 text-[10px] text-[#999]"><Tag size={14} /> <input value={promo} onChange={(event) => setPromo(event.target.value)} className="w-full bg-transparent outline-none" placeholder="Add promo code" /></div><button className="rounded-full bg-black px-5 text-[10px] text-white">Apply</button></div><button className="mt-3 flex w-full items-center justify-center gap-3 rounded-full bg-black py-3 text-[10px] text-white">Go to Checkout <ArrowRight size={14} /></button></aside>
            </div>
          </main>

          <section className="my-14 flex flex-col gap-5 rounded-xl bg-black px-8 py-7 text-white md:flex-row md:items-center md:justify-between"><h2 className="max-w-[390px] text-[25px] font-black leading-[.95] tracking-[-1px]">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2><div className="flex w-full max-w-[275px] flex-col gap-2"><div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[9px] text-[#999]"><Mail size={13} /><input className="w-full outline-none" placeholder="Enter your email address" /></div><button className="rounded-full bg-white py-2 text-[9px] text-black">Subscribe to Newsletter</button></div></section>
        </div>
        <footer className="bg-[#f5f5f5] px-4 pb-7 pt-7 sm:px-12"><div className="grid gap-8 sm:grid-cols-[1.5fr_repeat(4,1fr)]"><div><div className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</div><p className="mt-3 max-w-[175px] text-[9px] leading-4 text-[#777]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p><div className="mt-4 flex gap-2"><span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold">Y</span><span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold">f</span><span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold">◎</span></div></div>{[['COMPANY','About','Features','Works','Career'],['HELP','Customer Support','Delivery Details','Terms & Conditions','Privacy Policy'],['FAQ','Account','Manage Deliveries','Orders','Payments'],['RESOURCES','Free eBooks','Development Tutorial','How to - Blog','Youtube Playlist']].map(([title, ...links]) => <div key={title}><h3 className="mb-4 text-[9px] tracking-[2px]">{title}</h3><div className="space-y-3 text-[9px] text-[#777]">{links.map(link => <a className="block" href="#" key={link}>{link}</a>)}</div></div>)}</div><div className="mt-7 flex flex-col gap-3 border-t border-[#ddd] pt-4 text-[9px] text-[#777] sm:flex-row sm:items-center sm:justify-between"><span>Shop.co © 2000-2023, All Rights Reserved</span><span className="font-bold text-[#222]">VISA　 Mastercard　 PayPal</span></div></footer>
      </div>
    </div>
  )
}
