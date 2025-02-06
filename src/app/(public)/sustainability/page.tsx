'use client';

import Image from 'next/image';
import Card from '@/components/atoms/card';

export default function Sustainability() {
  return (
    <div className="h-screen flex flex-col">
      <header
        className="flex-1 mx-28"
        role="region"
        aria-labelledby="sustentabilidade-heading"
      >
        <div className="mt-16">
          <h1
            id="sustentabilidade-heading"
            className="text-5xl font-bold flex leading-tight first-letter:font-light gap-3"
          >
            <span aria-hidden="true">ReColeta</span>
            <span className="text-primary-dark sr-only">ReColeta </span>
            <span className="text-primary-dark">Sustentabilidade</span>
          </h1>
        </div>

        <article className="mt-10">
          <section aria-labelledby="sustentabilidade-descricao">
            <p
              id="sustentabilidade-descricao"
              className="text-lg"
              role="paragraph"
            >
              Com as mudanças sociais e tecnológicas cada vez mais rápidas, é
              necessário acompanhar o ritmo. Sabemos que o cuidado e a
              manutenção do meio ambiente não podem ser ignorados. Com o mundo
              cada vez mais conectado, precisamos de meios inteligentes e
              eficientes para lidar com os resíduos que geramos.
            </p>
          </section>

          <section
            className="flex gap-32 justify-center mt-10"
            role="list"
            aria-label="Pilares da sustentabilidade"
          >
            <Card
              title="Governança"
              borderColor="bg-secondary"
              cardImage="/images/governanca.webp"
              aria-label="Governança ambiental"
            />
            <Card
              title="Planeta"
              borderColor="bg-primary"
              cardImage="/images/planeta.webp"
              aria-label="Preservação do planeta"
            />
            <Card
              title="Sociedade"
              borderColor="bg-tertiary-light"
              cardImage="/images/sociedade.webp"
              aria-label="Impacto social"
            />
          </section>
        </article>
      </header>

      <footer
        className="w-full h-28 relative overflow-hidden"
        role="contentinfo"
        aria-label="Rodapé decorativo"
      >
        <Image
          src="/images/green-ellipse.webp"
          alt="Elemento visual decorativo representando sustentabilidade"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
          priority
        />
      </footer>
    </div>
  );
}
