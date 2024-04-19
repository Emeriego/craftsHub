import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems : [],
        totalPrice: 0,
        totalQty: 0

    },
    reducers: {
        addItem(state, action){
            const itemToBeAdded = action.payload

            const existingItem = state.cartItems.find(item => item.id === itemToBeAdded.id)
            
            // state.cart.filter(item => item.id !== itemToBeAdded.id)
            if (existingItem){
                existingItem.subtotal += existingItem.price;
                existingItem.qty ++;
                state.totalPrice += existingItem.price

                // existingItem.qty += 1; 
                // existingItem.subtotal += existingItem.price
                // state.cart.push(existingItem)
                // console.log(existingItem)
                // console.log(state.cart)
            }
            else {
                const newCartItem = {
                    id: itemToBeAdded.id,
                    name: itemToBeAdded.name,
                    price: itemToBeAdded.price,
                    subtotal: itemToBeAdded.price,
                    store: itemToBeAdded.store,
                    qty: 1
                }
                state.cartItems.push(newCartItem)
                state.totalPrice += itemToBeAdded.price


            }
            state.totalQty += 1

            
        },
        removeItem(state, action){

            const itemToBeRemoved = action.payload

            const existingItem = state.cartItems.find(item => item.id === itemToBeRemoved.id)
            
            // state.cart.filter(item => item.id !== itemToBeAdded.id)
            // console.log(state.cart)
            if (existingItem){
                existingItem.subtotal -= existingItem.price;
                if (existingItem.qty < 2) {
                    state.cartItems = state.cartItems.filter(item => item.id !== itemToBeRemoved.id)
                }
                existingItem.qty --;
                state.totalQty -= 1

                
                // existingItem.qty += 1; 
                // existingItem.subtotal += existingItem.price
                // state.cart.push(existingItem)
                // console.log(existingItem)
                // console.log(state.cart)
                state.totalPrice -= existingItem.price

            }
            
                
        },
        clearCart(state, action){
            state.cartItems = [];
            state.totalQty = 0;
            state.totalPrice =0;

        }

    }
})


export default cartSlice;
