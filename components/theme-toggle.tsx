'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('shopco-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const nextDark = !dark
    document.documentElement.classList.toggle('dark', nextDark)
    document.documentElement.classList.toggle('light', !nextDark)
    window.localStorage.setItem('shopco-theme', nextDark ? 'dark' : 'light')
    setDark(nextDark)
  }

  return <button type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"><Sun className="size-4 dark:hidden" aria-hidden="true" /><Moon className="hidden size-4 dark:block" aria-hidden="true" /></button>
}
