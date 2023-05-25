"use client";
import React from "react";
import Image from "next/image";
import Google from "./../assets/google.svg";


type GoogleLoginProps = {
  signInWithGoogle: () => Promise<void>;
};
export const GoogleLogin = (props: GoogleLoginProps) => {
  return (
    <div
      className="bg-white w-full m-2 hover:bg-gray-100 text-gray-500 border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2 cursor-pointer"
      onClick={props.signInWithGoogle}
    >
      <i className="fab fa-google not-italic">
        <Image src={Google} className="inline-block mx-2" alt="Apple logo" />
        Se connecter avec Google
      </i>
    </div>
  );
};
