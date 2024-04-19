import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { authActions } from '../store';
import {FaPortrait} from 'react-icons/fa'
// import { authActions } from "../store";


// import { actions, actions2, cartActions, prodActions } from "../store/index"



const Header = () => {
    const qtyFlag = useSelector(state => state.cart.totalQty)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const loggedInToken = useSelector(state => state.auth.loggedInToken)
    const loggedInDetail = useSelector(state => state.auth.loggedInDetail)

    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()




    // const logoutUser = async () => {
    //     try {
    //         await axios.post('http://localhost:8000/logout', token, {
    //             headers: {
    //                 'Authorization': `Token ${sessionStorage.getItem('accessToken')}`
    //             }
    //         });
    //         // Remove access token from local storage
    //         sessionStorage.removeItem('accessToken');
    //         // Redirect to the home page or any other desired page
    //         window.location.href = '/';
    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //         // Handle error if necessary
    //     }
    // };

    // const logoutUser = async () => {
    //     try {
    //         const accessToken = sessionStorage.getItem('accessToken');
    //         if (!accessToken) {
    //             // throw new Error('Access token not found');
    //             return navigate('/')
    //         }
    
    //         await axios.post(
    //             'http://localhost:8000/logout',
    //             null, // No request body
    //             {
    //                 headers: {
    //                     'Authorization': `Bearer ${accessToken}`,
    //                     'Content-Type': 'application/json'

    //                 },
    //                 withCredentials: true // Include credentials

    //             }
    //         );
    
    //         // Remove access token from local storage
    //         sessionStorage.removeItem('accessToken');
    //         sessionStorage.removeItem('user');

    //         dispatch(authActions.logout())
    //         // Redirect to the home page or any other desired page
    //         // window.location.href = '/';
    //         return navigate('/')
    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //         // Handle error if necessary
    //     }
    // };
    

    const logoutUser = async () => {
        sessionStorage.removeItem('authToken')
        
        console.log("from logout: ", loggedInToken)
        // try {
        //   // Make a POST request to the logout endpoint
        //   const response = await axios.post('http://localhost:8000/logout', {}, {
        //     headers: {
        //       Authorization: `Bearer ${loggedInToken}`
        //     }
        //   });
          dispatch(authActions.logout())
          // Log the response from the server
        //   console.log(response.data);
        // } catch (error) {
        //   // Log any errors that occur during the request
        //   console.error('Error:', error);
        // }
      };
      
    return (
        <div className='hero_area2 position-fixed w-100 z-index-1090'>
            <header className="header_section">
                <nav className="navbar navbar-expand-lg custom_nav-container pb-0 position-sticky">
                    <Link className="navbar-brand" to="/">
                        <span>
                            craftHUB
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button>

                    <div className="collapse navbar-collapse navbar-dark bg-dark" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Why Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Testimonial
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="user_option">
                            <div className="log">
                                {
                                    isLoggedIn ?
                                        <div >
                                            <Link onClick={logoutUser} to="/">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span>
                                                Logout
                                            </span>
                                            </Link>
                                            
                                            <Link to='/usercrafts'>
                                             {loggedInDetail.username}<FaPortrait />
                                            </Link>
                                        </div>
                                        :
                                        <Link to="/login">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span>
                                                Login
                                            </span>
                                        </Link>
                                }
                            </div>

                            <div className="cart-bag">
                                <button type="button" class="btn btn-warning position-relative" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i className="fa fa-shopping-cart" aria-hidden="true" style={{ color: 'white' }}></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{qtyFlag}</span>
                                </button>
                            </div>


                            <form className="form-inline ms-4">
                                <button className="btn nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                                </button>
                            </form>
                        </div>
                    </div>

                </nav>
                {/* <!-- Modal --> */}

            </header>

        </div>

    )
}

export default Header;
