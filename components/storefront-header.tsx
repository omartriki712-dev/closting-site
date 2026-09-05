'use client'

import { ChevronDown, CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { StorefrontNewsletter } from '@/components/storefront-newsletter'
import { StorefrontFooter } from '@/components/storefront-footer'

export function StorefrontHeader({ current = 'Cart' }: { current?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <div className="mb-2 flex h-7 items-center justify-center bg-black text-[9px] text-white ring-2 ring-sky-500">Sign up and get 20% off to your first order. <u className="ml-1">Sign Up Now</u><button aria-label="Close promotion" className="absolute right-5 sm:right-14"><X size={12} /></button></div>
    <header className="relative flex h-16 items-center justify-between border-b border-[#eee]">
      <div className="flex items-center gap-5"><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={21} /></button><a href="/" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a><nav className={`${menuOpen ? 'absolute left-0 top-16 z-10 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-xs shadow-md sm:static sm:flex sm:flex-row sm:bg-transparent sm:p-0 sm:shadow-none`}><a href="/category">Shop <ChevronDown className="ml-1 inline" size={11} /></a><a href="#">On Sale</a><a href="#">New Arrivals</a><a href="#">Brands</a></nav></div>
      <div className="hidden h-8 w-[390px] items-center gap-2 rounded-full bg-[#f1f1f1] px-3 text-xs text-[#999] md:flex"><Search size={15} /> Search for products...</div>
      <div className="flex items-center gap-4"><Search className="md:hidden" size={18} /><a href="/cart" aria-label="Shopping cart"><ShoppingCart size={18} /></a><CircleUserRound size={18} /></div>
    </header>
  </>
}

export function StorefrontFrame({ children, current }: { children: React.ReactNode; current?: string }) { return <div className="min-h-screen bg-[#a8a8a8] px-0 text-[#111] sm:px-7"><div className="mx-auto min-h-screen max-w-[1080px] bg-white shadow-sm"><div className="px-4 pt-3 sm:px-12"><div className="mb-2 text-xs text-[#666]">{current}</div><StorefrontHeader current={current} /><main>{children}</main><StorefrontNewsletter /></div><StorefrontFooter /></div></div> }
