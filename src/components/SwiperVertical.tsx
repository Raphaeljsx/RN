

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './SwiperVertical.module.css'


type IAbout= {
  id: string,
  text: string,
}

const data: IAbout[]  = [
  {id: '1', text: "A RN Safety Group desenvolve uma visão estratégica quanto à Saúde e Segurança do Trabalho tendo como foco a prevenção de perdas financeiras e redução de tributos relacionados ao meio ambiente de trabalho."},
  {id: '2', text: "A RN Safety Group desenvolve uma visão estratégica quanto à Saúde e Segurança do Trabalho tendo como foco a prevenção de perdas financeiras e redução de tributos relacionados ao meio ambiente de trabalho."},
  {id: '3', text: "A RN Safety Group desenvolve uma visão estratégica quanto à Saúde e Segurança do Trabalho tendo como foco a prevenção de perdas financeiras e redução de tributos relacionados ao meio ambiente de trabalho."}
]

const SwiperVertical = () => {
  return (
    <Swiper
        direction={'vertical'}
        pagination={{
          el: '.swiper-pagination',
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className={styles.MySwiper}
      >
        {data.map((item) =>(
          <SwiperSlide key={item.id} className={styles.swiperSlide}><p>{item.text}</p>
            <button className='bg-orange-500 text-sm text-white font-roboto font-bold py-3 px-10 rounded-md mt-5 shadow-md'><a href="">CONHEÇA-NOS!</a></button>
          </SwiperSlide>
        ))}

        <div className='slider-controler vertical'>
            <div className='xl:hidden swiper-pagination vertical gap-5'></div>
        </div>
        
      </Swiper>
  )
}

export default SwiperVertical
