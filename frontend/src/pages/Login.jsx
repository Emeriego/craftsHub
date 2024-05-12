import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is imported
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { authActions } from "../store";
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../utils/auth';
import interceptAPI from '../interceptAPI';
import { useEffect } from 'react';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const getEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    console.log(email);
  };

  const getPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password)
  };


  
  //   const authenticateUser = async (email, password) => {
  //     const credentials = {
  //       'email': email,
  //       'password': password
  //     }
  //     try {
  //       const response = await axios.post('http://localhost:8000/login', credentials);
  //       const { token, user } = response.data; // Assuming the response contains both access and refresh tokens
  //       // // Store tokens securely, e.g., in session storage
  //       // localStorage.setItem('accessToken', access_token);
  //       // localStorage.setItem('refreshToken', refresh_token);
  //      // Decode the token to check expiration
  //     const decodedToken = jwtDecode(token);
  //     const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
  //     console.log(decodedToken.email)
  //     if (decodedToken.exp < currentTime) {
  //       // Token has expired
  //       console.log('Token has expired');
  //       return navigate('/login');
  //     }

  //     // Store tokens securely, e.g., in session storage
  //     localStorage.setItem('accessToken', token);
  //     localStorage.setItem('user', JSON.stringify(user))
  //     const data = {'user': user, 'token': token}
  //     dispatch(authActions.login(data))
  //     console.log(user, token);
  //     return token; // Returning the access token
  //   } catch (error) {
  //     console.error('Error logging in:', error);
  //     return null;
  //   }
  // };


  // const authenticateUser = async (email, password) => {
  //   console.log(email, password)

  //   try {
  //     const response = await axios.post('http://localhost:8000/api/login', {
  //       email: email,
  //       password: password
  //     });
  //     // Check if response is successful
  //     if (response.status === 200) {
  //       // Extract tokens from response data
  //       const accessToken = response.data.access_token;
  //       // console.log(accessToken, response.data.access_token)
  //       const refreshToken = response.data.refresh_token;
  //       // Decode the access token to extract expiration time
  //       const accessTokenPayload = jwtDecode(accessToken);
  //       const accessTokenExpiresAt = accessTokenPayload.exp * 1000; // Convert to milliseconds


  //       // Return the tokens
  //       return { accessToken, refreshToken, accessTokenExpiresAt };
  //     } else {
  //       // Handle authentication error
  //       throw new Error('Failed to authenticate user');
  //     }
  //   } catch (error) {
  //     // Handle any errors
  //     console.error('Error:', error);
  //     throw error; // Rethrow the error for further handling
  //   }
  // };


  // // Example usage of the authenticateUser function
  // authenticateUser(email, password)
  //   .then(tokens => {
  //     // Tokens are retrieved successfully, you can use them here
  //     console.log('Access Token:', tokens.accessToken);
  //     console.log('Refresh Token:', tokens.refreshToken);
  //   })
  //   .catch(error => {
  //     // Handle any errors
  //     console.error('Error:', error);
  //   });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const tokens = await authenticateUser(email, password);
      // Store access token and its expiration time in local storage
      localStorage.setItem('authToken', JSON.stringify(tokens));
      dispatch(authActions.login(tokens));
      // Navigate after successful login
      navigate('/');
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
      // You might want to display an error message to the user
    }
  };


  useEffect(() => {

  }, [])

  return (
    <section className="contact_section layout_padding">
      <div className="container px-0">
        <div className="heading_container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{ border: '0', width: '100%', height: '100%' }} allowfullscreen title="Google Map"></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 px-0">
            <form onSubmit={loginUser}>
              <div>
                <input type="text" placeholder="email" name='email' onChange={getEmail} />
              </div>
              <div>
                <input type="password" placeholder="Password" name='password' onChange={getPassword} />
              </div>
              <div className="row mx-1">
                <button type="submit">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
