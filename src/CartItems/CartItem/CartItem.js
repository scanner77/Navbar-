import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core' 

const CartItem = ({cartProduct ,removeFromCart, addToCart}) => {
    var blob = new Blob([new Uint8Array(cartProduct.image)],{type: 'image/jpg'})

    return (
        <Card>
            <CardMedia style = {{paddingTop: '96.2%', height: 0, marginTop: '30', border: '1px solid black'}} image = {URL.createObjectURL(blob)} alt = {cartProduct.image}>
            <Typography>{cartProduct.name}</Typography>
               
            </CardMedia>
           <CardContent >
            <Button onClick={() => removeFromCart(cartProduct)} className="remove">
                -
            </Button>
            <Button onClick={() => addToCart(cartProduct)} className="add">
                +
            </Button>
            </CardContent>
       </Card>
    )
}

export default CartItem