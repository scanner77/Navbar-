import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Products from './Products/Products';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CartItems from './CartItems/CartItems';


// const cartFromLocalStorage = localStorage.getItem('cart') || '[]'

function App() {
    const[state, setState] = useState([]);
    const[cartProducts, setCartProducts] = useState([])

     useEffect( () => {
       const fetchProducts = async() => {
        const response = await axios.get('http://localhost:8080/product/getProducts');
        setState(response.data)
       }
       fetchProducts();
    }, [])
    console.log("state", state)

    // let's fetch items from cart and show it in CartItem
    // useEffect(() => {
    //  localStorage.setItem('cart', JSON.stringify(cartProducts))
    
    // }, [cartProducts])

    console.log("cartProducts", cartProducts)

    const addToCart = (product) => {
      
        const exist = cartProducts.find((x)=> x.id === product.id);
        if(exist){
           setCartProducts(cartProducts.map((x) => x.id === product.id ? {...exist, qty : exist.qty + 1} : x))
        }else{
          setCartProducts([...cartProducts, {...product, qty:1}])
        }

    }

    const removeFromCart = (product) => {
      const exist = cartProducts.find((x)=> x.id === product.id);
        if(exist){
           setCartProducts(cartProducts.map(
             (x) => x.id === product.id ? {...exist, qty : exist.qty - 1} : x))
        }else{
          setCartProducts([...cartProducts, {...product, qty:1}])
        }
    }
    

  return (
    <Router>
    <div className="App">
     <Navbar /> 
     <br/>
     <br/>
     <br/>

     <Switch>
       <Route path = "/" exact>
     <Products  cartProducts = {cartProducts} products = {state} addToCart = {addToCart}/>
     </Route>

     <Route path = "/cart">
      <CartItems addToCart = {addToCart} removeFromCart = {removeFromCart} cartProducts = {cartProducts}/>
     </Route>

     <Route path = "/postProducts">
     <Posts />
     </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
