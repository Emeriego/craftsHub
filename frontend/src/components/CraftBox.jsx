import React from "react";
// import "./product.css"
import { cartActions } from "../store";
// import cam1 from "../assets/cam1.jpeg"
import { useDispatch } from "react-redux";
import axios from "axios"


const CraftBox = ({ craft }) => {

    const dispatch = useDispatch()
    // console.log(craft)

    
    const addItem =(craft) => {

        const cartData = {
            product: { product: craft.id, person:6, qty: 1 }
            // Add more key-value pairs as needed
        };
        console.log(cartData)
        return axios.post("http://localhost:8000/add_cart_item/", cartData.product)
            .then((response) => {
                // dispatch(prodActions.fetch(response.data));
                dispatch(cartActions.addItem(craft))
                // console.log("item to be posted "+ response.data)

                // Handle response if needed
            })
            .catch((error) => {
                // Handle error if needed
                console.error("Error:", error);
            });
    }
    // console.log(product)

    return (
        <div className="col-sm-2 col-md-4 col-lg-3">
        <div className="box">
            {/* <a href=""> */}
                <div className="img-box">
                    <img src={`./assets/images/${craft.img}`} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {craft.name}
                    </h5>
                    <h6>
                        <span>
                            {craft.store.name}
                        </span>
                    </h6>
                    <h6>
                        <span>
                            {craft.price}
                        </span>
                    </h6>
                </div>
                <div className="new">
                    <span>
                        New
                    </span>
                </div>
                <button onClick={() => addItem(craft)} className='btn buy'>Buy Now</button>
            {/* </a> */}
        </div>

</div>
    )
}
export default CraftBox;
