import { Address } from '../types/api-related-types';

export async function getAddress(accessToken: string) {
  if (!accessToken) {
    throw new Error('Token de autenticação não encontrado');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/address/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`, // Usa o token dinâmico
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch addresses');
  }

  return response.json();
}

export async function createAddress(address: Address, accessToken: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/address/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(address),
  });

  if (!response.ok) {
    throw new Error('Failed to create address');
  }

  return response.json();
}
