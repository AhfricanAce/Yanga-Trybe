import React from 'react'

{/** Defines a react component NewsletterBox */}
const NewsletterBox = () => {

    {/** Call the onSubmitHandler function when user submits form
        use preventDefault to prevent reloading event
        added a subscribe button */}
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Sign up for our weekly newsletters on YANGA fashion
        </p>
        
        <form onSubmit={(onSubmitHandler)} className='w-full sm:w-1/2 flex items-center gap-3 mx:auto my-6 border p1-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

{/** make available for use in other parts of the App */}
export default NewsletterBox