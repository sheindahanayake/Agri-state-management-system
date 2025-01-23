import React, { useState } from "react";
import { Home,Sprout } from "lucide-react";


function Header() {
  return (
    <>
      {/* Header section */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold text-white">
                AGRI STATE MANAGEMENT SYSTEM
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-green-400">
                Home
              </a>
              <a href="/listings" className="text-gray-300 hover:text-green-400">
                Recommendation
              </a>
              <a href="/about" className="text-gray-300 hover:text-green-400">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-green-400">
                Contact
              </a>
            </nav>
            {/* Login and Register buttons */}
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                <a href="/admin/login">Login</a>
              </button>
              <button className="bg-transparent text-white px-4 py-2 border border-white rounded hover:bg-green-600">
                 <a href="/register">Register</a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
