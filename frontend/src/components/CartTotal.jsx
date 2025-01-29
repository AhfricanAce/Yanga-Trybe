import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';


{/** Defines a function @CartTotal */}
const CartTotal = () => {

    {/** Define three elements as constants while using the useContext hook to extract data from ShopContext */}
    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'} />
        </div>
        {/** Call a function @getCartAmount to get the total item cost
         * Using the ternary operator to ensure accurate sum of cart items
         */}
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
        </div>
    </div>
  )
}
{/** Exports the CartTotal component, making it available for import elsewhere */}
export default CartTotal