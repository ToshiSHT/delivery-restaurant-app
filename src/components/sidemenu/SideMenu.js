import { Box, Button, Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import { closeSideMenu } from "./sideMenuSlice";
import { useSelector,useDispatch } from "react-redux";
import { Close } from "@mui/icons-material";
import {fetchProduct} from "../productList/ProductSlice";


const Sidemenu = () => {
    const dispatch = useDispatch();
    const menuIsOpen = useSelector(state => state.sideMenuSlice.isOpen);
    const onMenuClose = () => {
        dispatch(closeSideMenu())
    }
    const choiceProduct = (link) => {  //простой вариант условной загрузки и рендеринга
        dispatch(fetchProduct(link))
    }
    const menuItems = [{ title :'Роллы', link : 'rolls'},
                       { title :'Суши', link : 'susi'},
                       { title :'Пицца', link : 'pizza'}].map((item,id) => {
        return (
            <ListItem key={id}>
                <Button variant="text" sx={{fontFamily: 'Rowdies, cursive',fontSize: '25px'}}
                 onClick={() => choiceProduct(item.link)}>
                {item.title}
                </Button>
            </ListItem>
        )
    })
    return (
        <Drawer anchor="left"
        open = {menuIsOpen}
        variant= 'persistent'>
            <nav>
                <Box sx={{display: 'flex',justifyContent: "flex-end"}}>
                <IconButton size="large" color="inherit" aria-label="close" sx={{mr:'5px'}}
                    onClick={onMenuClose}>
                    <Close/>
                </IconButton>
                </Box>
                <Box sx={{width :'300px', display :'flex', justifyContent: 'center'}} >
                   
                        <List >
                           {menuItems}
                        </List>
                  
                </Box>
            </nav>
        </Drawer>

    )
}

export default Sidemenu;