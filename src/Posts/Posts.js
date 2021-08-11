import React, {useState} from 'react'
import axios from 'axios'

const Posts = () => {
    const[inputs, setInputs] = useState(
        {
            name: '',
            price: '',
            description:'',
            selectedFile: ''
        });

        const submitHandler = async (e) => {
            e.preventDefault();
            console.log(inputs)
           const response = await axios.post('http://localhost:8080/product/saveProducts', inputs);
            console.log(response )
        }
    return (
        
        <>
           <form onSubmit = {submitHandler} style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '400px'}}>
            <input 
            type = "text" 
            value = {inputs.name} 
            placeholder = "Enter your name" 
            onChange = {(e) => setInputs({...inputs, name:  e.target.value})}
            />
            <input 
            type = "text" 
            value = {inputs.price} 
            placeholder = "Enter the price" 
            onChange = {(e) => setInputs({...inputs, price:  e.target.value})}
            />
            <input 
            type = "text" 
            value = {inputs.description} 
            placeholder = "Give the description" 
            onChange = {(e) => setInputs({...inputs, description:  e.target.value})}
            />
            <input 
            type = "text" 
            value = {inputs.selectedFile} 
            placeholder = "Choose the product photos" 
            onChange = {(e) => setInputs({...inputs, selectedFile:  e.target.value})}
            />
            <button type = "submit" >Post</button>
            </form> 

        </>
    )
}

export default Posts
