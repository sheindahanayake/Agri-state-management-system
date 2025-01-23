import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import fertilizerFilter from "./components/common/fertilizerFilter";
import AboutUs from "./components/common/AboutUs";
import Footer from "./components/common/Footer";
import Recommendation from "./components/common/Recommendation";
import Listings from "./components/Listings";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Register from "./components/common/Register";
import DetailsPage from "./components/DetailsPage";
import Login from "./components/admin/Login";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/admin/Dashboard";
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/header" element={<Header />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/property-filter" element={<fertilizerFilter />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<DetailsPage />} />

          {/*Admin Process */}
          <Route path="/admin/dashboard" element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
