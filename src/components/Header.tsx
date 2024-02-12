import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import LogoDark from '../assets/logo_dark.png'
import gradientLeft from '../assets/gradient-1.png'
import gradientRight from '../assets/gradient-2.png'
import { IoReorderThreeOutline } from "react-icons/io5";



function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleNavbar = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <header id='home' className='header'>
      <img className='g-left' src={gradientLeft} />

      <nav className='flex justify-between items-center p-5'>
    
        <img className='w-[55px] h-[52px] z-10 md:ml-16 md:mt-5' src={Logo} alt="logo RN" />
          <button onClick={toogleNavbar} data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden  focus:outline-none bg-principal text-white z-50" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only z-10">Open main menu</span>
            <IoReorderThreeOutline className='text-2xl' />
          </button>
        <div className={`${isOpen ? 'flex flex-col absolute left-0 top-0 w-full z-20 bg-gray-300 p-5 md:p-10' : 'hidden z-10  lg:block'}`}  id="navbar-default">
          <ul className='flex flex-col lg:flex-row text-principal gap-5 font-roboto font-bold md:ml-10'>
            <li className='lg:hidden'>
            <img className='w-[55px] h-[52px] z-10 md:ml-0 relative ' src={LogoDark} alt="logo RN" />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#others">Outros</a>
            </li>
            <li>
              <a href="#others">Clientes</a>
            </li>
            <li>
              <a href="#footer">
                Contatos
              </a>
            </li>
          </ul>
        </div>
        
      </nav>
      
      <section>
        <div className='grid grid-col-1'>
          <div className='z-10 ml-5 md:ml-20 md:mt-10 w-[350px] md:w-[350px] xl:w-[550px] xl:ml-16'>
            <h1 className='text-white md: text-4xl xl:text-6xl font-roboto leading-tight'>Sáude ocupacional sem fronteiras!</h1>
            <h4 className='text-white xl:text-2xl mt-4 font-nunito'>Prontos para lhe atender aonde você estiver, <br /> conte conosco para apoiá-lo em todos os momentos</h4>
            <button className='bg-orange-500 shadow-lg rounded-md text-white px-5 py-3 uppercase mt-5'>
              <a href="http://">Fale conosco</a>
            </button>
          </div>
          
        </div>
      </section>
      <img className='g-right' src={gradientRight} />
    </header>
  )
}

export default Header
