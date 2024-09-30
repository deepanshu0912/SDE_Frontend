import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import LoginPage from './Pages/Loginpage';
import RegisterPage from './Pages/RegisterPage';
import UploadPage from './Pages/UploadPage';

import AccountPage from './Pages/AccountPage/AccountPage';
import FeaturedProducts from './components/FeaturedProducts';
import './styles/App.css'; // Importing global styles
import { AuthProvider } from './context/AuthContext'; 

const App = () => {
    return (
        <AuthProvider>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductsPage />} />
               
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/featured" element={<FeaturedProducts />} />
            </Routes>
            <Footer />
        </Router>
        </AuthProvider>
    );
};

export default App;
