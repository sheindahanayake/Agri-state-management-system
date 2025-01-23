import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { apiUrl } from "../common/Http";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const navigate = useNavigate();

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

    // If inputs are valid, proceed with login
    if (isValid) {
      const data = { email, password };
      try {
        const response = await fetch(`${apiUrl}/admin/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success("Login successful!");
          console.log(result);

          if(result.status ==200){
            const adminInfo ={
              token :result.token,
              id:result.id,
              name :result.name,
            }
            localStorage.setItem('adminInfo',JSON.stringify(adminInfo))
            navigate('/admin/dashboard')


          }else {
            toast.error(result.message);
          }
        } else {
          toast.error(result.message || "Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
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

        {/* Extra Links */}
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
      </div>
    </div>
  );
};

export default LoginPage;
