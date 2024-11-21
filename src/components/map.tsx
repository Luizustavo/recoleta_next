import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MapProps {
  points: Array<{
    id: number;
    lat: number;
    lng: number;
    partner: string;
    type: string;
    distance: string;
  }>;
  onPinClick: (id: number) => void;
  selectedPoint: number | null;
}

export default function Map({ points, onPinClick, selectedPoint }: MapProps) {
  // In a real application, you would integrate with a map library like Google Maps or Mapbox here
  return (
    <div className="bg-gray-200 h-full w-full relative">
      {points.map(point => (
        <div
          key={point.id}
          style={{
            position: 'absolute',
            left: `${point.lng}%`,
            top: `${point.lat}%`,
          }}
        >
          <MapPin
            className={`text-primary cursor-pointer ${selectedPoint === point.id ? 'text-secondary' : ''}`}
            onClick={() => onPinClick(point.id)}
          />
          {selectedPoint === point.id && (
            <Card className="absolute z-10 w-48">
              <CardContent className="p-2">
                <p className="font-bold">{point.partner}</p>
                <p>{point.type}</p>
                <p>{point.distance}</p>
                <Button size="sm" className="mt-2">
                  Ver Mais
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
}
