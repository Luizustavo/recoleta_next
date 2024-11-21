'use client';

import { useState } from 'react';
import { List, MapIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Map from '@/components/map';
import CollectionCard from '@/components/collection-card';
import FilterPanel from '@/components/filter-panel';
import SummaryPanel from '@/components/summary-panel';
import HelpButton from '@/components/help-button';

// Dummy data for collection points
const collectionPoints = [
  {
    id: 1,
    partner: 'EcoRecycle',
    type: 'Reciclável',
    address: 'Rua A, 123',
    distance: '2 km',
    date: '2023-05-15',
    time: '14:00',
    lat: -23.55052,
    lng: -46.633309,
  },
  {
    id: 2,
    partner: 'GreenTech',
    type: 'Eletrônico',
    address: 'Av. B, 456',
    distance: '3 km',
    date: '2023-05-16',
    time: '10:00',
    lat: -23.55152,
    lng: -46.634309,
  },
  {
    id: 3,
    partner: 'SafeDisposal',
    type: 'Perigoso',
    address: 'Rua C, 789',
    distance: '5 km',
    date: '2023-05-17',
    time: '09:00',
    lat: -23.55252,
    lng: -46.635309,
  },
];

export default function WastePage() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const [filters, setFilters] = useState({
    maxDistance: 10,
    types: [] as string[],
    partner: '',
    status: 'available',
  });

  const toggleViewMode = () => {
    setViewMode(viewMode === 'map' ? 'list' : 'map');
  };

  const handlePinClick = (id: number) => {
    setSelectedPoint(id);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    // Here you would typically fetch new data based on filters
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Coleta de Resíduos</h1>

      <SummaryPanel
        totalCollections={collectionPoints.length}
        recyclableCount={
          collectionPoints.filter(p => p.type === 'Reciclável').length
        }
        hazardousCount={
          collectionPoints.filter(p => p.type === 'Perigoso').length
        }
        availableNow={collectionPoints.length} // This should be calculated based on current time
      />

      <div className="flex justify-between items-center mb-4">
        <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
        <Button onClick={toggleViewMode}>
          {viewMode === 'map' ? (
            <List className="mr-2" />
          ) : (
            <MapIcon className="mr-2" />
          )}
          {viewMode === 'map' ? 'Ver Lista' : 'Ver Mapa'}
        </Button>
      </div>

      {viewMode === 'map' ? (
        <div className="relative h-[600px] mb-4">
          <Map
            points={collectionPoints}
            onPinClick={handlePinClick}
            selectedPoint={selectedPoint}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collectionPoints.map(point => (
            <CollectionCard key={point.id} point={point} />
          ))}
        </div>
      )}

      <HelpButton />
    </div>
  );
}
