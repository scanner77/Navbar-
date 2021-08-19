import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Products/Product/Product'
import { Badge, IconButton } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons'

const Products = ({products, cartProducts, addToCart}) => {
    console.log("products", products);
    return (
            <>
            <br/>
            <IconButton component = {Link} to = "/cart/getCartInfo" color = "secondary">
            <Badge  style = {{ position: 'absolute', marginRight: '-1200px', borderRadius: '2px dotted black'}}>
                <ShoppingCart />
            </Badge>
            </IconButton>
            {/* <br/> */}
            {/* <br/>
            <br/> */}
            <br/>
            <br/>
            <Grid container>
                {products.map((product) => (
                    <Grid key = {product.id}  item xs = {12} sm = {3}>
                        <Product product = {product}  cartProducts = {cartProducts} addToCart = {addToCart}/>
                    </Grid>
                ))}
            </Grid>  
            <h1>{products.pathToImage}</h1>
    </>
    )
}

export default Products
