
import { LuBellRing } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BiLike } from "react-icons/bi";

const ServicesCards = () => {
  return (
    <div className='grid px-10 xl:p-0 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10'>
      <div className='flex flex-col justify-between items-center text-center rounded-xl overflow-hidden shadow-lg'>
        <div className='flex flex-col text-principal justify-center hover:bg-principal hover:text-white w-full py-10'>
          <LuBellRing className='mx-auto text-5xl'/>
          <span className='font-nunito text-xl mt-5'>Notificações MTE</span>
        </div>
       <div className='p-10'>
        <p className='font-open text-gray-500 font-bold text-sm'>Suporte para entendimento das notificações do Ministério do Trabalho.</p>
        <button 
        className='font-nunito font-bold text-principal border border-principal 
        px-5 py-2 btn-service rounded-md mt-10 hover:bg-principal hover:text-white'>
          <a href="">Saiba mais</a>
        </button>
       </div>
      </div>
      <div className='flex flex-col justify-between items-center text-center rounded-xl overflow-hidden shadow-lg'>
        <div className='flex flex-col justify-center text-principal hover:bg-principal hover:text-white w-full py-10'>
          <FaClipboardList className='mx-auto text-5xl'/>
          <span className='font-nunito text-xl mt-5'>ASO</span>
        </div>
       <div className='p-10'>
        <p className='font-open text-gray-500 font-bold text-sm'>Clínicas credenciadas em todo Brasil. Indicamos sempre a localidade mais próxima!</p>
        <button 
        className='font-nunito font-bold text-principal border border-principal 
        px-5 py-2 btn-service rounded-md mt-10 hover:bg-principal hover:text-white'>
          <a href="">Saiba mais</a>
        </button>
       </div>
      </div>
      <div className='flex flex-col justify-between items-center text-center rounded-xl overflow-hidden shadow-lg'>
        <div className='flex flex-col text-principal justify-center hover:bg-principal hover:text-white w-full py-10'>
          <GiTeacher className='mx-auto text-5xl'/>
          <span className='font-nunito text-xl mt-5'>Treinamentos</span>
        </div>
       <div className='p-10'>
        <p className='font-open text-gray-500 font-bold text-sm'>CIPA, Uso de EPI, Segurança para Eletricidade, Segurança para Máquina e Equipamentos, e muito mais!</p>
        <button 
        className='font-nunito font-bold text-principal border border-principal 
        px-5 py-2 btn-service rounded-md mt-10 hover:bg-principal hover:text-white'>
          <a href="">Saiba mais</a>
        </button>
       </div>
      </div>
      <div className='flex flex-col justify-between items-center text-center rounded-xl overflow-hidden shadow-lg'>
        <div className='flex flex-col text-principal justify-center hover:bg-principal hover:text-white w-full py-6'>
          <BiLike className='mx-auto text-5xl'/>
          <span className='font-nunito text-xl mt-5'>Avaliações <br /> Quantitativas</span>
        </div>
       <div className='p-10'>
        <p className='font-open text-gray-500 font-bold text-sm'>Realizamos as melhores avaliações do mercado. Aqui cobramos um preço justo!</p>
        <button 
        className='font-nunito font-bold text-principal border border-principal 
        px-5 py-2 btn-service rounded-md mt-10 hover:bg-principal hover:text-white'>
          <a href="">Saiba mais</a>
        </button>
       </div>
      </div>
    </div>
  )
}

export default ServicesCards