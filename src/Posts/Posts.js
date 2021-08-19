

import React, {useState} from 'react'
import axios from 'axios'

const Posts = () => {
    const[inputs, setInputs] = useState(
        {
            name: '',
            description:'',
            price: '',
            selectedField: ''
            
        });
        const submitHandler =  async (e) => {
            
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', inputs.name)
            formData.append('description', inputs.description)
            formData.append('imageFile', inputs.imageFile)
            formData.append('price', inputs.price)

            
            console.log(inputs);
            const response =  await axios.post('http://localhost:8080/product/uploadProducts', formData)
            console.log(response)
        };
      
        
        const onFileChangeHandler = (e) => {
            e.preventDefault();
            setInputs({...inputs, [e.target.name] : e.target.files[0]})



            
        }
        
        const handleChange = (e) => {
                setInputs({...inputs, [e.target.name] : e.target.value.trim()})
            }


    return (
        <>
           <form onSubmit = {submitHandler} style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
           <label>Title</label>
            <input 
            name = "name"
            type = "text" 
            
            onChange = {handleChange}
            />
            <label>Price</label>
            <input 
            name = "price"
            type = "text" 
            
            
            onChange = {handleChange}
            />
            <label>Description</label>
            <input 
            type = "text" 
            name = "description"
           
            
            onChange = {handleChange}
            />
            <label>Image</label>
            <input 
                        
                        type = "file"
                        name = "imageFile"
                        onChange = {onFileChangeHandler} />
            <br/>
            <button type = "submit" >Upload</button>
            </form> 

        </>
    )
}

export default Posts




// import React, {useState} from 'react'
// import axios from 'axios'

// const Posts = () => {

//     const [inputs, setInputs] = useState({
//         name: "",
//         description: "",
//         price: "",
//         selectedFile: "",
//     });
    
//     const handleChange = (e) => {setInputs({...inputs,[e.target.name]: e.target.value.trim()});};
    
//     const submitHandler =  async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', inputs.name);
//         formData.append('description', inputs.description);
//         formData.append('imageFile', inputs.imageFile);
//         formData.append('price', inputs.price);
//         const response = await axios.post('http://localhost:8080/product/uploadProducts', formData);
//         console.log(response)
        
//     };


//     const onFileChangeHandler = (e) => {
//         e.preventDefault(); 
//         setInputs({...inputs, [e.target.name]: e.target.files[0]});}

        
//     return (
//         <>
//        <form 
//        onSubmit = {submitHandler} 
//        style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}
//        >
//        <label>Name</label>
//         <input 
//                 type = "text" 
//                 name="name"
//                 onChange={handleChange}
//         />
//         <label>Price</label>
//         <input 
//                 type = "text" 
//                 name = "price" 
//                 onChange={handleChange}
//         />
//         <label>Description</label>
//         <input 
//                 type = "text" 
//                 name = "description" 
//                 onChange={handleChange}/>
//         <label>Image</label>
//         <input 
                   
//                     type = "file"
//                     name = "imageFile"
//                     onChange = {onFileChangeHandler}/>
//         <br/>
//         <button type = "submit" >Upload</button>
//         </form> 

//     </>
//     )
// }

// export default Posts


    