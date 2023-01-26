import Header from './components/header/header';
import './App.css';
import Footer from './components/footer/footer';
import ProductList from './components/productList/ProductList';
import { Container } from '@mui/material';
import ShopBasket from './components/shopBasket/ShopBasket';
import SideMenu from './components/sidemenu/SideMenu';

function App() {
  return (
   <>
        <Header/>
        <Container>
        	<ProductList/>
        </Container>
        <Footer/>
		    <ShopBasket/>
        <SideMenu/>
   </>
  
  ) 
 
}

export default App;
