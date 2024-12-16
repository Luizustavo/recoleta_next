import { MapPin, Calendar, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CollectionPoint {
  id: number;
  partner: string;
  type: string;
  address: string;
  distance: string;
  date: string;
  time: string;
}

interface CollectionCardProps {
  point: CollectionPoint;
}

export default function CollectionCard({ point }: CollectionCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Reciclável':
        return 'text-green-500';
      case 'Perigoso':
        return 'text-red-500';
      case 'Eletrônico':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{point.partner}</CardTitle>
        <Star className="h-4 w-4 text-yellow-400 cursor-pointer" />
      </CardHeader>
      <CardContent>
        <div className={`font-bold ${getTypeColor(point.type)}`}>
          {point.type}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          <MapPin className="h-3 w-3 inline mr-1" />
          {point.address} ({point.distance})
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          <Calendar className="h-3 w-3 inline mr-1" />
          {point.date}
          <Clock className="h-3 w-3 inline ml-2 mr-1" />
          {point.time}
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full">
          Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
