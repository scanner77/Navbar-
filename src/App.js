import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Products from './Products/Products';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';
function App() {
    const[state, setState] = useState([]);
    
     useEffect( () => {
       const fetchProducts = async() => {
        const response = await axios.get('http://localhost:8080/product/getProducts');
        setState(response.data)
       }
       fetchProducts();
    }, [])
    console.log(state)

  return (
    <div className="App">
     <Navbar /> <br/>
     <Products products = {state}/>
     <Posts />
    </div>
  );
}

export default App;
