import { createSlice} from "@reduxjs/toolkit"

const toggleSlice = createSlice(
    {
        name: "toggleMenu",
        initialState: {toggleMenu: false},
        reducers: {
            toggle (state, action){
                state.toggleMenu = !state.toggleMenu;
            }
        }
    })
    export default toggleSlice;
