import React from 'react';
import { BrowserRouter, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Login';
import NotFound from './pages/NotFound';
import PageLayout from './pages/PageLayout';
// import Category from './pages/Category';
import UserCrafts from './dashboard/UserCrafts';
import DashboardLayout from './dashboard/DashboardLayout';
import Login from './pages/Login';
import Profile from './dashboard/Profile';
import Stores from './dashboard/Stores';
import Store from './dashboard/Store';
import Messages from './dashboard/Messages';
import Message from './dashboard/Message';
import Checkout from './dashboard/Checkout';
import UserCraft from './dashboard/UserCraft';
import Index from './dashboard/Index';
import Categories from './pages/Categories';
import RestrictedRoute from './utils/RestrictedRoute';
import UnrestrictedRoute from './utils/UnrestrictedRoute';
import { useEffect } from 'react';
import { authActions } from './store';
import { useDispatch } from 'react-redux';
import { setRefreshTokens } from './utils/auth';

const App = () => {
    //     const dispatch = useDispatch()
    //     // const navigate = useNavigate()
    //     console.log("from app.js")
    
    //     useEffect(()=>{
    //         setRefreshTokens(dispatch, authActions);
    //     },[])
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<UnrestrictedRoute element={<PageLayout />} />}>
                <Route index element={<Home />} />
                <Route path="about" element={<UnrestrictedRoute element={<About />} />} />
                <Route path="login" element={<UnrestrictedRoute element={<Login />} />} />
                <Route path="contact" element={<UnrestrictedRoute element={<Contact />} />} />
                <Route path="categories" element={<UnrestrictedRoute element={<Categories />} />} />
                <Route path="*" element={<UnrestrictedRoute element={<NotFound />} />} />
            </Route>

            <Route path="/dashboard" element={<RestrictedRoute element={<DashboardLayout />} />}>
                <Route index element={<Index />} />
                <Route path="profile" element={<RestrictedRoute element={<Profile />} />} />
                <Route path="stores" element={<RestrictedRoute element={<Stores />} />} />
                <Route path="stores/:store_id" element={<RestrictedRoute element={<Store />} />} />
                <Route path="messages" element={<RestrictedRoute element={<Messages />} />} />
                <Route path="messages/:message_id" element={<RestrictedRoute element={<Message />} />} />
                <Route path="checkout" element={<RestrictedRoute element={<Checkout />} />} />
                <Route path="usercrafts" element={<RestrictedRoute element={<UserCrafts />} />} />
                <Route path="usercrafts/:usercraft_id" element={<RestrictedRoute element={<UserCraft />} />} />
                <Route path="*" element={<RestrictedRoute element={<NotFound />} />} />
                
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
