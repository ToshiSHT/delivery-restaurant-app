import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { addProduct } from "../shopBasket/shopBasketSlise"; 
import { useDispatch, useSelector } from "react-redux";


const ProductItem = ({arrProducts}) => {

    const dispatch = useDispatch();
    
    const  addProductToBasket = (id) => {
        const addingProd = arrProducts.filter(item => item.id === id);
        
        dispatch(addProduct({...addingProd[0], count : 1}))
        
        
    }
    const productsCart = arrProducts.map(product => {
        return (
            <Grid item xs={4} key={product.id}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                        sx={{ height: 170 }}
                        image={product.img}
                        title="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" mt={'20px'}>
                            Цена: {product.price}руб.
                        </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: 'flex-end'}}>
                        <Button variant="outlined" size="small" endIcon={<AddShoppingCart />}
                         onClick={() => addProductToBasket(product.id)}
                        >
                         В корзину
                        </Button>
                        </CardActions>
                        </Card>
          </Grid>
        )
    })

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt:3}}>
           {productsCart}
        </Grid>
    )

}

export default ProductItem;