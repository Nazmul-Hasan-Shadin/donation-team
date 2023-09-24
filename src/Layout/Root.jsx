import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
             <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default Root;