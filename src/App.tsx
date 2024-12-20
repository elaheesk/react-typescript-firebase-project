import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import { ProductsProvider } from "./ProductsContext";
import NoPage from "./pages/NoPage";
import Product from './pages/Product';
import Products from './pages/Products';
import UserReviews from './pages/UserReviews';
import Checkout from './pages/Checkout';
import Layout from './components/Layout';
import ContactMe from './pages/ContactMe';
import { UsersProvider } from './UsersContext';
import AddReview from './pages/AddReview';
function App() {
    return (
        <UsersProvider>
            <ProductsProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="products/:id" element={<Product />} />
                        <Route path="products" element={<Products />} />
                        <Route path="reviews" element={<UserReviews />} />
                        <Route path="addReview" element={<AddReview />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="contact" element={<ContactMe />} />
                        <Route element={<NoPage />} />
                    </Route>
                </Routes>
            </ProductsProvider>
        </UsersProvider>
    );
}
export default App;
