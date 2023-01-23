import { useEffect } from 'react';
import { fetchProduct } from './ProductSlice';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../productItem/ProductItem';



const ProductList = () => {

    const dispatch = useDispatch();
    const arrProducts = useSelector(state => state.products.products)

    console.log(arrProducts);

    useEffect(()=>{
        dispatch(fetchProduct('products'))
    },[]);

   


    return(
        <>
         {useSelector(state =>state.products.productsLoadingStatus) === 'idle' ? <ProductItem arrProducts={arrProducts}/> : null}               
        
        </>
    )

}

export default ProductList;
