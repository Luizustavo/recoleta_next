import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface CardProps {
  title: string;
  borderColor: string;
  cardImage: string;
}

export default function Card({ title, borderColor, cardImage }: CardProps) {
  return (
    <button className="mt-16">
      <div className="relative w-72 h-60 overflow-hidden">
        <Image src={cardImage} alt={title} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-2xl text-center text-white font-bold">
          {title}
        </div>
      </div>
      <div className={twMerge(`w-full h-3 rounded-b-md ${borderColor}`)} />
    </button>
  );
}
