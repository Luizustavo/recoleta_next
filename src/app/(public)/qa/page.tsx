'use client';

import Button from '@/components/atoms/button/index';
import Container from '@/components/atoms/container';
import { Header } from '@/components/organisms/header/index';

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
      <div className="px-2">
        <Container
          width="2xl:w-fit 2xl:max-w-full"
          additionalTWStyles="p-6 "
          applySolidBackground
          applyShadowEffect
          backgroundColor="#FF9A51"
          shadowEffect="shadow-lg"
        >
          <div>Test Container With Containers</div>
          <div className="space-y-6">
            <div className="flex flex-wrap space-x-6 justify-between">
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                backgroundColor="#A6FA7E"
                applySolidBackground
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Solid Bg Container:
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyMask
                backgroundColor="#A6FA7E"
                applySolidBackground
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default ">
                  Test Masks Container:
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyBorder
                borderStyles="border-2 border-[#A6FA7E]"
                roundedCorners="rounded"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Border Container
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyShadowEffect
                shadowEffect="shadow-lg"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Only Shadow Container
                </div>
              </Container>
            </div>
            <div className="flex flex-wrap space-x-6 justify-between">
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applySolidBackground
                backgroundColor="#7EE3FA"
                roundedCorners="rounded-none"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Solid Bg Container No Rounded
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyMask
                maskDirection="b-t"
                maskOpacity={0.3}
                maskStyle="blue"
                applySolidBackground
                applyShadowEffect
                shadowEffect="shadow-lg"
                roundedCorners="rounded-none"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Custom Masks Container No Rounded
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyBorder
                borderStyles="border-2 border-[#7EE3FA]"
                applyShadowEffect
                shadowEffect="shadow-lg"
                roundedCorners="rounded-none"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Border Container No Rounded
                </div>
              </Container>
              <Container
                additionalTWStyles="p-6"
                height="2xl:h-[600px]"
                width="2xl:w-[400px]"
                applyShadowEffect
                shadowEffect="shadow-lg"
              >
                <div className="flex flex-col gap-4 p-2 text-caption-default">
                  Test Only Shadow Container No Rounded
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
