'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-white border-b border-sh-light pt-5 py-3">
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-center items-center h-15">
        {/* Left Side: Brand Logo and Title */}
        <Link href="/">
          <Image
            src="/shanchor.jpeg"
            width={110}
            height={50}
            alt="Anchor Logo"
            loading="eager"
          />
        </Link>

        {/* Right Side: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-sh-navy">
          <Link
            href="/"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            ABOUT & BELIEFS
          </Link>
          <Link
            href="/pastor"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            OUR PASTOR
          </Link>
          <Link
            href="/livestream"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            WATCH ONLINE
          </Link>
          <Link
            href="/contact"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            CONTACT
          </Link>
          <Link
            href="#give"
            className="bg-sh-gold text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-opacity-95 transition shadow-sm text-xs"
          >
            GIVE
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
        >
          <span
            className={`h-0.5 w-6 bg-sh-navy transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-sh-navy transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-sh-navy transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Nav Links Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-sh-light shadow-lg animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8 font-sans font-medium text-sh-navy">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              About
            </Link>
            <Link
              href="/pastor"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              OUR BELIEFS
            </Link>
            <Link
              href="#livestream"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              WATCH ONLINE
            </Link>
            <Link
              href="/give"
              onClick={() => setIsOpen(false)}
              className="bg-sh-gold text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-95 transition shadow-sm w-40 text-center"
            >
              GIVE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
