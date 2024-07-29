import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import Products from './pages/products';
import Layout from './Layouts';

const Router: React.FC = () => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    </Routes>
);

export default Router;