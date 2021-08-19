import React from 'react'
import { Grid } from '@material-ui/core' 
import CartItem from './CartItem/CartItem'


const CartItems = ({cartProducts, addToCart, removeFromCart}) => {
    console.log("cartProductscartProducts", cartProducts)

    return (
        <>
               <Grid container>
                {cartProducts.map((cartProduct) => (
                    <Grid key = {cartProduct.id}  item xs = {12} sm = {3}>
                        <CartItem cartProduct = {cartProduct} removeFromCart = {removeFromCart}  addToCart = {addToCart}/>
                    </Grid>
                ))}
            </Grid>  
        </>
        )
    
}


export default CartItems
