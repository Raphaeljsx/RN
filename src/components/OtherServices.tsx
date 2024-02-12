import React from 'react'
import clientes from '../assets/clientes.png'

const OtherServices = () => {
  return (
    <section id='others' className='flex justify-center items-center p-12'>
      <div className='container flex flex-col justify-center items-center'>
        <h3 className='font-roboto font-extrabold text-3xl text-principal'>Outros Serviços</h3>
        <div className='w-12 h-1 bg-line mt-5 '></div>
        <div className='grid md:grid-cols-2 gap-5 mt-10 mb-10'>
          <h4 className='text-2xl font-roboto font-extrabold text-secundaria'><span className='text-principal'>•</span> Teste de Ancoragem</h4>
          <h4 className='text-2xl font-roboto font-extrabold text-secundaria'><span className='text-principal'>•</span> PCMSO + PGR + LTCAT</h4>
          <h4 className='text-2xl font-roboto font-extrabold text-secundaria md:hidden'><span className='text-principal'>•</span> Laudo de NR12</h4>
        </div>
        <h4 className='text-2xl font-roboto font-extrabold text-secundaria hidden md:block'><span className='text-principal'>•</span> Laudo de NR12</h4>
        <h3 className='font-roboto font-extrabold text-3xl text-principal md:mt-10'>Nossos clientes</h3>
        <div className='w-10 h-1 bg-line mt-5 '></div>
        <img className='mt-5' src={clientes} alt="Nossos Clientes" />
      </div>
    </section>
  )
}

export default OtherServices