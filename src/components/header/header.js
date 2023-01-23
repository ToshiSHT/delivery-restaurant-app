import { useDispatch, useSelector} from 'react-redux';
import { openBasket } from '../shopBasket/shopBasketSlise';
import {AppBar, Toolbar, IconButton, Typography, Button, Badge} from '@mui/material';
import {Menu, ShoppingCart, LocalPhone} from '@mui/icons-material';

const Header = () => {
  const dispatch = useDispatch();
  const openShopBasket = () => {
    dispatch(openBasket());
  }
  const countProductInBasket = useSelector(state => state.shopBasket.addProductList).length
    return (
        <AppBar position="static" sx={{
            height: "75px",
            backgroundColor: "#eaf3ff",
            color: '#222'
        }}>
        <Toolbar sx={{
            height: "75px",
            justifyContent : 'space-between',
            flexDirection: 'row'
        }} >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu/>
          </IconButton>
          <Typography variant='h4' component="div" sx={{ 
            flexGrow: 2,
            fontFamily: 'Rowdies, cursive',
         ml: 5
         }}>
           Rolls Market
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <LocalPhone/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ 
            flexGrow: 1,
            fontFamily: 'Rowdies, cursive'
            }}>
            8 (9258) 188-88-88
          </Typography>
          <Typography variant="h6" component="div" sx={{ 
              flexGrow: 1,
              fontFamily: 'Rowdies, cursive'
              }}>
              Принимаем заказы:
              Пн-Вс: 10:00 - 23:00
          </Typography>
          <Button color="inherit" sx={{color: '#222'}}>Корзина</Button>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shopingCart"
            sx={{ mr: 2 }}
            onClick={openShopBasket}>
            <Badge badgeContent={countProductInBasket} color="secondary">
            <ShoppingCart/>
            </Badge>
          </IconButton>
         
        </Toolbar>
      </AppBar>
    )

}

export default Header;