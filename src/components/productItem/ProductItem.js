import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,IconButton } from "@mui/material";
import { AddShoppingCart , ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import { addProductInBasket, updateProductBasket } from "../shopBasket/shopBasketSlise"; 
import { useDispatch, useSelector } from "react-redux";
import { useState , useEffect} from "react";
import './productitem.css';


const ProductItem = ({arrProducts}) => {
    const [count, setCount] = useState({});
    const basketList = useSelector(state => state.shopBasket.addProductList);
    console.log(basketList);
    useEffect(()=> {
        const obj = {};
        arrProducts.forEach(elem => { obj[elem.id] = 1});
        setCount(obj);
    },[])
           

   
    const incrementCount = (id) => {
        if (count[id] < 9) {
            setCount({...count, [id] : count[id] + 1});
        }
    }
    const decrementCount = (id) => {
        if (count[id] > 1) {
            setCount({...count, [id] : count[id] - 1});
        }
    }

    const dispatch = useDispatch();
    
    const  addProductToBasket = (id) => {
      
        if (basketList.some(item => item.id === id)){
          
            dispatch(updateProductBasket({id : id , count : count[id]}))
          
        } else {
            const addingProd = arrProducts.filter(item => item.id === id);
             dispatch(addProductInBasket({...addingProd[0], countProd : count[id]}))
        }
        
        setCount({...count, [id] : 1})
        
    }
    const productsCart = arrProducts.map(product => {
      
        return (
            <Grid item xs={4} key={product.id}>
                    <Card sx={{ height: '100%' }}>
                        <CardMedia
                        sx={{ height: 170 }}
                        image={product.img}
                        title="goods_cart"
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
                         <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="prev_count"
                            sx={{padding:'2px'}}
                            onClick={() => decrementCount(product.id)}>
                            <ArrowBackIos/>
                        </IconButton>
                         <span>{count[product.id]}</span>
                         <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="forvard_count"
                            sx={{padding:'2px'}}
                            onClick={() => incrementCount(product.id)}>
                            <ArrowForwardIos/>
                        </IconButton>
                        
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