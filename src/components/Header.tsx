'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Analytics', href: '/dashboard' },
  { label: 'Prediction', href: '/dashboard' },
  { label: 'Reports', href: '/dashboard' },
  { label: 'About', href: '/homepage' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2.5 flex-shrink-0">
          <AppLogo size={32} />
          <span className="font-heading font-800 text-lg tracking-tight text-primary hidden sm:block">
            AcadPredict
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link?.href
                  ? 'bg-secondary/10 text-secondary' :'text-muted hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/sign-up-login"
            className="text-sm font-semibold text-muted hover:text-primary transition-colors px-4 py-2"
          >
            Login
          </Link>
          <Link href="/sign-up-login" className="btn-primary text-sm">
            Sign Up Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} className="text-primary" />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(248,250,255,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-6 py-4 space-y-1 border-t border-border-subtle">
          {navLinks?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-muted hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {link?.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <Link href="/sign-up-login" onClick={() => setMobileOpen(false)} className="btn-secondary text-center">
              Login
            </Link>
            <Link href="/sign-up-login" onClick={() => setMobileOpen(false)} className="btn-primary text-center">
              Sign Up Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
