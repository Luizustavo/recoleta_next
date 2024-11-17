'use client';

import Image from 'next/image';
import { LayoutDashboard, Recycle, Radiation, LogOut } from 'lucide-react';

export default function Aside() {
  return (
    <aside className="h-screen w-64 bg-slate-800 fixed left-0 top-0 pt-6 pr-4 text-white border-r flex flex-col">
      {/* Logo e Título */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Image
          src="/images/logo_recoleta.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <h1 className="font-bold text-2xl text-white">ReColeta</h1>
      </div>

      <div className="border-t mx-4 mt-4" />
      <ul className="flex-1 mx-3 text-lg font-bold flex flex-col gap-5 mt-7">
        <li className="flex gap-4 hover:bg-slate-50 rounded-lg p-2 hover:text-slate-950">
          <LayoutDashboard />
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="flex gap-4 hover:bg-slate-50 rounded-lg p-2 hover:text-slate-950">
          <Recycle />
          <a href="">Buscar resíduos</a>
        </li>
        <li className="flex gap-4 hover:bg-slate-50 rounded-lg p-2 hover:text-slate-950">
          <Radiation />
          <a href="">Encontrar coletor</a>
        </li>
      </ul>

      <div className="border-t mx-4 mt-4" />
      <div className="m-3">
        <li className="flex gap-4 hover:bg-slate-50 rounded-lg p-2 hover:text-slate-950">
          <LogOut />
          <a href="">Sair</a>
        </li>
      </div>
    </aside>
  );
}
