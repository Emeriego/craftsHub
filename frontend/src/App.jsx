import React from 'react';
import { BrowserRouter, Route, Link, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Login';
import NotFound from './pages/NotFound';
import PageLayout from './pages/PageLayout';
import UserCrafts from './pages/UserCrafts'
import Login from './pages/Login';
import RestrictedRoute from './utils/RestrictedRoute';
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
            <div>
                {/* Navigation bar */}


                {/* Main content */}
                <Routes>
                    <Route path='/' element={<PageLayout />} >
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/usercrafts" element={<RestrictedRoute element={<UserCrafts />} />} />
                        <Route path="*" element={<NotFound />} />
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
