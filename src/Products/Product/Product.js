import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core' 
import {AddShoppingCart} from '@material-ui/icons'

const Product = ({product}) => {
    console.log(product)
    return (
        <Card>
          <CardMedia style = {{paddingTop: '96.2%', height: 0, marginTop: '30', border: '1px solid black'}} image = {product.pathToImage} alt = {product.image}/>
            <CardContent style = {{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>{product.title}</Typography>
                <Typography>${product.price}</Typography>
            </CardContent>
            <CardContent>
                {product.description}
            </CardContent>
            <CardActions style = {{display: 'flex', justifyContent: 'center'}}>
            <AddShoppingCart />
            </CardActions>
        </Card>
    )
}

export default Product
