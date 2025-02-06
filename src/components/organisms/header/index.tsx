'use client';

import Button from '@/components/atoms/button/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navTitles = [
    { title: 'Notícias', href: 'https://recoleta-news.vercel.app/' },
    { title: 'Sobre nós', href: '#' },
    { title: 'Nosso impacto', href: '#' },
    { title: 'Parceiros', href: '#' },
  ];

  return (
    <header className="grid grid-cols-6 items-start px-6 relative z-10 pt-10">
      <span className="flex flex-row items-center gap-4">
        <Image
          src="/images/logo_recoleta.svg"
          alt="Logo"
          width={60}
          height={60}
          quality={80}
        />
        <h1
          className="xl:text-3xl text-2xl font-bold text-[#F6F6F6]"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          ReColeta
        </h1>
      </span>

      <nav className="hidden md:block col-span-4 justify-center pt-3">
        <ul
          className="flex flex-row font-bold text-[#F6F6F6] justify-center 2xl:space-x-24 xl:space-x-12 md:gap-x-2 space-x-5 xl:text-xl text-base"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          {navTitles.map(nav => (
            <li key={nav.title}>
              <a href={nav.href}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <span className="block md:hidden col-span-4 text-right">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </span>

      <span className="flex justify-end pt-3">
        <Button
          variant="default"
          className="bg-white text-green-800 border border-green-800 font-bold"
        >
          <Link href="/login">Acessar</Link>
        </Button>
      </span>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white p-4 md:hidden">
          <ul className="flex flex-col font-extrabold text-black gap-4 text-xl">
            {navTitles.map(nav => (
              <li key={nav.title}>
                <a href={nav.href}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
