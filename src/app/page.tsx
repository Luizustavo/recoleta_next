"use client";

import Button from "@/components/atoms/button";
import Header from "@/components/organisms/header";

export default function Home() {
  return (
    <div className="grid grid-rows-3 bg-black relative h-screen">
      <video
        src="/videos/barco_home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      <span>
        <Header />
      </span>

      {/* Título */}
      <span className="relative z-10 text-white grid grid-cols-4 items-center sm:items-end px-10">
        <h1
          className="text-2xl sm:text-6xl font-bold col-span-4 sm:col-span-2"
          style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.7)" }}
        >
          Junte-se a nós e venha fazer a diferença
        </h1>
      </span>

      {/* Texto e Botões */}
      <span className="relative z-10 text-white grid grid-cols-5 px-10 mt-4 ">
        {/* Texto */}
        <div className="col-span-4 sm:col-span-2">
          <p
            className=" sm:text-2xl"
            style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            Junte-se a nós na maneira mais inovadora de salvar o planeta.
            Registre-se agora e faça parte da mudança!
          </p>

          {/* Botões abaixo do texto */}
          <div className="mt-6 flex gap-4">
            <Button
              variant="default"
              className="bg-white text-green-800 border border-green-800 font-bold px-6 py-3"
            >
              Acessar
            </Button>
            <Button
              variant="default"
              className="bg-transparent text-white border-white border font-bold px-6 py-3"
            >
              Apoie nossa causa
            </Button>
          </div>
        </div>
      </span>
    </div>
  );
}
