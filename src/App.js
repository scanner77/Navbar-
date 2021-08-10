import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Navbar from './Navbar/Navbar';

function App() {
    const[state, setState] = useState([]);

     useEffect( () => {
       const fetchProducts = async() => {
        const response = await axios.get('http://localhost:8080/product/getProducts');
        setState(response)
       }
       fetchProducts();
    }, [])
    console.log(state)

  return (
    <div className="App">
     <Navbar />
    </div>
  );
}

export default App;
