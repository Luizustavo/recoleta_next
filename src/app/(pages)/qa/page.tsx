import Button from "@/components/atoms/button/index";

export default function QAPage() {
  return (
    <div className="flex flex-col items-center mt-10 py-2 bg-white">
      <h1 className="flex items-center justify-center text-6xl font-bold">
        Components
      </h1>
      <main className="grid grid-cols-4 gap-4 m-12 w-full h-full">
        <span className="flex flex-col gap-4 p-4">
          <Button buttonStyle="fill">Fiil</Button>
          <Button buttonStyle="outline">Outline</Button>
          <Button buttonStyle="fill" disabled>
            Disabled
          </Button>
        </span>
      </main>
    </div>
  );
}
