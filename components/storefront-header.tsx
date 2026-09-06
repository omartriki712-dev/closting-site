'use client'

import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { StorefrontNewsletter } from '@/components/storefront-newsletter'
import { StorefrontFooter } from '@/components/storefront-footer'

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [shopMenuOpen, setShopMenuOpen] = useState(false)
  const pathname = usePathname()
  const [announcementOpen, setAnnouncementOpen] = useState(false)
  const dismissAnnouncement = () => {
    window.localStorage.setItem('shopco-announcement-dismissed', 'true')
    setAnnouncementOpen(false)
  }

  useEffect(() => {
    if (pathname !== '/' || window.localStorage.getItem('shopco-announcement-dismissed') === 'true') return
    setAnnouncementOpen(true)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return <>
    {pathname === '/' && announcementOpen && <div className="flex h-8 w-full items-center justify-center bg-black px-3 text-center text-[10px] text-white">Sign up and get 20% off to your first order. <a href="/signup" className="ml-1 underline">Sign Up Now</a><button aria-label="Close promotion" onClick={dismissAnnouncement} className="absolute right-4 sm:right-8"><X size={12} /></button></div>}
    <header className="relative mx-4 flex h-20 items-center justify-between border-b border-[#eee] sm:mx-8 lg:mx-12">
      <div className="flex items-center gap-4 lg:w-1/3"><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={22} /></button><a href="/" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a></div>
      <nav className={`${menuOpen ? 'absolute left-0 top-20 z-30 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-lg shadow-md sm:static sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:bg-transparent sm:p-0 sm:text-lg sm:shadow-none lg:w-1/3`}><div className="relative" onMouseEnter={() => setShopMenuOpen(true)} onMouseLeave={() => setShopMenuOpen(false)}><a href="/shop" className="inline-flex py-3" onFocus={() => setShopMenuOpen(true)}>Shop</a><div className={`${shopMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'} absolute left-1/2 top-full z-50 w-[min(92vw,760px)] -translate-x-1/2 rounded-2xl border border-[#eee] bg-white p-5 shadow-xl transition-all duration-200`} onMouseEnter={() => setShopMenuOpen(true)}><div className="grid grid-cols-2 gap-4 sm:grid-cols-4"><a href="/category/t-shirts" className="group/item"><div className="aspect-[1.15] overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-tshirts.png" alt="T-shirts" className="h-full w-full object-contain transition-transform duration-300 group-hover/item:scale-105" /></div><span className="mt-2 block text-sm font-bold">T-shirts</span><span className="mt-1 block text-xs text-[#777]">Everyday essentials</span></a><a href="/category/shirts" className="group/item"><div className="aspect-[1.15] overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-shirts.png" alt="Shirts" className="h-full w-full object-contain transition-transform duration-300 group-hover/item:scale-105" /></div><span className="mt-2 block text-sm font-bold">Shirts</span><span className="mt-1 block text-xs text-[#777]">Smart and casual</span></a><a href="/category/jeans" className="group/item"><div className="aspect-[1.15] overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-jeans.png" alt="Jeans" className="h-full w-full object-contain transition-transform duration-300 group-hover/item:scale-105" /></div><span className="mt-2 block text-sm font-bold">Jeans</span><span className="mt-1 block text-xs text-[#777]">Fits for every day</span></a><a href="/category/hoodies" className="group/item"><div className="aspect-[1.15] overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-hoodies.png" alt="Hoodies" className="h-full w-full object-contain transition-transform duration-300 group-hover/item:scale-105" /></div><span className="mt-2 block text-sm font-bold">Hoodies</span><span className="mt-1 block text-xs text-[#777]">Layer up in style</span></a></div><div className="mt-5 flex items-center justify-between border-t border-[#eee] pt-4 text-xs"><span className="font-semibold">Explore the full collection</span><a href="/shop" className="font-bold underline">View all products</a></div></div></div><a href="/category/sale" className="py-3">On Sale</a><a href="/category/new-arrivals" className="py-3">New Arrivals</a><a href="/brands" className="py-3">Brands</a></nav>
      <div className="flex items-center justify-end gap-4 lg:w-1/3"><button type="button" onClick={() => setSearchOpen(true)} aria-label="Open search"><Search size={20} /></button><a href="/cart" aria-label="Shopping cart"><ShoppingCart size={20} /></a><a href="/login" aria-label="Log in"><CircleUserRound size={20} /></a></div>
    </header>
    {announcementOpen && <div className="fixed inset-0 z-40 grid place-items-center bg-black/30 px-4" role="presentation"><div role="dialog" aria-modal="true" aria-label="Welcome offer" className="relative w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl animate-modal-in"><button onClick={dismissAnnouncement} aria-label="Close announcement" className="absolute right-4 top-4"><X size={18} /></button><p className="text-xs font-semibold uppercase tracking-[2px] text-[#777]">Welcome to SHOP.CO</p><h2 className="mt-3 text-2xl font-black">20% off your first order</h2><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#666]">Discover new-season essentials and find pieces made for your everyday style.</p><a href="/signup" onClick={dismissAnnouncement} className="mt-6 inline-flex rounded-full bg-black px-7 py-3 text-sm font-semibold text-white">Sign Up Now</a></div></div>}
    {searchOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setSearchOpen(false)}><div role="dialog" aria-modal="true" aria-label="Search products" className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl animate-modal-in"><div className="flex items-center justify-between"><h2 className="text-lg font-bold">Search products</h2><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={20} /></button></div><div className="mt-5 flex items-center gap-3 rounded-full border border-[#ddd] px-4 py-3"><Search size={18} className="text-[#777]" /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you looking for?" className="w-full bg-transparent text-sm outline-none" /></div><p className="mt-4 text-xs text-[#777]">{query ? `Showing results for “${query}”` : 'Try searching for shirts, jeans, or new arrivals.'}</p></div></div>}
  </>
}

export function StorefrontFrame({ children }: { children: React.ReactNode }) { return <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#111]"><StorefrontHeader /><main className="page-enter mx-auto w-[calc(100%-40px)] max-w-[1280px]">{children}</main><StorefrontNewsletter /><StorefrontFooter /></div> }
