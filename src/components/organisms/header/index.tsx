import Button from '@/components/atoms/button/index';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
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
          className="xl:text-3xl text-2xl md:ml-4 2xl:ml-28 xl:ml-16 font-bold text-[#F6F6F6]"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          ReColeta
        </h1>
      </span>

      <nav className="col-span-4 self-center justify-center">
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
      <span className="flex justify-end">
        <Button
          variant="default"
          className="bg-white text-green-800 border border-green-800 font-bold"
        >
          Acessar
        </Button>
      </span>
    </header>
  );
};

export default Header;
