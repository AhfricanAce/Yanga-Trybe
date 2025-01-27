import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat laboriosam deserunt a praesentium modi itaque quod, veritatis harum repellendus consequuntur ipsum est, sunt tempora commodi voluptatibus impedit quos aliquid aliquam eum, pariatur sed cumque odio nemo laudantium? Rerum, alias rem magni, facere cupiditate sunt laboriosam sed non, ullam culpa repellat?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ipsum distinctio, rerum dignissimos reprehenderit cumque asperiores placeat vitae laboriosam corrupti delectus quae soluta accusamus quidem. Aliquid, nobis. Culpa, adipisci, dolores, tempore mollitia non voluptate labore sequi ut quod vero id iusto hic quisquam soluta unde? Illum aliquid deserunt facere!</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorem rerum cupiditate voluptates aliquam facilis, dolor amet ullam necessitatibus odio, culpa ipsam, dicta numquam sapiente exercitationem molestiae sunt saepe officiis nemo! Quasi voluptate corporis quibusdam, rerum dolore quam adipisci inventore.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY' } text2={' CHOOSE US'} />
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore doloremque accusantium aspernatur laborum minima reiciendis inventore nihil perspiciatis, nostrum molestiae numquam impedit eius quos! Hic commodi fugiat magnam quisquam obcaecati, assumenda mollitia nesciunt excepturi.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit similique doloribus, tempora magnam vero in unde voluptas odit architecto deleniti quam, provident, magni at veniam.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quibusdam exercitationem similique minima omnis blanditiis!</p>
          </div>
        </div>

      <NewsletterBox/>
    </div>
  )
}

export default About