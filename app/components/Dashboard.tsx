import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { initFirebase } from '../firebase/firebaseApp';

import Loading from '../components/Loading';

type Props = {};

const Dashboard = (props: Props) => {
	const [app] = initFirebase();
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	if (loading) {
		return (
			<div className='flex justify-center items-center h-screen bg-blue-500'>
				<Loading />
			</div>
		);
	}
	if (!user) {
		router.push('/login');
		return <div className='flex justify-center items-center h-screen bg-blue-500 text-white'>Please Login to continue</div>;
	}
	return (
		<main className=''>
			{/* Navbar */}
			<button className='border m-2 p-2 rounded-xl' onClick={() => auth.signOut()}>
				Logout
			</button>
		</main>
	);
};

export default Dashboard;
