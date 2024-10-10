"use client";

import Button from "@/components/atoms/button/index";
import Header from "@/components/organisms/header/index";

export default function QAPage() {
  return (
    <div className="flex flex-col items-center mt-10 py-2 bg-zinc-700">
      <h1 className="flex items-center justify-center text-6xl font-bold">
        Components
      </h1>
      <main className="grid grid-cols-4 gap-4 m-12 w-full h-full">
        <span className="col-span-4">
          <Header />
        </span>
        <span className="flex flex-col gap-4 p-4 col-span-4">
          <Button variant="primaryFill">Primary Fill</Button>
          <Button variant="primaryOutline">Primary Outline</Button>
          <Button variant="secondaryFill">Secondary Fill</Button>
          <Button variant="secondaryOutline">Secondary Outline</Button>
          <Button variant="tertiaryFill">Tertiary Fill</Button>
          <Button variant="tertiaryOutline">Tertiary Outline</Button>
          <Button variant="primaryFill" disabled>
            Disableb
          </Button>
        </span>
      </main>
    </div>
  );
}
