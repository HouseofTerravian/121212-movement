'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/resources', label: 'Resources' },
  { href: '/events', label: 'Events' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[70px] bg-white border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0">
          <span className="text-xl font-bold text-brand-black">121212</span>
          <span className="text-xl font-bold text-brand-red">.movement</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-brand-black font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#join">
            <Button variant="red" size="sm">
              Join the Movement
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-brand-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-brand-black font-medium py-2 transition-colors duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#join" onClick={() => setMobileOpen(false)}>
              <Button variant="red" size="sm" className="w-full">
                Join the Movement
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
