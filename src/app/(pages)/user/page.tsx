'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserHome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>
        Welcome to your dashboard! Here’s where you can view your activity and
        stats.
      </p>
      {/* Add user-related content here */}
    </div>
  );
}
