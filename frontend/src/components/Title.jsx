import React from 'react'

const Title = ({text1,text2}) => {
  return (
    /** Added text2 in a span tag just so i could add a different CSS properties to it
     * Added a horizontal line to separate the text1 and text2
     */
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1}<span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>

    </div>
  )
}

export default Title