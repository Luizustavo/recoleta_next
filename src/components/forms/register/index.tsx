import Button from '@/components/atoms/button';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { Input } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import { z } from 'zod';

interface RegisterFormProps {
  setIsLoginComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RegisterForm({
  setIsLoginComponent,
}: RegisterFormProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const [emailTouched, setEmailTouched] = React.useState(false);
  const [passwordTouched, setPasswordTouched] = React.useState(false);

  // Zod validation schema
  const emailSchema = z.string().email('Por favor, insira um email válido.');
  const passwordSchema = z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres.')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula.')
    .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula.')
    .regex(/\d/, 'A senha deve conter pelo menos um número.')
    .regex(
      /[@$!%*?&]/,
      'A senha deve conter pelo menos um caractere especial.'
    );

  const validateEmail = () => {
    try {
      emailSchema.parse(email);
      setEmailError('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message);
      }
    }
  };

  const validatePassword = () => {
    try {
      passwordSchema.parse(password);
      setPasswordError('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setPasswordError(error.errors[0].message);
      }
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordTouched(true); // Marcando que o campo foi tocado
    validatePassword();
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailTouched(true); // Marcando que o campo foi tocado
    validateEmail();
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  // Validação ao digitar
  React.useEffect(() => {
    validateEmail();
    validatePassword();
  }, [email, password]);

  return (
    <div className="flex flex-col">
      <header>
        <h1 className="font-medium text-3xl">Crie sua conta</h1>
        <p className="font-normal text-base mt-3 mb-12">
          Junte-se a nós para um futuro mais sustentável.
        </p>
      </header>
      <section className="w-full flex flex-col gap-8">
        <Input
          type="name"
          label="Nome"
          placeholder="John Doe"
          labelPlacement="outside"
          startContent={
            <User className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Input
          value={email}
          type="email"
          label="Email"
          isInvalid={emailTouched && !!emailError} // Só marca como inválido depois que o usuário tocou no campo
          onValueChange={handleEmailChange}
          color={emailTouched && emailError ? 'danger' : undefined} // Aplica o estilo danger só após o toque
          errorMessage={emailTouched && emailError} // Só exibe a mensagem de erro se o campo foi tocado
          placeholder="email@exemplo.com"
          labelPlacement="outside"
          startContent={
            <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          onBlur={validateEmail} // Validar email ao sair do campo
        />
        <Input
          value={password}
          type={isVisible ? 'text' : 'password'}
          label="Senha"
          placeholder="Cadastre uma senha"
          isInvalid={passwordTouched && !!passwordError} // Só marca como inválido depois que o usuário tocou no campo
          onValueChange={handlePasswordChange}
          color={passwordTouched && passwordError ? 'danger' : undefined} // Aplica o estilo danger só após o toque
          errorMessage={passwordTouched && passwordError} // Só exibe a mensagem de erro se o campo foi tocado
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
        <Button
          variant="primaryFill"
          className="w-full"
          disabled={
            !!emailError || !!passwordError || email === '' || password === ''
          }
        >
          Cadastrar
        </Button>
      </section>
      <span className="flex items-center justify-center my-6 gap-4">
        <hr className="w-full border-t border-gray-300" />
        <span className="text-gray-500">ou</span>
        <hr className="w-full border-t border-gray-300" />
      </span>
      <section className="flex gap-10 justify-center">
        <Button variant="primaryOutline" className="flex gap-3 text-sm">
          <Image
            src="/images/icon-google.svg"
            alt="icon-google"
            width={20}
            height={20}
          />
          Entrar com Google
        </Button>
        <Button variant="primaryOutline" className="flex gap-3 text-sm">
          <Image
            src="/images/icon-facebook.svg"
            alt="icon-facebook"
            width={20}
            height={20}
          />
          Entrar com Facebook
        </Button>
      </section>
      <span className="flex justify-center">
        <h1 className="mt-4">
          Já possui uma conta?{' '}
          <button
            className="text-green-800 font-bold"
            onClick={() => setIsLoginComponent(true)}
          >
            Faça login
          </button>
        </h1>
      </span>
    </div>
  );
}
