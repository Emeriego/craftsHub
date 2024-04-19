import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import {actions, actions2, cartActions, prodActions} from "./store/index"
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './components/cartItem'
import { useEffect } from 'react'
import axios from "axios"




function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const h = useSelector(state => state.h)
  const show = useSelector(state => state.toggleMenu.toggleMenu)
  console.log(show);
  const cart = useSelector(state => state.cart.cartItems)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const qtyFlag = useSelector(state => state.cart.totalQty)
  const availProds = useSelector(state => state.products.availProds)

  // ANOTHER METHOD TO FETCH API DATA
  // const fetchDataWithFetch =() =>{
  //   return fetch("http://localhost:8000/")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     dispatch(prodActions.fetch(data))

  //     // console.log(data)
  //   })

  // }

  const fetchDataWithAxios =() =>{
    return axios("http://localhost:8000/")
    .then((response) => {
      dispatch(prodActions.fetch(response.data))

      // console.log(data)
    })

  }
  useEffect(() => {
    // fetchDataWithFetch();
    fetchDataWithAxios();


  }, [])


  // const prods = [
  //   {
  //     id: 1,
  //     name: "Camon X",
  //     price: 200,
  //     color: "grey",
  //     store: "Mosaic Stores",
  //     img: "cam1.jpeg"
  //   },
  //   {
  //     id: 2,
  //     name: "Zavy Pro",
  //     price: 400,
  //     color: "grey",
  //     store: "Apple Stores",
  //     img: "cam2.jpeg"

  //   },
  //   {
  //     id: 3,
  //     name: "Serio MaX",
  //     price: 100,
  //     color: "black",
  //     store: "Junnt Stores",
  //     img: "cam3.jpeg"

  //   },
  //   {
  //     id: 4,
  //     name: "Iphone 14",
  //     price: 450,
  //     color: "silver",
  //     store: "Chain Stores",
  //     img: "cam4.jpeg"

  //   },
  // ]

  // const increament =() => {
  //   dispatch(actions.increament())
  // }
  // const decreament = () => {
  //   dispatch(actions.decreament())
  // }
  // const addby = () => {
  //   dispatch(actions.addby(10))
  // }
  // const subby = () => {
  //   dispatch(actions.subby(15))
  // }

  const toggle = () => {
    dispatch(actions2.toggle())
  }

  const clearCart =()=>{
    dispatch(cartActions.clearCart())
  }
  return (
    <>
    <div className="top_bar">
     <div className="qty_flag">{qtyFlag}</div>

    </div>

    <div className="products">

      {
        availProds.map(prod => {
          console.log("from App", availProds, prod)
          return (
          <Product 
            product = {prod}
          />
          )
          

        })
      }
    

    </div>
      <div className={`cart ${show? "show" : "hide"}`}>
        <h4>Your Cart</h4>
        <div className="contents">
          {
          cart.map(item => {
            return (
              <CartItem 
                item = {item}
                
              />

            )
          })
          }
          <div className="total"><h3>{`${cart.length == 0? "Your cart is empty" : "Total Price: "+totalPrice }`}</h3></div>

          {
            cart.length > 0? <button onClick={clearCart}>Empty Cart</button> : ""
          }
          
          
        </div>

      </div>

      {/* <h1>{counter}</h1> */}

      {/* <button onClick={increament}>Increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={addby}>Increase by 10</button>
      <button onClick={subby}>subtract by 15</button>
 */}
      <button onClick={toggle}>Show/Hide cart</button>





    </>
  )
}

export default App
