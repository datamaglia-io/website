'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import MagliaLogo from './MagliaLogo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Platform', href: '/platform' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Demo', href: '/demo' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-lg border-b border-[var(--border-color)] transition-colors">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <MagliaLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
            <div>
              <span className="text-xl font-bold text-[var(--text-primary)] block">
                Datamaglia
              </span>
              <span className="text-xs text-[var(--text-muted)] -mt-1 block">
                AI Data Governance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              ))}
              {!mounted && <FiMoon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary"
            >
              Request Demo
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--primary-color)] hover:text-white transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-color)]">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-colors px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
