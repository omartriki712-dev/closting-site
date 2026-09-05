'use client'

import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { StorefrontNewsletter } from '@/components/storefront-newsletter'
import { StorefrontFooter } from '@/components/storefront-footer'

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [announcementOpen, setAnnouncementOpen] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setAnnouncementOpen(false), 4500)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return <>
    <div className="flex h-8 w-full items-center justify-center bg-black px-3 text-center text-[10px] text-white">Sign up and get 20% off to your first order. <a href="/signup" className="ml-1 underline">Sign Up Now</a><button aria-label="Close promotion" onClick={() => setAnnouncementOpen(false)} className="absolute right-4 sm:right-8"><X size={12} /></button></div>
    <header className="relative mx-4 flex h-20 items-center justify-between border-b border-[#eee] sm:mx-8 lg:mx-12">
      <div className="flex items-center gap-4 lg:w-1/3"><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={22} /></button><a href="/" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a></div>
      <nav className={`${menuOpen ? 'absolute left-0 top-20 z-30 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-lg shadow-md sm:static sm:flex sm:flex-row sm:items-center sm:justify-center sm:bg-transparent sm:p-0 sm:text-lg sm:shadow-none lg:w-1/3`}><a href="/category">Shop</a><a href="/category/sale">On Sale</a><a href="/category/new-arrivals">New Arrivals</a><a href="/category/brands">Brands</a></nav>
      <div className="flex items-center justify-end gap-4 lg:w-1/3"><button type="button" onClick={() => setSearchOpen(true)} aria-label="Open search"><Search size={20} /></button><a href="/cart" aria-label="Shopping cart"><ShoppingCart size={20} /></a><a href="/login" aria-label="Log in"><CircleUserRound size={20} /></a></div>
    </header>
    {announcementOpen && <div className="fixed inset-0 z-40 grid place-items-center bg-black/30 px-4" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setAnnouncementOpen(false)}><div role="dialog" aria-modal="true" aria-label="Welcome offer" className="relative w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl animate-modal-in"><button onClick={() => setAnnouncementOpen(false)} aria-label="Close announcement" className="absolute right-4 top-4"><X size={18} /></button><p className="text-xs font-semibold uppercase tracking-[2px] text-[#777]">Welcome to SHOP.CO</p><h2 className="mt-3 text-2xl font-black">20% off your first order</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#666]">Discover new-season essentials and find pieces made for your everyday style.</p><a href="/signup" onClick={() => setAnnouncementOpen(false)} className="mt-6 inline-flex rounded-full bg-black px-7 py-3 text-sm font-semibold text-white">Sign Up Now</a></div></div>}
    {searchOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setSearchOpen(false)}><div role="dialog" aria-modal="true" aria-label="Search products" className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl animate-modal-in"><div className="flex items-center justify-between"><h2 className="text-lg font-bold">Search products</h2><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={20} /></button></div><div className="mt-5 flex items-center gap-3 rounded-full border border-[#ddd] px-4 py-3"><Search size={18} className="text-[#777]" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you looking for?" className="w-full bg-transparent text-sm outline-none" /></div><p className="mt-4 text-xs text-[#777]">{query ? `Showing results for “${query}”` : 'Try searching for shirts, jeans, or new arrivals.'}</p></div></div>}
  </>
}

export function StorefrontFrame({ children }: { children: React.ReactNode }) { return <div className="min-h-screen w-full max-w-none overflow-x-hidden bg-white text-[#111]"><StorefrontHeader /><main className="page-enter px-4 sm:px-12">{children}</main><StorefrontNewsletter /><StorefrontFooter /></div> }
