import React, {useState} from 'react'
import axios from 'axios'
import ApiService from './ApiService'; 
const Posts = () => {
    const[inputs, setInputs] = useState(
        {
            name: '',
            price: '',
            description:'',
            
        });
        const[file, setFile] = useState({
            selectedFile: ''
        })

        const submitHandler =  async (e) => {
            e.preventDefault();
            console.log(inputs);
            const response =  await axios.post('http://localhost:8080/product/uploadProducts', inputs)
            setInputs(response)
            
        };
        console.log(inputs )
            setInputs({
            name: '',
            price: '',
            description:'',
            })
        
        const onFileChangeHandler = (e) => {
            setFile({selectedField: e.target.files[0]})
            const formData = new FormData();
            formData.append('file', file.selectedFile);
            ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
        }


    return (
        <>
           <form onSubmit = {submitHandler} style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
           <label>Title</label>
            <input 
            type = "text" 
            value = {inputs.name} 
            placeholder = "Title" 
            onChange = {(e) => setInputs({...inputs, name:  e.target.value})}
            />
            <label>Price</label>
            <input 
            type = "text" 
            value = {inputs.price} 
            placeholder = "Price" 
            onChange = {(e) => setInputs({...inputs, price:  e.target.value})}
            />
            <label>Description</label>
            <input 
            type = "text" 
            value = {inputs.description} 
            placeholder = "Description" 
            onChange = {(e) => setInputs({...inputs, description:  e.target.value})}
            />
            <label>Image</label>
            <input 
                        value = {inputs.selectedFile} 
                        type = "file"
                        name = "file"
                        multiple = {false}
                        onChange = {onFileChangeHandler()} />
            <br/>
            <button type = "submit" >Upload</button>
            </form> 

        </>
    )
}

export default Posts
