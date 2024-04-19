import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const h = useSelector(state => state.h)

  const increament =() => {
    dispatch({type: "inc"})
  }
  const decreament = () => {
    dispatch({type: "dec"})
  }
  const addby = () => {
    dispatch({type: "ab", payload: 10})
  }
  const subby = () => {
    dispatch({type: "sb", payload: 21})
  }
  return (
    <>
    <h2>Dont go please</h2>
      <h3>{h}</h3>
      <h1>{counter}</h1>

      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>decreament</button>
      <button onClick={addby}>Increase by 10</button>
      <button onClick={subby}>subtract by 21</button>





    </>
  )
}

export default App
