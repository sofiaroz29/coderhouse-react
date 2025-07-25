import './App.css'
import Button from './components/Button.jsx'
import Counter from './components/Counter.jsx'
import {BrowserRouter, Routes, Route, Link} from "react-router"
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<ItemListContainer />} />
      <Route path = "/category/:categoryName" element = {<ItemListContainer />} />
      <Route path = "/item/:id" element = {<ItemListContainer />} />
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/checkout" element = {<Checkout />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
