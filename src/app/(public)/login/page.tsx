'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@/components/forms/login'));
const RegisterForm = dynamic(() => import('@/components/forms/register'));

export default function Page({
  searchParams,
}: {
  searchParams: { loginComponent?: string };
}) {
  const [isLoginComponent, setIsLoginComponent] = useState(
    searchParams?.loginComponent !== 'false'
  );

  return (
    <main className="relative flex w-full h-screen overflow-hidden">
      <section
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-300 ease-in-out ${
          isLoginComponent ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Image
          src="/images/login-page.webp"
          alt="Login"
          layout="fill"
          objectFit="cover"
          priority
          quality={80}
        />
      </section>

      <section
        className={`flex flex-col items-center justify-center w-1/2 transition-transform duration-300 ease-in-out ${
          isLoginComponent ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {isLoginComponent ? (
          <LoginForm setIsLoginComponent={setIsLoginComponent} />
        ) : (
          <RegisterForm setIsLoginComponent={setIsLoginComponent} />
        )}
      </section>
    </main>
  );
}
