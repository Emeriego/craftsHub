// Function to authenticate user and retrieve tokens
const authenticateUser = async (username, password) => {
    try {
      const response = await axios.post('http://126.0.0.1:8000/login', {
        username: username,
        password: password
      });
      // Check if response is successful
      if (response.status === 200) {
        // Extract tokens from response data
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        // Decode the access token to extract expiration time
        const accessTokenPayload = jwtDecode(accessToken);
        const accessTokenExpiresAt = accessTokenPayload.exp * 1000; // Convert to milliseconds

        // Store access token and its expiration time in local storage
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('access_token_expires_at', accessTokenExpiresAt);
        localStorage.setItem('refresh_token', refreshToken);
        // Return the tokens
        return { accessToken, refreshToken };
      } else {
        // Handle authentication error
        throw new Error('Failed to authenticate user');
      }
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
      throw error; // Rethrow the error for further handling
    }
  };
  
  // Example usage of the authenticateUser function
  authenticateUser('your_username', 'your_password')
    .then(tokens => {
      // Tokens are retrieved successfully, you can use them here
      console.log('Access Token:', tokens.accessToken);
      console.log('Refresh Token:', tokens.refreshToken);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  