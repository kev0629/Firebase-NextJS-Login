'use client';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { initFirebase } from '../firebase/firebaseApp';
import Dashboard from '../components/Dashboard';

import Loading from '../components/Loading';

export default function Home() {
	const app = initFirebase();
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	if (loading) {
		return <Loading />;
	}
	if (!user) {
		router.push('/login');
		return <div className='flex justify-center items-center h-screen bg-blue-500 text-white'>Please Login to continue</div>;
	}
	return <Dashboard />;
}
