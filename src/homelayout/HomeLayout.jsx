import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-1 shadow-md'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;