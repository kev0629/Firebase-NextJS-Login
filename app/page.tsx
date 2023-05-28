'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from './components/Loading';

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false });

export default function Page() {
	const { user, loading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!(user || loading)) {
			router.push('/login');
		}
	}, [user, loading]);

	return (
		<div className='flex justify-center items-center h-screen bg-blue-500'>
			<Loading />
		</div>
	);
}
