'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const menuItems = ['About', 'Services', 'Gallery', 'Contact'];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside (excluding toggle button)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      className={`${
        scrolled ? 'bg-[#636262]/80 shadow-md' : 'bg-transparent'
      } backdrop-blur-md text-white fixed top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide hover:text-gray-400 transition"
        >
          Gowthami
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold text-gray-300">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="relative group py-1 hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-white transition-all" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden bg-primary/90 backdrop-blur-md overflow-hidden transition-max-height duration-300 ease-in-out ${
          open ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <ul className="flex flex-col px-6 space-y-4 text-gray-300 font-semibold">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="block hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
