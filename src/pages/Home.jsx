import React from 'react';
import Hero from '../components/Hero';
import AboutUs from './AboutUs';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Home;