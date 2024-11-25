'use client';

import Button from '@/components/atoms/button/index';
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="grid grid-cols-6 items-center px-6 relative z-10 pt-10">
      <span className="flex flex-row items-center gap-4">
        <Image
          src="/images/logo_recoleta.svg"
          alt="Logo"
          width={60}
          height={60}
        />
        <h1
          className="xl:text-3xl text-2xl font-bold text-[#F6F6F6]"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          ReColeta
        </h1>
      </span>

      <nav className="hidden md:block col-span-4 self-center justify-center">
        <ul
          className="flex flex-row font-bold text-[#F6F6F6] justify-center 2xl:space-x-24 xl:space-x-12 md:gap-x-2 space-x-5 xl:text-xl text-base"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          <li>
            <Link href="https://recoleta-news.vercel.app/">Notícias</Link>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Nosso impacto</a>
          </li>
          <li>
            <a href="#">Parceiros</a>
          </li>
        </ul>
      </nav>

      <span className="block md:hidden col-span-4 text-right">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </span>

      <span className="flex justify-end">
       <Button
          variant="default"
          className="bg-white text-green-800 border border-green-800 font-bold"
        >
          <a href="/login">Acessar </a>
        </Button>
      </span>

      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white p-4 md:hidden">
          <ul className="flex flex-col font-extrabold text-black gap-4 text-xl">
            <li>
              <a href="#">Notícias</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Nosso impacto</a>
            </li>
            <li>
              <a href="#">Parceiros</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
