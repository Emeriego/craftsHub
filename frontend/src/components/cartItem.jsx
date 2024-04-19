import React from "react";
import "./cartItem.css"
import { useDispatch} from "react-redux";
import { cartActions } from "../store";
import axios from "axios"



const cartItem = ({item})=>{
    const dispatch = useDispatch();

   

    const addItem =(item) => {

        const cartData = {
            product: { product: item.id, person: 7, qty: 1 }
            // Add more key-value pairs as needed
        };
        console.log(cartData)
        return axios.post("http://localhost:8000/add_cart_item/", cartData.product)
            .then((response) => {
                // dispatch(prodActions.fetch(response.data));
                dispatch(cartActions.addItem(item))
                // console.log("item to be posted "+ response.data)

                // Handle response if needed
            })
            .catch((error) => {
                // Handle error if needed
                console.error("Error:", error);
            });
    }
    const removeItem = () => {
        dispatch(cartActions.removeItem(item))
    }

    return (
        
        <div className="item_wrap">
            <div className="name">Item: <span>{item.name}</span></div>
            <div className="price">Price: <span>{item.price}</span></div>
            <div className="qty">Quantity:<span>{item.qty}</span></div>
            <div className="amount">Subtotal:<span>{item.subtotal}</span></div>
            <button className="btn btn-success" onClick={() => addItem(item)}>+</button>
            <button className="btn btn-warning" onClick={removeItem}>-</button>
        </div>
    )

}
export default cartItem;
