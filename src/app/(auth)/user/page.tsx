'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServerUserData } from '@/types/api-related-types';
import { getUserById } from '@/utils/api-utils';
import { AvailableCollects } from '@/components/organisms/available-collects';

import { UserProfileHeader } from '@/components/organisms/user-profile-header';
import { CreateACollect } from '@/components/organisms/create-a-collect';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserHome() {
  const router = useRouter();
  const [userData, setUserData] = useState<ServerUserData | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');

        return;
      }

      setAccessToken(token);

      try {
        const userId = localStorage.getItem('_id'); // Assuming the user ID is stored in localStorage
        if (!userId) {
          console.error('User ID not found in localStorage');
          router.push('/login');

          return;
        }

        const response = await getUserById(userId, token);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      }
    };

    fetchUserData();
  }, [router]);

  if (!userData || !accessToken) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-2 space-y-2">
        <UserProfileHeader userData={userData} />
        {userData.userType === 'Gerador de resíduos' && <CreateACollect />}
        {userData.userType === 'Coletor de resíduos' && (
          <AvailableCollects accessToken={accessToken} />
        )}
      </div>
    </>
  );
}
