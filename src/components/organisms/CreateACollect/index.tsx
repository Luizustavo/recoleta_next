'use client';
import React, { useState } from 'react';
import Container from '@/components/atoms/container';

export const CreateACollect: React.FC = () => {
  const [eventName, setEventName] = useState<string>(''); // Track event name
  const [description, setDescription] = useState<string>(''); // Track event description
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Success state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Get the token from localStorage for authorization
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Authentication token is missing');
      setLoading(false);

      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/events/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Send token in the Authorization header
        },
        body: JSON.stringify({
          eventName,
          description,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create event');
      }

      setSuccessMessage('Event created successfully!');
      setEventName(''); // Reset event name
      setDescription(''); // Reset description
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unexpected error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      applyBorder
      borderStyles="border border-gray-300"
      roundedCorners="rounded-none"
      applyShadowEffect
      shadowEffect="shadow-lg"
      additionalTWStyles="p-2"
    >
      <h2>Crie Uma Coleta</h2>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={e => setEventName(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? 'Creating event...' : 'Create Event'}
        </button>
      </form>
    </Container>
  );
};
