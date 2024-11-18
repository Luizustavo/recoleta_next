'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServerUserData } from '@/app/types/apiRelatedTypes';
import { getUserById } from '@/app/utils/apiUtils';
import { AvailableCollects } from '@/components/organisms/AvailableCollects';

import { UserProfileHeader } from '@/components/organisms/UserProfileHeader';
import { CreateACollect } from '@/components/organisms/CreateACollect';

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
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="p-2 space-y-2">
        <UserProfileHeader userData={userData} />
        {userData.userType === 'WASTE_PRODUCER' && <CreateACollect />}
        {userData.userType === 'COLLECTS_WASTE' && (
          <AvailableCollects accessToken={accessToken} />
        )}
      </div>
    </>
  );
}
