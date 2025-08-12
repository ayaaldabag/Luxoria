
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-50"></div>
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full relative z-10 border border-gray-200">
        <h1 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-700 bg-clip-text text-transparent font-serif">
          Luxoria
        </h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-pink-600 focus:ring focus:ring-pink-200 text-purple-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:border-pink-600 focus:ring focus:ring-pink-200 text-purple-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-300 to-pink-700 text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
