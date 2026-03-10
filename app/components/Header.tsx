'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import CvDownloadButton from './CvDownloadButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
  { href: 'resume', label: 'Resume' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable renderer so desktop & mobile menus stay in sync
  const renderItem = (link: (typeof navLinks)[number], isMobile = false) => {
    if (link.label === 'Resume') {
      return (
        <div key="resume" className={isMobile ? 'text-center' : ''}>
          <CvDownloadButton />
        </div>
      );
    }

    const isExternal = link.href.startsWith('http');
    const linkProps = {
      href: link.href,
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    return (
      <Link
        key={link.label}
        {...linkProps}
        onClick={isMobile ? () => setIsOpen(false) : undefined}
        className="text-dark transition-colors hover:text-primary"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="py-2 text-xl font-bold text-dark">
          <Link href="/">Brodie Lewis</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center space-x-8 menu:flex">
          {navLinks.map((l) => renderItem(l))}
        </div>

        {/* Mobile Menu Button */}
        <div className="menu:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-dark" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-dark" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="flex flex-col items-center justify-center space-y-4 bg-white px-6 pb-4 shadow-md menu:hidden"
        >
          {navLinks.map((l) => renderItem(l, true))}
        </div>
      )}
    </header>
  );
};

export default Header;
