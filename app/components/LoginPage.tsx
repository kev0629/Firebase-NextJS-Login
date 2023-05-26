"use client";
import React, { useState } from "react";
import Link from "next/link";
import Loading from "./Loading";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

import { initFirebase } from "../firebase/firebaseApp";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { AppleLoginButton } from "./AppleLoginButton";
import { GoogleLogin } from "./GoogleLogin";

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [app] = initFirebase();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (loading) {
    return (
        <Loading />
    );
  }
  if (user) {
    router.push("/dashboard");
    return (
        <Loading />
    );
  }
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-12"
            type="submit"
          >
            Se connecter
          </button>
          <GoogleLogin signInWithGoogle={signInWithGoogle}/>
          {/* <AppleLoginButton /> */}
        </div>
        <div className="text-center mt-4">
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/signup"
          >
            Créer un compte
          </Link>
          <div>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forgot"
            >
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
      </form>
      <div className=" absolute bottom-10 text-center text-white">
          By KS Project
      </div>
    </div>
  );
};

export default LoginPage;
