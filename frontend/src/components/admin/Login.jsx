import React, { useState, useEffect } from "react";
import { Lock, Mail } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in by checking localStorage
    const adminInfo = localStorage.getItem("adminInfo");
    if (adminInfo) {
      setIsLoggedIn(true);  // Set to true if user is logged in
    }
  }, []);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Login submission handler
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(newErrors);

    // If inputs are valid, check hardcoded credentials
    if (isValid) {
      // Check if the entered username and password match lab1@gmail.com and lab123
      if (email === "lab1@gmail.com" && password === "lab123") {
        // If they do, show success message, set logged in state, and redirect to /listings
        toast.success("Successfully logged in!");
        localStorage.setItem("adminInfo", JSON.stringify({ email, password }));
        setIsLoggedIn(true); // Set login state
        navigate("/listings");
      } else {
        // If credentials don't match, show an error
        toast.error("Invalid credentials. Please try again.");
      }
    }
  };

  // Log out handler
  const handleLogout = () => {
    // Remove user data from localStorage and update UI
    localStorage.removeItem("adminInfo");
    setIsLoggedIn(false);
    toast.success("Successfully logged out!");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {isLoggedIn ? "Welcome, lab1@gmail.com" : "Login"}
        </h2>

        {isLoggedIn ? (
          // Show log out button if the user is logged in
          <div className="text-center">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white font-medium px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          // Show login form if the user is not logged in
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <div className="flex items-center bg-gray-700 rounded-md">
                <Mail className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="flex items-center bg-gray-700 rounded-md">
                <Lock className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
        )}

        {/* Extra Links */}
        {!isLoggedIn && (
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Sign Up
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Forgot your password?{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Reset It
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
