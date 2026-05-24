import React from 'react';


export default function AboutPage() {

  return (
    <div className="flex items-center justify-center h-screen relative">
      <img src="/img/bg.png" alt="Admin Login" className="w-full h-full object-cover"/>
      <div className=" w-110  p-12 bg-white/15 backdrop-blur-2xl rounded-3xl shadow-md absolute">    
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Login</h1>
        <form className="space-y-5">

          <div>
            <label htmlFor="email" className="block text-xl font-medium text-black mb-1">Email</label>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <img src="/img/icon/mail.png" alt="Email Icon" className="w-6 h-5" />
              </span>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 rounded-md text-black
                   border border-gray-900
                   shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-black mb-1">Password</label>

            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <img src="/img/icon/lock.png" alt="Password Icon" className="w-7 h-6" />
              </span>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-3 py-2 rounded-md text-black
                   border border-gray-900
                   shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded
               border-gray-300
               text-indigo-600
               focus:ring-2 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-black select-none cursor-pointer mt-1 "
                >
                  Remember me
                </label>
              </div>


              <div className="mt-4 text-right">
                <a href="#" className="text-sm text-black hover:underline">Forgot Password?</a>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-gray-300 font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mt-4 h-12">
              Login
            </button>

            <div className="mt-4 text-center text-black">
              Don't have an account? <a href="/User/register" className="text-gray-900 hover:underline">Register</a>
            </div>

          </div>

        </form>

      </div>
    </div>

  );
}