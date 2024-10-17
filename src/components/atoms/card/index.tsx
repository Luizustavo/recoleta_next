import React from 'react';

interface CardProps {
  img: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={img} alt={title} height={400} width={400} />
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
