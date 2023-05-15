import React, { useState } from 'react';
import Apple from './../assets/apple.svg'
import Google from './../assets/google.svg'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ajoutez ici la logique de connexion
  };

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
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-12"
            type="submit"
          >
            Se connecter
          </button>
            <a
              className="bg-white w-full m-2 hover:bg-gray-100 text-gray-500 border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
              href="#"
            >
              <i className="fab fa-google not-italic"><img src={Google} className="inline-block mx-2" alt="Apple logo"/>Se connecter avec Google</i>
            </a>
            <a
              className="bg-black w-full m-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="#"
            >
              <i className="fab fa-apple not-italic"><img src={Apple} className="inline-block mx-2" alt="Apple logo"/>Se connecter avec Apple</i>
            </a>
        </div>
        <div className="text-center mt-4">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Mot de passe oublié ?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
