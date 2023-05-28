'use client';
import React from 'react';
import Image from 'next/image';
import Apple from './../assets/apple.svg';

export const AppleLoginButton = () => {
	return (
		<div className='bg-black w-full m-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer'>
			<i className='fab fa-apple not-italic'>
				<Image src={Apple} className='inline-block mx-2' alt='Apple logo' />
				Se connecter avec Apple
			</i>
		</div>
	);
};
