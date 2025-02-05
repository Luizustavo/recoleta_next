import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Lightbulb, Recycle, ArrowRight } from 'lucide-react';

const newsData = [
  {
    title: 'Novo recorde em energia renovável',
    summary:
      'Brasil atinge marca histórica na geração de energia solar, superando expectativas do setor.',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://example.com/news/1',
  },
  {
    title: 'Empresa lança embalagem 100% biodegradável',
    summary:
      'Inovação promete reduzir drasticamente o uso de plásticos em produtos de consumo diário.',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://example.com/news/2',
  },
  {
    title: 'Cidade implementa sistema de compostagem comunitária',
    summary:
      'Iniciativa visa reduzir resíduos orgânicos em aterros e promover a agricultura urbana sustentável.',
    image: '/placeholder.svg?height=200&width=300',
    link: 'https://example.com/news/3',
  },
];

const tipsData = [
  {
    title: 'Economize água',
    description:
      'Feche a torneira ao escovar os dentes, tome banhos mais curtos e reutilize a água da máquina de lavar para limpar calçadas.',
    icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
  },
  {
    title: 'Reduza o consumo de energia',
    description:
      'Utilize lâmpadas LED, desligue aparelhos eletrônicos da tomada quando não estiver usando e aproveite a luz natural sempre que possível.',
    icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: 'Opte por transportes sustentáveis',
    description:
      'Use bicicleta, transporte público ou carona compartilhada. Para distâncias curtas, prefira caminhar.',
    icon: <Lightbulb className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'Consuma de forma consciente',
    description:
      'Prefira produtos locais, orgânicos e com menos embalagens. Evite o desperdício de alimentos planejando suas refeições.',
    icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
  },
];

const wasteData = [
  {
    material: 'Papel e Papelão',
    examples: 'Jornais, revistas, caixas, embalagens',
    instructions:
      'Separe papéis limpos e secos. Dobre caixas para economizar espaço.',
    disposal: 'Contêiner azul ou ponto de coleta seletiva',
  },
  {
    material: 'Plástico',
    examples: 'Garrafas PET, embalagens, sacolas',
    instructions:
      'Lave e seque as embalagens. Separe tampas, se forem de material diferente.',
    disposal: 'Contêiner vermelho ou ponto de coleta seletiva',
  },
  {
    material: 'Vidro',
    examples: 'Garrafas, potes, frascos',
    instructions: 'Lave os recipientes. Cuidado com vidros quebrados.',
    disposal: 'Contêiner verde ou ponto de coleta seletiva',
  },
  {
    material: 'Metal',
    examples: 'Latas de alumínio, embalagens metálicas',
    instructions:
      'Lave e, se possível, comprima as latas para economizar espaço.',
    disposal: 'Contêiner amarelo ou ponto de coleta seletiva',
  },
  {
    material: 'Orgânicos',
    examples: 'Restos de alimentos, cascas de frutas e legumes',
    instructions: 'Separe dos demais resíduos. Ideal para compostagem.',
    disposal: 'Composteira doméstica ou coleta de orgânicos municipal',
  },
];

export default function EnhancedSustainabilityScreen() {
  return (
    <div className="container mx-auto p-4 bg-green-50">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Sustentabilidade em Ação
      </h1>

      <Tabs defaultValue="news" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="news" className="text-lg">
            Notícias
          </TabsTrigger>
          <TabsTrigger value="tips" className="text-lg">
            Dicas
          </TabsTrigger>
          <TabsTrigger value="waste" className="text-lg">
            Descarte
          </TabsTrigger>
        </TabsList>

        <TabsContent value="news">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{news.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Leia mais <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tips">
          <div className="grid md:grid-cols-2 gap-6">
            {tipsData.map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {tip.icon}
                    <span className="ml-2">{tip.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="waste">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Recycle className="mr-2" />
                Guia de Descarte Correto de Resíduos
              </CardTitle>
              <CardDescription>
                Aprenda a separar e descartar seus resíduos adequadamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {wasteData.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-2">
                      {item.material}
                    </h3>
                    <p>
                      <strong>Exemplos:</strong> {item.examples}
                    </p>
                    <p>
                      <strong>Instruções:</strong> {item.instructions}
                    </p>
                    <p>
                      <strong>Descarte:</strong> {item.disposal}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
