import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SummaryPanelProps {
  totalCollections: number;
  recyclableCount: number;
  hazardousCount: number;
  availableNow: number;
}

export default function SummaryPanel({
  totalCollections,
  recyclableCount,
  hazardousCount,
  availableNow,
}: SummaryPanelProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de Coletas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCollections}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Resíduos Recicláveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{recyclableCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Resíduos Perigosos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{hazardousCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Coletas Disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{availableNow}</div>
        </CardContent>
      </Card>
    </div>
  );
}
