import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

// import Home from './Home';

const PageLayout = () => {


    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default PageLayout;
