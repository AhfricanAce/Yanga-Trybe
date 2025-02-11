import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='w-[max(3%,60px)] px-1 sm:py-4 rounded-full' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam accusantium corrupti consequatur vero possimus iste, est mollitia libero totam aut? Id nostrum laudantium quidem! Fugiat aliquam et dolorum qui!
                </p>
            </div>

            <div>
                <p className='text-x1 font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234-906-711-2338</li>
                    <li>ahfricanace@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@yanga.com. All rights reserved.</p>

        </div>
    </div>
  )
}

export default Footer