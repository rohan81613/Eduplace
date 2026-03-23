import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-heading font-700 text-base text-primary hidden sm:block">AcadPredict</span>
          <span className="text-sm text-muted ml-3">© 2026 AcadPredict Inc.</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 justify-center">
          {['Privacy Policy', 'Terms of Service', 'Contact', 'About', 'Blog'].map((item) => (
            <Link
              key={item}
              href="/homepage"
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          {[
            { name: 'Twitter', icon: 'GlobeAltIcon' },
            { name: 'LinkedIn', icon: 'BuildingOfficeIcon' },
            { name: 'GitHub', icon: 'CodeBracketIcon' },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border-subtle text-muted hover:text-secondary hover:border-secondary/30 hover:bg-secondary/5 transition-all"
            >
              <Icon name={social.icon as any} size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
