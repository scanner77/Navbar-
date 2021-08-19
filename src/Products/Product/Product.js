import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core' 



const Product = ({product, cartProducts, addToCart}) => {
    console.log(product)
    var blob = new Blob([new Uint8Array(product.image)],{type: 'image/jpg'})

    return (
        <>
        <Card>
          <CardMedia style = {{paddingTop: '96.2%', height: 0, marginTop: '30', border: '1px solid black'}} image = {URL.createObjectURL(blob)} alt = {product.image}/>
            <CardContent style = {{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>{product.title}</Typography>
                <Typography>${product.price}</Typography>
            </CardContent>
            <CardContent>
                {product.description}
            </CardContent>

            <Button style = {{display: 'flex', justifyContent: 'center', cursor: 'pointer'}} onClick = {() => addToCart(product)}>Add to Cart</Button>
        
        </Card>
       </>
    )
}

export default Product
