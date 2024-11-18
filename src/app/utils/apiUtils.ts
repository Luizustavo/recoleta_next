import { apiClient } from '@/lib/axios';
import { AxiosResponse } from 'axios';
import {
  LoginResponse,
  ServerUserData,
  UserData,
} from '../types/apiRelatedTypes';

export const getAllUserData = async (
  accessToken: string
): Promise<AxiosResponse<ServerUserData[]>> => {
  try {
    const response = await apiClient.get<ServerUserData[]>('/users/', {
      headers: { token: `Bearer ${accessToken}` },
    });

    return response;
  } catch (error: unknown) {
    console.error('Error fetching all user data:');
    throw error;
  }
};

export const getUserById = async (
  _id: string,
  accessToken: string
): Promise<AxiosResponse<ServerUserData>> => {
  try {
    const response = await apiClient.get<ServerUserData>(`/users/find/${_id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });

    return response;
  } catch (error: unknown) {
    console.error('Error fetching user data by ID:');
    throw error;
  }
};

export const updateUserProfile = async (
  _id: string,
  serverUserData: ServerUserData,
  accessToken: string
): Promise<ServerUserData> => {
  try {
    const response = await apiClient.put<ServerUserData>(
      `/users/${_id}`,
      serverUserData,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );

    return response.data;
  } catch (error: unknown) {
    console.error('Error updating user profile:');
    throw error;
  }
};

export const deleteUser = async (
  _id: string,
  accessToken: string
): Promise<void> => {
  try {
    await apiClient.delete(`/users/${_id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error: unknown) {
    console.error('Error deleting user:');
    throw error;
  }
};

export const registerUser = async (
  userData: UserData
): Promise<AxiosResponse<void>> => {
  try {
    return await apiClient.post('/auth/register', userData);
  } catch (error: unknown) {
    console.error('Error registering user:');
    throw error;
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await apiClient.post<LoginResponse['data']>(
      '/auth/login',
      credentials
    );
    const { email, accessToken, _id, isAdmin } = response.data;

    return {
      status: response.status,
      data: { email, accessToken, _id, isAdmin },
    };
  } catch (error: unknown) {
    console.error('Error logging in user:');
    throw error;
  }
};

export const getAvailableCollects = async (accessToken: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events'`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch collects');
  }

  return response.json(); // Returns { data: CollectProps[] }
};
