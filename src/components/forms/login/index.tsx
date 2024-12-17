'use client';

import Button from '@/components/atoms/button';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { loginUser } from '@/app/utils/api-utils';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  setIsLoginComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginForm({ setIsLoginComponent }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

  const isInvalid = React.useMemo(() => {
    if (email === '') return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');

      return;
    }

    try {
      setError(null);
      const response = await loginUser({
        email,
        password,
      });

      if (response.status === 200) {
        const { accessToken, isAdmin, ...user } = response.data;

        localStorage.setItem('_id', user._id);
        localStorage.setItem('token', accessToken);

        // Redirect to appropriate route based on user role
        router.push(isAdmin ? '/admin' : '/dashboard');
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <header>
        <h1 className="font-medium text-3xl">Bem-vindo de volta!</h1>
        <p className="font-normal text-base mt-3 mb-12">
          Conecte-se para contribuir com um futuro mais sustentável.
        </p>
      </header>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-8">
        <Input
          value={email}
          type="email"
          label="Email"
          isInvalid={isInvalid}
          onValueChange={setEmail}
          color={isInvalid ? 'danger' : undefined}
          errorMessage="Por favor, insira um email válido."
          placeholder="email@exemplo.com"
          labelPlacement="outside"
          startContent={
            <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          value={password}
          type={isVisible ? 'text' : 'password'}
          label="Senha"
          placeholder="Informe sua senha"
          onValueChange={setPassword}
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
        <Button type="submit" variant="primaryFill" className="w-full">
          Login
        </Button>
      </form>
      {error && <div className="login-warning text-red-500 mt-4">{error}</div>}

      <span className="flex items-center justify-center my-6 gap-4">
        <hr className="w-full border-t border-gray-300" />
        <span className="text-gray-500">ou</span>
        <hr className="w-full border-t border-gray-300" />
      </span>
      <section className="flex gap-10 justify-center">
        <div>
          <Button
            variant="primaryOutline"
            className="flex gap-3 text-sm"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          >
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
          <Button
            variant="primaryOutline"
            className="flex gap-3 text-sm"
            onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
          >
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
            className="text-green-800 font-bold"
            onClick={() => setIsLoginComponent(false)}
          >
            Cadastre-se
          </button>
        </h1>
      </span>
    </div>
  );
}
