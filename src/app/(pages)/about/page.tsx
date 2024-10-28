import Button from '@/components/atoms/button';
import React from 'react';

export default function About() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <video
        src="/videos/residuo_about.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="max-h-screen w-full object-cover"
      ></video>

      <section className="flex flex-col items-start px-10 md:px-24 lg:px-40 py-10 md:py-20 gap-8 overflow-y-auto max-h-screen">
        <h1 className="text-5xl font-bold flex flex-col leading-tight first-letter:font-light">
          Conheça o{' '}
          <span className="flex">
            <p className="text-primary-orange">Re</p>
            <p className="text-primary-green">Coleta</p>
          </span>
        </h1>
        <p className="text-base md:text-lg font-light leading-7 md:leading-9">
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
      </section>
    </main>
  );
}
