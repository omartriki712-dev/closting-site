'use client'

import { ChevronDown, CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { StorefrontNewsletter } from '@/components/storefront-newsletter'
import { StorefrontFooter } from '@/components/storefront-footer'

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return <>
    <div className="flex h-7 w-full items-center justify-center bg-black px-3 text-center text-[9px] text-white">Sign up and get 20% off to your first order. <u className="ml-1">Sign Up Now</u><button aria-label="Close promotion" className="absolute right-4 sm:right-8"><X size={12} /></button></div>
    <header className="relative mx-3 flex h-16 items-center justify-between border-b border-[#eee] sm:mx-8 lg:mx-12">
      <div className="flex items-center gap-4"><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={21} /></button><a href="/" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a><nav className={`${menuOpen ? 'absolute left-0 top-16 z-30 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-xs shadow-md sm:static sm:flex sm:flex-row sm:bg-transparent sm:p-0 sm:shadow-none`}><a href="/category">Shop <ChevronDown className="ml-1 inline" size={11} /></a><a href="/category?filter=sale">On Sale</a><a href="/category?filter=new">New Arrivals</a><a href="/category?filter=brands">Brands</a></nav></div>
      <button type="button" onClick={() => setSearchOpen(true)} className="hidden h-9 w-[390px] items-center gap-2 rounded-full bg-[#f1f1f1] px-4 text-left text-xs text-[#999] md:flex"><Search size={15} /> Search for products...</button>
      <div className="flex items-center gap-4"><button type="button" onClick={() => setSearchOpen(true)} aria-label="Open search" className="md:hidden"><Search size={18} /></button><a href="/cart" aria-label="Shopping cart"><ShoppingCart size={18} /></a><CircleUserRound size={18} /></div>
    </header>
    <div className="flex gap-5 overflow-x-auto border-b border-[#eee] px-3 py-2 text-[10px] text-[#666] sm:mx-8 sm:px-0 lg:mx-12"><a href="/category?category=t-shirts" className="whitespace-nowrap">T-shirts</a><a href="/category?category=shirts" className="whitespace-nowrap">Shirts</a><a href="/category?category=jeans" className="whitespace-nowrap">Jeans</a><a href="/category?category=hoodies" className="whitespace-nowrap">Hoodies</a><a href="/category?category=shorts" className="whitespace-nowrap">Shorts</a><a href="/category?category=dress-style" className="whitespace-nowrap">Dress Style</a></div>
    {searchOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setSearchOpen(false)}><div role="dialog" aria-modal="true" aria-label="Search products" className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl animate-modal-in"><div className="flex items-center justify-between"><h2 className="text-lg font-bold">Search products</h2><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={20} /></button></div><div className="mt-5 flex items-center gap-3 rounded-full border border-[#ddd] px-4 py-3"><Search size={18} className="text-[#777]" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you looking for?" className="w-full bg-transparent text-sm outline-none" /></div><p className="mt-4 text-xs text-[#777]">{query ? `Showing results for “${query}”` : 'Try searching for shirts, jeans, or new arrivals.'}</p></div></div>}
  </>
}

export function StorefrontFrame({ children }: { children: React.ReactNode }) { return <div className="min-h-screen w-full max-w-none overflow-x-hidden bg-white text-[#111]"><StorefrontHeader /><main className="page-enter px-4 sm:px-12">{children}</main><StorefrontNewsletter /><StorefrontFooter /></div> }
