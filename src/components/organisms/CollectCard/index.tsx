'use client';
import Container from '@/components/atoms/container';
import { useState } from 'react';

export interface CollectProps {
  _id: string;
  eventName: string;
  description: string;
  createdBy: { firstName: string; lastName: string };
  isSigned: boolean;
  signedBy?: { firstName: string; lastName: string };
}

export interface CollectCardProps {
  collect: CollectProps;
}

export const CollectCard: React.FC<CollectCardProps> = ({ collect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signed, setSigned] = useState(collect.isSigned); // Track if the event is signed

  const handleSign = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('token'); // Get the token from localStorage
    if (!token) {
      setError('Authentication token is missing');
      setLoading(false);

      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${collect._id}/sign`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to sign up for event');
      }

      setSigned(true); // Update status if the event was signed successfully
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  console.log('collect', collect);

  return (
    <Container
      applyBorder
      isFluid={false}
      borderStyles="border border-gray-300"
      roundedCorners="rounded-none"
      applyShadowEffect
      shadowEffect="shadow-lg"
      additionalTWStyles="p-2 text-center"
      width="200px"
    >
      <div>
        <span className="font-bold">{collect.eventName}</span>
      </div>
      <div>
        <span>{collect._id}</span>
      </div>
      <div>
        <span>{collect.description}</span>
      </div>
      <div>
        <span>
          Created by: {collect.createdBy.firstName} {collect.createdBy.lastName}
        </span>
      </div>
      <div>
        <span>Status: {collect.isSigned ? 'Signed' : 'Available'}</span>
      </div>
      <div>
        {!signed && (
          <button
            onClick={handleSign}
            className="bg-blue-500 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        )}
      </div>
      {!signed
        ? 'Unassigned'
        : `Signed by: ${collect.signedBy?.firstName} ${collect.signedBy?.lastName}`}
      {error && <p className="text-red-500">{error}</p>}
    </Container>
  );
};
