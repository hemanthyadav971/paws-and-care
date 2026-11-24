import React, { useState } from 'react';
import { Heart, Calendar, Phone, Menu, X, Shield, Sparkles } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pet Care Tips', href: '#tips' },
    { name: 'Our Experts', href: '#experts' },
    { name: 'Health Reminder', href: '#health-tool' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-warmCream-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-pastelGreen-100 flex items-center justify-center text-pastelGreen-700 shadow-inner group-hover:scale-105 transition-transform">
              <span className="text-2xl">🐾</span>
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center gap-1 font-display">
                Paws <span className="text-pastelGreen-600">&</span> Care
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-coralAccent-500 block -mt-1">
                Professional Pet Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-pastelGreen-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pastelGreen-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+18007292273"
              className="flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-coralAccent-600 px-3 py-2 rounded-xl bg-warmCream-100 transition-colors"
              title="24/7 Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-coralAccent-500" />
              <span>(800) PAW-CARE</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 bg-gradient-to-r from-pastelGreen-600 to-pastelGreen-500 hover:from-pastelGreen-700 hover:to-pastelGreen-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-warmCream-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-warmCream-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-gray-800 hover:bg-pastelGreen-50 hover:text-pastelGreen-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-warmCream-100 flex flex-col gap-2">
            <a
              href="tel:+18007292273"
              className="flex items-center justify-center gap-2 text-sm font-bold text-gray-700 py-2.5 rounded-xl bg-warmCream-100"
            >
              <Phone className="w-4 h-4 text-coralAccent-500" />
              <span>24/7 Emergency: (800) PAW-CARE</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full flex items-center justify-center gap-2 bg-pastelGreen-600 text-white font-bold py-3 rounded-xl shadow-md text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
