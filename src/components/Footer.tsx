import logo from '../assets/logo-footer.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className='bg-principal p-10'>
      <div className='flex justify-center items-center pb-10'>
        <img src={logo} alt="RN Safety Group" />
      </div>
      <div className='grid lg:grid-cols-3'>
        <div className=' xl:pl-36 flex flex-col'>
          <h3 className='font-roboto font-bold text-white text-xl'>Contato</h3>
          <div className='w-12 h-2 bg-line mt-5 '></div>
          <ul className='text-white mt-5'>
            <li className='font-open mb-5'>Tel:(21)98375-0458</li>
            <li className='font-open'>Email: contato@rnsafety.com.br</li>
          </ul>
        </div>
        <div>
        <h3 className='font-roboto font-bold text-white text-xl mt-10 md:mt-0'>Sobre nós</h3>
        <div className='w-12 h-2 bg-line mt-5 '></div>
        <p className='text-white mt-5 font-open lg:w-[350px]'>
        Consultoria especializada em Segurança do Trabalho, com foco de atendimento híbrido. Assessoria para profissionais de setores diversos que estão envolvidos com a saúde e a segurança ocupacionais.
        </p>
        </div>
        <div>
          <h3 className='font-roboto font-bold text-white text-2xl mt-10 md:mt-0'>
            Siga-nos
          </h3>
          <div className='flex gap-5 mt-5'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} color='white'/>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} color='white'/>
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer