'use client';

import { Avatar } from '@nextui-org/react';
import { BellDot } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="w-full h-16 bg-gray-200 text-slate-800 border-l rounded-bl-md relative top-0 right-0 flex items-center justify-end gap-8 px-8">
      <BellDot />
      <span>
        <h1 className="text-sm">Bem vinda,</h1>
        <h1>Jane Doe</h1>
      </span>
      <Avatar isBordered color="secondary" src="/images/example-avatar.jpg" />
    </nav>
  );
}
