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
    const[getCartProucts, setGetCartProducts] = useState({
      productId: '',
      quantity: ''
    })


     useEffect( () => {
       const fetchProducts = async() => {
        const response = await axios.get('http://localhost:8080/product/getProducts');
        setState(response.data)
       }
       fetchProducts();
    }, [])
    console.log("state", state)

    useEffect(() => {
      const fetchgetProoducts = async () => {
        const response = await axios.get('http://localhost:8080/cart/getCartInfo');
        setGetCartProducts(response.data);
      }
      fetchgetProoducts()
    }, [])
    console.log("FetchingCartProducts", getCartProucts)
    // let's fetch items from cart and show it in CartItem
    // useEffect(() => {
    //  localStorage.setItem('cart', JSON.stringify(cartProducts))
    
    // }, [cartProducts])

    console.log("cartProducts", cartProducts)

    const addToCart = async (product) => {
        const exist = cartProducts.find((x)=> x.id === product.id);
        if(exist){
           setCartProducts(cartProducts.map((x) => x.id === product.id ? {...exist, qty : exist.qty + 1, 
          } : x))
        }else{
          setCartProducts([...cartProducts, {...product, qty:1}])
        }

        let data = {productId : cartProducts.id, quantity: cartProducts.qty}
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data })
        }
        fetch('http://localhost:8080/cart/saveCart', requestOptions);
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
    
      const removeAItem = (product) => {
        const exist = cartProducts.find(x => x.id === product.id);
        if(exist.qty === 1){
          setCartProducts(cartProducts.filter(x => x.id !== exist.id))
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
      <CartItems addToCart = {addToCart} removeFromCart = {removeFromCart} cartProducts = {cartProducts} removeAItem = {removeAItem}/>
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
