'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/atoms/container';
import { CollectCard, CollectProps } from '../collect-card';
import { getAvailableCollects } from '@/utils/api-utils';

interface AvailableCollectsProps {
  accessToken: string; // Pass the access token for API calls
}

export const AvailableCollects: React.FC<AvailableCollectsProps> = ({
  accessToken,
}) => {
  const [collects, setCollects] = useState<CollectProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollects = async () => {
      try {
        const response = await getAvailableCollects(accessToken);

        setCollects(response);
      } catch (err) {
        console.error('Error fetching collects:', err);
        setError('Failed to fetch collects.');
      } finally {
        setLoading(false);
      }
    };

    fetchCollects();
  }, [accessToken]);

  console.log(collects);

  if (loading) {
    return <p>Loading collects...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!collects || collects.length === 0) {
    return <p>No collects available at the moment.</p>;
  }

  return (
    <Container
      applyBorder
      borderStyles="border border-gray-300"
      roundedCorners="rounded-none"
      applyShadowEffect
      shadowEffect="shadow-lg"
      additionalTWStyles="p-2"
    >
      <span>Coletas Disponíveis:</span>
      <div className="space-x-2 flex flex-wrap">
        {collects.map(collect => (
          <CollectCard key={collect._id} collect={collect} />
        ))}
      </div>
    </Container>
  );
};
