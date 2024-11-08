'use client';

import React, { FC, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant:
    | 'primaryFill'
    | 'secondaryFill'
    | 'tertiaryFill'
    | 'primaryOutline'
    | 'secondaryOutline'
    | 'tertiaryOutline'
    | 'default';
  className?: string;
  disabled?: boolean;
}

const ButtonColor = {
  primaryFill: 'bg-primary-dark hover:bg-primary-light focus:ring-primary-dark',
  primaryOutline:
    'text-primary-dark bg-transparent border border-primary-dark hover:bg-primary/10 focus:ring-primary-dark',
  secondaryFill:
    'bg-secondary-dark hover:bg-secondary-light focus:ring-secondary-dark',
  secondaryOutline:
    'text-secondary-dark bg-transparent border border-secondary-dark hover:bg-secondary-dark focus:ring-secondary-dark',
  tertiaryFill:
    'bg-tertiary-dark hover:bg-tertiary-light focus:ring-tertiary-dark',
  tertiaryOutline:
    'text-tertiary-dark bg-transparent border border-tertiary-dark hover:bg-tertiary-dark focus:ring-tertiary-dark',
};

const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        `w-fit px-4 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 ${className}`,
        disabled && 'opacity-50 cursor-not-allowed',

        (() => {
          switch (variant) {
            case 'primaryFill':
              return ButtonColor.primaryFill;
            case 'primaryOutline':
              return ButtonColor.primaryOutline;
            case 'secondaryFill':
              return ButtonColor.secondaryFill;
            case 'secondaryOutline':
              return ButtonColor.secondaryOutline;
            case 'tertiaryFill':
              return ButtonColor.tertiaryFill;
            case 'tertiaryOutline':
              return ButtonColor.tertiaryOutline;
            default:
              return '';
          }
        })()
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
