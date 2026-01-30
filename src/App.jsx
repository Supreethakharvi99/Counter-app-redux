import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount, reset } from './redux/features/counterSlice'

const App = () => {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)

  const [num ,setNum] = useState(0);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
       
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())

      }}>Decrement</button>
      <input 
      type='number'
      value={num}
      onChange={(e) => {
        setNum(e.target.value);
        
      }}/>
      <button onClick={() => {
        dispatch(incrementByAmount(Number(num)));
      }}>
        Increase By 5
      </button>
      <button onClick={() => {
        dispatch(reset())

      }}>Reset</button>
    </div>
  )
}

export default App