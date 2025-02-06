'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Fetch token and admin status from localStorage
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin');

    if (!token || isAdmin !== 'true') {
      router.push('/login'); // Redirect if not authenticated or not admin
    }
  }, [router]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! Here is where you can manage the system.</p>
    </div>
  );
}
