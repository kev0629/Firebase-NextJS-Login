"use client";
import React, { useState } from 'react';

import { AppleLoginButton } from "./AppleLoginButton";
import { GoogleLogin } from "./GoogleLogin";

import Loading from './Loading';

import { useRouter } from 'next/navigation';
import {useAuthState} from 'react-firebase-hooks/auth'
import { 
  getAuth,
  createUserWithEmailAndPassword, 
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();
  const [user, loading] = useAuthState(auth)
  const router = useRouter()
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(password!='' && (password === confirmPassword))
    if (password!='' && (password === confirmPassword)){
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    // Ajoutez ici la logique de création de compte
  };

  if (loading){
    return (
      <div className="flex justify-center items-center h-screen bg-blue-500">
        <Loading/>
      </div>)
  }
  if (user){
    router.push('/dashboard')
    return(
      <div className="flex justify-center items-center h-screen bg-blue-500">
        <Loading/>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Adresse e-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirmez le mot de passe
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Créer un compte
          </button>
          <GoogleLogin signInWithGoogle={signInWithGoogle}/>
          {/* <AppleLoginButton /> */}
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
