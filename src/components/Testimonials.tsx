
import { Navigation, Pagination } from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

type ITestimonial = {
  id: string,
  text: string,
  autor: string
}



const data: ITestimonial[]  = [
  {id: '1', text: "Excelentes profissionais!!! Recomendo com toda certeza.", autor: 'Maryanne - RV Work'},
  {id: '2', text: "Excelentes profissionais!!! Recomendo com toda certeza.", autor: 'Maryanne - RV Work'},
  {id: '3', text: "Excelentes profissionais!!! Recomendo com toda certeza.", autor: 'Maryanne - RV Work'}
]

const Testimonials = () => {
  return (
    <section className='flex flex-col-reverse xl:grid lg:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: '.swiper-button-next ',
            prevEl: '.swiper-button-prev'
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true
          }}
          modules={[Navigation, Pagination]}
          className='swiper block'
        >
          {data.map((item) => (
            <SwiperSlide className='slide px-5' key={item.id}>
              <h3 className='font-roboto text-center lg:text-left text-principal font-bold text-2xl mx-auto lg:w-[550px]'>{`"${item.text}"`}</h3>
              <h3 className='mx-auto lg:w-[550px] text-center text-gray-700'>{item.autor}</h3>
            </SwiperSlide>
          ))}

        <div className='slider-controler'>
            <div className='hidden lg:block  swiper-button-prev slider-arrow'>
            <FaArrowCircleLeft className='shadow-sm'   />
            </div>
            <div className='hidden lg:block swiper-button-next slider-arrow'>
            <FaArrowCircleRight className='shadow-sm'    />
            </div>
            <div className='xl:hidden swiper-pagination'></div>
        </div>
          
        </Swiper>
        
        
      </div>
      <div className='flex justify-end items-center bg-tesmonial w-full h-[350px]'>
        <h3 className='font-roboto font-bold text-center md:text-left text-xl px-5 md:text-2xl xl:text-4xl leading-snug text-white lg:w-[500px] 2xl:mr-16'>Confira a opinião de quem conhece a RN Safety Group</h3>
      </div>
    </section>
  )
}

export default Testimonials