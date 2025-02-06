'use client';

import Button from '@/components/atoms/button';
import { Header } from '@/components/organisms/header';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="grid grid-rows-3 bg-black relative h-screen">
      <figure className="absolute top-0 left-0 w-full h-full">
        <video
          aria-label="Vídeo de fundo mostrando natureza"
          src="/videos/barco_home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        ></video>
        <figcaption className="sr-only">
          Vídeo ilustrativo de processos sustentáveis e natureza preservada
        </figcaption>
      </figure>

      <Header aria-label="Navegação principal" />

      <section className="relative z-10 text-white grid grid-cols-4 items-center sm:items-end px-10">
        <h1
          className="text-2xl sm:text-6xl font-bold col-span-4 sm:col-span-2"
          style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          Junte-se a nós e venha fazer a diferença
        </h1>
      </section>

      <section
        className="relative z-10 text-white grid grid-cols-5 px-10 mt-4"
        aria-labelledby="cta-section"
      >
        <span className="col-span-4 sm:col-span-2">
          <p
            id="cta-section"
            className="sm:text-2xl"
            style={{ textShadow: '1px 2px 4px rgba(0, 0, 0, 0.7)' }}
            role="doc-subtitle"
          >
            Junte-se a nós na maneira mais inovadora de salvar o planeta.
            Registre-se agora e faça parte da mudança!
          </p>

          <nav className="mt-6 flex gap-4" aria-label="Ações principais">
            <Button
              variant="default"
              className="bg-white text-green-800 border border-green-800 font-bold px-6 py-3 hover:bg-green-50 focus:ring-2 focus:ring-green-900 focus:ring-offset-2 transition-colors"
              onClick={() => router.push('/login?loginComponent=false')}
              aria-label="Ir para página de cadastro"
            >
              Cadastre-se
            </Button>
            <Button
              variant="default"
              className="bg-transparent text-white border-white border font-bold px-6 py-3 hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
              aria-label="Saiba como apoiar nossa causa"
            >
              Apoie nossa causa
            </Button>
          </nav>
        </span>
      </section>
    </main>
  );
}
