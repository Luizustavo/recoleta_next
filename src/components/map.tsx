'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';

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
  // Carregar o Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '', // Sua chave da API
  });

  // Se o mapa ainda não foi carregado, mostrar uma mensagem de carregamento
  if (!isLoaded) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <div className="bg-gray-200 h-full w-full relative">
      {/* Mapa do Google */}
      <GoogleMap
        zoom={12} // O nível de zoom do mapa
        center={{ lat: points[0]?.lat || 0, lng: points[0]?.lng || 0 }} // Centraliza no primeiro ponto
        mapContainerClassName="h-full w-full"
      >
        {/* Marcadores no mapa */}
        {points.map(point => (
          <Marker
            key={point.id}
            position={{ lat: point.lat, lng: point.lng }}
            onClick={() => onPinClick(point.id)} // Chama a função ao clicar no marcador
          >
            {selectedPoint === point.id && (
              <InfoWindow position={{ lat: point.lat, lng: point.lng }}>
                <Card className="w-48">
                  <CardContent>
                    <p className="font-bold">{point.partner}</p>
                    <p>{point.type}</p>
                    <p>{point.distance}</p>
                    <Button size="sm" className="mt-2">
                      Ver Mais
                    </Button>
                  </CardContent>
                </Card>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}
