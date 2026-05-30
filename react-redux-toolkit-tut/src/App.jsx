// import { useDispatch } from 'react-redux'
import './App.css'
import CartList from './components/CartList'
import Header from './components/Header'
import Product from './components/Product'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import {clearAllItem} from './store/slice'

function App() {
// const dispatch = useDispatch();
  return (
    <>
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/cart' element={<CartList/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
