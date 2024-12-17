'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RegisterForm from '@/components/forms/register';
import LoginForm from '@/components/forms/login';

export default function Page() {
  const [isLoginComponent, setIsLoginComponent] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('loginComponent') === 'false') {
      setIsLoginComponent(false);
    }
  }, []);

  return (
    <main className="relative flex w-full h-screen overflow-hidden">
      <section
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-500 ease-in-out ${
          isLoginComponent ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Image
          src="/images/login-page.svg"
          alt="Login"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section
        className={`flex flex-col items-center justify-center w-1/2 transition-transform duration-500 ease-in-out ${
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
