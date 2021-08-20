import React from 'react'
import { Grid } from '@material-ui/core' 
import CartItem from './CartItem/CartItem'


const CartItems = ({cartProducts, addToCart, removeFromCart, removeAItem}) => {
    console.log("cartProductscartProducts", cartProducts)

    return (
        <>
                <div>{cartProducts.length === 0  && <div>Cart is Empty</div>}</div>
               <Grid container>
                {cartProducts.map((cartProduct) => (
                    <Grid key = {cartProduct.id}  item xs = {12} sm = {3}>
                        <CartItem cartProduct = {cartProduct} removeFromCart = {removeFromCart}  addToCart = {addToCart} removeAItem = {removeAItem}/>
                    </Grid>
                ))}
            </Grid>  
        </>
        )
    
}


export default CartItems
