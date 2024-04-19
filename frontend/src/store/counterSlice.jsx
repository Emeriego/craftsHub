import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter : 0},
    reducers: {
        increament (state, action){
            state.counter ++;
        },
        decreament(state, action) {
            state.counter -=1;
        }, 
        addby(state, action) {
            state.counter += action.payload;
        },
        subby(state, action) {
            state.counter -= action.payload;
        }
    }
})
export default counterSlice;
