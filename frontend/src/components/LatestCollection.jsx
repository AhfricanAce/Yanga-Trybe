import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    /** Added a new variable to get and display then 10 specified products */
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    //** Added a title tag for passing text1 and text2 using the props */
    <div className='my-10'>
        <div className='text-center py-8 text-3x1'>
            <Title text1={'LATEST'} text2={' COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            A Sample Site for Yanga. Expected to be completed by the end of 2024.
            </p>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Going live on January, 2025
            </p>
        </div>

        {/** Rendering Products */}
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>

    </div>
  )
}

export default LatestCollection