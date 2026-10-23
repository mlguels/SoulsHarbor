'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-white border-b border-sh-light pt-5 py-3">
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-center items-center h-15">
        {/* Left Side: Brand Logo and Title */}
        <Link href="/">
          <Image
            src="/shanchor.jpeg"
            width={110}
            height={50}
            className="w-auto h-auto"
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

          {/* About Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-sh-gold transition font-light text-xs focus:outline-none"
            >
              INFO
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-40 bg-white border border-sh-light rounded-lg shadow-lg py-2 flex flex-col">
                  <Link
                    href="/about"
                    className="px-4 py-2 hover:bg-sh-light hover:text-sh-gold transition font-light text-xs"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/beliefs"
                    className="px-4 py-2 hover:bg-sh-light hover:text-sh-gold transition font-light text-xs"
                  >
                    BELIEFS
                  </Link>
                  <Link
                    href="/pastor"
                    className="px-4 py-2 hover:bg-sh-light hover:text-sh-gold transition font-light text-xs"
                  >
                    OUR PASTOR
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/livestream"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            LISTEN ONLINE
          </Link>
          <Link
            href="/contact"
            className="hover:text-sh-gold transition font-light text-xs"
          >
            CONTACT
          </Link>
          <Link
            href="/give"
            className="bg-sh-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-95 transition shadow-sm text-xs"
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
              ABOUT US
            </Link>
            <Link
              href="/beliefs"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              BELIEFS
            </Link>
            <Link
              href="/pastor"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              OUR PASTOR
            </Link>
            <Link
              href="/livestream"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              LISTEN ONLINE
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-sh-gold transition"
            >
              CONTACT
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
