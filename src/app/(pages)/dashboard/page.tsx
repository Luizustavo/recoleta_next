'use client';

import Aside from '@/components/organisms/aside';
import NavBar from '@/components/organisms/navbar';
import { BarChartLabel } from '@/components/charts/bar-chart/index';
import { PieChartText } from '@/components/charts/pie-chart/index';
import { Component } from '@/components/charts/line-chart/index';
import CountUp from 'react-countup';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="">
      <Aside />
      <div className="flex-1 ml-64 ">
        <NavBar />
        <main className="p-6 bg-stone-100 border-t-1 rounded-tl-md">
          <h2 className="font-bold text-xl text-black">Dashboard</h2>

          <div className="grid grid-cols-5 gap-5 mt-5 ">
            <div className="col-span-4 grid grid-cols-4 gap-5">
              <div className="col-span-2">
                <BarChartLabel />
              </div>

              <div className="col-span-2">
                <PieChartText />
              </div>

              <div className="col-span-4">
                <Component />
              </div>
            </div>
            <div className="col-span-1 pr">
              <div className="flex flex-col">
                <Card className="w-full h-64 ">
                  <CardHeader>
                    <CardTitle>Reciclados este mês</CardTitle>
                    <CardDescription>kg</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center flex-col justify-center gap-6 h-3/5">
                    <CountUp
                      end={1351}
                      className="text-lg font-bold leading-none sm:text-5xl mt-5"
                    />
                    <div className="flex items-end justify-end size-full">
                      <Image
                        src="/images/icon-reciclagem.png"
                        alt="recycle"
                        width={100}
                        height={100}
                        className="w-10 h-10"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="w-full h-64 mt-4">
                  <CardHeader>
                    <CardTitle>Resíduos reciclados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CountUp end={1000} />{' '}
                  </CardContent>
                </Card>
                <Card className="w-full h-64 mt-4">
                  <CardHeader>
                    <CardTitle>Resíduos reciclados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CountUp end={1000} />{' '}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
