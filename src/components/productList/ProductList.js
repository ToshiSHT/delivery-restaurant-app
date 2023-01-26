import { useEffect } from 'react';
import { fetchProduct } from './ProductSlice';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../productItem/ProductItem';
import { CircularProgress } from '@mui/material';



const ProductList = () => {

    const dispatch = useDispatch();
    const arrProducts = useSelector(state => state.products.products)


    useEffect(()=>{
        dispatch(fetchProduct('rolls'))
    },[]);

    const LoadingContent = () => {
        return (
            <div style={{width: '50px' , margin: "150px auto", height: '500px'}}>
            <CircularProgress />
            </div>
        )
       
    }

   


    return(
        <>
         {useSelector(state =>state.products.productsLoadingStatus) === 'idle' ? <ProductItem arrProducts={arrProducts}/> : <LoadingContent/> }               
        
        </>
    )

}

export default ProductList;
