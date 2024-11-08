'use client';

import React from 'react';
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import Button from '@/components/atoms/button';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [value, setValue] = React.useState('');
  const validateEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
  const isInvalid = React.useMemo(() => {
    if (value === '') return false;

    return validateEmail(value) ? false : true;
  }, [value]);
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="grid grid-cols-2">
      <main className="flex items-center justify-center">
        <div className="flex flex-col">
          <header>
            <h1 className="font-medium text-3xl">Bem-vindo de volta!</h1>
            <p className="font-normal text-base mt-3 mb-12 ">
              Conecte-se para contribuir com um futuro mais sustentável.
            </p>
          </header>
          <section className="w-full flex flex-col gap-8">
            <Input
              value={value}
              type="email"
              label="Email"
              isInvalid={isInvalid}
              onValueChange={setValue}
              color={isInvalid ? 'danger' : undefined}
              errorMessage="Por favor, insira um email válido."
              placeholder="email@exemplo.com"
              labelPlacement="outside"
              startContent={
                <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />

            <Input
              type={isVisible ? 'text' : 'password'}
              label="Senha"
              placeholder="Informe sua senha"
              labelPlacement="outside"
              startContent={
                <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            />

            <Button variant="primaryFill" className="w-full">
              Login
            </Button>
          </section>
          <span className="flex items-center justify-center my-6 gap-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="text-gray-500">ou</span>
            <hr className="w-full border-t border-gray-300" />
          </span>
          <section className="flex gap-10 justify-center">
            <div>
              <Button variant="primaryOutline" className="flex gap-3 text-sm">
                <Image
                  src="/images/icon-google.svg"
                  alt="icon-google"
                  width={20}
                  height={20}
                />
                Entrar com Google
              </Button>
            </div>
            <div>
              <Button variant="primaryOutline" className="flex gap-3 text-sm">
                <Image
                  src="/images/icon-facebook.svg"
                  alt="icon-facebook"
                  width={20}
                  height={20}
                />
                Entrar com Facebook
              </Button>
            </div>
          </section>
          <span className="flex justify-center">
            <h1 className="mt-4">
              Não possui uma conta?{' '}
              <button
                className="bg-white text-green-800 font-bold"
                onClick={() => {
                  router.push('/');
                }}
              >
                Cadastre-se
              </button>
            </h1>
          </span>
        </div>
      </main>
      <section className="w-full h-screen flex justify-end">
        <figure className="relative w-full h-full">
          <Image
            src="/images/login-page.svg"
            alt="Login"
            layout="fill"
            objectFit="cover"
          />
        </figure>
      </section>
    </div>
  );
}
