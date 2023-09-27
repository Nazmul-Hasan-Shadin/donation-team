import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';

const Root = () => {
    const navigation= useNavigate();
    return (
        <div className='container mx-auto '>
             <Navbar></Navbar>

        
             <Outlet></Outlet>
        </div>
    );
};

export default Root;