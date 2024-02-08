import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignInForm]= useState(true);

  const toggleSignInForm=()=>{
    setSignInForm(!isSignIn); 
  }
  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/76738589-55fe-4402-b729-fe5d2b3b16c6/US-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In":"Sign Up" }</h1>
        {!isSignIn && (<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg ">
        {isSignIn? "Sign In":"Sign Up" }
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignIn? "New to netflix? Sign Up Now":"Already register? Sign In Now" }</p>
      </form>
    </div>
  );
};

export default Login;
