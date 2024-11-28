import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import Loader from './Loader';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = async ()=>{
        try{
            const {data} = await axios.get('https://dummyjson.com/products');
            setProducts(data.products);
            setError(null);
        }catch(error){
            setError('Error fitching data');
            
        }finally{
            setLoader(false);
        }
       
    }

    useEffect(()=>{
        getProducts();
    },[]);

    if(loader)
        return (
        <div className="container">
            <div className="row">
                <div className='col-lg-8 d-flex justify-content-center align-items-center'> 
                <Loader />
                </div>
            </div>
        </div>
       
        )

  return (
    <section className=' products py-2'>
        <div className="row">
        {
                    error? 
                    <div className='alert alert-danger'>{error}</div>
                    : null
                }
            {
                products.map((product)=>{
                    return(
                        <div className='col-lg-4 mt-4'>
                            <Product title = {product.title} thumbnail = {product.thumbnail} description = {product.description} price = {product.price}/>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
