import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by looking for adminInfo in localStorage
    const adminInfo = localStorage.getItem("adminInfo");
    if (adminInfo) {
      const user = JSON.parse(adminInfo);
      setIsLoggedIn(true);  // User is logged in
      setUserEmail(user.email);  // Set the user's email
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage and update login state
    localStorage.removeItem("adminInfo");
    setIsLoggedIn(false);  // Set logged out state
    setUserEmail("");  // Clear user email
    navigate("/login");  // Redirect to login page
  };

  return (
    <>
      {/* Header section */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/src/assets/images/Logo.png"
                alt="Company Logo"
                className="h-8 w-8"
              /> {/* Add your logo path and adjust size */}
              <span className="ml-2 text-xl font-bold text-white">
                AGRI STATE MANAGEMENT SYSTEM
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-green-400">
                Home
              </a>
              <a href="/admin/login" className="text-gray-300 hover:text-green-400">
                Recommendation
              </a>
              <a href="/about" className="text-gray-300 hover:text-green-400">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-green-400">
                Contact
              </a>
            </nav>
            {/* Conditional Rendering for Logged-In User */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <span className="text-white">{userEmail}</span>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-400"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <a href="/admin/login" className="text-gray-300 hover:text-green-400">
                  Log in
                </a>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
