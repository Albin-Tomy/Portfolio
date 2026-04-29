"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          <span className="text-primary hover:text-primary/50">Albin Tomy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="p-2 relative z-50 flex flex-col justify-center items-center h-8" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             <div className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1.5'}`}></div>
             <div className={`w-4 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
             <div className={`w-6 h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1.5'}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 py-4 shadow-xl border-b border-t" : "max-h-0 py-0 border-transparent border-t-0 border-b-0"
        }`}
      >
        <div className="flex flex-col px-6 font-medium divide-y divide-border/50">
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-4">About</Link>
          <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-4">Skills</Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-4">Projects</Link>
          <Link href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-4">Experience</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-4">Contact</Link>
        </div>
      </div>
    </header>
  );
}
