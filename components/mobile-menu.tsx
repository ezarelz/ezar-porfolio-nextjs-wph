'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { navigationData } from '@/constants/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Render portal hanya di client
  if (typeof window === 'undefined') return null;
  const root = document.body;

  const menu = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='mobile-menu'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={cn(
            'fixed inset-0 z-[9999]',
            'bg-[#0a0f10]/65 backdrop-blur-[20px]',
            'flex flex-col justify-start items-start',
            'px-8 pt-10 pb-12 text-neutral-200'
          )}
        >
          {/* === HEADER (Logo + Close Button) === */}
          <div className='w-full flex items-center justify-between mb-12'>
            <span className='text-white font-semibold text-lg tracking-tight'>
              Ezar
            </span>
            <button
              className='text-white'
              onClick={onClose}
              aria-label='Close Menu'
            >
              <X size={22} />
            </button>
          </div>

          {/* === NAVIGATION LINKS === */}
          <nav className='flex flex-col items-start gap-6 text-base'>
            {navigationData.map((nav, i) => (
              <motion.div
                key={nav.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.25 }}
              >
                <Link
                  href={nav.href}
                  onClick={onClose}
                  className='hover:text-white transition-colors duration-200'
                >
                  {nav.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(menu, root);
}
