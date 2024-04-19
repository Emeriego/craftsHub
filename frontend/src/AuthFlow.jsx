import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import interceptAPI from './interceptAPI'; // Assuming you have configured axios with interceptors
import { actions, actions2, cartActions, prodActions, authActions } from "./store/index"

const getUser = (dispatch) => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        if (decodedToken.exp < currentTime) {
            console.log('Token has expired');
            // Handle token expiration, e.g., logout user
        } else {
            // Token is valid, dispatch login action
            dispatch(authActions.login(accessToken));
            // Fetch user crafts
            getUserCrafts(dispatch);
        }
    } else {
        console.log('No user detected');
        // Handle scenario when no user is logged in
    }
};

const getUserCrafts = () => {
    interceptAPI.get('/usercrafts')
        .then(response => {
            // Dispatch action to store user crafts in Redux state
            dispatch(prodActions.fetchUserCrafts(response.data));
        })
        .catch(error => {
            // Handle API error
            console.error('Error fetching user crafts:', error);
        });
};

const AuthFlow = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUser(dispatch);
    }, [dispatch]); // Include dispatch in the dependency array if it's used inside the effect

    return null; // This component doesn't render anything
};

export default AuthFlow;
