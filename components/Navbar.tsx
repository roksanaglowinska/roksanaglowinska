"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-neutral-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image 
              src="/logo-rg.png" 
              alt="Roksana Głowińska Logo" 
              width={150} 
              height={50} 
              className="w-auto h-10 md:h-11"
              priority
            />
          </Link>
          <div className="hidden md:block text-neutral-300 font-light text-2xl -mt-1">/</div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 font-sans font-medium text-black uppercase text-xs tracking-widest">
              <li><Link href="/o-mnie" className="relative hover:text-black hover:font-semibold transition-all before:content-['/'] before:absolute before:-left-3 before:text-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">Poznaj mnie</Link></li>
              <li><Link href="/mentoring" className="relative hover:text-black hover:font-semibold transition-all before:content-['/'] before:absolute before:-left-3 before:text-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">Mentoring 1:1</Link></li>
              <li><Link href="/konsultacja" className="relative hover:text-black hover:font-semibold transition-all before:content-['/'] before:absolute before:-left-3 before:text-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">Konsultacja 1:1</Link></li>
              <li><a href="https://www.jasnykierunekfotografki.pl" target="_blank" rel="noopener noreferrer" className="relative hover:text-black hover:font-semibold transition-all before:content-['/'] before:absolute before:-left-3 before:text-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">Platforma Subskrypcyjna</a></li>
              <li><Link href="/kursy" className="relative hover:text-black hover:font-semibold transition-all before:content-['/'] before:absolute before:-left-3 before:text-primary before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">Kursy i e-booki</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 font-sans text-xs font-bold uppercase tracking-widest">
          <a href="https://liryka.net/kokpit/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400 transition-colors">
            Zaloguj
          </a>
          <Link 
            href="/kontakt" 
            className="bg-transparent text-foreground border border-black hover:bg-black hover:text-white px-6 py-3 font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-100 shadow-xl flex flex-col items-center py-12 gap-8 h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="w-full flex flex-col items-center gap-8 font-sans font-medium text-black uppercase text-sm tracking-widest">
            <Link href="/o-mnie" onClick={() => setIsOpen(false)}>Poznaj mnie</Link>
            <Link href="/mentoring" onClick={() => setIsOpen(false)}>Mentoring 1:1</Link>
            <Link href="/konsultacja" onClick={() => setIsOpen(false)}>Konsultacja 1:1</Link>
            <a href="https://www.jasnykierunekfotografki.pl" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Platforma Subskrypcyjna</a>
            <Link href="/kursy" onClick={() => setIsOpen(false)}>Kursy i e-booki</Link>
          </nav>
          
          <div className="w-12 h-px bg-neutral-200 my-4"></div>
          
          <a href="https://liryka.net/kokpit/" target="_blank" rel="noopener noreferrer" className="font-sans font-bold uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>
            Zaloguj
          </a>
          <Link 
            href="/kontakt" 
            className="bg-black text-white px-10 py-4 font-bold text-xs uppercase tracking-widest mt-4"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}
