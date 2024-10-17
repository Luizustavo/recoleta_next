import Card from '@/components/atoms/card';

export default function Sustainability() {
  return (
    <div className="p-24 h-screen">
      <span className="flex flex-row gap-4 text-6xl font-bold">
        <h1>ReColeta</h1>
        <h1 className="text-primary-green">Sustentabilidade</h1>
      </span>
      <section>
        <p className="text-xl font-light leading-10 mt-20">
          Com as mudanças sociais e tecnológicas cada vez mais rápidas, é
          necessário acompanhar o ritmo. Sabemos que o cuidado e a manutenção do
          meio ambiente não podem ser ignorados. Com o mundo cada vez mais
          conectado, precisamos de meios inteligentes e eficientes para lidar
          com os resíduos que geramos.
        </p>
      </section>
      <section className="grid grid-cols-3 mt-20">
        <Card
          title="Governança"
          img="https://1drv.ms/i/c/80cb5c9b779c418b/IQRJJ6X91Rc8QJ7jG9QsT8xgAURoqA4pNOa8LCNf1TGlin0?width=1024"
        />

        <Card
          title="Planeta"
          img="https://1drv.ms/i/c/80cb5c9b779c418b/IQQ2EXDInqN-Tr1lQxVOxNyTAQ84DW2vTgQrX2FFj47DEqI?width=1024"
        />

        <Card
          title="Sociedade"
          img="https://1drv.ms/i/c/80cb5c9b779c418b/IQQDSaRtyebxQZCDx3QmceTzAczftX7cPo6NuFgrpqUqiXE?width=1024"
        />
      </section>
    </div>
  );
}
