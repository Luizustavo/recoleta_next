'use client';

import React, { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServerUserData } from '@/app/types/apiRelatedTypes';
import { getUserById } from '@/app/utils/apiUtils';

interface AuthContextProps {
  userData: ServerUserData | null;
  accessToken: string | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [userData, setUserData] = useState<ServerUserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');

        return;
      }

      setAccessToken(token);

      const userId = localStorage.getItem('_id');
      if (!userId) {
        router.push('/login');

        return;
      }

      try {
        const response = await getUserById(userId, token);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  return (
    <AuthContext.Provider value={{ userData, accessToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
