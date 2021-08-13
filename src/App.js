import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import Products from './Products/Products';
import Navbar from './Navbar/Navbar';
import Posts from './Posts/Posts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
    <Router>
    <div className="App">
     <Navbar /> 
     <br/>
     <br/>
     <br/>

     <Switch>
       <Route path = "/" exact>
     <Products products = {state}/>
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
