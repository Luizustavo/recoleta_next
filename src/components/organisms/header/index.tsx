import Button from "@/components/atoms/button/index";
import Image from "next/image";
import React from "react";

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
        <h1 className="text-3xl font-bold text-white">ReColeta</h1>
      </span>

      <nav className="col-span-4 self-center justify-center">
        <ul
          className="flex flex-row font-extrabold text-white justify-center gap-16 text-2xl"
          style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
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
