import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import UploadPage from './Pages/UploadPage';
import CartPage from './Pages/CartPage'; // Cart Page component
import FeaturedProducts from './components/FeaturedProducts';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} /> {/* Cart Page */}
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/featured" element={<FeaturedProducts />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
