'use client';

import { useState } from 'react';
import { navigationData } from '@/constants/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MobileMenu from '@/components/mobile-menu';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        // sejajar dengan hero clamp
        'fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50'
      )}
    >
      <nav
        className={cn(
          // === FLEX & ALIGNMENT ===
          'flex items-center justify-between md:justify-between',
          'gap-6 md:gap-10',
          'px-[22px] md:px-[56px] py-[10px] md:py-[12px]',
          'rounded-full border border-white/10',
          'text-sm text-neutral-200 transition-all duration-300',
          'mx-auto',

          // === COLOR & BACKDROP ===
          'bg-[rgba(0,0,0,0.4)] backdrop-blur-[40px]',

          // === RESPONSIVE WIDTH ===
          'w-[92vw] max-w-[377px] h-[48px] md:w-full md:max-w-[680px]'
        )}
      >
        {/* === BRAND === */}
        <Link
          href='/'
          className='text-white font-semibold text-base tracking-tight'
        >
          Ezar
        </Link>

        {/* === DESKTOP LINKS === */}
        <div className='hidden md:flex items-center gap-8 md:gap-10'>
          {navigationData.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className='hover:text-white transition-colors duration-200'
            >
              {nav.label}
            </Link>
          ))}
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className='md:hidden text-white ml-auto'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* === MOBILE MENU === */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
