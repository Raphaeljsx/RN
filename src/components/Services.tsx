
import ServicesCards from './ServicesCards'

const Services = () => {
  return (
    <section id='services' className='w-full flex justify-center'>
      <div className='container py-10 xl:py-28'>
        <h3 className='font-roboto font-bold text-center text-3xl text-gray-700'>Nossos serviços</h3>
        <div className='w-12 h-1.5 mx-auto bg-line mt-5 '></div>
        <ServicesCards/>
      </div>
    </section>
  )
}

export default Services