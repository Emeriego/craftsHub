import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedInDetail: {},
        isLoggedIn: false,
        loggedInToken: "",

    },
    reducers: {
        login(state, action) {
            const tokens = (action.payload)
            // const refresh = (action.payload).refresh
            state.isLoggedIn = true;
            state.loggedInToken = tokens.access;
            state.loggedInDetail = {
                'email': jwtDecode(tokens.access).email,
                'username': jwtDecode(tokens.access).username,
                'exp': jwtDecode(tokens.access).exp
            }
            
        },
        refresh(state, action) {
            const access = (action.payload).access
            state.loggedInToken = access
        },
        logout(state, action) {
            state.isLoggedIn = false;
            state.numberOfLoggedIn -= 1;
            state.loggedInDetail1 = {};
            state.loggedInToken = null
            }
    }
})


export default authSlice;
