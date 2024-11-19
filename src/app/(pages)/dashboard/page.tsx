'use client';

import { BarChartLabel } from '@/components/charts/bar-chart/index';
import { LineChartComponent } from '@/components/charts/line-chart/index';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Button from '@/components/atoms/button';
import Countup from 'react-countup';
import { useAuth } from '@/hooks/use-auth';

export default function Dashboard() {
  const { userData } = useAuth();

  return (
    <div className="flex-1  ">
      <main className="p-3">
        <div className="grid md:grid-cols-5 gap-5">
          <Card className="w-full col-span-2">
            <CardHeader>
              <CardTitle>
                Parabéns, {userData?.firstName} {''}
                {userData?.lastName ? userData.lastName : ''}! 🎉
              </CardTitle>
              <CardDescription className="pt-3 flex flex-col text-sm ">
                <h1 className="text-success font-bold">
                  🎉 Você realizou 30 coletas este mês, superando a meta em
                  150%!{' '}
                </h1>
                <br />
                <h1>
                  🌍 Continue assim e ajude a tornar o mundo mais sustentável!
                </h1>
                <br />
                <h1>
                  {' '}
                  🌱 Dica: Cada coleta contribui para evitar o desperdício e
                  proteger nosso meio ambiente. Que tal desafiar-se para
                  alcançar o dobro no próximo mês?
                </h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-10">
              <Button variant="primaryOutline">Compartilhar conquista</Button>
            </CardContent>
          </Card>
          <div className="col-span-2">
            <BarChartLabel />
          </div>
          <Card className="w-full col-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle>Impacto ambiental</CardTitle>
              <CardDescription className="pt-3 flex flex-col text-sm gap-4">
                <Card className="p-3 flex flex-col items-center justify-center">
                  <h1 className=" font-bold text-primary-dark">
                    Emissão de CO² evitados
                  </h1>
                  <Countup
                    end={1658}
                    suffix=" kg"
                    className="font-bold text-lg"
                    delay={1}
                    duration={3}
                  />
                </Card>
                <Card className="p-3 flex flex-col items-center justify-center">
                  <h1 className=" font-bold text-primary-blue">
                    Água economizada
                  </h1>
                  <Countup
                    end={3562}
                    delay={1}
                    duration={3}
                    suffix=" l"
                    className="font-bold text-lg"
                  />
                </Card>
                <Card className="p-3 flex flex-col items-center justify-center">
                  <h1 className="font-bold text-primary-orange">
                    Resíduos reciclados
                  </h1>
                  <Countup
                    end={3542}
                    delay={1}
                    duration={3}
                    suffix=" kg"
                    className="font-bold text-lg"
                  />
                </Card>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid sm:grid-cols-4 gap-5 mt-5 ">
          <div className="col-span-4 grid grid-cols gap-5 ">
            <LineChartComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
