import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
export default function ContactCard() {
  return (
    
<div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700 min-w-min">
    <div className="flex flex-col items-center pb-10 gap-5 mt-10">
        <h1 className="text-2xl font-sans-bold text-gray-900">Gabriel Feitosa Dolzane</h1>
        <h3 className="text-lg text-stone-500 leading-10">  dolzane.gabriel@gmail.com</h3>
        <h3 className="text-lg text-stone-500 leading-10">www.gfd-engenharia.com.br</h3>
        <h3 className="text-lg text-stone-500 leading-10"> </h3>
    </div>
    <h2 className="text-2xl text-stone-500 leading-10 text-center mb-10">
      Redes Sociais
    </h2>
    <div className="flex justify-center mb-10 gap-10">
        <a 
          href="https://www.instagram.com/gfd.engenharia/" target='_blank' rel="noreferrer"
          className='cursor-pointer hover:bg-rose-900 p-2 rounded-lg'
        >
          <img className='w-20 h-20' src={instagram} alt="instagram"/>
        </a>
        <a
          href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid.12619604099_asid.149519181115_crid.657343811719_kw.entrar%20no%20linkedin_d.c_tid.kwd-335752247748_n.g_mt.e_geo.9101676&mcid=6821526239111716925&cid=&gclid=EAIaIQobChMI_YDHk47a_wIVGT-RCh39hAJ5EAAYASAAEgLeY_D_BwE&gclsrc=aw.ds" target='_blank' rel="noreferrer"
          className='cursor-pointer hover:bg-blue-600 p-2 rounded-lg'
        >
          <img className='w-20 h-20' src={linkedin} alt="linkedin"/>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5592982617631&text=Ol%C3%A1,%20gostaria%20de%20uma%20simula%C3%A7%C3%A3o%20para%20minha%20conta%20de%20energia..." target='_blank' rel="noreferrer"
          className='cursor-pointer hover:bg-lime-400 p-2 rounded-lg'
        >
          <img className='w-20 h-20' src={whatsapp} alt="whatsapp"/>
        </a>
    </div>
</div>

  )
}
