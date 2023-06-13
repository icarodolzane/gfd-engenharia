import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import photo from '../assets/gfd_photo.jpg'
export default function ContactCard() {
  return (
    
<div className="w-96 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10 gap-10">
        <img className="mt-10 w-28 h-28 mb-3 rounded-xl shadow-lg" src={photo} alt="gfd image"/>
        <h2 className="mb-1 text-xl font-medium text-gray-900">Gabriel Feitosa Dolzane</h2>
        <h3 className="text-lg text-stone-500 leading-10">  dolzane.gabriel@gmail.com</h3>
        <h3 className="text-lg text-stone-500 leading-10">www.gfd-engenharia.com.br</h3>
        <h3 className="text-lg text-stone-500 leading-10"> </h3>
        
    </div>
    <div className="flex justify-center mb-10">
        <img className='w-20 h-20' src={instagram} alt="instagram"/>
        <img className='w-20 h-20' src={linkedin} alt="linkedin"/>
        <img className='w-20 h-20' src={whatsapp} alt="whatsapp"/>
    </div>
</div>

  )
}
