import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
export default function HomeScreen(){
//pobranie productList z reducer Store
  const productList = useSelector(state=>state.productList);
const {loading,error,products} = productList;
 useEffect( () =>{
 dispatch(listProducts());
 }
 ,[]);
 //render section
 return(
   
        <div>
        {loading? <LoadingBox></LoadingBox>
        :
        error? (<MessageBox variant="danger">{error}</MessageBox>)
        :
        (<div className="row center">
        {products.map((product) => (
          <Product key={product._id} product ={product}></Product>
        )) }
        </div>)
        }
        </div>
    );
}