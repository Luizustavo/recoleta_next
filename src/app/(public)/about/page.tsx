import Button from '@/components/atoms/button';

export default function About() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <figure className="relative h-full">
        <video
          aria-label="Demonstração do processo de reciclagem através do ReColeta"
          src="/videos/residuo_about.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          width={1920}
          height={1080}
          className="max-h-screen w-full object-cover"
        ></video>
        <figcaption className="sr-only">
          Vídeo demonstrativo do processo de reciclagem
        </figcaption>
      </figure>

      <article className="flex flex-col items-start px-10 md:px-24 lg:px-40 py-10 md:py-20 gap-8 overflow-y-auto max-h-screen">
        <header>
          <h1 className="text-5xl font-bold flex flex-col leading-tight">
            Conheça o{' '}
            <span className="flex gap-1" aria-hidden="true">
              <span className="text-primary-orange">Re</span>
              <span className="text-primary-green">Coleta</span>
            </span>
          </h1>
        </header>

        <section aria-labelledby="sobre-nos">
          <h2 id="sobre-nos" className="sr-only">
            Sobre Nós
          </h2>
          <p className="text-base md:text-lg font-light leading-7 md:leading-9">
            Bem-vindo ao ReColeta, o aplicativo que está revolucionando a forma
            como lidamos com resíduos. Nossa missão é conectar geradores de
            resíduos, recicladores e tratadores de resíduos em uma rede
            colaborativa para promover a sustentabilidade e a preservação do
            meio ambiente.
          </p>
        </section>

        <footer className="mt-4">
          <Button
            variant="default"
            className="bg-transparent text-green-900 border-green-900 border font-bold px-6 py-3 hover:bg-green-50 focus:ring-2 focus:ring-green-900 focus:ring-offset-2 transition-colors"
            aria-label="Apoie nossa causa através de doações ou parcerias"
            role="button"
          >
            Apoie nossa causa
          </Button>
        </footer>
      </article>
    </main>
  );
}
