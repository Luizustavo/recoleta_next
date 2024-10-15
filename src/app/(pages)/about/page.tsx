import Button from '@/components/atoms/button';
import React from 'react';

export default function About() {
  return (
    <main className="grid grid-cols-2 ">
      <video
        src="/videos/residuo_about.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="max-h-screen w-full object-cover"
      ></video>

      <div className="flex flex-col items-start px-56 py-24 gap-12 max-h-screen">
        <h1 className="text-6xl font-bold flex flex-col leading-tight first-letter:font-light">
          Conheça o{' '}
          <span className="flex">
            <p className="text-primary-orange">Re</p>
            <p className="text-primary-green">Coleta</p>
          </span>
        </h1>
        <p className="text-2xl font-light leading-10">
          Bem-vindo ao Recoleta, o aplicativo que está revolucionando a forma
          como lidamos com resíduos. Nossa missão é conectar geradores de
          resíduos, recicladores e tratadores de resíduos em uma rede
          colaborativa para promover a sustentabilidade e a preservação do meio
          ambiente. Nossa missão é conectar geradores de resíduos, recicladores
          e tratadores de resíduos em uma rede colaborativa para promover a
          sustentabilidade e a preservação do meio ambiente.
        </p>
        <Button
          variant="default"
          className="bg-transparent text-green-900 border-green-900 border font-bold px-6 py-3"
        >
          Apoie nossa causa
        </Button>
      </div>
    </main>
  );
}
