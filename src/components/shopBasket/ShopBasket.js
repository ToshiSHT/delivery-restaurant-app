
import { Drawer, ListItem, IconButton,List, Typography, Divider, Box } from "@mui/material";
import {  DeleteForever } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { closeBasket, removeProduct} from "./shopBasketSlise";

const ShopBasket = () => {
    const dispatch = useDispatch();
    const basketIsOpen = useSelector(state => state.shopBasket.isOpen);
    const arrBasketProduct = useSelector(state => state.shopBasket.addProductList)
   
    const onBasketClose = () => {
        dispatch(closeBasket())
    }
    const allPrice = arrBasketProduct.reduce((acc, item) => acc + +item.price*item.countProd, 0);
   

    const onDeleteProduct = (id) => {
        dispatch(removeProduct(id));
    }

    const productItems = arrBasketProduct.map(item => {
        return (
     
             <ListItem key={item.id}>
                <Box   sx={{   
                fontSize : '16px',
                fontFamily: 'Rowdies, cursive',
                textAlign: 'left',
                mt: '10px',
                justifyContent: 'space-around' }}>
                {item.title}
                <Box component="div" sx={{display: 'flex',
                     justifyContent: 'space-between',
                      width: '400px',
                      alignItems: 'center'}}>
                    <Typography component="div">Цена : {item.price}</Typography>
                    <Typography component="div">Колличество: {item.countProd}</Typography>
                    <Typography component="div"> 
                        <IconButton
                        size="small"
                        edge="start"
                        color="warning"
                        aria-label="delete"
                        sx={{ ml: '20px', mb:'2px' }}
                        onClick={() => onDeleteProduct(item.id)}>
                            < DeleteForever/>
                        </IconButton>
                    </Typography>
                   
                </Box>
                <Divider/>
                </Box>
                
            </ListItem>
            
  
        )  
    })


    return (
        <Drawer 
        anchor="right"
        open = {basketIsOpen}
        onClose = {onBasketClose}
        variant= "temporary">
            <List sx={{width: '500px', height: '700px'}}>
                <ListItem >
                   <Typography sx={{fontSize : '25px', fontFamily: 'Rowdies, cursive'}}>
                    Ваша корзина :
                   </Typography>
                </ListItem>
                <Divider/>
                   <Typography component="div" sx={{
                    fontSize : '20px',
                    fontFamily: 'Rowdies, cursive',
                    textAlign: 'center',
                    mt: '50px'}}>
                    {arrBasketProduct.length === 0 ? 'Ваша корзина пуста!' : productItems}
                   </Typography>
                   <Typography sx={{
                    fontSize : '20px',
                    fontFamily: 'Rowdies, cursive',
                    textAlign: 'right',
                    mt: '50px',
                    mr: '20px'}}>
                    {arrBasketProduct.length === 0 ? null : `Общая сумма : ${allPrice} руб.`}
                   </Typography>
            </List>

        </Drawer>

    )
}

export default ShopBasket;