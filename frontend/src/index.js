import React from 'react';
import ReactDOM from 'react-dom/client';
import './landing.css';
import "./styles/Dashboard.css"
import './styles/BuyActionWindow.css';
import './styles/SellActionWindow.css';


import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUpPage from './landing_page/signup/SignUp';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductsPage from './landing_page/products/ProductsPage'
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from "./landing_page/login/Login"
import { CookiesProvider } from 'react-cookie';
import Home from './dashboard/components/Home';
import ProtectedRoute from './dashboard/components/ProtectedRoute';
import { GeneralContextProvider } from "./dashboard/components/GeneralContext";
import Dashboard from './dashboard/components/Dashboard';


function App() {
  const location = useLocation();
  // List all dashboard-related paths here
  const hideNavAndFooter = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/orders');

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
       <Route path='/dashboard/*' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <GeneralContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralContextProvider>
  </CookiesProvider>
);

