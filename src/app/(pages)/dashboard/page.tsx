'use client';

import { BarChartLabel } from '@/components/charts/bar-chart/index';
import { PieChartText } from '@/components/charts/pie-chart/index';
import { LineChartComponent } from '@/components/charts/line-chart/index';
import { BarChartActive } from '@/components/charts/bar-chart-active/index';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Button from '@/components/atoms/button';

export default function Dashboard() {
  return (
    <div className="flex-1  ">
      <main className="p-6">
        <div className="grid sm:grid-cols-5 gap-5">
          <Card className="w-full col-span-2">
            <CardHeader>
              <CardTitle>Parabéns, Jane Doe! 🎉</CardTitle>
              <CardDescription className="pt-3 flex flex-col text-sm">
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
            <CardContent>
              <Button variant="primaryOutline">Compartilhar conquista</Button>
            </CardContent>
          </Card>
          <div className="col-span-2">
            <PieChartText />
          </div>
        </div>
        <div className="grid sm:grid-cols-4 gap-5 mt-5 ">
          <div className="col-span-4 grid grid-cols-4 gap-5 ">
            <div className="col-span-4">
              <LineChartComponent />
            </div>
            <div className="col-span-4 sm:col-span-2 ">
              <BarChartLabel />
            </div>

            <div className="col-span-4 sm:col-span-2 ">
              <BarChartActive />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
