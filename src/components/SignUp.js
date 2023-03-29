import React from "react";
import Footer from "./Footer";

function SignUp() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white h-auto rounded-lg shadow-2xl max-w-md w-11/12 mb-2 p-8">
        <h1 className="text-4xl mt-5 text-yellow-400 font-bold">Sign Up</h1>
        <p className="text-gray-black text-2xl">Create an account</p>
        <form className="flex flex-col items-center justify-center mt-8">
          <div className="w-full mb-5 flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-500 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full mb-5 flex flex-col">
            <label htmlFor="email" className="text-gray-500 font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full mb-5 flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-500 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full mb-6 flex flex-col">
            <label
              htmlFor="confirm-password"
              className="text-gray-500 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="border-2 border-gray-400 rounded-lg w-full h-12 px-3 text-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button className="bg-yellow-400 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SignUp;
