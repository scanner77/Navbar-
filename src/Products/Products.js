import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Products/Product/Product'

const Products = ({products}) => {
    console.log(products);
    return (
            <>
            <br/>
            <br/>
            <Grid container>
                {products.map((product) => (
                    <Grid key = {product.id}  item xs = {12} sm = {3}>
                        <Product product = {product} />
                    </Grid>
                ))}
            </Grid>  
            <h1>{products.pathToImage}</h1>
    </>
    )
}

export default Products
