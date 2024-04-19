import axios from 'axios';

// Create an Axios instance with default configuration
const interceptAPI = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // Include credentials in requests

});

// Add a request interceptor to check and refresh tokens
interceptAPI.interceptors.request.use(
  async (config) => {
    // Check if access token is expired
    if (isAccessTokenExpired()) {
      try {
        // Refresh access token using the refresh token
        const response = await interceptAPI.post('/refresh', {
          "refresh": String(getRefreshTokenFromLocalStorage()),
        });

        // Update access token in the request config
        config.headers.Authorization = `Bearer ${response.data.access_token}`;
      } catch (error) {
        // Handle refresh token failure
        console.error('Failed to refresh access token:', error);
        throw error; // Rethrow the error for further handling
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to check if access token is expired
const isAccessTokenExpired = () => {
  const accessTokenExpiresAt = getAccessTokenExpiresAtFromLocalStorage();
  return accessTokenExpiresAt && new Date() >= new Date(accessTokenExpiresAt);
};

// Function to get refresh token from local storage
const getRefreshTokenFromLocalStorage = () => {
  return localStorage.getItem('refresh_token');
};

// Function to get access token expiration time from local storage
const getAccessTokenExpiresAtFromLocalStorage = () => {
  return localStorage.getItem('access_token_expires_at');
};

export default interceptAPI;
