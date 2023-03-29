import React from "react";
import Footer from "./Footer";

function Login (){
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-2xl w-1/2 p-8">
                <h1 className="text-4xl mt-9 text-yellow-400 font-bold">Login</h1>
                <p className="text-black text-2xl mt-3">Welcome back</p>
                <form className="flex flex-col items-center justify-center w-full">
                    <input type="text" placeholder="Username" className="border-2 border-gray-4 rounded-lg   mt-5"></input>
                    <input type="text" placeholder="Password" className="border-2 border-gray-400 rounded-lg w-full h-10 mt-5"></input>
                    <button className="px-9 py-3 mb-2 mt-8 text-lg text-white bg-yellow-400 rounded-full shadow-md hover:bg-slate-300">
                        Login
                    </button>
                    <p className="text-gray-500 mt-4">Don't have an account? <a href="/signup" className="text-yellow-400">Sign Up</a></p>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Login;
