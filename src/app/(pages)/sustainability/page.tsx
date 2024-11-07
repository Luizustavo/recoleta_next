import Image from 'next/image';
import Card from '@/components/atoms/card';

export default function Sustainability() {
  return (
    <div className="h-screen flex flex-col">
      <section className="flex-1 mx-28">
        <div className="mt-16">
          <h1 className="text-5xl font-bold flex leading-tight first-letter:font-light gap-3">
            ReColeta
            <span className="text-primary-dark">Sustentabilidade</span>
          </h1>
        </div>
        <main className="mt-10">
          <p className="text-lg">
            Com as mudanças sociais e tecnológicas cada vez mais rápidas, é
            necessário acompanhar o ritmo. Sabemos que o cuidado e a manutenção
            do meio ambiente não podem ser ignorados. Com o mundo cada vez mais
            conectado, precisamos de meios inteligentes e eficientes para lidar
            com os resíduos que geramos.
          </p>

          <span className="flex gap-32 justify-center">
            <Card
              title="Governaça"
              borderColor="bg-secondary"
              cardImage="/images/governanca.svg"
            />
            <Card
              title="Planeta"
              borderColor="bg-primary"
              cardImage="/images/planeta.svg"
            />
            <Card
              title="Sociedade"
              borderColor="bg-tertiary-light"
              cardImage="/images/sociedade.svg"
            />
          </span>
        </main>
      </section>

      <footer className="w-full h-28 relative overflow-hidden">
        <Image
          src="/images/green-ellipse.svg"
          alt="logo"
          layout="responsive"
          width={100}
          height={100}
          className="object-cover"
        />
      </footer>
    </div>
  );
}
