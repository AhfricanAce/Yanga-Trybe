import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import { useEffect } from 'react';
import Title from './Title';
import ProductItem from './ProductItem';



{/** Defines a functional React component */}
const BestSeller = () => {

    {/** Get all products data using the useContext API */}
    const {products} = useContext(ShopContext);
    {/** Declares a state variable @bestSeller initialized as an empty array */}
    const [bestSeller,setBestSeller] = useState([]);
    {/** Find bestseller products from the products data and display them as bestseller
     * Display the bestseller products
     */}
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3x1 py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            I will be adding a caption for all Yanga's best selling products.
            </p>
        </div>
    
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 1g:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
            }
        </div>
    </div>
  )
}
{/** Exports the BestSeller component, making it available for import elsewhere */}
export default BestSeller