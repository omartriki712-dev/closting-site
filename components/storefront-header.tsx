'use client'

import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { StorefrontNewsletter } from '@/components/storefront-newsletter'
import { StorefrontFooter } from '@/components/storefront-footer'

const shopGroups = [['T-shirts', '/category/t-shirts'], ['Shirts', '/category/shirts'], ['Jeans', '/category/jeans'], ['Hoodies', '/category/hoodies'], ['Shorts', '/category/shorts']] as const
const styles = [['Casual', '/category/dress-style'], ['Formal', '/category/shirts'], ['Party', '/category/dress-style'], ['Gym', '/category/hoodies']] as const

export function StorefrontHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [announcementOpen, setAnnouncementOpen] = useState(false)
  const pathname = usePathname()
  const dismissAnnouncement = () => { window.localStorage.setItem('shopco-announcement-dismissed', 'true'); setAnnouncementOpen(false) }
  useEffect(() => { if (pathname === '/' && window.localStorage.getItem('shopco-announcement-dismissed') !== 'true') setAnnouncementOpen(true) }, [pathname])
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setSearchOpen(false); window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown) }, [])
  return <>
    {pathname === '/' && announcementOpen && <div className="flex h-8 w-full items-center justify-center bg-black px-3 text-center text-[10px] text-white">Sign up and get 20% off to your first order. <a href="/signup" className="ml-1 underline">Sign Up Now</a><button aria-label="Close promotion" onClick={dismissAnnouncement} className="absolute right-4"><X size={12} /></button></div>}
    <header className="relative mx-4 flex h-20 items-center justify-between border-b border-[#eee] sm:mx-8 lg:mx-12">
      <div className="flex items-center gap-4 lg:w-1/3"><button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={22} /></button><a href="/" className="text-[22px] font-black tracking-[-1.5px]">SHOP.CO</a></div>
      <nav className={`${menuOpen ? 'absolute left-0 top-20 z-30 flex' : 'hidden'} flex-col gap-4 bg-white p-5 text-lg shadow-md sm:static sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:bg-transparent sm:p-0 sm:text-lg sm:shadow-none lg:absolute lg:left-1/2 lg:w-auto lg:-translate-x-1/2`}><NavigationMenu viewport={false}><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Shop</NavigationMenuTrigger><NavigationMenuContent className="w-[min(92vw,1100px)] p-6"><div className="grid grid-cols-2 gap-8 lg:grid-cols-3"><div className="flex flex-col gap-3">{shopGroups.map(([label, href]) => <NavigationMenuLink key={href} href={href}>{label}</NavigationMenuLink>)}</div><div className="flex flex-col gap-3"><p className="font-semibold">Shop by style</p>{styles.map(([label, href]) => <NavigationMenuLink key={label} href={href}>{label}</NavigationMenuLink>)}</div><div className="grid gap-3 sm:grid-cols-2"><a href="/category/new-arrivals" className="group overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-dress-style.png" alt="New arrivals" className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" /><span className="block p-3 text-sm font-semibold">New arrivals</span></a><a href="/category/sale" className="group overflow-hidden rounded-xl bg-[#f4f4f4]"><img src="/products/category-hoodies.png" alt="Sale styles" className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" /><span className="block p-3 text-sm font-semibold">Sale styles</span></a></div></div></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu><a href="/category/sale">On Sale</a><a href="/category/new-arrivals">New Arrivals</a><a href="/brands">Brands</a></nav>
      <div className="flex items-center justify-end gap-4 lg:w-1/3"><button type="button" onClick={() => setSearchOpen(true)} aria-label="Open search"><Search size={20} /></button><a href="/cart" aria-label="Shopping cart"><ShoppingCart size={20} /></a><a href="/login" aria-label="Log in"><CircleUserRound size={20} /></a></div>
    </header>
    {searchOpen && <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 px-4" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setSearchOpen(false)}><div role="dialog" aria-modal="true" aria-label="Search products" className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl"><div className="flex items-center justify-between"><h2 className="text-lg font-bold">Search products</h2><button onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={20} /></button></div><div className="mt-5 flex items-center gap-3 rounded-full border border-[#ddd] px-4 py-3"><Search size={18} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What are you looking for?" className="w-full bg-transparent text-sm outline-none" /></div><p className="mt-4 text-xs text-[#777]">{query ? `Showing results for “${query}”` : 'Try searching for shirts, jeans, or new arrivals.'}</p></div></div>}
  </>
}

export function StorefrontFrame({ children }: { children: React.ReactNode }) { return <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#111]"><StorefrontHeader /><main className="page-enter mx-auto w-[calc(100%-40px)] max-w-[1280px]">{children}</main><StorefrontNewsletter /><StorefrontFooter /></div> }
