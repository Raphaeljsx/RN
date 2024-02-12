import React from 'react'
import aboutImg from '../assets/about.png'
import SwiperVertical from './SwiperVertical';


function AboutUs() {
  return (
    <section className='flex justify-center items-center'>
      <div className='container grid grid-cols-1 xl:grid-cols-2 p-10'>
        <div className=' flex flex-col justify-center pb-10 xl:pb-0'>
          <h3 className='font-roboto font-bold text-2xl text-principal'>Quem somos</h3>
          <div className='w-12 h-1.5  bg-line mt-5 '></div>
          <SwiperVertical/>
          
        </div>
        <div className='flex flex-col justify-center'>
        <img src={aboutImg} alt="Quem somos" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
