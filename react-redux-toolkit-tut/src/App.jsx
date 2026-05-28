import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import {clearAllItem} from './store/slice'

function App() {
const dispatch = useDispatch();
  return (
    <>
    <Header/>
    <h1>React redux toolkit tutorial</h1>
    <button className='btn' onClick={()=>dispatch(clearAllItem())}>Clear Cart</button>
    <Product/>
    </>
  )
}

export default App
