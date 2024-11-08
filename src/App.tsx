import { BsWhatsapp } from 'react-icons/bs';
import Logo from './assets/images/logo1.png'

export const App = () => {
  return (
    <div className='w-full'>

      <div className='flex justify-center items-center'>
        <img src={Logo} className='xl:w-2/3 2xl:w-2/3 lg:w-2/3
          xl:my-20 2xl:my-20 lg:my-10 rounded-xl'
          alt='RCB Advogados'
          title='RCB Advogados' />
      </div>

      <div className='flex justify-center items-center'>
        <a
          href="https://wa.me/5519971413322"
          target="_blank"
          className="bg-green-700 text-white 
            text-center py-3 px-20 text-2xl my-10
            flex justify-center items-center gap-3 rounded-xl"
        >

          <BsWhatsapp /> Fale conosco
        </a>
      </div>
      <main className='m-auto w-full mb-20'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.420524087275!2d-47.42856522388311!3d-21.99519250593051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c800c1a340234f%3A0xbd96e803efc4344b!2sR.%20Pereira%20Bueno%2C%20325%20-%20Centro%2C%20Pirassununga%20-%20SP%2C%2013630-030!5e0!3m2!1spt-BR!2sbr!4v1719530609858!5m2!1spt-BR!2sbr"
          width="2000"
          height="450"
          loading="lazy"
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full mt-20 p-3'>
        </iframe>
      </main>


      <footer className="text-center bg-gradient-to-r from-[#152d36] bg-[#31687d] text-sm">




        <p className='mt-20 text-white p-8'>Copyright © 2024 Rosolem, Cabianca & Bonelli Sociedade de Advogados. CNPJ 26.205.471/0001-20. Desenvolvido por<a
          href='http://missura.com.br'
          target='_blank'
          className='text-white hover:text-black'
        >
          {' '}
          Missura Networks.
        </a></p>
      </footer>
    </div>
  );
};

export default App;